---
title: "Mr Hood Repair HTML email"
date: 2026-01-04
cluster: "Coding / Dev / Infra"
messages: 16
source: chatgpt-export conversations.json (FULL transcript)
---

# Mr Hood Repair HTML email

> 16 messages · 2026-01-04 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[HTML CSS JS Programmer]] · [[HTML File Rendered]] · [[Integrated Pain Management FB]] · [[MCA resume HTML]]

## Transcript

**Mike:** generate an email for mPWR using the html files in your knowledge base as inspiration.

**GPT:** Here’s a **ready-to-send HTML marketing email** for **mPWR**, styled with the same dark/cosmic gradients, cyan/purple glow accents, and “hero + device” energy from your inspiration files. fileciteturn0file14 fileciteturn0file5 fileciteturn0file16

```html
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>mPWR</title>
  <!--
    NOTES:
    - Email clients usually strip JavaScript. This template uses *no JS* for real inbox compatibility.
    - Animations are CSS-only and gracefully degrade in stricter clients.
  -->
  <style>
    /* Client resets */
    html, body { margin:0 !important; padding:0 !important; height:100% !important; width:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; border-collapse:collapse; }
    img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; display:block; }
    a { text-decoration:none; }
    /* iOS blue links */
    a[x-apple-data-detectors], .unstyle-auto-detected-links a {
      border-bottom:0 !important; cursor:default !important; color:inherit !important; text-decoration:none !important;
      font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;
    }

    /* Brand palette (inspired by your dark/cyan/purple system) */
    :root{
      --bg-deep:#030712;
      --bg-surface:#0a0f1a;
      --card:rgba(15,23,42,.68);
      --text:#f1f5f9;
      --muted:#94a3b8;
      --border:rgba(148,163,184,.14);
      --cyan:#00f0ff;
      --purple:#7c3aed;
      --blue:#60a5fa;
    }

    /* Mobile */
    @media screen and (max-width: 680px){
      .container { width:100% !important; }
      .px { padding-left:18px !important; padding-right:18px !important; }
      .stack { display:block !important; width:100% !important; }
      .center { text-align:center !important; }
      .cta { display:block !important; width:100% !important; }
      .hero-title { font-size:30px !important; line-height:1.1 !important; }
      .hero-sub { font-size:16px !important; }
      .spacer-lg { height:18px !important; }
    }

    /* Subtle glow + float (supported in Apple Mail / some Gmail surfaces, ignored elsewhere) */
    @media (prefers-reduced-motion: no-preference) {
      .glowPulse { animation: glow 4.5s ease-in-out infinite; }
      .floaty { animation: float 6s ease-in-out infinite; }
      @keyframes glow { 0%,100%{ box-shadow:0 0 0 rgba(0,0,0,0);} 50%{ box-shadow:0 0 32px rgba(0,240,255,.22);} }
      @keyframes float { 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-6px);} }
    }
  </style>
</head>

<body style="background-color:#030712; margin:0; padding:0;">
  <!-- Preheader (hidden) -->
  <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
    Mobile power for all — meet the mPWR ecosystem.
  </div>

  <!-- Full background -->
  <table role="presentation" width="100%" style="background-color:#030712;">
    <tr>
      <td align="center" style="padding:22px 12px;">
        <!-- Container -->
        <table role="presentation" class="container" width="680" style="width:680px; max-width:680px;">
          <!-- Top halo -->
          <tr>
            <td style="padding:0 0 14px 0;">
              <table role="presentation" width="100%">
                <tr>
                  <td style="height:6px; background:linear-gradient(90deg, rgba(0,240,255,.0), rgba(0,240,255,.55), rgba(124,58,237,.55), rgba(0,240,255,.0)); border-radius:999px;">
                    &nbsp;
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card shell -->
          <tr>
            <td class="px" style="
              background-color:#0a0f1a;
              background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(96,165,250,.18) 0%, rgba(3,7,18,0) 55%),
                                radial-gradient(ellipse 55% 45% at 15% 80%, rgba(124,58,237,.16) 0%, rgba(3,7,18,0) 60%),
                                radial-gradient(ellipse 60% 50% at 85% 70%, rgba(0,240,255,.12) 0%, rgba(3,7,18,0) 60%);
              border:1px solid rgba(148,163,184,.18);
              border-radius:26px;
              overflow:hidden;
              box-shadow: 0 24px 80px rgba(0,0,0,.55);
              padding:26px 28px 30px 28px;">
              <!-- Header -->
              <table role="presentation" width="100%">
                <tr>
                  <td align="left" style="padding:0 0 18px 0;">
                    <table role="presentation" width="100%">
                      <tr>
                        <td class="stack center" align="left" style="vertical-align:middle;">
                          <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; letter-spacing:.22em; text-transform:uppercase; font-size:12px; color:#94a3b8;">
                            <strong style="color:#f1f5f9; font-weight:800;">mPWR</strong>&nbsp;&nbsp;•&nbsp;&nbsp;Mobile power for all
                          </div>
                        </td>
                        <td class="stack center" align="right" style="vertical-align:middle;">
                          <a href="https://example.com" style="
                            font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
                            font-size:11px; letter-spacing:.18em; text-transform:uppercase;
                            color:#00f0ff; border:1px solid rgba(0,240,255,.35);
                            padding:8px 10px; border-radius:999px; display:inline-block;">
                            View in browser
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Hero -->
                <tr>
                  <td style="padding:0;">
                    <table role="presentation" width="100%">
                      <tr>
                        <!-- Copy -->
                        <td class="stack" width="56%" style="vertical-align:top; padding-right:14px;">
                          <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; color:#f1f5f9;">
                            <div style="font-size:12px; letter-spacing:.22em; text-transform:uppercase; color:#94a3b8; margin-bottom:10px;">
                              The mPWR ecosystem
                            </div>

                            <div class="hero-title" style="font-size:38px; line-height:1.05; font-weight:820; letter-spacing:-.02em; margin:0 0 12px 0;">
                              Turn everyday phone use into
                              <span style="background:linear-gradient(90deg,#00f0ff,#7c3aed); -webkit-background-clip:text; background-clip:text; color:transparent;">
                                real-world power
                              </span>.
                            </div>

                            <div class="hero-sub" style="font-size:17px; line-height:1.6; color:#cbd5e1; margin:0 0 16px 0;">
                              A unified experience that connects access, value, and momentum—so people and communities can move faster, together.
                            </div>

                            <!-- CTAs -->
                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:14px;">
                              <tr>
                                <td style="padding:0 10px 10px 0;">
                                  <a class="cta" href="https://example.com"
                                    style="display:inline-block; background:#00f0ff; color:#06101b;
                                    font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
                                    font-weight:800; font-size:13px; letter-spacing:.06em; text-transform:uppercase;
                                    padding:14px 16px; border-radius:14px;">
                                    Explore mPWR
                                  </a>
                                </td>
                                <td style="padding:0 0 10px 0;">
                                  <a class="cta" href="https://example.com"
                                    style="display:inline-block; background:transparent; color:#f1f5f9;
                                    font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
                                    font-weight:800; font-size:13px; letter-spacing:.06em; text-transform:uppercase;
                                    padding:14px 16px; border-radius:14px; border:1px solid rgba(148,163,184,.28);">
                                    Get the deck
                                  </a>
                                </td>
                              </tr>
                            </table>

                            <div style="font-size:12px; color:#94a3b8; line-height:1.6; margin-top:10px;">
                              Built for reliability, designed for delight—optimized for real devices in real conditions.
                            </div>
                          </div>
                        </td>

                        <!-- “Phone” visual (pure HTML/CSS; no images needed) -->
                        <td class="stack" width="44%" align="right" style="vertical-align:top; padding-left:14px;">
                          <table role="presentation" align="right" cellpadding="0" cellspacing="0" style="width:100%; max-width:260px;">
                            <tr>
                              <td align="center" class="floaty glowPulse" style="
                                border-radius:38px;
                                padding:12px;
                                border:1px solid rgba(148,163,184,.18);
                                background:
                                  radial-gradient(circle at 10% 0%, rgba(148,163,184,.18), rgba(2,6,23,.85) 70%),
                                  linear-gradient(180deg, rgba(0,240,255,.08), rgba(124,58,237,.06));
                                box-shadow: 0 22px 60px rgba(0,0,0,.70);">

                                <!-- Phone body -->
                                <table role="presentation" width="100%" style="border-radius:30px; overflow:hidden;">
                                  <tr>
                                    <td style="padding:0;">
                                      <div style="height:380px; border-radius:30px; overflow:hidden; position:relative; background:#020617;">
                                        <!-- Screen gradient -->
                                        <div style="height:100%; width:100%;
                                          background:
                                            radial-gradient(circle at 30% 10%, rgba(0,240,255,.18), transparent 55%),
                                            radial-gradient(circle at 70% 90%, rgba(124,58,237,.18), transparent 60%),
                                            linear-gradient(180deg, #0b1224 0%, #020617 70%);
                                          border:1px solid rgba(148,163,184,.12);
                                          box-sizing:border-box;">
                                          <!-- “Dynamic island” -->
                                          <div style="margin:12px auto 0; width:90px; height:22px; border-radius:999px; background:#020617; border:1px solid rgba(148,163,184,.16);"></div>

                                          <!-- Mini flywheel cards -->
                                          <div style="padding:14px 14px 0 14px;">
                                            <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:#94a3b8; text-align:left;">
                                              Momentum
                                            </div>

                                            <div style="margin-top:10px; border-radius:18px; padding:12px; background:rgba(15,23,42,.70); border:1px solid rgba(148,163,184,.14);">
                                              <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:14px; font-weight:800; color:#f1f5f9;">
                                                Earn → Use → Grow
                                              </div>
                                              <div style="margin-top:6px; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; line-height:1.5; color:#cbd5e1;">
                                                Rewards that compound into capability.
                                              </div>

                                              <!-- Orbit dots -->
                                              <div style="margin-top:12px; height:60px; border-radius:14px; border:1px dashed rgba(96,165,250,.35); position:relative;">
                                                <div style="position:absolute; left:10px; top:18px; width:10px; height:10px; border-radius:999px; background:#00f0ff; box-shadow:0 0 14px rgba(0,240,255,.45);"></div>
                                                <div style="position:absolute; right:18px; top:10px; width:10px; height:10px; border-radius:999px; background:#7c3aed; box-shadow:0 0 14px rgba(124,58,237,.45);"></div>
                                                <div style="position:absolute; left:50%; bottom:10px; transform:translateX(-50%); width:10px; height:10px; border-radius:999px; background:#60a5fa; box-shadow:0 0 14px rgba(96,165,250,.35);"></div>
                                              </div>
                                            </div>

                                            <div style="margin-top:10px; display:flex; gap:8px;">
                                              <div style="flex:1; border-radius:16px; padding:10px; background:rgba(15,23,42,.55); border:1px solid rgba(148,163,184,.12);">
                                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:11px; color:#94a3b8;">Access</div>
                                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:13px; font-weight:800; color:#f1f5f9; margin-top:2px;">Instant</div>
                                              </div>
                                              <div style="flex:1; border-radius:16px; padding:10px; background:rgba(15,23,42,.55); border:1px solid rgba(148,163,184,.12);">
                                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:11px; color:#94a3b8;">Value</div>
                                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:13px; font-weight:800; color:#f1f5f9; margin-top:2px;">Unified</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <!-- Phone base shine -->
                                      <div style="height:10px;"></div>
                                      <div style="height:4px; width:72%; margin:0 auto; border-radius:999px;
                                        background:linear-gradient(90deg, rgba(0,240,255,.0), rgba(0,240,255,.35), rgba(124,58,237,.35), rgba(0,240,255,.0));">
                                      </div>
                                    </td>
                                  </tr>
                                </table>

                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td class="spacer-lg" style="height:26px; line-height:26px;">&nbsp;</td></tr>

                <!-- Feature cards -->
                <tr>
                  <td>
                    <table role="presentation" width="100%">
                      <tr>
                        <td class="stack" width="33.33%" style="padding:0 10px 10px 0;">
                          <table role="presentation" width="100%" style="background:rgba(15,23,42,.62); border:1px solid rgba(148,163,184,.14); border-radius:18px;">
                            <tr>
                              <td style="padding:14px 14px 16px 14px;">
                                <div style="font-size:22px; line-height:1;">⚡</div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:14px; font-weight:850; color:#f1f5f9; margin-top:8px;">
                                  Instant utility
                                </div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12.5px; line-height:1.55; color:#cbd5e1; margin-top:6px;">
                                  A fast path from “need” to “done” — designed to reduce friction at every step.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td class="stack" width="33.33%" style="padding:0 5px 10px 5px;">
                          <table role="presentation" width="100%" style="background:rgba(15,23,42,.62); border:1px solid rgba(148,163,184,.14); border-radius:18px;">
                            <tr>
                              <td style="padding:14px 14px 16px 14px;">
                                <div style="font-size:22px; line-height:1;">🛰️</div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:14px; font-weight:850; color:#f1f5f9; margin-top:8px;">
                                  Connected ecosystem
                                </div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12.5px; line-height:1.55; color:#cbd5e1; margin-top:6px;">
                                  One experience that links tools, partners, and outcomes—without making users juggle apps.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td class="stack" width="33.33%" style="padding:0 0 10px 10px;">
                          <table role="presentation" width="100%" style="background:rgba(15,23,42,.62); border:1px solid rgba(148,163,184,.14); border-radius:18px;">
                            <tr>
                              <td style="padding:14px 14px 16px 14px;">
                                <div style="font-size:22px; line-height:1;">📈</div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:14px; font-weight:850; color:#f1f5f9; margin-top:8px;">
                                  Momentum by design
                                </div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12.5px; line-height:1.55; color:#cbd5e1; margin-top:6px;">
                                  Features that reinforce each other—so progress feels natural, not forced.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="height:16px; line-height:16px;">&nbsp;</td></tr>

                <!-- Steps -->
                <tr>
                  <td style="padding:0;">
                    <table role="presentation" width="100%" style="background:rgba(2,6,23,.35); border:1px solid rgba(148,163,184,.14); border-radius:20px;">
                      <tr>
                        <td style="padding:18px;">
                          <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; letter-spacing:.22em; text-transform:uppercase; color:#94a3b8;">
                            How it works
                          </div>

                          <table role="presentation" width="100%" style="margin-top:12px;">
                            <tr>
                              <td class="stack" width="33.33%" style="padding:10px 10px 6px 0; vertical-align:top;">
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; color:#94a3b8;">
                                  <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; border-radius:8px; background:rgba(0,240,255,.14); color:#00f0ff; font-weight:800; margin-right:8px;">1</span>
                                  Start simple
                                </div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:13px; color:#e2e8f0; margin-top:6px; line-height:1.55;">
                                  Get onboarded fast with an experience designed for real-world connectivity.
                                </div>
                              </td>

                              <td class="stack" width="33.33%" style="padding:10px 10px 6px 10px; vertical-align:top;">
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; color:#94a3b8;">
                                  <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; border-radius:8px; background:rgba(124,58,237,.16); color:#c4b5fd; font-weight:800; margin-right:8px;">2</span>
                                  Unlock value
                                </div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:13px; color:#e2e8f0; margin-top:6px; line-height:1.55;">
                                  Turn usage into rewards and benefits that feel immediate, not distant.
                                </div>
                              </td>

                              <td class="stack" width="33.33%" style="padding:10px 0 6px 10px; vertical-align:top;">
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; color:#94a3b8;">
                                  <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; border-radius:8px; background:rgba(96,165,250,.16); color:#bfdbfe; font-weight:800; margin-right:8px;">3</span>
                                  Build momentum
                                </div>
                                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:13px; color:#e2e8f0; margin-top:6px; line-height:1.55;">
                                  As engagement grows, the ecosystem compounds into more power and more choice.
                                </div>
                              </td>
                            </tr>
                          </table>

                          <!-- CTA row -->
                          <table role="presentation" width="100%" style="margin-top:14px;">
                            <tr>
                              <td class="center" align="left">
                                <a href="https://example.com"
                                  style="display:inline-block; padding:12px 14px; border-radius:14px;
                                  background:linear-gradient(90deg, rgba(0,240,255,.95), rgba(124,58,237,.95));
                                  color:#06101b; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
                                  font-weight:900; font-size:12px; letter-spacing:.08em; text-transform:uppercase;">
                                  See the ecosystem in action
                                </a>
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="height:18px; line-height:18px;">&nbsp;</td></tr>

                <!-- Quote / proof -->
                <tr>
                  <td style="padding:0;">
                    <table role="presentation" width="100%" style="border-radius:20px; border:1px solid rgba(148,163,184,.14); background:rgba(15,23,42,.52);">
                      <tr>
                        <td style="padding:16px 18px;">
                          <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:16px; line-height:1.55; color:#f1f5f9; font-weight:750;">
                            “mPWR feels like a single, seamless system—everything works together.”
                          </div>
                          <div style="margin-top:8px; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12.5px; color:#94a3b8;">
                            — Replace with a partner/customer quote
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="height:22px; line-height:22px;">&nbsp;</td></tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:0; border-top:1px solid rgba(148,163,184,.14); padding-top:16px;">
                    <table role="presentation" width="100%">
                      <tr>
                        <td class="stack center" align="left" style="vertical-align:top;">
                          <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; color:#94a3b8; line-height:1.7;">
                            <strong style="color:#e2e8f0;">mPWR</strong><br>
                            123 Example Street · City, ST<br>
                            <a href="https://example.com" style="color:#00f0ff;">Manage preferences</a> ·
                            <a href="https://example.com" style="color:#94a3b8;">Unsubscribe</a>
                          </div>
                        </td>
                        <td class="stack center" align="right" style="vertical-align:top;">
                          <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:12px; color:#94a3b8;">
                            <a href="https://example.com" style="color:#cbd5e1; margin-left:12px;">X</a>
                            <a href="https://example.com" style="color:#cbd5e1; margin-left:12px;">LinkedIn</a>
                            <a href="https://example.com" style="color:#cbd5e1; margin-left:12px;">Web</a>
                          </div>
                          <div style="margin-top:10px; font-size:11px; color:#64748b; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
                            © {{year}} mPWR. All rights reserved.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Bottom padding -->
          <tr><td style="height:22px; line-height:22px;">&nbsp;</td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

If you tell me **what this email is promoting** (investor update, product launch, partnership, waitlist, etc.) and your **primary CTA link**, I’ll tailor the copy + sections (and optionally create a **matching “web version”** where we *can* use JS interactions like your phone hover/tooltips).

**Mike:** Great!  next , generate an email using the same structure as the HTML files in your knowledge base.  This time , the company is "Mr. Hood Repair".  tailor the email to be a cold outreach to restaurant owners to clean their kitchen hoods.   use the attached screenshots to customize styling , color scheme and brand assets.

**GPT:** ```html
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>Mr. Hood Repair</title>

  <!--
    IMAGE SOURCES (replace with hosted URLs):
    - Logo:   https://YOURDOMAIN.com/assets/mrhood/mrhood_logo.png
    - Hero:   https://YOURDOMAIN.com/assets/mrhood/mrhood_hero.png
    - Trust:  https://YOURDOMAIN.com/assets/mrhood/mrhood_trusted_logos.png
    - Process:https://YOURDOMAIN.com/assets/mrhood/mrhood_process.png

    (I extracted these from your screenshots; links provided below this code.)
  -->

  <style>
    /* Email client resets */
    html, body { margin:0 !important; padding:0 !important; height:100% !important; width:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; border-collapse:collapse; }
    img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; display:block; }
    a { text-decoration:none; }

    /* Mobile */
    @media screen and (max-width: 680px){
      .container { width:100% !important; }
      .px { padding-left:18px !important; padding-right:18px !important; }
      .stack { display:block !important; width:100% !important; }
      .center { text-align:center !important; }
      .cta { display:block !important; width:100% !important; }
      .h1 { font-size:30px !important; line-height:1.08 !important; }
      .sub { font-size:16px !important; }
      .padR0 { padding-right:0 !important; }
      .padL0 { padding-left:0 !important; }
    }
  </style>
</head>

<body style="background:#f3f4f6; margin:0; padding:0;">
  <!-- Preheader -->
  <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
    NFPA-96 hood cleaning + photo documentation + fast scheduling. Get a free quote in 24 hours.
  </div>

  <table role="presentation" width="100%" style="background:#f3f4f6;">
    <tr>
      <td align="center" style="padding:22px 12px;">
        <table role="presentation" class="container" width="680" style="width:680px; max-width:680px;">

          <!-- Top accent bar (matches site’s red/black emphasis) -->
          <tr>
            <td style="padding:0 0 12px 0;">
              <table role="presentation" width="100%">
                <tr>
                  <td style="height:6px; border-radius:999px; background:linear-gradient(90deg, rgba(0,0,0,0), #111827, #ea1212, #111827, rgba(0,0,0,0));">
                    &nbsp;
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td class="px" style="background:#ffffff; border:1px solid #e5e7eb; border-radius:22px; overflow:hidden; box-shadow:0 18px 50px rgba(0,0,0,.08); padding:22px 24px 26px 24px;">

              <!-- Header row -->
              <table role="presentation" width="100%">
                <tr>
                  <td class="stack center" align="left" style="vertical-align:middle; padding:0 0 14px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle; padding-right:10px;">
                          <img src="https://YOURDOMAIN.com/assets/mrhood/mrhood_logo.png" width="64" alt="Mr. Hood Repair" style="width:64px; height:auto; border-radius:12px;">
                        </td>
                        <td style="vertical-align:middle;">
                          <div style="font-family:Arial, Helvetica, sans-serif; font-weight:900; letter-spacing:-.02em; font-size:16px; color:#0b0b0b;">
                            Mr. Hood Repair
                          </div>
                          <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6b7280; line-height:1.35;">
                            NFPA-certified hood cleaning, inspections & repairs • South Florida
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="stack center" align="right" style="vertical-align:middle; padding:0 0 14px 0;">
                    <a href="https://YOURDOMAIN.com/view" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#111827; border:1px solid #e5e7eb; padding:8px 10px; border-radius:999px; display:inline-block;">
                      View in browser
                    </a>
                  </td>
                </tr>
              </table>

              <!-- HERO (background image with Outlook VML fallback) -->
              <table role="presentation" width="100%" style="border-radius:18px; overflow:hidden; border:1px solid #e5e7eb;">
                <tr>
                  <td
                    background="https://YOURDOMAIN.com/assets/mrhood/mrhood_hero.png"
                    style="background-image:url('https://YOURDOMAIN.com/assets/mrhood/mrhood_hero.png'); background-size:cover; background-position:center; padding:0;">

                    <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:680px;height:280px;">
                      <v:fill type="frame" src="https://YOURDOMAIN.com/assets/mrhood/mrhood_hero.png" color="#111827" />
                      <v:textbox inset="0,0,0,0">
                    <![endif]-->

                    <div style="background:rgba(0,0,0,.58); padding:22px 22px 20px 22px;">
                      <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:.18em; text-transform:uppercase; color:#e5e7eb;">
                        Cold outreach — quick question
                      </div>

                      <div class="h1" style="margin-top:10px; font-family:Arial, Helvetica, sans-serif; font-size:36px; line-height:1.06; font-weight:900; color:#ffffff; letter-spacing:-.02em;">
                        Keep your kitchen
                        <span style="color:#ea1212;">Safe &amp; Compliant</span>
                        with NFPA hood cleaning.
                      </div>

                      <div class="sub" style="margin-top:10px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:1.6; color:#f3f4f6;">
                        Hi {{first_name}}, if your restaurant in {{city}} is due for a hood cleaning or inspection,
                        we can help you stay inspection-ready with fast scheduling, photo documentation, and certification.
                      </div>

                      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:14px;">
                        <tr>
                          <td style="padding:0 10px 10px 0;">
                            <a class="cta" href="https://YOURDOMAIN.com/free-inspection"
                               style="display:inline-block; background:#ea1212; color:#ffffff;
                               font-family:Arial, Helvetica, sans-serif; font-weight:900; font-size:13px;
                               letter-spacing:.08em; text-transform:uppercase; padding:14px 16px; border-radius:12px;">
                              Get Free Inspection
                            </a>
                          </td>
                          <td style="padding:0 0 10px 0;">
                            <a class="cta" href="mailto:hello@YOURDOMAIN.com?subject=Quote%20request%20-%20{{restaurant_name}}"
                               style="display:inline-block; background:transparent; color:#ffffff;
                               font-family:Arial, Helvetica, sans-serif; font-weight:900; font-size:13px;
                               letter-spacing:.08em; text-transform:uppercase; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.45);">
                              Reply for Quote
                            </a>
                          </td>
                        </tr>
                      </table>

                      <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#e5e7eb; line-height:1.5;">
                        <strong>Typical turnaround:</strong> quote within 24 hours • nights/low-traffic scheduling available
                      </div>
                    </div>

                    <!--[if gte mso 9]>
                      </v:textbox>
                    </v:rect>
                    <![endif]-->

                  </td>
                </tr>
              </table>

              <div style="height:18px; line-height:18px;">&nbsp;</div>

              <!-- TRUSTED BY -->
              <table role="presentation" width="100%">
                <tr>
                  <td style="padding:0;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:22px; font-weight:900; color:#0b0b0b; text-align:center;">
                      Trusted by Industry Leaders
                    </div>
                    <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#6b7280; text-align:center; line-height:1.5;">
                      Serving commercial kitchens, hospitality venues, healthcare facilities, and conference centers.
                    </div>
                    <div style="height:10px; line-height:10px;">&nbsp;</div>

                    <img src="https://YOURDOMAIN.com/assets/mrhood/mrhood_trusted_logos.png"
                         width="632" alt="Trusted by California Pizza Kitchen, Marriott, Roseaire Conference Center, Five Star Senior Living, Select Specialty Hospital"
                         style="width:100%; max-width:632px; height:auto; margin:0 auto;">
                  </td>
                </tr>
              </table>

              <div style="height:18px; line-height:18px;">&nbsp;</div>

              <!-- 3 BENEFIT CARDS -->
              <table role="presentation" width="100%">
                <tr>
                  <td class="stack padR0" width="33.33%" style="padding:0 10px 10px 0; vertical-align:top;">
                    <table role="presentation" width="100%" style="border:1px solid #e5e7eb; border-radius:16px; background:#ffffff;">
                      <tr>
                        <td style="padding:14px 14px 16px 14px;">
                          <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:#6b7280;">
                            Compliance
                          </div>
                          <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:900; color:#0b0b0b;">
                            NFPA-96 standards
                          </div>
                          <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:1.55; color:#374151;">
                            Code-compliant cleaning that helps you pass inspections and reduce fire risk.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <td class="stack padL0 padR0" width="33.33%" style="padding:0 5px 10px 5px; vertical-align:top;">
                    <table role="presentation" width="100%" style="border:1px solid #e5e7eb; border-radius:16px; background:#ffffff;">
                      <tr>
                        <td style="padding:14px 14px 16px 14px;">
                          <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:#6b7280;">
                            Documentation
                          </div>
                          <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:900; color:#0b0b0b;">
                            Before/after photos
                          </div>
                          <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:1.55; color:#374151;">
                            Photo-documented results for audit-ready records and peace of mind.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <td class="stack padL0" width="33.33%" style="padding:0 0 10px 10px; vertical-align:top;">
                    <table role="presentation" width="100%" style="border:1px solid #e5e7eb; border-radius:16px; background:#ffffff;">
                      <tr>
                        <td style="padding:14px 14px 16px 14px;">
                          <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:#6b7280;">
                            Speed
                          </div>
                          <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:900; color:#0b0b0b;">
                            Fast scheduling
                          </div>
                          <div style="margin-top:6px; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:1.55; color:#374151;">
                            Flexible windows (including nights) to minimize downtime and disruptions.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <div style="height:14px; line-height:14px;">&nbsp;</div>

              <!-- PROCESS -->
              <table role="presentation" width="100%" style="border:1px solid #e5e7eb; border-radius:18px; background:#ffffff;">
                <tr>
                  <td style="padding:18px;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:26px; font-weight:900; color:#0b0b0b; text-align:center;">
                      Our Process: From Grimy to Shiny-Clean
                    </div>
                    <div style="margin-top:8px; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#6b7280; line-height:1.6; text-align:center;">
                      A meticulous, multi-step system designed to eliminate grease buildup—keeping your kitchen safer and running efficiently.
                    </div>

                    <div style="height:12px; line-height:12px;">&nbsp;</div>

                    <img src="https://YOURDOMAIN.com/assets/mrhood/mrhood_process.png"
                         width="632"
                         alt="Process steps: Preparation, Deep Degrease & Scrub, Bare Metal Standard, Rinse/Dry/Reassemble, Final Inspection & Certification"
                         style="width:100%; max-width:632px; height:auto; margin:0 auto;">
                  </td>
                </tr>
              </table>

              <div style="height:16px; line-height:16px;">&nbsp;</div>

              <!-- COLD OUTREACH NOTE -->
              <table role="presentation" width="100%" style="border:1px solid #e5e7eb; border-radius:18px; background:#0b0b0b;">
                <tr>
                  <td style="padding:16px 18px;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.6; color:#ffffff; font-weight:800;">
                      Quick question, {{first_name}}:
                      <span style="color:#ffb3b3;">When was your last hood cleaning?</span>
                    </div>
                    <div style="margin-top:8px; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:1.65; color:#e5e7eb;">
                      If you’re unsure (or it’s been a while), we can do a <strong>free inspection</strong> and send a
                      <strong>custom quote within 24 hours</strong>. We service hoods, ductwork, fans, filters, and can handle
                      small repairs if we spot issues during cleaning.
                    </div>

                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:14px;">
                      <tr>
                        <td style="padding:0 10px 10px 0;">
                          <a class="cta" href="https://YOURDOMAIN.com/free-quote"
                             style="display:inline-block; background:#ea1212; color:#ffffff;
                             font-family:Arial, Helvetica, sans-serif; font-weight:900; font-size:13px;
                             letter-spacing:.08em; text-transform:uppercase; padding:14px 16px; border-radius:12px;">
                            Request Free Quote
                          </a>
                        </td>
                        <td style="padding:0 0 10px 0;">
                          <a class="cta" href="tel:+1YOURPHONENUMBER"
                             style="display:inline-block; background:transparent; color:#ffffff;
                             font-family:Arial, Helvetica, sans-serif; font-weight:900; font-size:13px;
                             letter-spacing:.08em; text-transform:uppercase; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.35);">
                            Call Now
                          </a>
                        </td>
                      </tr>
                    </table>

                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#d1d5db; line-height:1.55;">
                      Reply with your address + preferred days/times and we’ll confirm availability.
                    </div>
                  </td>
                </tr>
              </table>

              <div style="height:18px; line-height:18px;">&nbsp;</div>

              <!-- Footer -->
              <table role="presentation" width="100%" style="border-top:1px solid #e5e7eb;">
                <tr>
                  <td class="stack center" align="left" style="padding-top:14px; vertical-align:top;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6b7280; line-height:1.7;">
                      <strong style="color:#111827;">Mr. Hood Repair</strong><br>
                      NFPA-Certified Hood Repairs, Inspections & Cleaning<br>
                      South Florida • Palm Beach County<br>
                      <a href="https://YOURDOMAIN.com" style="color:#ea1212; font-weight:800;">YOURDOMAIN.com</a>
                    </div>
                  </td>
                  <td class="stack center" align="right" style="padding-top:14px; vertical-align:top;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6b7280; line-height:1.7;">
                      <a href="https://YOURDOMAIN.com/preferences" style="color:#111827;">Manage preferences</a>
                      &nbsp;•&nbsp;
                      <a href="https://YOURDOMAIN.com/unsubscribe" style="color:#6b7280;">Unsubscribe</a><br>
                      © {{year}} Mr. Hood Repair. All rights reserved.
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr><td style="height:18px; line-height:18px;">&nbsp;</td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

Brand assets I extracted from your screenshots (upload these to your site/ESP and swap the `YOURDOMAIN.com` URLs in the code):

- Logo crop: [sandbox:/mnt/data/mrhood_logo_crop.png](sandbox:/mnt/data/mrhood_logo_crop.png)  
- Hero crop: [sandbox:/mnt/data/mrhood_hero_crop.png](sandbox:/mnt/data/mrhood_hero_crop.png)  
- Trusted-by strip: [sandbox:/mnt/data/mrhood_trusted_logos_strip.png](sandbox:/mnt/data/mrhood_trusted_logos_strip.png)  
- Process steps image: [sandbox:/mnt/data/mrhood_process_steps.png](sandbox:/mnt/data/mrhood_process_steps.png)

**Mike:** where is the html file?

**GPT:** Here it is — I saved the email as an HTML file for you:

**[Download the HTML email](sandbox:/mnt/data/mr-hood-repair-cold-outreach-email.html)**

**Mike:** great! let's make some revisions.   1.  link the real logo into the html file with the path : https://i.imgur.com/kep5361.png  2.   incorporate the client list image into the html file :  https://i.imgur.com/bhkFabg.png  3.  make it look incredible !

**GPT:** Done ✅ I updated the email to use your **real logo** + **client list image** and upgraded the styling (stronger hero, premium badge, proof bullets, richer buttons, cleaner cards).

**[Download the revised HTML email (v2)](sandbox:/mnt/data/mr-hood-repair-cold-outreach-email_v2.html)**
