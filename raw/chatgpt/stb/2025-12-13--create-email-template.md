---
title: "Create email template"
date: 2025-12-13
cluster: "STB / Marketing / Web"
messages: 39
source: chatgpt-export conversations.json (FULL transcript)
---

# Create email template

> 39 messages · 2025-12-13 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[Landing page revisions]] · [[Email campaign outreach]] · [[Empower email template creation]] · [[Custom proposal creation]]

## Transcript

**Mike:** create an email

**GPT:** Here’s a **ready-to-send, responsive HTML marketing email** (dark + neon mPWR vibe). Just replace the placeholder logo/hero image URLs and links.

```html
<!doctype html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  <title>mPWR</title>

  <!--[if mso]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  <![endif]-->

  <style>
    /* CLIENT RESETS */
    html, body { margin:0 !important; padding:0 !important; height:100% !important; width:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt !important; mso-table-rspace:0pt !important; border-collapse:collapse !important; }
    img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; display:block; }
    a { text-decoration:none; }
    .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }

    /* MOBILE */
    @media screen and (max-width: 620px) {
      .container { width:100% !important; }
      .px { padding-left:16px !important; padding-right:16px !important; }
      .stack { display:block !important; width:100% !important; }
      .center { text-align:center !important; }
      .btn { width:100% !important; }
      .hero-img { width:100% !important; max-width:420px !important; height:auto !important; margin:0 auto !important; }
      .h1 { font-size:28px !important; line-height:1.15 !important; }
    }
  </style>
</head>

<body style="margin:0; padding:0; background-color:#050713;">
  <!-- Preheader (hidden) -->
  <div class="preheader">
    Your next growth engine—designed to look beautiful and perform anywhere.
  </div>

  <!-- Full-width background -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#050713;">
    <tr>
      <td align="center" style="padding:22px 12px;">
        <!-- Container -->
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">
          <!-- Top bar -->
          <tr>
            <td class="px" style="padding:6px 24px 14px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#9aa4b2;">
                    <a href="%%view_in_browser%%" style="color:#9aa4b2; text-decoration:underline;">View in browser</a>
                  </td>
                  <td align="right" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#9aa4b2;">
                    %%date%%
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Header / Logo -->
          <tr>
            <td class="px" style="padding:0 24px 14px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background: radial-gradient(circle at 15% 0%, rgba(0,240,255,0.18), transparent 55%),
                            radial-gradient(circle at 85% 120%, rgba(124,58,237,0.18), transparent 55%),
                            rgba(2,6,23,0.92);
                            border:1px solid rgba(148,163,184,0.22);
                            border-radius:20px;">
                <tr>
                  <td style="padding:18px 18px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:10px;">
                          <!-- Replace with your logo image -->
                          <img src="https://via.placeholder.com/44x28.png?text=mPWR" width="44" height="28" alt="mPWR" style="border-radius:8px;">
                        </td>
                        <td style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb;">
                          <div style="font-size:14px; letter-spacing:0.22em; text-transform:uppercase; font-weight:800;">
                            mPWR
                          </div>
                          <div style="font-size:12px; color:#9aa4b2; margin-top:2px;">
                            Mobile-first growth, beautifully delivered.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background-color:#071025;
                            border:1px solid rgba(148,163,184,0.22);
                            border-radius:22px;">
                <tr>
                  <td style="padding:22px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <!-- Copy -->
                        <td class="stack" width="55%" valign="top" style="padding-right:14px;">
                          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb;">
                            <div style="font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:#9aa4b2; font-weight:700;">
                              New • mPWR Update
                            </div>

                            <div class="h1" style="margin-top:10px; font-size:32px; line-height:1.12; font-weight:850;">
                              Make every tap feel like <span style="color:#00f0ff;">momentum</span>.
                            </div>

                            <div style="margin-top:10px; font-size:14px; line-height:1.7; color:#cbd5e1;">
                              Launch polished experiences fast—then measure, iterate, and scale without losing the magic.
                            </div>

                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">
                              <tr>
                                <td style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:13px; line-height:20px; color:#cbd5e1;">
                                  <span style="color:#00f0ff; font-weight:800;">•</span> Beautiful mobile-first templates<br>
                                  <span style="color:#00f0ff; font-weight:800;">•</span> Built for speed + conversions<br>
                                  <span style="color:#00f0ff; font-weight:800;">•</span> Analytics-ready components
                                </td>
                              </tr>
                            </table>

                            <!-- Button -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;">
                              <tr>
                                <td class="btn" align="left">
                                  <!--[if mso]>
                                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="https://example.com/demo"
                                    style="height:44px;v-text-anchor:middle;width:210px;" arcsize="999%" stroke="f" fillcolor="#00f0ff">
                                    <w:anchorlock/>
                                    <center style="color:#031019;font-family:Segoe UI, Arial, sans-serif;font-size:14px;font-weight:700;">
                                      Request a demo
                                    </center>
                                  </v:roundrect>
                                  <![endif]-->
                                  <!--[if !mso]><!-- -->
                                  <a href="https://example.com/demo"
                                     style="display:inline-block; background:#00f0ff; color:#031019; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
                                            font-size:14px; font-weight:800; padding:12px 18px; border-radius:999px;">
                                    Request a demo →
                                  </a>
                                  <!--<![endif]-->
                                </td>
                              </tr>
                            </table>

                            <div style="margin-top:10px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#9aa4b2;">
                              Prefer email? <a href="mailto:hello@example.com" style="color:#9aa4b2; text-decoration:underline;">hello@example.com</a>
                            </div>
                          </div>
                        </td>

                        <!-- Hero image -->
                        <td class="stack" width="45%" valign="top" align="center" style="padding-top:8px;">
                          <!-- Replace with your phone/hero image -->
                          <img class="hero-img"
                               src="https://via.placeholder.com/260x420.png?text=Phone+Hero"
                               width="260" height="420"
                               alt="mPWR preview"
                               style="width:260px; max-width:260px; height:auto; border-radius:18px; box-shadow:0 18px 55px rgba(0,0,0,0.55);">
                          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#9aa4b2; margin-top:10px;">
                            Designed to look premium in every inbox.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Feature cards -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background-color:#071025; border:1px solid rgba(148,163,184,0.22); border-radius:22px;">
                <tr>
                  <td style="padding:18px 18px 6px 18px;">
                    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:16px; font-weight:800;">
                      What you ship with mPWR
                    </div>
                    <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#9aa4b2; font-size:13px; line-height:20px;">
                      Modular blocks you can mix-and-match across campaigns.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 18px 18px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <!-- Card 1 -->
                        <td class="stack" width="33.33%" valign="top" style="padding:8px 8px 0 0;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="border:1px solid rgba(148,163,184,0.18); border-radius:16px; background:rgba(2,6,23,0.55);">
                            <tr>
                              <td style="padding:14px;">
                                <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-weight:850;">
                                  ⚡ Fast launch
                                </div>
                                <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                                  Go from concept to live email in hours—not days.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <!-- Card 2 -->
                        <td class="stack" width="33.33%" valign="top" style="padding:8px 8px 0 8px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="border:1px solid rgba(148,163,184,0.18); border-radius:16px; background:rgba(2,6,23,0.55);">
                            <tr>
                              <td style="padding:14px;">
                                <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-weight:850;">
                                  📈 Built to convert
                                </div>
                                <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                                  Clean hierarchy, clear CTAs, mobile-first layouts.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <!-- Card 3 -->
                        <td class="stack" width="33.33%" valign="top" style="padding:8px 0 0 8px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                 style="border:1px solid rgba(148,163,184,0.18); border-radius:16px; background:rgba(2,6,23,0.55);">
                            <tr>
                              <td style="padding:14px;">
                                <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-weight:850;">
                                  🧠 Analytics-ready
                                </div>
                                <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                                  Structure your campaign for clean, useful reporting.
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

          <!-- Quote / Social proof -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background: linear-gradient(135deg, rgba(0,240,255,0.12), rgba(124,58,237,0.10));
                            border:1px solid rgba(148,163,184,0.22);
                            border-radius:22px;">
                <tr>
                  <td style="padding:18px;">
                    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:14px; line-height:1.7;">
                      “The difference is the polish. It feels premium without sacrificing performance.”
                    </div>
                    <div style="margin-top:10px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#9aa4b2; font-size:12px; line-height:18px;">
                      — Your Customer Name, Title
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="padding:8px 24px 24px 24px;">
              <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#9aa4b2;">
                mPWR, Inc. · 123 Example St · New York, NY<br>
                <a href="%%unsubscribe%%" style="color:#9aa4b2; text-decoration:underline;">Unsubscribe</a> ·
                <a href="https://example.com/privacy" style="color:#9aa4b2; text-decoration:underline;">Privacy</a>
              </div>
            </td>
          </tr>

        </table>
        <!-- /Container -->
      </td>
    </tr>
  </table>
</body>
</html>
```

If you tell me **what this email is for** (launch announcement, investor update, newsletter, event invite, etc.) + your **CTA link** + **brand hex colors/logo**, I’ll tailor the copy + visuals to match perfectly.

**Mike:** use your knowledge base for inspiration

**GPT:** Below is a **fresh, email-safe template** inspired by your mPWR knowledge-base motifs (dark space + neon glow, “orbit/flywheel” thinking, and the Problem → Opportunity story flow). It’s **responsive**, **Outlook-safe for buttons**, and uses **CSS that most email clients accept** (no JavaScript—email clients block it).

Replace the image URLs + links and you’re good.

```html
<!doctype html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  <title>mPWR</title>

  <!--[if mso]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  <![endif]-->

  <style>
    html, body { margin:0 !important; padding:0 !important; height:100% !important; width:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt !important; mso-table-rspace:0pt !important; border-collapse:collapse !important; }
    img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; display:block; }
    a { text-decoration:none; }
    .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }

    /* iOS blue links reset */
    a[x-apple-data-detectors], .unstyle-auto-detected-links a, .aBn { border-bottom:0 !important; cursor:default !important; color:inherit !important; text-decoration:none !important; }

    @media screen and (max-width: 620px) {
      .container { width:100% !important; }
      .px { padding-left:16px !important; padding-right:16px !important; }
      .stack { display:block !important; width:100% !important; }
      .center { text-align:center !important; }
      .pad-top { padding-top:14px !important; }
      .h1 { font-size:28px !important; line-height:1.15 !important; }
      .hero-img { width:100% !important; max-width:420px !important; height:auto !important; margin:0 auto !important; }
      .btn { width:100% !important; }
    }

    /* Optional micro-animations (clients that support it). Safe if ignored. */
    @media screen and (prefers-reduced-motion: no-preference) {
      .pulseGlow { animation: pulseGlow 3.5s ease-in-out infinite; }
      @keyframes pulseGlow {
        0%,100% { box-shadow: 0 0 0 rgba(0,255,255,0), 0 18px 55px rgba(0,0,0,0.55); }
        50%     { box-shadow: 0 0 26px rgba(0,255,255,0.20), 0 18px 55px rgba(0,0,0,0.55); }
      }
      .twinkle { animation: twinkle 2.8s ease-in-out infinite; }
      @keyframes twinkle { 0%,100%{opacity:.45} 50%{opacity:1} }
    }
  </style>
</head>

<body style="margin:0; padding:0; background-color:#020617;">
  <!-- Preheader -->
  <div class="preheader">From friction to flow: a mobile-first growth loop you can ship fast.</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#020617;">
    <tr>
      <td align="center" style="padding:22px 12px;">

        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">

          <!-- Top line -->
          <tr>
            <td class="px" style="padding:6px 24px 14px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#94a3b8;">
                    <a href="%%view_in_browser%%" style="color:#94a3b8; text-decoration:underline;">View in browser</a>
                  </td>
                  <td align="right" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#94a3b8;">
                    %%date%%
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Header card (space glow) -->
          <tr>
            <td class="px" style="padding:0 24px 14px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#070b1a; border:1px solid rgba(148,163,184,0.22); border-radius:20px;">
                <tr>
                  <td style="padding:16px 16px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td valign="middle">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="padding-right:10px;">
                                <!-- Replace logo -->
                                <img src="https://via.placeholder.com/44x28.png?text=mPWR" width="44" height="28" alt="mPWR" style="border-radius:8px;">
                              </td>
                              <td style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
                                <div style="font-size:14px; letter-spacing:0.22em; text-transform:uppercase; font-weight:850; color:#e5e7eb;">
                                  mPWR
                                </div>
                                <div style="font-size:12px; color:#94a3b8; margin-top:2px;">
                                  Mobile-first experiences with momentum.
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td align="right" valign="middle" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; color:#94a3b8;">
                          <span class="twinkle" style="display:inline-block;">●</span>
                          <span style="display:inline-block; margin-left:6px;">Update</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO: copy + phone -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#0a0e27; border:1px solid rgba(148,163,184,0.22); border-radius:22px;">
                <tr>
                  <td style="padding:22px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="stack" width="56%" valign="top" style="padding-right:14px;">
                          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb;">
                            <div style="font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:#94a3b8; font-weight:800;">
                              Problem → Opportunity (animated feel, email-safe)
                            </div>

                            <div class="h1" style="margin-top:10px; font-size:34px; line-height:1.12; font-weight:900;">
                              Turn <span style="color:#ef4444;">friction</span> into <span style="color:#10b981;">flow</span>.
                            </div>

                            <div style="margin-top:10px; font-size:14px; line-height:1.7; color:#cbd5e1;">
                              Your users don’t need another funnel. They need a product story that feels inevitable—
                              fast, clear, and beautiful on mobile.
                            </div>

                            <!-- Feature chips (orbit/rings vibe) -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">
                              <tr>
                                <td style="padding:0 8px 8px 0;">
                                  <span style="display:inline-block; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; color:#e5e7eb;
                                    border:1px solid rgba(0,255,255,0.35); border-radius:999px; padding:7px 10px; background:rgba(0,255,255,0.06);">
                                    ⚡ Speed to ship
                                  </span>
                                </td>
                                <td style="padding:0 8px 8px 0;">
                                  <span style="display:inline-block; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; color:#e5e7eb;
                                    border:1px solid rgba(102,126,234,0.45); border-radius:999px; padding:7px 10px; background:rgba(102,126,234,0.10);">
                                    🛰️ Orbit-ready modules
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:0 8px 0 0;">
                                  <span style="display:inline-block; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; color:#e5e7eb;
                                    border:1px solid rgba(251,191,36,0.45); border-radius:999px; padding:7px 10px; background:rgba(251,191,36,0.10);">
                                    ✨ Premium polish
                                  </span>
                                </td>
                                <td style="padding:0 8px 0 0;">
                                  <span style="display:inline-block; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; color:#e5e7eb;
                                    border:1px solid rgba(148,163,184,0.30); border-radius:999px; padding:7px 10px; background:rgba(148,163,184,0.06);">
                                    📈 Measurable impact
                                  </span>
                                </td>
                              </tr>
                            </table>

                            <!-- Buttons -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;">
                              <tr>
                                <td class="btn" style="padding-right:10px; padding-bottom:10px;">
                                  <!--[if mso]>
                                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="https://example.com/demo"
                                    style="height:44px;v-text-anchor:middle;width:210px;" arcsize="999%" stroke="f" fillcolor="#00ffff">
                                    <w:anchorlock/>
                                    <center style="color:#020617;font-family:Segoe UI, Arial, sans-serif;font-size:14px;font-weight:800;">
                                      Request a demo
                                    </center>
                                  </v:roundrect>
                                  <![endif]-->
                                  <!--[if !mso]><!-- -->
                                  <a href="https://example.com/demo"
                                    style="display:inline-block; background:#00ffff; color:#020617; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
                                      font-size:14px; font-weight:900; padding:12px 18px; border-radius:999px;">
                                    Request a demo →
                                  </a>
                                  <!--<![endif]-->
                                </td>
                                <td class="btn" style="padding-bottom:10px;">
                                  <a href="https://example.com/case-study"
                                    style="display:inline-block; background:transparent; color:#e5e7eb; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
                                      font-size:14px; font-weight:800; padding:12px 18px; border-radius:999px;
                                      border:1px solid rgba(251,191,36,0.55);">
                                    View the story
                                  </a>
                                </td>
                              </tr>
                            </table>

                            <div style="margin-top:8px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#94a3b8;">
                              Questions? <a href="mailto:hello@example.com" style="color:#94a3b8; text-decoration:underline;">hello@example.com</a>
                            </div>
                          </div>
                        </td>

                        <td class="stack pad-top" width="44%" valign="top" align="center">
                          <!-- Replace with your phone/hero image exported from your KB visuals -->
                          <img class="hero-img pulseGlow"
                               src="https://via.placeholder.com/260x420.png?text=Hologram+Phone"
                               width="260" height="420"
                               alt="mPWR phone preview"
                               style="width:260px; max-width:260px; height:auto; border-radius:18px; box-shadow:0 18px 55px rgba(0,0,0,0.55);">
                          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#94a3b8; margin-top:10px;">
                            Tip: export your “hologram / orbit” hero as a PNG and drop it here.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Flywheel / Orbit loop section (email-safe) -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#070b1a; border:1px solid rgba(148,163,184,0.22); border-radius:22px;">
                <tr>
                  <td style="padding:18px;">
                    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:16px; font-weight:900;">
                      The mPWR flywheel (orbit-inspired)
                    </div>
                    <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#94a3b8; font-size:13px; line-height:20px;">
                      A simple loop you can ship, measure, and improve—without losing the magic.
                    </div>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">
                      <tr>
                        <td class="stack" width="33.33%" align="center" valign="top" style="padding:10px 6px;">
                          <div style="width:54px; height:54px; border-radius:999px; border:1px solid rgba(0,255,255,0.35); background:rgba(0,255,255,0.06); line-height:54px; font-size:22px;">
                            🧲
                          </div>
                          <div style="margin-top:10px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-weight:900;">
                            Attract
                          </div>
                          <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                            Crisp story + clear CTA.
                          </div>
                        </td>

                        <td class="stack" width="33.33%" align="center" valign="top" style="padding:10px 6px;">
                          <div style="width:54px; height:54px; border-radius:999px; border:1px solid rgba(102,126,234,0.45); background:rgba(102,126,234,0.10); line-height:54px; font-size:22px;">
                            ⚡
                          </div>
                          <div style="margin-top:10px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-weight:900;">
                            Activate
                          </div>
                          <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                            Mobile-first UX that feels premium.
                          </div>
                        </td>

                        <td class="stack" width="33.33%" align="center" valign="top" style="padding:10px 6px;">
                          <div style="width:54px; height:54px; border-radius:999px; border:1px solid rgba(251,191,36,0.50); background:rgba(251,191,36,0.10); line-height:54px; font-size:22px;">
                            🔁
                          </div>
                          <div style="margin-top:10px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-weight:900;">
                            Repeat
                          </div>
                          <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                            Learn fast—improve every cycle.
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Secondary CTA -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">
                      <tr>
                        <td>
                          <a href="https://example.com/flywheel"
                            style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:13px; color:#00ffff; font-weight:900; text-decoration:underline;">
                            See the flywheel breakdown →
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Problem vs Opportunity (inspired by your animated section) -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#070b1a; border:1px solid rgba(148,163,184,0.22); border-radius:22px;">
                <tr>
                  <td style="padding:18px;">
                    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:16px; font-weight:900;">
                      From “almost” to “obvious”
                    </div>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">
                      <tr>
                        <td class="stack" width="50%" valign="top" style="padding:8px 8px 0 0;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                            style="border:1px solid rgba(239,68,68,0.35); border-radius:16px; background:rgba(239,68,68,0.07);">
                            <tr>
                              <td style="padding:14px;">
                                <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#fecaca; font-weight:900;">
                                  The problem
                                </div>
                                <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:13px; line-height:20px;">
                                  Too many steps. Too much cognitive load. Mobile experiences that feel “fine”… and convert like “fine.”
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td class="stack" width="50%" valign="top" style="padding:8px 0 0 8px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                            style="border:1px solid rgba(16,185,129,0.35); border-radius:16px; background:rgba(16,185,129,0.07);">
                            <tr>
                              <td style="padding:14px;">
                                <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#bbf7d0; font-weight:900;">
                                  The opportunity
                                </div>
                                <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:13px; line-height:20px;">
                                  A crisp story, one clear action, and a premium feel that makes the next step *obvious*.
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

          <!-- Final CTA -->
          <tr>
            <td class="px" style="padding:0 24px 18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#0a0e27; border:1px solid rgba(148,163,184,0.22); border-radius:22px;">
                <tr>
                  <td style="padding:18px;">
                    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#e5e7eb; font-size:16px; font-weight:900;">
                      Want this “orbit” feel in your next campaign?
                    </div>
                    <div style="margin-top:6px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#cbd5e1; font-size:13px; line-height:20px;">
                      Reply with your goal + audience and we’ll map the story into a high-converting, mobile-first layout.
                    </div>

                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">
                      <tr>
                        <td class="btn">
                          <!--[if mso]>
                          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="https://example.com/demo"
                            style="height:44px;v-text-anchor:middle;width:260px;" arcsize="999%" stroke="f" fillcolor="#667eea">
                            <w:anchorlock/>
                            <center style="color:#ffffff;font-family:Segoe UI, Arial, sans-serif;font-size:14px;font-weight:800;">
                              Get the mPWR layout
                            </center>
                          </v:roundrect>
                          <![endif]-->
                          <!--[if !mso]><!-- -->
                          <a href="https://example.com/demo"
                            style="display:inline-block; background:#667eea; color:#ffffff; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
                              font-size:14px; font-weight:900; padding:12px 18px; border-radius:999px;">
                            Get the mPWR layout →
                          </a>
                          <!--<![endif]-->
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="padding:8px 24px 24px 24px;">
              <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; font-size:12px; line-height:18px; color:#94a3b8;">
                mPWR, Inc. · 123 Example St · New York, NY<br>
                <a href="%%unsubscribe%%" style="color:#94a3b8; text-decoration:underline;">Unsubscribe</a> ·
                <a href="https://example.com/privacy" style="color:#94a3b8; text-decoration:underline;">Privacy</a>
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
```

If you want, paste the **goal of this email** (launch, pitch, newsletter, event) + your **logo + hero image** (or tell me which KB visual you want featured: *hologram phone*, *orbit flywheel*, *ecosystem*, etc.), and I’ll tailor the **headline + section order + CTAs** to match that exact story.

**Mike:** put it in a downloadable html file

**GPT:** Done — here’s your downloadable file:

[Download the HTML email](sandbox:/mnt/data/mpwr_inspired_email.html)

**Mike:** remix . make it smooth

**GPT:** Here’s the remixed, smoother version as a downloadable HTML file:

[Download the smooth remix](sandbox:/mnt/data/mpwr_inspired_email_smooth.html)

**Mike:** re-create one of the pdf's in your knowledge base.  choose one.

**GPT:** I chose **“mPWR Ecosystem Flywheel – Compact v2”** and recreated it as a clean **one-page PDF** (dark + neon flywheel with core + orbit nodes + “How to read this” block).

[Download the recreated PDF](sandbox:/mnt/data/mpwr_ecosystem_flywheel_compact_v2_recreated.pdf)

**Mike:** convert it to an interactive html file.

**GPT:** Done — I converted the recreated PDF into a **standalone interactive HTML** (SVG + hover tooltips + click-to-focus details + orbit animation controls).

[Download the interactive HTML](sandbox:/mnt/data/mpwr_ecosystem_flywheel_interactive.html)
