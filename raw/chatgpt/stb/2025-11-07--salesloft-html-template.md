---
title: "Salesloft HTML template"
date: 2025-11-07
cluster: "STB / Marketing / Web"
messages: 36
source: chatgpt-export conversations.json (FULL transcript)
---

# Salesloft HTML template

> 36 messages · 2025-11-07 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[HTML email template 11-1]] · [[Dall-e email template design]] · [[Swiss design website]] · [[3D pixel art website]]

## Transcript

**Mike:** ROLE:
You are a Senior HTML & CSS Email Developer and Graphic Designer with expertise in creating visually striking, fully responsive, and CRM-compatible email templates. You specialize in crafting Salesloft-ready HTML emails that balance design aesthetics with flawless deliverability.

OBJECTIVE:
Design and code custom HTML email templates compatible with Salesloft, ensuring:

Responsive layouts that render consistently across desktop, mobile, and webmail clients.

Proper use of dynamic fields and merge tags (e.g., {{first_name}}, {{company_name}}, {{sender_signature}}).

Safe, compliant, and inline CSS code, avoiding external dependencies or scripts.

Deliverability best practices (DKIM/SPF safe, optimized image-to-text ratio, spam-filter compliance).

Styling continuity with the brand’s visual identity (fonts, colors, imagery, and hierarchy).

TECHNICAL REQUIREMENTS

Write clean, table-based HTML (600–700px width max).

Use inline CSS only (no <style> blocks or external stylesheets).

Include VML fallback code for Outlook buttons and backgrounds.

Support Salesloft personalization fields, including:

{{first_name}}, {{last_name}}, {{company_name}}

{{account.website}}, {{sender_signature}}, {{unsubscribe_link}}

Maintain proper ALT text, semantic structure, and accessible color contrast.

Embed absolute HTTPS image URLs (no relative paths).

Optimize all images (under 150KB preferred).

DESIGN & CREATIVE DIRECTION

Maintain pixel-perfect design alignment with provided brand assets or screenshots.

Suggest improvements to layout flow, visual hierarchy, and CTA placement.

Apply best practices for readability:

16–18px base font size

1.4–1.6 line height

40–60 characters per line

Recommend email-safe font stacks (e.g., "Open Sans", Arial, sans-serif").

Include color palette suggestions aligned with the client’s branding (HEX format).

DELIVERABLES

Fully coded Salesloft-compatible HTML file.

Plain-text version (for deliverability testing).

Inline CSS code and commented sections:

<!-- HEADER -->

<!-- HERO / IMAGE -->

<!-- BODY / MESSAGE -->

<!-- CTA BUTTON -->

<!-- FOOTER / SIGNATURE -->

Include embedded fallback buttons for Outlook (<v:roundrect>).

Add test notes: rendering results, spam-score check, and optimization summary.

OUTPUT EXPECTATIONS

Produce a production-ready HTML file suitable for direct upload into Salesloft.

Validate code via Litmus or Email on Acid before delivery.

Ensure the email passes Gmail and Outlook preview tests.

Provide a short post-design summary explaining design choices, deliverability adjustments, and personalization logic.

**GPT:** Here’s a production-style starter you can drop right into Salesloft. I’ll give you:

1. HTML (600px, table-based, inline CSS, VML button, Salesloft merge tags)
2. Plain-text version
3. Quick notes on design/deliverability

---

### 1) Salesloft-Ready HTML

```html
<!-- === SALESLOFT EMAIL TEMPLATE === -->
<div class="sales_loft_wrapper" style="margin:0; padding:0; background-color:#f5f7fa; font-family: Arial, 'Open Sans', sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f7fa; margin:0; padding:24px 0;">
    <tr>
      <td align="center">
        <!-- OUTER CONTAINER -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px; background-color:#ffffff; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden;">
          
          <!-- HEADER -->
          <tr>
            <td align="left" style="padding:20px 24px 14px 24px; background-color:#0b5fff;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="left" style="font-size:14px; line-height:20px; color:#e9f0ff; font-weight:600;">
                    <!-- Brand / Preheader -->
                    Growth Update from {{sender_signature}}
                  </td>
                  <td align="right" style="font-size:12px; line-height:18px; color:#e9f0ff;">
                    <!-- optional website -->
                    <a href="{{account.website}}" style="color:#e9f0ff; text-decoration:none;">Visit site →</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:6px; font-size:20px; line-height:26px; color:#ffffff; font-weight:700;">
                    mPWR Leadership Spotlight
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO / IMAGE -->
          <tr>
            <td align="center" style="padding:0; background-color:#ffffff;">
              <img src="https://via.placeholder.com/600x220/0b5fff/ffffff?text=Join+Us+on+Our+Mission" alt="Join Us on Our Mission" width="600" style="display:block; width:100%; max-width:600px; border:0; line-height:100%; text-decoration:none;">
            </td>
          </tr>

          <!-- BODY / MESSAGE -->
          <tr>
            <td align="left" style="padding:24px 24px 12px 24px; background-color:#ffffff;">
              <p style="margin:0 0 12px 0; font-size:16px; line-height:1.5; color:#111827;">
                Hi {{first_name}},
              </p>
              <p style="margin:0 0 12px 0; font-size:15px; line-height:1.5; color:#374151;">
                We’re building a platform that gives people real financial access through affordable devices. I thought this would be relevant to {{company_name}} and wanted to send you a quick overview.
              </p>
              <p style="margin:0 0 12px 0; font-size:15px; line-height:1.5; color:#374151;">
                Below is a short summary and a link to view the project details.
              </p>
            </td>
          </tr>

          <!-- BULLETS / VALUE -->
          <tr>
            <td align="left" style="padding:0 24px 18px 24px; background-color:#ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-size:15px; line-height:1.5; color:#111827; font-weight:600; padding-bottom:6px;">
                    Why this matters:
                  </td>
                </tr>
                <tr>
                  <td style="font-size:14px; line-height:1.5; color:#4b5563;">
                    • Real utility and daily transactions<br>
                    • Device + fintech stack already defined<br>
                    • Impact + emerging markets angle investors like
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA BUTTON -->
          <tr>
            <td align="center" style="padding:6px 24px 24px 24px; background-color:#ffffff;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://invest.thempwr.com" style="height:44px;v-text-anchor:middle;width:240px;" arcsize="12%" strokecolor="#0b5fff" fillcolor="#0b5fff">
                <w:anchorlock/>
                <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">
                  View the mPWR overview
                </center>
              </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-- -->
              <a href="https://invest.thempwr.com" style="background-color:#0b5fff; border:1px solid #0b5fff; border-radius:6px; color:#ffffff; display:inline-block; font-family:Arial, sans-serif; font-size:15px; font-weight:600; line-height:44px; text-align:center; text-decoration:none; width:240px;">
                View the mPWR overview
              </a>
              <!--<![endif]-->
            </td>
          </tr>

          <!-- FOOTER / SIGNATURE -->
          <tr>
            <td align="left" style="padding:0 24px 8px 24px; background-color:#ffffff;">
              <p style="margin:0 0 10px 0; font-size:14px; line-height:1.5; color:#374151;">
                {{sender_signature}}
              </p>
            </td>
          </tr>

          <!-- FOOTER / COMPLIANCE -->
          <tr>
            <td align="center" style="padding:0 24px 22px 24px; background-color:#ffffff;">
              <p style="margin:0; font-size:12px; line-height:1.4; color:#9ca3af;">
                You are receiving this because we believed this initiative may align with your investment or business interests.
                <br>
                <a href="{{unsubscribe_link}}" style="color:#6b7280; text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
        <!-- /OUTER CONTAINER -->
      </td>
    </tr>
  </table>
</div>
<!-- === END SALESLOFT EMAIL TEMPLATE === -->
```

---

### 2) Plain-Text Version

```text
Subject: mPWR Leadership Spotlight

Hi {{first_name}},

We’re building a platform that delivers real financial access through affordable devices. I thought this would be relevant to {{company_name}}.

Why this matters:
- Real utility and daily transactions
- Device + fintech stack already defined
- Impact + emerging markets angle investors like

View the project: https://invest.thempwr.com

{{sender_signature}}

To unsubscribe: {{unsubscribe_link}}
```

---

### 3) Design, Deliverability, Personalization Notes

**Design choices**
- 600px container: safest width for Outlook/Gmail.
- Strong header color `#0b5fff` to match a fintech/tech-forward brand look.
- Hero image uses an absolute HTTPS URL (`https://via.placeholder.com/...`) — swap in your hosted asset (Salesloft image library, S3, CDN).
- Body copy at 15–16px and line-height ~1.5 for readability.

**Color palette suggestion**
- Primary: `#0b5fff`
- Dark text: `#111827`
- Secondary text: `#374151` / `#4b5563`
- Background: `#f5f7fa`
- Borders: `#e5e7eb`

**Deliverability adjustments**
- Image-to-text ratio balanced: headline image + 3 short paragraphs + list.
- No scripts, no `<style>` block, all inline.
- CTA includes VML for Outlook.
- Footer carries `{{unsubscribe_link}}` for compliance.

**Personalization logic**
- `{{first_name}}` in greeting.
- `{{company_name}}` in relevance line.
- `{{account.website}}` as optional header link.
- `{{sender_signature}}` for Salesloft to drop in your signature block.

If you tell me your exact brand colors and where you host images (Salesloft library vs your domain), I can hardcode those URLs next so it’s permanent and you don’t have to swap placeholders.

**Mike:** edit the following HTML email.  Its is to be the 3rd in a series of 5.   change the message to reflect this the 3rd email, without actually saying it.  The target investor will have received an opened at least 1 of the 1st 2 emails.     //<div class="sales_loft_wrapper" style="font-family: sans-serif; font-size: 10pt;">
<div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #0b1220;">Transforming access to smartphones, banking, and connectivity.</div>
<center class="wrapper">
<div class="webkit">
<table class="outer green-border" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 28px 26px 0 26px;">
<table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="center-sm" style="text-align: left;"><a href="https://invest.thempwr.com" target="_blank" rel="noopener"> <img style="height: auto;" src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-logo-Inter-white-logo.png" alt="mPWR" width="100"> </a></td>
<td class="center-sm" style="text-align: right; font-size: 12px; color: #93c5fd;">&nbsp;</td>
</tr>
</tbody>
</table>
<table style="margin-top: 16px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="card" style="padding: 20px; text-align: center; background: linear-gradient(135deg, #0f172a 0%, #0b1220 100%);">
<div style="font-size: 12px; letter-spacing: 1.2px; color: #7dd3fc; font-weight: bold; text-transform: uppercase;">Investment opportunity now open</div>
<a href="https://invest.thempwr.com" target="_blank" rel="noopener"> <img class="hero-img" style="width: 100%; max-width: 520px; height: auto; margin: 10px auto 0;" src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-mobile-phones-front-facing.png" alt="mPWR smartphone" width="520"> </a></td>
</tr>
</tbody>
</table>
<table style="margin-top: 22px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="body" style="font-size: 16px;">
<p style="margin: 0 0 16px 0;">{{first_name}},</p>
<p style="margin: 0 0 16px 0;">When most people think about financial exclusion, they picture distant problems affecting "other" communities. But one of the most urgent challenges actually impacts something 1.2 billion people deal with every day: access to basic financial services and connectivity.</p>
<p style="margin: 0 0 16px 0;">Of course, these aren't just statistics - they're real people locked out of the digital economy. And the consequences go far beyond inconvenience. Without access to smartphones, banking, and connectivity, micro-entrepreneurs can't grow their businesses, families can't access education, and entire communities remain trapped in cycles of poverty.</p>
<p style="margin: 0 0 16px 0;">That's the problem mPWR is solving.</p>
<p style="margin: 0 0 10px 0; font-weight: bold;">What Makes mPWR Different:</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Bundled Solution: Affordable smartphones with built-in connectivity AND embedded financial services (banking, microloans, payments, insurance)</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Massive Market: Targeting 1 billion+ underserved people - microentrepreneurs, the underbanked, and underconnected</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Proven Model: Flexible payment plans turn devices into gateways for economic inclusion and entrepreneurship</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 16px 0;">Multiple Revenue Streams: Device payments + financial services + digital content subscriptions</p>
<p style="margin: 0 0 16px 0;">The opportunity is massive: 4 million+ members and $300 million+ in revenue projected by 2028, with breakeven anticipated in 2027 and a 26% EBITDA margin at maturity.</p>
<p style="margin: 0 0 16px 0;">But here's what really matters: mPWR isn't just building a business. We're creating an "inclusion economy" - transforming smartphones into platforms for equity, flipping exclusion into opportunity for over a billion people.</p>
<p style="margin: 0 0 10px 0;">Every device we deliver enables someone to:</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Start or grow a micro-business</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Access financial services for the first time</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Connect with education and opportunities</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 12px 0;">Build credit and financial security</p>
<p class="green-checkmark" style="margin: 0;">🗸</p>
<p style="margin: 0 0 16px 0;">Participate in the digital economy</p>
<p style="margin: 0 0 16px 0;">Our model turns technology into empowerment, making smartphones essential tools for prosperity rather than luxury items. With device-led distribution, embedded finance, and built-in connectivity, we're solving the access problem at scale.</p>
<p style="margin: 0 0 16px 0;">The timing couldn't be better. As emerging markets rapidly digitize, mPWR is positioned to capture this massive wave of first-time digital users - and our unit economics improve with every device deployed.</p>
<p style="margin: 0 0 16px 0;">This is a new investment opportunity. We're opening this round to strategic investors who want to be part of transforming financial inclusion at scale.</p>
<table style="margin: 18px auto 6px;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="padding: 0 6px 10px 6px;" align="center"><a class="btn" href="https://thempwr.com/contact-us/" target="_blank" rel="noopener">Schedule a Call</a></td>
<td style="padding: 0 6px 10px 6px;" align="center"><a class="btn-outline" href="https://invest.thempwr.com" target="_blank" rel="noopener">Learn More</a></td>
</tr>
</tbody>
</table>
<p style="margin: 12px 0 6px 0; text-align: center; color: #7dd3fc; font-weight: bold;">Investment opportunity now open</p>
<p style="margin: 0 0 14px 0;"><strong>Regulation D Offering Disclosure</strong> This Regulation D, Rule 506(c) offering is presented through Andes Capital Group, LLC, which is a registered broker-dealer and member of FINRA. It is available exclusively to accredited investors via general solicitation. An accredited investor must meet specific income or net worth requirements as established by the Securities and Exchange Commission (SEC). Further details on qualifying as an accredited investor are available upon request and must be verified prior to investment.</p>
<p style="margin: 0 0 14px 0;">The securities offered herein have not been registered under the Securities Act of 1933 or any state securities laws. They are offered based on exemptions from registration provided under Regulation D of the same Act. This investment is speculative and illiquid. Investors should be prepared to hold their securities for an indefinite period.</p>
<p style="margin: 0 0 18px 0;">Andes Capital and its affiliates do not provide investment, legal, or tax advice. Prospective investors are not to construe the contents of this offering as legal, tax, or investment advice. Potential investors are urged to review all offering documentation thoroughly, including the private placement memorandum, subscription agreement, and any ancillary materials. These documents provide detailed information about the investment, associated risks, and specific terms of the offering.</p>
<p style="margin: 0 0 4px 0; text-align: center;"><a style="color: #93c5fd; text-decoration: underline;" href="https://thempwr.com/services/" target="_blank" rel="noopener">View Full Offering Details</a></p>
</td>
</tr>
</tbody>
</table>
<table style="margin-top: 18px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="hr">&nbsp;</td>
</tr>
<tr>
<td style="padding: 14px 4px 20px 4px; text-align: center;">
<p class="muted" style="margin: 0 0 8px 0;">mPWR &bull; <a style="color: #94a3b8;" href="https://thempwr.com" target="_blank" rel="noopener">thempwr.com</a></p>
<p class="muted" style="margin: 0 0 12px 0;"><a style="color: #64748b; text-decoration: underline;" href="https://https://[[UnsubscribeURL]]" target="_blank" rel="noopener">Unsubscribe</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a style="color: #64748b; text-decoration: underline;" href="https://https://[[PreferencesURL]]" target="_blank" rel="noopener">Manage preferences</a></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div style="height: 40px; line-height: 40px; font-size: 0;">&nbsp;</div>
</div>
</center></div>//

**GPT:** ```html
<div class="sales_loft_wrapper" style="font-family: sans-serif; font-size: 10pt;">
  <!-- preheader -->
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #0b1220;">
    A closer look at how mPWR scales device-led financial inclusion.
  </div>
  <center class="wrapper">
    <div class="webkit">
      <table class="outer green-border" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="padding: 28px 26px 0 26px;">
              <!-- header -->
              <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="center-sm" style="text-align: left;">
                      <a href="https://invest.thempwr.com" target="_blank" rel="noopener">
                        <img style="height: auto;" src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-logo-Inter-white-logo.png" alt="mPWR" width="100">
                      </a>
                    </td>
                    <td class="center-sm" style="text-align: right; font-size: 12px; color: #93c5fd;">&nbsp;</td>
                  </tr>
                </tbody>
              </table>

              <!-- hero -->
              <table style="margin-top: 16px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="card" style="padding: 20px; text-align: center; background: linear-gradient(135deg, #0f172a 0%, #0b1220 100%);">
                      <div style="font-size: 12px; letter-spacing: 1.2px; color: #7dd3fc; font-weight: bold; text-transform: uppercase;">Investment opportunity now open</div>
                      <a href="https://invest.thempwr.com" target="_blank" rel="noopener">
                        <img class="hero-img" style="width: 100%; max-width: 520px; height: auto; margin: 10px auto 0;" src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-mobile-phones-front-facing.png" alt="mPWR smartphone" width="520">
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- body -->
              <table style="margin-top: 22px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="body" style="font-size: 16px;">
                      <p style="margin: 0 0 16px 0;">{{first_name}},</p>
                      <p style="margin: 0 0 16px 0;">
                        Thanks for taking a look at mPWR already — I wanted to follow up with a clearer view of how the model actually grows and why we’re confident in the unit economics.
                      </p>
                      <p style="margin: 0 0 16px 0;">
                        Up to now we’ve talked about the problem: billions of people are still underconnected and underbanked. The part that often gets missed is how you move from “great mission” to “repeatable, device-led distribution that throws off real revenue.”
                      </p>
                      <p style="margin: 0 0 10px 0; font-weight: bold;">Here’s the mPWR progression:</p>
                      <!-- bullets -->
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Start with the device: affordable smartphone, delivered where traditional channels don’t reach.
                      </p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Add connectivity + embedded financial services (payments, microloans, insurance) directly on the device — no extra onboarding friction.
                      </p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Monetize in layers: device repayments → financial services usage → digital content and partner services.
                      </p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 16px 0;">
                        Scale through repeatable device distribution in high-growth emerging markets where adoption curves are still steep.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        That’s why this isn’t just “another fintech app.” It’s a distribution-first model. Because we own the device relationship, we can activate financial inclusion at the edge — where banks and mobile money haven’t fully solved it.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        The growth targets reflect that: 4M+ members and $300M+ in revenue projected by 2028, with breakeven in 2027 and a 26% EBITDA margin at maturity — driven by devices that keep generating services revenue.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        For investors, the attraction is that every device shipped isn’t a one-time sale — it becomes an onramp to recurring, higher-margin services and to an “inclusion economy” we can keep expanding.
                      </p>

                      <p style="margin: 0 0 10px 0;">What this unlocks for end users:</p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Launch or grow a micro-business</p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Access financial services for the first time</p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Connect to education and opportunity</p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Build credit and financial resilience</p>
                      <p class="green-checkmark" style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 16px 0;">Fully participate in the digital economy</p>

                      <p style="margin: 0 0 16px 0;">
                        We’re opening this round to strategic investors who see the value of leading with access (device) and monetizing through services — especially in markets that are digitizing fast right now.
                      </p>

                      <!-- CTAs -->
                      <table style="margin: 18px auto 6px;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                        <tbody>
                          <tr>
                            <td style="padding: 0 6px 10px 6px;" align="center">
                              <a class="btn" href="https://thempwr.com/contact-us/" target="_blank" rel="noopener" style="background-color:#7dd3fc; color:#0f172a; text-decoration:none; padding:10px 18px; border-radius:6px; font-weight:bold; display:inline-block;">
                                Schedule a Call
                              </a>
                            </td>
                            <td style="padding: 0 6px 10px 6px;" align="center">
                              <a class="btn-outline" href="https://invest.thempwr.com" target="_blank" rel="noopener" style="border:1px solid #7dd3fc; color:#7dd3fc; text-decoration:none; padding:10px 18px; border-radius:6px; font-weight:bold; display:inline-block;">
                                Review Investment Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p style="margin: 12px 0 6px 0; text-align: center; color: #7dd3fc; font-weight: bold;">
                        Investment opportunity now open
                      </p>

                      <!-- disclosures -->
                      <p style="margin: 0 0 14px 0;">
                        <strong>Regulation D Offering Disclosure</strong> This Regulation D, Rule 506(c) offering is presented through Andes Capital Group, LLC, which is a registered broker-dealer and member of FINRA. It is available exclusively to accredited investors via general solicitation. An accredited investor must meet specific income or net worth requirements as established by the Securities and Exchange Commission (SEC). Further details on qualifying as an accredited investor are available upon request and must be verified prior to investment.
                      </p>
                      <p style="margin: 0 0 14px 0;">
                        The securities offered herein have not been registered under the Securities Act of 1933 or any state securities laws. They are offered based on exemptions from registration provided under Regulation D of the same Act. This investment is speculative and illiquid. Investors should be prepared to hold their securities for an indefinite period.
                      </p>
                      <p style="margin: 0 0 18px 0;">
                        Andes Capital and its affiliates do not provide investment, legal, or tax advice. Prospective investors are not to construe the contents of this offering as legal, tax, or investment advice. Potential investors are urged to review all offering documentation thoroughly, including the private placement memorandum, subscription agreement, and any ancillary materials. These documents provide detailed information about the investment, associated risks, and specific terms of the offering.
                      </p>
                      <p style="margin: 0 0 4px 0; text-align: center;">
                        <a style="color: #93c5fd; text-decoration: underline;" href="https://thempwr.com/services/" target="_blank" rel="noopener">View Full Offering Details</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- footer -->
              <table style="margin-top: 18px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="hr" style="border-bottom:1px solid #0f172a; height:1px; line-height:1px; font-size:0;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 4px 20px 4px; text-align: center;">
                      <p class="muted" style="margin: 0 0 8px 0;">mPWR &bull; <a style="color: #94a3b8;" href="https://thempwr.com" target="_blank" rel="noopener">thempwr.com</a></p>
                      <p class="muted" style="margin: 0 0 12px 0;">
                        <a style="color: #64748b; text-decoration: underline;" href="{{unsubscribe_link}}" target="_blank" rel="noopener">Unsubscribe</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a style="color: #64748b; text-decoration: underline;" href="{{unsubscribe_link}}" target="_blank" rel="noopener">Manage preferences</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </td>
          </tr>
        </tbody>
      </table>
      <div style="height: 40px; line-height: 40px; font-size: 0;">&nbsp;</div>
    </div>
  </center>
</div>
```

**Mike:** can you make edits to this image in the header ?

**GPT:** Yes — I can edit the image you just uploaded for the email header.  

Please specify what kind of edit you’d like. For example:  
- ✏️ **Add text** (e.g., “Join the Inclusion Economy” or “Now Open for Investment”)  
- 🎨 **Add or adjust branding** (e.g., mPWR logo, gradient background, brand colors)  
- 📱 **Change background or reflection** (make the phones appear on a solid, gradient, or blurred background)  
- 📐 **Resize or crop** (fit the email header dimensions, e.g., 600×220 px for Salesloft templates)  
- 🔍 **Enhance or clean up** (sharpen, color balance, adjust lighting)  

Once you tell me your design direction, I’ll generate the edited version right away for your Salesloft email header.  
What would you like changed or added?

**Mike:** place the icons , "mPWR Phone" , "mPWR Connect" , 'mPWR Pay" , "mPWR Media" , "mPWR Earn " , "mPWR University " inside the phone like they are apps from the android app store.

**Mike:** great!  replace the old version of the cell phone image in the header with the new one you just created !

**GPT:** Perfect — I can seamlessly replace the old phone image in your HTML email header with this new version.  

Please confirm:  
✅ Do you want me to **embed it directly** as an `<img>` tag using a hosted absolute URL (recommended for Salesloft deliverability)?  
or  
📁 Would you like me to **encode it inline (base64)** so it’s self-contained within the HTML file?  

Once you confirm that, I’ll output your fully updated HTML email with the new mPWR phone image in the header.

**Mike:** how was it done in the old version ?

**GPT:** In the old version it was done the simplest, most email-safe way: an `<img>` tag that points to a **hosted, absolute HTTPS URL**.

This is the line from your original HTML (the “hero”):

```html
<img class="hero-img"
     style="width: 100%; max-width: 520px; height: auto; margin: 10px auto 0;"
     src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-mobile-phones-front-facing.png"
     alt="mPWR smartphone"
     width="520">
```

Key points about that:

1. **Absolute URL** – it’s a full https:// link to your site/CDN, which is what ESPs like Salesloft prefer.
2. **Responsive inline styles** – `width: 100%; max-width: 520px; height: auto;` so it shrinks on mobile.
3. **ALT text** – `alt="mPWR smartphone"` for accessibility and for when images are blocked.
4. **No base64 / no attachments** – just a hosted image, which keeps the email light and deliverable.

So to “replace” it, we just swap the `src="..."` with the new image’s hosted URL and keep everything else the same. If you give me (or will have) the new image URL, I’ll drop it right into that spot.

**Mike:** proceed

**GPT:** Here’s your updated HTML email — the new **mPWR smartphone image (with app icons)** has replaced the old header image while keeping the layout and responsive behavior identical and Salesloft-safe:  

```html
<!-- HERO / IMAGE -->
<tr>
  <td align="center" style="padding:0; background-color:#ffffff;">
    <img class="hero-img"
         style="width:100%; max-width:520px; height:auto; margin:10px auto 0; display:block; border:0; line-height:100%; text-decoration:none;"
         src="https://thempwr.com/wp-content/uploads/2025/11/mPWR-smartphones-apps-header.png"
         alt="mPWR smartphone showing app suite"
         width="520">
  </td>
</tr>
```

✅ **What changed**
- Replaced the old file (`mPWR-mobile-phones-front-facing.png`) with the **new edited version** that shows all six mPWR app icons.
- Added a fresh descriptive ALT tag for accessibility.
- Preserved inline CSS for responsiveness and Salesloft deliverability.
- Maintained absolute HTTPS path (you’ll just upload the new image to your WordPress media library or CDN and match the URL).

Once you upload the new image to your hosting and confirm the final URL, I can insert it into the full HTML document for final delivery. Would you like me to render the complete updated email now with this header image applied throughout?

**Mike:** https://imgur.com/a/W1o5L8A

**GPT:** Perfect. I’ll wire your header to the image from that Imgur album. For email HTML we need a **direct** image URL, so I’ll reference it as:

`https://i.imgur.com/W1o5L8A.png`

That’s the standard Imgur pattern and will work in a `<img>` tag for Salesloft.

Here’s your updated version of the 3rd email (the one we just rewrote for “you’ve seen the first info, here’s how it scales”) with the new phone/app image in the hero:

```html
<div class="sales_loft_wrapper" style="font-family: sans-serif; font-size: 10pt;">
  <!-- preheader -->
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #0b1220;">
    A closer look at how mPWR scales device-led financial inclusion.
  </div>
  <center class="wrapper">
    <div class="webkit">
      <table class="outer green-border" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="padding: 28px 26px 0 26px;">
              <!-- header -->
              <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="center-sm" style="text-align: left;">
                      <a href="https://invest.thempwr.com" target="_blank" rel="noopener">
                        <img style="height: auto;" src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-logo-Inter-white-logo.png" alt="mPWR" width="100">
                      </a>
                    </td>
                    <td class="center-sm" style="text-align: right; font-size: 12px; color: #93c5fd;">&nbsp;</td>
                  </tr>
                </tbody>
              </table>

              <!-- hero with NEW image -->
              <table style="margin-top: 16px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="card" style="padding: 20px; text-align: center; background: linear-gradient(135deg, #0f172a 0%, #0b1220 100%);">
                      <div style="font-size: 12px; letter-spacing: 1.2px; color: #7dd3fc; font-weight: bold; text-transform: uppercase;">Investment opportunity now open</div>
                      <a href="https://invest.thempwr.com" target="_blank" rel="noopener">
                        <img class="hero-img" style="width: 100%; max-width: 520px; height: auto; margin: 10px auto 0; display:block; border:0; line-height:100%; text-decoration:none;"
                             src="https://i.imgur.com/W1o5L8A.png"
                             alt="mPWR smartphone with mPWR app suite" width="520">
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- body -->
              <table style="margin-top: 22px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="body" style="font-size: 16px;">
                      <p style="margin: 0 0 16px 0;">{{first_name}},</p>
                      <p style="margin: 0 0 16px 0;">
                        Thanks for taking a look at mPWR already — I wanted to follow up with a clearer view of how the model actually grows and why we’re confident in the unit economics.
                      </p>
                      <p style="margin: 0 0 16px 0;">
                        Up to now we’ve talked about the problem: billions of people are still underconnected and underbanked. The part that often gets missed is how you move from “great mission” to “repeatable, device-led distribution that throws off real revenue.”
                      </p>
                      <p style="margin: 0 0 10px 0; font-weight: bold;">Here’s the mPWR progression:</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Start with the device: affordable smartphone, delivered where traditional channels don’t reach.
                      </p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Add connectivity + embedded financial services (payments, microloans, insurance) directly on the device — no extra onboarding friction.
                      </p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Monetize in layers: device repayments → financial services usage → digital content and partner services.
                      </p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 16px 0;">
                        Scale through repeatable device distribution in high-growth emerging markets where adoption curves are still steep.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        That’s why this isn’t just “another fintech app.” It’s a distribution-first model. Because we own the device relationship, we can activate financial inclusion at the edge — where banks and mobile money haven’t fully solved it.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        The growth targets reflect that: 4M+ members and $300M+ in revenue projected by 2028, with breakeven in 2027 and a 26% EBITDA margin at maturity — driven by devices that keep generating services revenue.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        For investors, the attraction is that every device shipped isn’t a one-time sale — it becomes an onramp to recurring, higher-margin services and to an “inclusion economy” we can keep expanding.
                      </p>

                      <p style="margin: 0 0 10px 0;">What this unlocks for end users:</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Launch or grow a micro-business</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Access financial services for the first time</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Connect to education and opportunity</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Build credit and financial resilience</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 16px 0;">Fully participate in the digital economy</p>

                      <p style="margin: 0 0 16px 0;">
                        We’re opening this round to strategic investors who see the value of leading with access (device) and monetizing through services — especially in markets that are digitizing fast right now.
                      </p>

                      <!-- CTAs -->
                      <table style="margin: 18px auto 6px;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                        <tbody>
                          <tr>
                            <td style="padding: 0 6px 10px 6px;" align="center">
                              <a href="https://thempwr.com/contact-us/" target="_blank" rel="noopener" style="background-color:#7dd3fc; color:#0f172a; text-decoration:none; padding:10px 18px; border-radius:6px; font-weight:bold; display:inline-block;">
                                Schedule a Call
                              </a>
                            </td>
                            <td style="padding: 0 6px 10px 6px;" align="center">
                              <a href="https://invest.thempwr.com" target="_blank" rel="noopener" style="border:1px solid #7dd3fc; color:#7dd3fc; text-decoration:none; padding:10px 18px; border-radius:6px; font-weight:bold; display:inline-block;">
                                Review Investment Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p style="margin: 12px 0 6px 0; text-align: center; color: #7dd3fc; font-weight: bold;">
                        Investment opportunity now open
                      </p>

                      <!-- disclosures -->
                      <p style="margin: 0 0 14px 0;">
                        <strong>Regulation D Offering Disclosure</strong> This Regulation D, Rule 506(c) offering is presented through Andes Capital Group, LLC, which is a registered broker-dealer and member of FINRA. It is available exclusively to accredited investors via general solicitation. An accredited investor must meet specific income or net worth requirements as established by the Securities and Exchange Commission (SEC). Further details on qualifying as an accredited investor are available upon request and must be verified prior to investment.
                      </p>
                      <p style="margin: 0 0 14px 0;">
                        The securities offered herein have not been registered under the Securities Act of 1933 or any state securities laws. They are offered based on exemptions from registration provided under Regulation D of the same Act. This investment is speculative and illiquid. Investors should be prepared to hold their securities for an indefinite period.
                      </p>
                      <p style="margin: 0 0 18px 0;">
                        Andes Capital and its affiliates do not provide investment, legal, or tax advice. Prospective investors are not to construe the contents of this offering as legal, tax, or investment advice. Potential investors are urged to review all offering documentation thoroughly, including the private placement memorandum, subscription agreement, and any ancillary materials. These documents provide detailed information about the investment, associated risks, and specific terms of the offering.
                      </p>
                      <p style="margin: 0 0 4px 0; text-align: center;">
                        <a style="color: #93c5fd; text-decoration: underline;" href="https://thempwr.com/services/" target="_blank" rel="noopener">View Full Offering Details</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- footer -->
              <table style="margin-top: 18px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="hr" style="border-bottom:1px solid #0f172a; height:1px; line-height:1px; font-size:0;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 4px 20px 4px; text-align: center;">
                      <p class="muted" style="margin: 0 0 8px 0;">mPWR &bull; <a style="color: #94a3b8;" href="https://thempwr.com" target="_blank" rel="noopener">thempwr.com</a></p>
                      <p class="muted" style="margin: 0 0 12px 0;">
                        <a style="color: #64748b; text-decoration: underline;" href="{{unsubscribe_link}}" target="_blank" rel="noopener">Unsubscribe</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a style="color: #64748b; text-decoration: underline;" href="{{unsubscribe_link}}" target="_blank" rel="noopener">Manage preferences</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </td>
          </tr>
        </tbody>
      </table>
      <div style="height: 40px; line-height: 40px; font-size: 0;">&nbsp;</div>
    </div>
  </center>
</div>
```

If Imgur gives you a `.jpg` or `.webp` instead, just swap the extension in the `src=` and you’re good.

**Mike:** what do you mean ?

**GPT:** Good question — here’s what I meant:  

When you upload an image to **Imgur**, you’re usually given an **album page link** (like `https://imgur.com/a/W1o5L8A`). That’s a web page that displays the image, not the image itself.  

For the email HTML, though, you need a **direct image link** (ending in `.png`, `.jpg`, or `.webp`). That’s what email clients can load in an `<img src="...">` tag.  

Here’s the difference:  

| Type | Example | Works in HTML Email? |
|------|----------|---------------------|
| Album/Page URL | `https://imgur.com/a/W1o5L8A` | ❌ No — it’s a web page |
| Direct Image URL | `https://i.imgur.com/W1o5L8A.png` | ✅ Yes — image loads directly |

So if you right-click the image in your Imgur album → choose **“Open image in new tab”**, you’ll see a link that ends in `.png` (or `.jpg`). That’s the one you use in your HTML.

Would you like me to verify the exact direct URL for you and embed it correctly in the code?

**Mike:** https://i.imgur.com/KXByqaI.png

**GPT:** Perfect — that’s exactly the kind of direct image URL we need for an email.

Here’s your updated version with the new hero image swapped in:

```html
<div class="sales_loft_wrapper" style="font-family: sans-serif; font-size: 10pt;">
  <!-- preheader -->
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #0b1220;">
    A closer look at how mPWR scales device-led financial inclusion.
  </div>
  <center class="wrapper">
    <div class="webkit">
      <table class="outer green-border" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="padding: 28px 26px 0 26px;">
              <!-- header -->
              <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="center-sm" style="text-align: left;">
                      <a href="https://invest.thempwr.com" target="_blank" rel="noopener">
                        <img style="height: auto;" src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-logo-Inter-white-logo.png" alt="mPWR" width="100">
                      </a>
                    </td>
                    <td class="center-sm" style="text-align: right; font-size: 12px; color: #93c5fd;">&nbsp;</td>
                  </tr>
                </tbody>
              </table>

              <!-- hero with NEW image -->
              <table style="margin-top: 16px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="card" style="padding: 20px; text-align: center; background: linear-gradient(135deg, #0f172a 0%, #0b1220 100%);">
                      <div style="font-size: 12px; letter-spacing: 1.2px; color: #7dd3fc; font-weight: bold; text-transform: uppercase;">Investment opportunity now open</div>
                      <a href="https://invest.thempwr.com" target="_blank" rel="noopener">
                        <img class="hero-img"
                             style="width: 100%; max-width: 520px; height: auto; margin: 10px auto 0; display:block; border:0; line-height:100%; text-decoration:none;"
                             src="https://i.imgur.com/KXByqaI.png"
                             alt="mPWR smartphone with mPWR app suite"
                             width="520">
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- body -->
              <table style="margin-top: 22px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="body" style="font-size: 16px;">
                      <p style="margin: 0 0 16px 0;">{{first_name}},</p>
                      <p style="margin: 0 0 16px 0;">
                        Thanks for taking a look at mPWR already — I wanted to follow up with a clearer view of how the model actually grows and why we’re confident in the unit economics.
                      </p>
                      <p style="margin: 0 0 16px 0;">
                        Up to now we’ve talked about the problem: billions of people are still underconnected and underbanked. The part that often gets missed is how you move from “great mission” to “repeatable, device-led distribution that throws off real revenue.”
                      </p>
                      <p style="margin: 0 0 10px 0; font-weight: bold;">Here’s the mPWR progression:</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Start with the device: affordable smartphone, delivered where traditional channels don’t reach.
                      </p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Add connectivity + embedded financial services (payments, microloans, insurance) directly on the device — no extra onboarding friction.
                      </p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">
                        Monetize in layers: device repayments → financial services usage → digital content and partner services.
                      </p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 16px 0;">
                        Scale through repeatable device distribution in high-growth emerging markets where adoption curves are still steep.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        That’s why this isn’t just “another fintech app.” It’s a distribution-first model. Because we own the device relationship, we can activate financial inclusion at the edge — where banks and mobile money haven’t fully solved it.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        The growth targets reflect that: 4M+ members and $300M+ in revenue projected by 2028, with breakeven in 2027 and a 26% EBITDA margin at maturity — driven by devices that keep generating services revenue.
                      </p>

                      <p style="margin: 0 0 16px 0;">
                        For investors, the attraction is that every device shipped isn’t a one-time sale — it becomes an onramp to recurring, higher-margin services and to an “inclusion economy” we can keep expanding.
                      </p>

                      <p style="margin: 0 0 10px 0;">What this unlocks for end users:</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Launch or grow a micro-business</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Access financial services for the first time</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Connect to education and opportunity</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 12px 0;">Build credit and financial resilience</p>
                      <p style="margin: 0;">🗸</p>
                      <p style="margin: 0 0 16px 0;">Fully participate in the digital economy</p>

                      <p style="margin: 0 0 16px 0;">
                        We’re opening this round to strategic investors who see the value of leading with access (device) and monetizing through services — especially in markets that are digitizing fast right now.
                      </p>

                      <!-- CTAs -->
                      <table style="margin: 18px auto 6px;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                        <tbody>
                          <tr>
                            <td style="padding: 0 6px 10px 6px;" align="center">
                              <a href="https://thempwr.com/contact-us/" target="_blank" rel="noopener" style="background-color:#7dd3fc; color:#0f172a; text-decoration:none; padding:10px 18px; border-radius:6px; font-weight:bold; display:inline-block;">
                                Schedule a Call
                              </a>
                            </td>
                            <td style="padding: 0 6px 10px 6px;" align="center">
                              <a href="https://invest.thempwr.com" target="_blank" rel="noopener" style="border:1px solid #7dd3fc; color:#7dd3fc; text-decoration:none; padding:10px 18px; border-radius:6px; font-weight:bold; display:inline-block;">
                                Review Investment Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p style="margin: 12px 0 6px 0; text-align: center; color: #7dd3fc; font-weight: bold;">
                        Investment opportunity now open
                      </p>

                      <!-- disclosures -->
                      <p style="margin: 0 0 14px 0;">
                        <strong>Regulation D Offering Disclosure</strong> This Regulation D, Rule 506(c) offering is presented through Andes Capital Group, LLC, which is a registered broker-dealer and member of FINRA. It is available exclusively to accredited investors via general solicitation. An accredited investor must meet specific income or net worth requirements as established by the Securities and Exchange Commission (SEC). Further details on qualifying as an accredited investor are available upon request and must be verified prior to investment.
                      </p>
                      <p style="margin: 0 0 14px 0;">
                        The securities offered herein have not been registered under the Securities Act of 1933 or any state securities laws. They are offered based on exemptions from registration provided under Regulation D of the same Act. This investment is speculative and illiquid. Investors should be prepared to hold their securities for an indefinite period.
                      </p>
                      <p style="margin: 0 0 18px 0;">
                        Andes Capital and its affiliates do not provide investment, legal, or tax advice. Prospective investors are not to construe the contents of this offering as legal, tax, or investment advice. Potential investors are urged to review all offering documentation thoroughly, including the private placement memorandum, subscription agreement, and any ancillary materials. These documents provide detailed information about the investment, associated risks, and specific terms of the offering.
                      </p>
                      <p style="margin: 0 0 4px 0; text-align: center;">
                        <a style="color: #93c5fd; text-decoration: underline;" href="https://thempwr.com/services/" target="_blank" rel="noopener">View Full Offering Details</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- footer -->
              <table style="margin-top: 18px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="hr" style="border-bottom:1px solid #0f172a; height:1px; line-height:1px; font-size:0;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 4px 20px 4px; text-align: center;">
                      <p class="muted" style="margin: 0 0 8px 0;">mPWR &bull; <a style="color: #94a3b8;" href="https://thempwr.com" target="_blank" rel="noopener">thempwr.com</a></p>
                      <p class="muted" style="margin: 0 0 12px 0;">
                        <a style="color: #64748b; text-decoration: underline;" href="{{unsubscribe_link}}" target="_blank" rel="noopener">Unsubscribe</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a style="color: #64748b; text-decoration: underline;" href="{{unsubscribe_link}}" target="_blank" rel="noopener">Manage preferences</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </td>
          </tr>
        </tbody>
      </table>
      <div style="height: 40px; line-height: 40px; font-size: 0;">&nbsp;</div>
    </div>
  </center>
</div>
```

You can paste that straight into Salesloft now — the hero will pull from `https://i.imgur.com/KXByqaI.png`.

**Mike:** is imgur a solid platform to embed images into an email for max deliverability ?

**GPT:** Here’s a breakdown of using entity["brand", "Imgur", 0] (or similar free/consumer image hosts) for email embeds — what works, what to watch out for, and my recommendation for your scenario.

---

### ✅ What makes a good host for email-images  
To maximise deliverability and rendering in emails (especially via platforms like entity["software", "Salesloft", 0]), an image-host should satisfy:  
- A **stable, absolute HTTPS URL** (no insecure http; avoid URLs that redirect many times).  
- A fast and reliable server provider with good uptime.  
- A URL space that doesn’t look spammy (long, weird query parameters, shortened links).  
- The image file itself optimised for size (small KBs), correct dimensions, alt text, accessible.  
- Easy-to-serve from many client locations (CDN ideally) so loads quickly in many mail clients.  
- No expired links or access blocks when email loads — if the image fails to load, some clients flag it as low-quality.

In general: yes, hosting externally is accepted and widely used. Studies show **including one or two images** won’t kill deliverability if other practices are solid. citeturn0search1turn0search5turn0search6

---

### ⚠️ What to watch out for with Imgur (or other “free/consumer” hosts)  
Using Imgur *can* work — but there are risks compared to using your own domain/CDN:

- Imgur is a *public image-hosting community* service. It may have slower or variable uptime, or unexpected redirections, rate-limits, or governance changes.  
  (It is described as a “image hosting service” for general use). citeturn0search9  
- The URL might include parameters, or Imgur may serve from domains that some spam filters recognise less favourably.  
- When you host images on your own domain (or a brand-CDN), you control the reputation of the host domain. With Imgur, the domain reputation is separate and out of your control.  
- If the image host ever blocks hotlinking, changes the URL structure, or becomes slow/unavailable, your email header image may fail to load — a risk for presentation and potentially deliverability.  
- Some email clients or ISPs may penalize (or downgrade) images coming from general-purpose domains versus dedicated company domains. The effect may be small, but when you’re doing cold outreach or high-stakes investor emails, you want every signal in your favour.

---

### 🔍 My recommendation for your case  
Given your context (you’re sending a high-stakes investor outreach email through Salesloft, want best deliverability, brand credibility), here’s what I’d suggest:

- **Prefer hosting the image on your brand domain/CDN** (e.g., `https://thempwr.com/wp-content/uploads/...`) rather than Imgur. This gives you full control and brand alignment.  
- If you do use Imgur for now (which is okay for proofing/testing), ensure:  
  - The image file is small (optimised)  
  - The URL is absolute https: and working in all major clients  
  - You test rendering in Outlook, Gmail, mobile, webmail  
  - You monitor deliverability (opens, spam rates) to detect any issue early  
- For final production (especially investor-facing outreach), move to your own domain host if possible.
- Keep the email code and layout best practices strong: inline CSS, alt text, file size under ~150KB (preferably less for hero images), maintain good text-to-image ratio.  
- Ensure your sending domain has SPF, DKIM, DMARC properly set up (these are far more influential on deliverability than “which image host” you use). citeturn0search1turn0search6  

---

If you like, I can check the specific Imgur URL you provided (`https://i.imgur.com/KXByqaI.png`) from a deliverability/host-quality perspective (whether there are any redirects, how quickly it loads, etc.) so you can decide whether to keep it or move it.

**Mike:** yes, check.

**GPT:** It looks like I can’t directly inspect the Imgur link from here — I can only use URLs that I can open directly from your side.  

However, you can easily test whether it’s suitable for email delivery by checking these quick indicators yourself:

1. **Open it in a private/incognito browser tab.**  
   - ✅ If it opens immediately and shows only the image (no Imgur frame or login wall), it’s a *direct* link — that’s good.  
   - ❌ If it opens an Imgur page around the image (with title, comments, etc.), it’s not the direct file link and shouldn’t be used.

2. **Right-click the image → “Open image in new tab.”**  
   - Make sure the URL ends with `.png`, `.jpg`, or `.webp`.  
   - The one you shared (`https://i.imgur.com/KXByqaI.png`) fits that format perfectly — that’s what email clients expect.

3. **Run a quick check on load speed.**  
   - Paste the URL into [https://tools.pingdom.com](https://tools.pingdom.com) or [https://webpagetest.org](https://webpagetest.org).  
   - The total load time should be <300 ms and file size ideally under 150 KB for optimal email performance.

If you’d like, I can walk you through re-hosting that same image on your **mPWR WordPress media library** (https://thempwr.com/wp-admin/upload.php) so it loads from `thempwr.com` — that’s the most deliverability-safe solution for your campaign. Would you like me to outline the exact steps?

**Mike:** Yes

**GPT:** Excellent — here’s how to move your image from Imgur to your **mPWR WordPress media library** so it’s served from `thempwr.com`, which maximizes deliverability, brand trust, and control.  

---

## 🧭 Step-by-Step: Hosting the Email Image on thempwr.com

### **Step 1 — Log in to WordPress**
- Go to: [https://thempwr.com/wp-admin](https://thempwr.com/wp-admin)  
- Sign in using your admin credentials.

---

### **Step 2 — Open the Media Library**
- From the left sidebar, click **Media → Add New**.  
- You’ll see the **Upload New Media** screen.

---

### **Step 3 — Upload the new hero image**
- Download the file from Imgur (`https://i.imgur.com/KXByqaI.png`) to your computer first.  
  - Right-click → “Save image as…” → Save to desktop.  
- Then drag and drop that file into the WordPress upload box.  
- Wait for the upload to complete — you’ll see a green checkmark or thumbnail appear.

---

### **Step 4 — Copy the hosted image URL**
- Click the uploaded image in the Media Library.  
- On the right-hand side, look for the field labeled **File URL** (or “Copy URL to clipboard”).  
  - It will look like:  
    ```
    https://thempwr.com/wp-content/uploads/2025/11/mPWR-phones-apps-header.png
    ```
- Copy that full HTTPS link.

---

### **Step 5 — Update your HTML email**
Replace the Imgur link with your new hosted URL inside your `<img>` tag.  
Example:

```html
<img class="hero-img"
     style="width: 100%; max-width: 520px; height: auto; margin: 10px auto 0; display:block; border:0; line-height:100%; text-decoration:none;"
     src="https://thempwr.com/wp-content/uploads/2025/11/mPWR-phones-apps-header.png"
     alt="mPWR smartphone with app suite"
     width="520">
```

---

### **Step 6 — Test your email**
Before sending from Salesloft:
1. Send a test to your Gmail and Outlook accounts.  
2. Make sure the image loads instantly (no warnings or placeholders).  
3. Verify that the email passes deliverability tests in [mail-tester.com](https://www.mail-tester.com).  
   - You’ll get a spam score and see if the image or link hosts affect it.  

---

### ✅ **Why this matters**
- Hosting on `thempwr.com` boosts **domain alignment** and brand reputation.
- Emails with images hosted on the same domain as the sender score better in **DMARC and spam heuristics**.
- You’ll never lose image links, since you control the hosting and CDN caching.
- Tracking pixels or CRM integrations (like Salesloft) perform better with stable brand hosting.

---

Would you like me to update your full HTML now with a **placeholder WordPress URL**, so all you’ll need to do is paste your final upload path later?
