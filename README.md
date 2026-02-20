<div align="center">

# 🔍 seo-ai-tool

**50+ professional SEO prompt commands for Claude Code and Gemini CLI**

Install once. Use from any folder. Get expert-level SEO output in seconds.

[![npm version](https://img.shields.io/npm/v/seo-ai-tool?color=brightgreen&style=flat-square)](https://www.npmjs.com/package/seo-ai-tool)
[![npm downloads](https://img.shields.io/npm/dm/seo-ai-tool?color=blue&style=flat-square)](https://www.npmjs.com/package/seo-ai-tool)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16-brightgreen?style=flat-square)](https://nodejs.org)
[![Contributing](https://img.shields.io/badge/contributions-welcome-orange?style=flat-square)](CONTRIBUTING.md)

</div>

---

## What is this?

If you do SEO work and use Claude Code, this tool gives you a full library of ready-made commands for every SEO task — technical audits, content writing, keyword research, analytics analysis, local SEO, e-commerce, GEO/LLM optimization, and more.

Instead of writing prompts from scratch every time, you type `/write-blog`, `/robots-audit`, or `/keyword-research` directly inside Claude Code and get a professional, structured result immediately.

> **Never used Claude Code?** It's Anthropic's official AI assistant for the terminal. You work with AI directly from your command line — no browser needed. [Learn more →](https://www.npmjs.com/package/@anthropic-ai/claude-code)

---

## Requirements

| Tool | Install | Required? |
|---|---|---|
| **Node.js 16+** | [nodejs.org](https://nodejs.org) | Yes |
| **Claude Code** | `npm install -g @anthropic-ai/claude-code` | One or both |
| **Gemini CLI** | `npm install -g @google/gemini-cli` | One or both |

You need at least one AI CLI tool installed. If you have both, prompts are installed for both automatically.

Not sure what you have? Run `seo-ai-tool check` after installing.

---

## Installation

```bash
# 1. Install the package globally
npm install -g seo-ai-tool

# 2. Copy all prompts into Claude Code
seo-ai-tool install
```

That's it. All 50+ commands are installed for every AI CLI tool you have — Claude Code, Gemini CLI, or both.

---

## How to use a command

Start Claude Code or Gemini CLI in any project folder and type a slash command:

```bash
cd ~/projects/my-client

claude   # start Claude Code
# or
gemini   # start Gemini CLI
```

```
/write-blog primary keyword: "best crm for small business"

/robots-audit
→ paste your robots.txt when prompted

/keyword-research niche: "email marketing tools"
```

> If you run a command without input, the AI will tell you exactly what it needs. You never have to guess.

---

## Available commands

<details>
<summary><strong>🔧 Technical SEO (10 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/robots-audit` | Audit a robots.txt file for issues | Your robots.txt content |
| `/sitemap-audit` | Review an XML sitemap for errors and gaps | XML sitemap file or sitemap index |
| `/schema-generator` | Generate structured data markup (JSON-LD) | Content type (Article, Product, etc.) + content details |
| `/canonical-audit` | Find canonical tag issues | Crawl export or canonical tag data |
| `/hreflang-audit` | Check hreflang implementation for international SEO | Hreflang tags, HTTP headers, or sitemap |
| `/cwv-diagnosis` | Diagnose Core Web Vitals problems | PageSpeed Insights report or CrUX data |
| `/redirect-map` | Generate a redirect map for site migrations | Old URLs and new URLs (CSV or list) |
| `/internal-links` | Audit internal linking structure | Screaming Frog or crawler export |
| `/server-logs` | Analyze server log files for crawl insights | Apache/Nginx server log file |
| `/crawl-budget` | Identify crawl budget waste | Server logs or crawl data + robots.txt |

</details>

<details>
<summary><strong>📝 On-Page SEO (8 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/title-rewrite` | Rewrite page titles for better CTR and rankings | Current page titles, target keywords, URLs |
| `/headings-audit` | Review heading structure (H1–H6) | Page URL or heading structure + target keyword |
| `/alt-text` | Write optimized alt text for images | Image URLs or filenames + page context |
| `/content-brief` | Create a full SEO content brief | Target keyword, search intent, competitor URLs |
| `/content-refresh` | Update and improve existing content | Existing article content or URL + target keyword |
| `/faq-generator` | Generate FAQ sections with schema markup | Topic or keyword, PAA questions (optional) |
| `/thin-content` | Identify and fix thin content issues | Page URL + content + target keyword |
| `/meta-descriptions` | Write click-worthy meta descriptions | Page URLs, target keywords, current descriptions |

</details>

<details>
<summary><strong>✍️ Content & Link Building (10 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/keyword-research` | Full keyword research and clustering | Topic or niche, target audience, business goals |
| `/write-blog` | Write a complete, SEO-optimized blog post | Primary keyword, target audience, site URL |
| `/pillar-page` | Create a comprehensive pillar page | Head keyword, topic focus, cluster articles list |
| `/topic-cluster` | Plan a full topic cluster strategy | Head keyword, topic focus, audience level |
| `/content-calendar` | Build an SEO content calendar | Primary keywords, goals, content types, time period |
| `/comparison-article` | Write a comparison/versus article | Two products/services to compare, pricing info |
| `/outreach-email` | Write link building outreach emails | Outreach type, target audience, your content/URL |
| `/brand-mention-pitch` | Turn unlinked brand mentions into backlinks | Publication URL, article URL, brand name, your URL |
| `/press-release` | Write an SEO-friendly press release | Announcement details, company name, newsworthy event |
| `/backlink-article` | Write content designed to earn backlinks | Target keyword, landing page URL, topic context |

</details>

<details>
<summary><strong>📍 Local SEO (3 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/gbp-description` | Write a Google Business Profile description | Business name, location, services, differentiators |
| `/local-landing` | Create a local landing page | Service type, city/location, business name |
| `/review-responses` | Write professional responses to reviews | Business name, service area, industry |

</details>

<details>
<summary><strong>🛒 E-commerce SEO (3 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/product-description` | Write SEO-optimized product descriptions | Product name, features, specs, target audience |
| `/category-page` | Optimize category page content | Category name, brand name, product range |
| `/product-schema` | Generate product structured data | Product name, image, price, ratings, SKU/GTIN |

</details>

<details>
<summary><strong>📊 Analytics (6 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/ga4-traffic` | Analyze GA4 organic traffic data | GA4 CSV export (organic sessions, devices, geography) |
| `/ga4-conversions` | Review GA4 conversion performance | GA4 CSV export with conversions and landing pages |
| `/ga4-content` | Analyze GA4 content performance | GA4 CSV export with landing pages and engagement metrics |
| `/gsc-indexing` | Diagnose Google Search Console indexing issues | GSC Coverage report data |
| `/gsc-links` | Analyze GSC link data | GSC Links report data |
| `/gsc-performance` | Full GSC performance analysis | GSC export (queries, pages, clicks, impressions, CTR) |

</details>

<details>
<summary><strong>📈 Reporting & Analysis (4 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/competitor-analysis` | Analyze a competitor's SEO strategy | Competitor URLs + keyword data |
| `/content-gap` | Find content gaps vs competitors | Your site data + competitor data + GSC/Ahrefs export |
| `/monthly-report` | Generate a monthly SEO report | GA4 data, GSC data, reporting period, work completed |
| `/penalty-diagnosis` | Diagnose a potential Google penalty | Traffic drop date, GA4/GSC data, timeline |

</details>

<details>
<summary><strong>🤖 GEO / LLM Optimization (5 commands)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/geo-audit` | Audit content for AI/LLM visibility | Page URL or content + target keyword |
| `/geo-rewrite` | Rewrite content to appear in AI answers | Existing content or URL + target keyword |
| `/geo-entity` | Build entity authority for LLM recognition | Brand/product/person name + key facts |
| `/geo-visibility` | Improve visibility in generative search | Brand name, product/service category, target keywords |
| `/geo-citations` | Build citation-worthy content | Target topics/keywords, content type focus |

</details>

<details>
<summary><strong>⚡ Agents (1 command)</strong></summary>

| Command | What it does | What to provide |
|---|---|---|
| `/agent-monthly-report` | Autonomous agent that generates a full monthly SEO report | GA4 CSV, GSC CSV, site URL, reporting period |

</details>

---

## Real-world example

> You are an SEO consultant with two clients. Here's the full workflow from zero to running commands.

### Folder structure

```
~/projects/
├── project1/                      ← Client 1: an e-commerce store
│   ├── brand-voice.md
│   ├── data/
│   │   ├── gsc-performance.csv
│   │   ├── ga4-organic.csv
│   │   └── screaming-frog-export.csv
│   └── outputs/
└── project2/                      ← Client 2: a local service business
    ├── brand-voice.md
    ├── data/
    │   └── gsc-performance.csv
    └── outputs/
```

---

### Step 1 — Install globally (once, ever)

```bash
npm install -g seo-ai-tool
seo-ai-tool install
```

All 50+ commands are now available everywhere on your machine.

---

### Step 2 — Set up project1

```bash
cd ~/projects/project1
seo-ai-tool init
```

This creates a `.claude/commands/` folder inside `project1`. Any prompt you place here overrides the global version — for this project only.

---

### Step 3 — Add your client data

Export files from GSC, GA4, or Screaming Frog and drop them into `data/`:

```
project1/
└── data/
    ├── gsc-performance.csv        ← from Google Search Console
    ├── ga4-organic.csv            ← from GA4 → Acquisition → Organic
    └── screaming-frog-export.csv  ← from Screaming Frog → Internal tab
```

---

### Step 4 — Add a brand voice file

Create `brand-voice.md` in the project root:

```markdown
# Brand Voice — Project1

- Tone: friendly, confident, never salesy
- Audience: small business owners aged 30–50
- Avoid: jargon, passive voice, filler phrases like "In conclusion"
- Always use: "you" to address the reader directly
- Example: "Here's exactly what you need to do to rank higher this month."
```

> All content commands will read this file automatically and match the tone.

---

### Step 5 — Start Claude Code and run commands

```bash
cd ~/projects/project1
claude
```

**Analyze GSC data:**
```
/gsc-performance data/gsc-performance.csv
```

**Write a blog post (brand voice applied automatically):**
```
/write-blog primary keyword: "best running shoes for flat feet"
```

**Audit internal links:**
```
/internal-links data/screaming-frog-export.csv
```

**Analyze organic traffic:**
```
/ga4-traffic data/ga4-organic.csv
```

---

### Step 6 — Save your outputs

After each command, ask Claude to save the result:

```
Save the output to outputs/gsc-performance-2026-02.md
```

Your project folder ends up looking like this:

```
project1/
├── brand-voice.md
├── .claude/
│   └── commands/                  ← customized prompts for this client
├── data/
│   ├── gsc-performance.csv
│   ├── ga4-organic.csv
│   └── screaming-frog-export.csv
└── outputs/
    ├── gsc-performance-2026-02.md
    ├── write-blog-running-shoes-2026-02.md
    └── internal-links-audit-2026-02.md
```

---

### Step 7 — Customize a prompt for this client (optional)

```bash
# Copy the global prompt into the project
cp ~/.claude/commands/write-blog.md ~/projects/project1/.claude/commands/write-blog.md

# Edit it to add client-specific rules
```

`/write-blog` now behaves differently in `project1` but stays unchanged everywhere else. When you switch to `project2`, the global version is used — until you set up overrides there too.

---

## Customize prompts per project

Both Claude Code and Gemini CLI read commands in this priority order:

```
.claude/commands/write-blog.md     ← local version (wins if it exists)
~/.claude/commands/write-blog.md   ← global version (fallback)

.gemini/commands/write-blog.md     ← local version (wins if it exists)
~/.gemini/commands/write-blog.md   ← global version (fallback)
```

Commit `.claude/commands/` and `.gemini/commands/` to git and your whole team automatically shares the same customized prompts.

---

## CLI reference

| Command | Description |
|---|---|
| `seo-ai-tool install` | Copy all prompts to `~/.claude/commands/` |
| `seo-ai-tool update` | Update global prompts to the latest version |
| `seo-ai-tool init` | Create `.claude/commands/` in the current project |
| `seo-ai-tool list` | List all prompts by category |
| `seo-ai-tool check` | Check if Claude Code and Gemini CLI are installed |
| `seo-ai-tool uninstall` | Remove all prompts from `~/.claude/commands/` |
| `seo-ai-tool help` | Show help |

---

## Updating

```bash
npm update -g seo-ai-tool
seo-ai-tool update
```

---

## ⚠️ Disclaimer

**1. Client data & privacy**
Before uploading any client data (Google Search Console exports, GA4 reports, crawl files, server logs, or any other analytics) to an AI tool, you must have **explicit permission from your client**. Many clients have data privacy policies, NDAs, or GDPR obligations that restrict how their data can be shared with third-party services — including AI platforms. When in doubt, anonymize the data or ask your client before proceeding.

**2. Always review AI output before using it**
The output generated by these commands is a starting point, not a final deliverable. AI models can make mistakes — URLs may be incorrect, schema syntax may contain errors, redirect rules may need adjusting, facts may be outdated or hallucinated. **Never publish, deploy, or send AI-generated output to a client without reviewing it yourself first.** You are responsible for the final work.

---

## Contributing

Contributions are welcome — new commands, prompt improvements, bug reports, or documentation fixes.

Read the [Contributing Guide](CONTRIBUTING.md) to get started.

---

## License

MIT
