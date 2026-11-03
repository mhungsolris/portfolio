# Vu Manh Hung — Portfolio

Astro, TypeScript and Tailwind CSS. Run from this folder in PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Content and CV sources

The CV is private as of 2026-11-02. The site retains Contact, with no Resume section or CV links. Do not publish the PDF in `public/` or restore automatic synchronization.

Source paths are recorded in `portfolio.sources.json`:

- Approved content brief: `W:\Profile\doc_preview\PORTFOLIO_CONTENT_UPDATE.md`.
- Current CV: `W:\Profile\cv_data_engineer\output\pdf\Vu_Manh_Hung_Data_Engineer_CV.pdf`.

Read the content brief before editing `src/data/portfolio.ts`. Content updates require explicit adaptation and review; they are not blindly published from the Markdown file.

## Contact

Visitors can contact me directly through the email link or the approved GitHub and LinkedIn profile links. There is no contact form, `/api/contact` endpoint, or Telegram message delivery. Telegram environment variables are no longer used by this site.

Use the Astro framework preset on Vercel, `npm run build`, and the default output directory.

## Verification commands

```powershell
npm.cmd run check
npm.cmd run build
```
