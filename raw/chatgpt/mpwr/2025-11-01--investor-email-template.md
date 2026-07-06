---
title: "Investor email template"
date: 2025-11-01
cluster: "mPWR / Fintech / Investor"
messages: 9
source: chatgpt-export conversations.json (FULL transcript)
---

# Investor email template

> 9 messages · 2025-11-01 · cluster: mPWR / Fintech / Investor

**Semantic neighbors:** [[Create image for mPWR]] · [[Investor outreach strategies]] · [[mPWR ALT Emails 1-3 (11-13)]] · [[Blend HTML with mPWR]]

## Transcript

**Mike:** role : Salesloft email editor senior developer and email copyrighter.  task: when asked ,  create stunning email templates with the goal of raising capital for the company , mPWR.   answer any questions related to this objective by searching the web for blogs articles , Salesloft support site, ect..

**GPT:** Awesome — I’m your Salesloft-focused email dev + copy partner for mPWR. I’ll design investor-grade, Salesloft-ready HTML, and I’ll back answers with up-to-date docs and articles.

Here’s a ready-to-paste template (clean HTML, inline CSS, 600px table, bulletproof CTA, Dark-Mode-friendly, Salesloft dynamic fields). Drop this into a **Salesloft Template** and send via cadence or one-off.

```html
<!-- mPWR | Investor Outreach v1 | Salesloft-ready -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>mPWR Investor Briefing</title>
    <style>
      /* Mobile tweaks (kept tiny for Salesloft) */
      @media screen and (max-width:600px){ .container{width:100% !important} .p-24{padding:16px !important} .center{ text-align:center !important } }
      /* Dark Mode helpers (supported in many clients) */
      @media (prefers-color-scheme: dark){
        body, .bg{ background:#0e0e0f !important; }
        .card{ background:#171718 !important; }
        h1,h2,h3,p,li,span,a{ color:#ffffff !important; }
        .muted{ color:#bfbfbf !important; }
        .cta{ background:#17a67e !important; color:#ffffff !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#111111;">
    <div role="article" aria-roledescription="email" lang="en" style="background:#111111;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bg">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="width:600px; margin:0 auto;">
              
              <!-- Preheader (hidden in most clients) -->
              <tr>
                <td style="font-size:0; line-height:0; opacity:0; color:transparent; height:0; max-height:0; overflow:hidden;">
                  A bundled smartphone + fintech platform unlocking access for the next billion.
                </td>
              </tr>

              <!-- Header -->
              <tr>
                <td class="p-24" style="padding:24px;">
                  <table role="presentation" width="100%">
                    <tr>
                      <td>
                        <!-- Replace src with your hosted logo URL -->
                        <img src="https://via.placeholder.com/140x32?text=mPWR" width="140" height="32" alt="mPWR" style="display:block;border:0;outline:none;text-decoration:none;">
                      </td>
                      <td align="right" class="center" style="font:12px/18px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#bfbfbf;">
                        Investor Briefing
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Hero card -->
              <tr>
                <td class="p-24" style="padding:0 24px 8px 24px;">
                  <table role="presentation" width="100%" class="card" style="background:#171718; border-radius:12px;">
                    <tr>
                      <td style="padding:28px;">
                        <h1 style="margin:0 0 8px 0; font:700 24px/30px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#ffffff;">
                          {{first_name}}, mPWR is building a bundled device + finance rails for underserved markets
                        </h1>
                        <p class="muted" style="margin:0; font:14px/22px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#cfcfcf;">
                          Affordable smartphones with built-in connectivity and embedded financial services (banking, payments, micro-credit, insurance).
                        </p>
                      </td>
                    </tr>
                    <!-- Social proof band -->
                    <tr>
                      <td style="padding:0 28px 20px 28px;">
                        <table role="presentation" width="100%">
                          <tr>
                            <td style="font:600 13px/18px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#ffffff; padding:8px 0;">
                              • $2M+ revenue • 60,000 devices distributed • Live in 3 countries
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <!-- Value bullets -->
                    <tr>
                      <td style="padding:0 28px 8px 28px;">
                        <table role="presentation" width="100%">
                          <tr>
                            <td style="font:14px/22px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#e9e9e9;">
                              <ul style="padding-left:20px; margin:0;">
                                <li>Bundled economics: hardware margin + data + fintech take-rate.</li>
                                <li>Distribution: NGO & micro-merchant channels; telco partnerships in pipeline.</li>
                                <li>Defensibility: device-level onboarding, KYC, and wallet pre-install.</li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <!-- CTA -->
                    <tr>
                      <td style="padding:12px 28px 28px 28px;">
                        <table role="presentation" align="left" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td class="cta" bgcolor="#17a67e" style="border-radius:8px;">
                              <a href="https://invest.thempwr.com" 
                                 style="display:inline-block; padding:12px 18px; font:600 14px/16px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#ffffff; text-decoration:none;">
                                View Deal & Request Materials
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Founder note -->
              <tr>
                <td class="p-24" style="padding:8px 24px 0 24px;">
                  <p style="margin:0 0 12px 0; font:14px/22px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#e9e9e9;">
                    If aligned, I’d value a 12-minute briefing to walk you through traction, unit economics, and the rollout plan.
                  </p>
                  <p style="margin:0; font:14px/22px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#bfbfbf;">
                    — The mPWR Team
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td class="p-24" style="padding:24px;">
                  <p class="muted" style="margin:0; font:12px/18px system-ui,Segoe UI,Roboto,Arial,sans-serif; color:#9a9a9a;">
                    This message is for informational purposes only and is not an offer to sell securities.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
```

### How to use this in Salesloft (quick)
1) **Create a Template** → paste the HTML above (enable HTML editing if your team setting requires it). citeturn0search14turn0search24  
2) **Personalization**: keep dynamic fields like `{{first_name}}`. If a field is missing at send time, Salesloft will leave the tag as-is (e.g., `{{first_name}}`). Use a generic fallback version or keep audiences clean. citeturn10search2  
3) **A/B test** the subject line and CTA by using Cadence Step Variants (Variant B selects a different template). citeturn0search2  
4) **Deliverability**: verify SPF/DKIM/DMARC and set a **custom tracking domain** so tracked links use your subdomain (helps spam avoidance). citeturn0search5turn5view0  
5) **Dark Mode**: this template includes meta tags and media queries; still test across clients (Litmus guide). citeturn7view0turn7view1

### Subject lines (pick one to start A/B)
- “The bundled device + fintech play powering the next billion”
- “{{first_name}}, quick investor brief: mPWR traction + rollout”
- “60,000 devices shipped — want the mPWR 12-minute briefing?”

### Next steps I can do right now
- Convert this to a **downloadable .html** file and a **Salesloft “Template v2”** variant (short-form).  
- Design a **5-touch investor sequence** (subject lines + copy + HTML) tailored to StartEngine-style campaigns.  
- Slice your **header/phone icons** into a lightweight hero for Outlook-safe rendering.

Tell me which you want first, and I’ll produce it immediately.
