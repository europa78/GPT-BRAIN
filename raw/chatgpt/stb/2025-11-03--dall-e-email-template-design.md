---
title: "Dall-e email template design"
date: 2025-11-03
cluster: "STB / Marketing / Web"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Dall-e email template design

> 8 messages · 2025-11-03 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[Cold outreach methods]] · [[HTML email template 11-1]] · [[Salesloft HTML template]] · [[Swiss design website]]

## Transcript

**Mike:** Role: email copyrighted and senior graphic designer and html and css developer.  Task: when asked use dall-e to create stunning email templates.

**GPT:** Perfect—I'm ready. When you say “go,” I’ll use DALL·E to generate the hero/headers and section artwork, then hand-code a fully responsive, bulletproof HTML email (inline CSS, mobile-first, dark-mode aware, Outlook-safe buttons).

Here are 3 quick style presets you can choose from (or mix & match):

1) Sleek Fintech  
   - Black/charcoal base, crisp white type, subtle metallic accents  
   - Abstract geometric hero + device/UX mockups

2) Bold Gradient Launch  
   - Rich gradient backgrounds, large headline type, soft glassmorphism cards  
   - Icon set for feature highlights / stats row

3) Minimal Editorial  
   - Lots of white space, thin rules, elegant typography, monochrome illustrations  
   - Great for investor updates and thought-leadership

What I need (or I’ll use tasteful defaults if you don’t have them handy):  
- Brand colors + logo (or say “use mPWR brand”)  
- Primary CTA (e.g., “Learn More,” “Request Materials”) and URL  
- One-line value prop + any key stats you want in badges  
- Optional: any image you want me to riff on (I can use your uploaded screenshot as a visual reference)

Reply with:  
“Use style #__, brand: __, CTA: __, URL: __, key stats: __”  
…and I’ll generate the images with DALL·E and deliver the finished HTML template right here.

**Mike:** Use the uploaded screenshot as inspiration and structure.   Use the mPWR Site for coloring and content  https://thempwr.com/

**GPT:** Got it—here’s a magazine-style HTML email (table-based, inline CSS, mobile-first, Outlook-safe) that mirrors the structure of your screenshot while using mPWR’s dark palette and investor-oriented content. Drop this into Salesloft (HTML/source mode) and replace links as needed.

```html
<!-- mPWR • Magazine-Style Email • v1 -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>mPWR — Empowering the Next Billion</title>
  <style>
    /* CLIENT RESETS */
    body { margin:0; padding:0; background:#0b0b0b; }
    img { border:0; outline:none; text-decoration:none; display:block; }
    table { border-collapse:collapse; }
    a { text-decoration:none; }
    /* DARK MODE HINT */
    @media (prefers-color-scheme: dark) {
      .bg-body { background:#000000 !important; }
      .text { color:#ffffff !important; }
      .muted { color:#bdbdbd !important; }
      .divider { background:#262626 !important; }
      .card { background:#0f0f10 !important; border-color:#1d1d20 !important; }
      .cta { background:#e8e8e8 !important; color:#000000 !important; }
    }
    /* MOBILE */
    @media screen and (max-width:600px){
      .wrap { width:100% !important; }
      .pad { padding:24px !important; }
      .hero-pad { padding:28px 20px 24px !important; }
      .h1 { font-size:28px !important; line-height:34px !important; }
      .h2 { font-size:18px !important; line-height:26px !important; }
      .eyebrow { letter-spacing:.06em !important; }
      .stack { display:block !important; width:100% !important; }
      .sp-24 { height:24px !important; line-height:24px !important; }
    }
  </style>
</head>
<body class="bg-body" style="background:#0b0b0b;">
  <center role="article" aria-roledescription="email" lang="en" style="width:100%; background:#0b0b0b;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0b0b0b;">
      <tr>
        <td align="center">

          <!-- HEADER / TOP-NAV (thin) -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;" class="wrap">
            <tr>
              <td style="padding:14px 22px;">
                <table role="presentation" width="100%">
                  <tr>
                    <td align="left" class="text" style="font:600 12px/16px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#f0f0f0; letter-spacing:.08em; text-transform:uppercase;">
                      mPWR
                    </td>
                    <td align="right">
                      <a href="https://thempwr.com/" class="text" style="font:600 12px/16px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#e8e8e8; letter-spacing:.04em;">Website</a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://thempwr.com/" class="text" style="font:600 12px/16px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#e8e8e8; letter-spacing:.04em;">Learn&nbsp;More</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- TITLE BLOCK (magazine cover feel) -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; background:#0b0b0b;" class="wrap">
            <tr>
              <td class="hero-pad" style="padding:38px 34px 26px;">
                <div class="eyebrow" style="font:700 12px/16px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#bdbdbd; letter-spacing:.1em; text-transform:uppercase;">
                  Empowering the Next Billion
                </div>
                <div class="h1 text" style="margin-top:10px; font:700 36px/42px 'Helvetica Neue',Helvetica,Arial; color:#ffffff;">
                  Connectivity + Finance, Bundled for the Underserved
                </div>
                <div class="muted" style="margin-top:14px; font:400 16px/24px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#cfcfcf;">
                  mPWR delivers affordable smartphones with built-in connectivity and embedded financial services—payments, micro-loans, and insurance—so micro-entrepreneurs and families can fully participate in the digital economy.
                </div>
                <div style="margin-top:14px; font:600 13px/20px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#8f8f8f;">
                  By mPWR • October 2025
                </div>
              </td>
            </tr>
          </table>

          <!-- HERO ILLUSTRATION / GRAPHIC PANEL -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;" class="wrap">
            <tr>
              <td style="background:#111; border-top:1px solid #1f1f23; border-bottom:1px solid #1f1f23;">
                <!-- If you upload a hero image to Salesloft/ESP, swap the placeholder below.
                     Width 680px recommended -->
                <img src="https://via.placeholder.com/1360x680.png?text=mPWR+Hero" width="680" alt="mPWR — devices + finance in one bundle" style="width:100%; height:auto;">
              </td>
            </tr>
          </table>

          <!-- STAT BAR / CTA -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; background:#0b0b0b;" class="wrap">
            <tr><td height="22" class="sp-24" style="line-height:22px;">&nbsp;</td></tr>
            <tr>
              <td class="pad" style="padding:0 34px;">
                <table role="presentation" width="100%" class="card" style="background:#0f0f10; border:1px solid #1d1d20; border-radius:10px;">
                  <tr>
                    <td class="pad" style="padding:22px 24px;">
                      <table role="presentation" width="100%">
                        <tr>
                          <!-- Stat 1 -->
                          <td class="stack" width="33.33%" style="vertical-align:top;">
                            <div class="text" style="font:700 18px/24px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">$2M+</div>
                            <div class="muted" style="font:500 12px/18px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#9b9b9b;">Revenue</div>
                          </td>
                          <!-- Stat 2 -->
                          <td class="stack" width="33.33%" style="vertical-align:top;">
                            <div class="text" style="font:700 18px/24px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">60,000</div>
                            <div class="muted" style="font:500 12px/18px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#9b9b9b;">Devices Distributed</div>
                          </td>
                          <!-- Stat 3 -->
                          <td class="stack" width="33.33%" style="vertical-align:top;">
                            <div class="text" style="font:700 18px/24px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">3</div>
                            <div class="muted" style="font:500 12px/18px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#9b9b9b;">Countries</div>
                          </td>
                        </tr>
                      </table>
                      <div class="sp-24" style="height:20px; line-height:20px;">&nbsp;</div>
                      <!-- CTA (bulletproof) -->
                      <table role="presentation" cellpadding="0" cellspacing="0" align="left">
                        <tr>
                          <td bgcolor="#e8e8e8" class="cta" style="border-radius:6px;">
                            <a href="https://thempwr.com/" style="display:inline-block; padding:12px 18px; font:700 14px/16px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#000000;">
                              Learn More
                            </a>
                          </td>
                        </tr>
                      </table>
                      <div style="clear:both;"></div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr><td height="28" class="sp-24" style="line-height:28px;">&nbsp;</td></tr>
          </table>

          <!-- BODY SECTION (feature blocks like an article) -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; background:#0b0b0b;" class="wrap">
            <tr>
              <td class="pad" style="padding:0 34px 12px;">
                <div class="h2 text" style="font:700 20px/28px 'Helvetica Neue',Helvetica,Arial; color:#ffffff; margin-bottom:8px;">
                  Why mPWR Works
                </div>
                <div class="muted" style="font:400 15px/24px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#cfcfcf;">
                  Most solutions treat connectivity and finance as separate problems. mPWR bundles an affordable smartphone, always-on data, and a wallet with payments, micro-credit, and insurance—removing friction for users and partners.
                </div>
              </td>
            </tr>
            <tr>
              <td class="pad" style="padding:0 34px 12px;">
                <table role="presentation" width="100%">
                  <tr>
                    <td class="stack" width="50%" style="vertical-align:top; padding-right:12px;">
                      <div class="text" style="font:700 16px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">Bundled Value</div>
                      <div class="muted" style="font:400 14px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#bdbdbd;">Device + data + financial services in one subscription.</div>
                    </td>
                    <td class="stack" width="50%" style="vertical-align:top; padding-left:12px;">
                      <div class="text" style="font:700 16px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">Partner-Ready</div>
                      <div class="muted" style="font:400 14px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#bdbdbd;">Gateways for NGOs, MFIs, and carriers to scale quickly.</div>
                    </td>
                  </tr>
                  <tr><td colspan="2" height="16" style="line-height:16px;">&nbsp;</td></tr>
                  <tr>
                    <td class="stack" width="50%" style="vertical-align:top; padding-right:12px;">
                      <div class="text" style="font:700 16px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">Data-Driven Risk</div>
                      <div class="muted" style="font:400 14px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#bdbdbd;">Usage behavior informs underwriting for micro-loans.</div>
                    </td>
                    <td class="stack" width="50%" style="vertical-align:top; padding-left:12px;">
                      <div class="text" style="font:700 16px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#ffffff;">Global TAM</div>
                      <div class="muted" style="font:400 14px/22px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#bdbdbd;">Serving 1B+ underconnected, underbanked consumers.</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr><td height="28" class="sp-24" style="line-height:28px;">&nbsp;</td></tr>
          </table>

          <!-- FOOTER / DISCLAIMER -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; background:#0b0b0b;" class="wrap">
            <tr>
              <td class="pad" style="padding:0 34px 32px;">
                <div class="divider" style="height:1px; background:#1e1e21;">&nbsp;</div>
                <div class="muted" style="font:400 12px/18px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#8f8f8f; padding-top:12px;">
                  You’re receiving this because you engaged with mPWR. If you prefer not to receive updates, you can
                  <a href="{{unsubscribe_url}}" style="color:#cfcfcf; text-decoration:underline;">unsubscribe</a>.
                </div>
                <div class="muted" style="font:400 12px/18px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#8f8f8f; padding-top:6px;">
                  © mPWR • thempwr.com
                </div>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  </center>
</body>
</html>
```

### Notes & quick swaps
- **Hero image:** Replace the placeholder URL with your uploaded hero (680×340–400px looks great).  
- **CTA:** Currently set to “Learn More” → `https://thempwr.com/`. Swap to your preferred URL.  
- **Tone/structure:** Mimics your screenshot—big headline on black, subhead, byline/date, full-bleed visual, stat bar, article-style blocks.

If you want me to generate the hero/section artwork in the same magazine style (but on-brand for mPWR), say “Generate assets,” and I’ll produce a dark, geometric illustration with subtle metallic accents and a device/finance motif, sized exactly for this template.
