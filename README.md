<div align="center">

# 🔍 seo-ai-tool

**50+ professional SEO prompt commands for Claude Code**

Install once. Use from any folder. Get expert-level SEO output in seconds.

[![npm version](https://img.shields.io/npm/v/seo-ai-tool?color=brightgreen&style=flat-square)](https://www.npmjs.com/package/seo-ai-tool)
[![npm downloads](https://img.shields.io/npm/dm/seo-ai-tool?color=blue&style=flat-square)](https://www.npmjs.com/package/seo-ai-tool)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16-brightgreen?style=flat-square)](https://nodejs.org)

</div>

---

## What is this?

If you do SEO work and use Claude Code, this tool gives you a full library of ready-made commands for every SEO task — technical audits, content writing, keyword research, analytics analysis, local SEO, e-commerce, GEO/LLM optimization, and more.

Instead of writing prompts from scratch every time, you type `/write-blog`, `/robots-audit`, or `/keyword-research` directly inside Claude Code and get a professional, structured result immediately.

> **Never used Claude Code?** It's Anthropic's official AI assistant for the terminal. You work with AI directly from your command line — no browser needed. [Learn more →](https://www.npmjs.com/package/@anthropic-ai/claude-code)

---

## Requirements

| Tool | Install |
|---|---|
| **Node.js 16+** | [nodejs.org](https://nodejs.org) |
| **Claude Code** | `npm install -g @anthropic-ai/claude-code` |

Not sure if you have both? Run `seo-ai-tool check` after installing.

---

## Installation

```bash
# 1. Install the package globally
npm install -g seo-ai-tool

# 2. Copy all prompts into Claude Code
seo-ai-tool install
```

That's it. All 50+ commands are now available inside Claude Code from any folder on your computer.

---

## How to use a command

Start Claude Code in any project folder and type a slash command:

```bash
cd ~/projects/my-client
claude
```

```
/write-blog primary keyword: "best crm for small business"

/robots-audit
→ paste your robots.txt when prompted

/keyword-research niche: "email marketing tools"
```

> If you run a command without input, Claude will tell you exactly what it needs. You never have to guess.

---

## Available commands

<details>
<summary><strong>🔧 Technical SEO (10 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/robots-audit` | Audit a robots.txt file for issues |
| `/sitemap-audit` | Review an XML sitemap for errors and gaps |
| `/schema-generator` | Generate structured data markup (JSON-LD) |
| `/canonical-audit` | Find canonical tag issues |
| `/hreflang-audit` | Check hreflang implementation for international SEO |
| `/cwv-diagnosis` | Diagnose Core Web Vitals problems |
| `/redirect-map` | Generate a redirect map for site migrations |
| `/internal-links` | Audit internal linking structure |
| `/server-logs` | Analyze server log files for crawl insights |
| `/crawl-budget` | Identify crawl budget waste |

</details>

<details>
<summary><strong>📝 On-Page SEO (8 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/title-rewrite` | Rewrite page titles for better CTR and rankings |
| `/headings-audit` | Review heading structure (H1–H6) |
| `/alt-text` | Write optimized alt text for images |
| `/content-brief` | Create a full SEO content brief |
| `/content-refresh` | Update and improve existing content |
| `/faq-generator` | Generate FAQ sections with schema markup |
| `/thin-content` | Identify and fix thin content issues |
| `/meta-descriptions` | Write click-worthy meta descriptions |

</details>

<details>
<summary><strong>✍️ Content & Link Building (10 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/keyword-research` | Full keyword research and clustering |
| `/write-blog` | Write a complete, SEO-optimized blog post |
| `/pillar-page` | Create a comprehensive pillar page |
| `/topic-cluster` | Plan a full topic cluster strategy |
| `/content-calendar` | Build an SEO content calendar |
| `/comparison-article` | Write a comparison/versus article |
| `/outreach-email` | Write link building outreach emails |
| `/brand-mention-pitch` | Turn unlinked brand mentions into backlinks |
| `/press-release` | Write an SEO-friendly press release |
| `/backlink-article` | Write content designed to earn backlinks |

</details>

<details>
<summary><strong>📍 Local SEO (3 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/gbp-description` | Write a Google Business Profile description |
| `/local-landing` | Create a local landing page |
| `/review-responses` | Write professional responses to reviews |

</details>

<details>
<summary><strong>🛒 E-commerce SEO (3 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/product-description` | Write SEO-optimized product descriptions |
| `/category-page` | Optimize category page content |
| `/product-schema` | Generate product structured data |

</details>

<details>
<summary><strong>📊 Analytics (6 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/ga4-traffic` | Analyze GA4 organic traffic data |
| `/ga4-conversions` | Review GA4 conversion performance |
| `/ga4-content` | Analyze GA4 content performance |
| `/gsc-indexing` | Diagnose Google Search Console indexing issues |
| `/gsc-links` | Analyze GSC link data |
| `/gsc-performance` | Full GSC performance analysis |

</details>

<details>
<summary><strong>📈 Reporting & Analysis (4 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/competitor-analysis` | Analyze a competitor's SEO strategy |
| `/content-gap` | Find content gaps vs competitors |
| `/monthly-report` | Generate a monthly SEO report |
| `/penalty-diagnosis` | Diagnose a potential Google penalty |

</details>

<details>
<summary><strong>🤖 GEO / LLM Optimization (5 commands)</strong></summary>

| Command | What it does |
|---|---|
| `/geo-audit` | Audit content for AI/LLM visibility |
| `/geo-rewrite` | Rewrite content to appear in AI answers |
| `/geo-entity` | Build entity authority for LLM recognition |
| `/geo-visibility` | Improve visibility in generative search |
| `/geo-citations` | Build citation-worthy content |

</details>

<details>
<summary><strong>⚡ Agents (1 command)</strong></summary>

| Command | What it does |
|---|---|
| `/agent-monthly-report` | Autonomous agent that generates a full monthly SEO report |

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

Claude Code reads commands in this priority order:

```
.claude/commands/write-blog.md     ← local version (wins if it exists)
~/.claude/commands/write-blog.md   ← global version (fallback)
```

Commit `.claude/commands/` to git and your whole team automatically shares the same customized prompts.

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

## License

MIT
