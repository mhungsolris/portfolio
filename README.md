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

## Verification

```powershell
npm.cmd run check
npm.cmd run build
```
