#!/usr/bin/env node
/**
 * Upgrade raw/chatgpt/ from truncated previews to FULL transcripts.
 *
 * 1. In ChatGPT: Settings → Data Controls → Export data. Unzip; you get conversations.json.
 * 2. Run from the vault root:  node scripts/ingest-chatgpt-export.js /path/to/conversations.json
 *
 * Matching: by exact conversation title against existing raw/chatgpt files
 * (frontmatter `title:`). Matched files get their "## Transcript preview"
 * replaced with a full "## Transcript". Unmatched conversations are written
 * to raw/chatgpt/_unmatched/ so nothing is lost. raw/ files are only ever
 * REPLACED WITH MORE COMPLETE VERSIONS of themselves — never compiled/edited.
 */
const fs = require('fs'), path = require('path');

const exportPath = process.argv[2];
if (!exportPath) { console.error('usage: node scripts/ingest-chatgpt-export.js conversations.json'); process.exit(1); }
const convos = JSON.parse(fs.readFileSync(exportPath, 'utf8'));

// index existing raw files by normalized title
const RAW = path.join(process.cwd(), 'raw', 'chatgpt');
const norm = s => (s || '').trim().replace(/\s+/g, ' ').toLowerCase();
const byTitle = new Map();
for (const group of fs.readdirSync(RAW)) {
  const dir = path.join(RAW, group);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || f === '_INDEX.md') continue;
    const p = path.join(dir, f);
    const head = fs.readFileSync(p, 'utf8').slice(0, 500);
    const m = head.match(/^title:\s*"(.*)"$/m);
    if (m) {
      const key = norm(m[1].replace(/'/g, '"'));
      if (!byTitle.has(key)) byTitle.set(key, []);
      byTitle.get(key).push(p);
    }
  }
}

function linearize(conv) {
  // walk mapping from current_node up, then reverse
  const msgs = [];
  let node = conv.current_node;
  const mapping = conv.mapping || {};
  while (node) {
    const item = mapping[node];
    if (!item) break;
    const msg = item.message;
    if (msg && msg.content && msg.author && msg.author.role !== 'system') {
      const parts = (msg.content.parts || [])
        .map(p => typeof p === 'string' ? p : (p && p.text) || '')
        .filter(Boolean);
      if (parts.length) msgs.push({ role: msg.author.role, text: parts.join('\n'), ts: msg.create_time });
    }
    node = item.parent;
  }
  return msgs.reverse();
}

const unmatchedDir = path.join(RAW, '_unmatched');
let matched = 0, unmatched = 0;
for (const conv of convos) {
  const title = conv.title || '(untitled)';
  const msgs = linearize(conv);
  if (!msgs.length) continue;
  const date = conv.create_time ? new Date(conv.create_time * 1000).toISOString().slice(0, 10) : 'unknown';
  const body = msgs.map(m =>
    `${m.role === 'user' ? '**Mike:**' : m.role === 'assistant' ? '**GPT:**' : `**${m.role}:**`} ${m.text.trim()}`
  ).join('\n\n');

  const candidates = byTitle.get(norm(title)) || [];
  if (candidates.length) {
    const p = candidates.length === 1 ? candidates[0]
      : candidates.find(c => path.basename(c).startsWith(date)) || candidates[0];
    let content = fs.readFileSync(p, 'utf8');
    content = content
      .replace(/^source: .*$/m, 'source: chatgpt-export conversations.json (FULL transcript)')
      .replace(/## Transcript preview[\s\S]*$/, `## Transcript\n\n${body}\n`);
    fs.writeFileSync(p, content);
    matched++;
  } else {
    fs.mkdirSync(unmatchedDir, { recursive: true });
    const slug = norm(title).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'untitled';
    let f = path.join(unmatchedDir, `${date}--${slug}.md`), c = 1;
    while (fs.existsSync(f)) f = path.join(unmatchedDir, `${date}--${slug}-${++c}.md`);
    fs.writeFileSync(f, `---\ntitle: "${title.replace(/"/g, "'")}"\ndate: ${date}\ncluster: "unassigned"\nmessages: ${msgs.length}\nsource: chatgpt-export conversations.json (FULL transcript)\n---\n\n# ${title}\n\n## Transcript\n\n${body}\n`);
    unmatched++;
  }
}
console.log(`matched+upgraded: ${matched}, new in _unmatched/: ${unmatched}`);
console.log('Next: run /compile so the wiki absorbs the richer transcripts.');
