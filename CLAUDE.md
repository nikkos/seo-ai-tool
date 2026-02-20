# SEO Prompts — Claude Code Context

This repository contains a library of professional SEO prompts available as Claude Code slash commands.

## Available slash commands

Type `/help` to see all 50 available commands organized by category.

Quick reference by category:

- **Technical SEO:** `/robots-audit` `/sitemap-audit` `/schema-generator` `/canonical-audit` `/hreflang-audit` `/cwv-diagnosis` `/redirect-map` `/internal-links` `/server-logs` `/crawl-budget`
- **On-Page SEO:** `/title-rewrite` `/headings-audit` `/alt-text` `/content-brief` `/content-refresh` `/faq-generator` `/thin-content` `/meta-descriptions`
- **Content & Links:** `/keyword-research` `/write-blog` `/pillar-page` `/topic-cluster` `/content-calendar` `/comparison-article` `/outreach-email` `/brand-mention-pitch` `/press-release` `/backlink-article`
- **Local SEO:** `/gbp-description` `/local-landing` `/review-responses`
- **E-commerce:** `/product-description` `/category-page` `/product-schema`
- **Analytics:** `/ga4-traffic` `/ga4-conversions` `/ga4-content` `/gsc-indexing` `/gsc-links`
- **Reporting:** `/competitor-analysis` `/content-gap` `/gsc-performance` `/monthly-report` `/penalty-diagnosis`
- **GEO / LLM:** `/geo-audit` `/geo-rewrite` `/geo-entity` `/geo-visibility` `/geo-citations`
- **Agents:** `/agent-monthly-report`

## Brand voice

If a `brand-voice.md` file exists in the current directory, all content commands will read it automatically and match the brand's tone, vocabulary, and language. Always check for this file before running content prompts.

## Working with client data

For analytics and audit commands that need data files, the user will either paste data inline or reference local files. When a local file is mentioned, read it directly before running the analysis.

Data files are stored in the `data/` folder. Always check there first when the user references a file without a path. Supported file types include CSV exports, screenshots, log files, and any other client data.

Common file patterns:
- `data/gsc-performance*.csv` → use with `/gsc-performance`
- `data/ga4-organic*.csv` → use with `/ga4-traffic` or `/ga4-content`
- `data/screaming-frog*.csv` → use with `/internal-links` or `/canonical-audit`
- `data/server-logs*` or `data/*.log` → use with `/server-logs`
- `data/*.png` / `data/*.jpg` → screenshots (PageSpeed, GSC, GA4, etc.)

## Saving outputs

After running any command, save the output as a markdown file in the `outputs/` folder. Use a descriptive filename that includes the command name and date, for example:

- `outputs/gsc-performance-2026-02.md`
- `outputs/write-blog-email-marketing-2026-02.md`
- `outputs/robots-audit-acme-2026-02.md`

If the user specifies a filename, use that instead.

## Important notes

- Always review AI output before publishing, deploying, or sending to a client. LLMs can make mistakes — URLs, schema syntax, redirect rules, and facts may be incorrect.
- Never share client data (analytics exports, crawl reports, GSC data) with any AI tool without explicit client permission.
- Placeholders in output are marked `[PLACEHOLDER: description]` — search for `[` before treating any output as final.
