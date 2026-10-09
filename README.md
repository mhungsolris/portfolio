# Vu Manh Hung — Portfolio

Astro, TypeScript and Tailwind CSS. Run from this folder in PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Content and CV sources

Source paths are recorded in `portfolio.sources.json`:

- Approved content brief: `W:\Profile\doc_preview\PORTFOLIO_CONTENT_UPDATE.md`.
- Current CV: `W:\Profile\cv_data_engineer\output\pdf\Vu_Manh_Hung_Data_Engineer_CV.pdf`.

Read the content brief before editing `src/data/portfolio.ts`. Content updates require explicit adaptation and review; they are not blindly published from the Markdown file.

Before starting the dev server or building, npm automatically synchronizes the source CV into `public/Data_Engineer_Vu_Manh_Hung_CV.pdf`. All existing CV links retain that URL.

After changing the source PDF while the dev server is already running:

```powershell
npm.cmd run sync:cv
```

The source folder is read-only to this portfolio workflow. CI/hosting uses the packaged PDF snapshot if the local Windows source is unavailable. Sync locally and commit the PDF before deploying a new CV. To require the external source:

```powershell
npm.cmd run sync:cv -- --required
```

`PORTFOLIO_CV_SOURCE` can override the configured path on another machine.

## Telegram contact form / Vercel

Local development reads `src/env/.env` (ignored by Git):

```dotenv
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_numeric_chat_id
```

Restart the dev server after changing these values. Secrets are read only by the
server API (`POST /api/contact`); never prefix them with `PUBLIC_`.

On Vercel, open **Project → Settings → Environment Variables** and add the same
two variables for Production and Preview if needed. Redeploy after setting them.
The local `.env` is not uploaded. Use the Astro framework preset, `npm run build`,
and the default output directory; the Vercel adapter generates the API function
while the portfolio page stays static.

The form validates input, uses a honeypot and limits attempts to five per IP per
10 minutes in each running function instance. This limiter resets with new
instances and is not a shared Vercel-wide limit. For higher spam traffic, add a
Vercel Firewall rate-limit rule for `/api/contact` or a verified CAPTCHA.

Telegram messages contain the visitor's name, email and message. Replies are
manual by email. Success is shown only after Telegram accepts the message;
network timeouts are not retried automatically to avoid duplicate notifications.

Dependency maintenance: Astro is updated to 7.3.8. The routing utility's
`path-to-regexp` dependency is pinned to patched 6.3.0 through an npm override.
`npm audit` still reports seven warnings in the Tailwind 3 build-tool dependency
tree (five high, two moderate); resolving them requires a separate dependency
migration and is not covered by the contact-form change.

## Verification commands

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run test:contact
```
