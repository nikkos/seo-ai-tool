# 🔍 AI SEO Skills

A library of professional SEO prompts that run as slash commands in Claude Code, or as reference files in Gemini CLI, ChatGPT, Cursor, and Windsurf.

Instead of writing prompts from scratch, you type a command and a structured expert prompt runs instantly with your context. Outputs are saved automatically.

---

## 📋 Table of Contents

- [Pick your tool](#-pick-your-tool)
- [Quick start](#-quick-start)
  - [Claude Code](#1-claude-code-recommended)
  - [Gemini CLI](#2-gemini-cli)
  - [ChatGPT](#3-chatgpt)
  - [Cursor, Windsurf & Antigravity](#4-cursor-windsurf--antigravity)
  - [MCP Servers](#5-mcp-servers-advanced)
- [Brand voice](#-brand-voice)
- [Working with data](#-working-with-data)
- [Prompt workflows](#-prompt-workflows)
- [Prompt Reference](#-prompt-reference)
- [Adding a New Skill](#-adding-a-new-skill)
- [Contributing](#-contributing)
- [Disclaimer](#️-disclaimer)

---

## 🛠 Pick your tool

| Tool | Best for | What to install |
|---|---|---|
| **Claude Code** | Fastest workflow — slash commands, auto-saves output | [Claude Code](https://docs.anthropic.com/claude-code) |
| **Gemini CLI** | Works great with the Read approach | [Gemini CLI](https://github.com/google-gemini/gemini-cli) |
| **ChatGPT** | No install — use inside a ChatGPT Project | Nothing |
| **Cursor** | AI code editor with file referencing | [Cursor](https://cursor.com) |
| **Windsurf** | AI code editor with Cascade assistant | [Windsurf](https://windsurf.com) |
| **Antigravity** | IDE-style interface | [Antigravity](https://antigravity.google) |

---

## 🚀 Quick start

### 1. Claude Code (recommended)

**Step 1 — Install Claude Code:**

```bash
npm install -g @anthropic-ai/claude-code
```

**Step 2 — Clone this repo:**

```bash
git clone https://github.com/nikkos/ai-seo-skills.git
cd ai-seo-skills
```

**Step 3 — Run the global setup script (one time only):**

```bash
./setup.sh
```

This symlinks the slash commands globally and installs `CLAUDE.md` so Claude has full context from any folder on your machine.

**Step 4 — Create a client project:**

```bash
./new-client.sh acme-corp
# or specify a path:
./new-client.sh acme-corp ~/projects
```

This creates a ready-to-use folder:

```
acme-corp/
├── brand-voice.md   ← fill this in
├── data/            ← drop CSV exports, screenshots, logs here
└── outputs/         ← AI outputs saved here automatically
```

**Step 5 — Fill in `brand-voice.md`, then start working:**

```bash
cd acme-corp
claude
```

**Run a command:**

```
/robots-audit [paste robots.txt here]

/write-blog primary keyword: "project management software", audience: SMB owners, site: acme.com

/gsc-performance GSC data in data/gsc-queries.csv. Site: acme.com. Last 3 months vs prior 3.
```

**See all available commands:**
```
/help
```

**All commands at a glance:**

| Category | Commands |
|---|---|
| Technical SEO | `/robots-audit` `/sitemap-audit` `/schema-generator` `/canonical-audit` `/hreflang-audit` `/cwv-diagnosis` `/redirect-map` `/internal-links` `/server-logs` `/crawl-budget` |
| On-Page SEO | `/title-rewrite` `/headings-audit` `/alt-text` `/content-brief` `/content-refresh` `/faq-generator` `/thin-content` `/meta-descriptions` |
| Content & Links | `/keyword-research` `/write-blog` `/pillar-page` `/topic-cluster` `/content-calendar` `/comparison-article` `/outreach-email` `/brand-mention-pitch` `/press-release` `/backlink-article` |
| Local SEO | `/gbp-description` `/local-landing` `/review-responses` |
| E-commerce | `/product-description` `/category-page` `/product-schema` |
| Analytics | `/ga4-traffic` `/ga4-conversions` `/ga4-content` `/gsc-indexing` `/gsc-links` |
| Reporting | `/competitor-analysis` `/content-gap` `/gsc-performance` `/monthly-report` `/penalty-diagnosis` |
| GEO / LLM | `/geo-audit` `/geo-rewrite` `/geo-entity` `/geo-visibility` `/geo-citations` |

---

### 2. Gemini CLI

**Install Gemini CLI:**

```bash
npm install -g @google/gemini-cli
```

**Clone this repo and open it:**

```bash
git clone https://github.com/nikkos/ai-seo-skills.git
cd ai-seo-skills
gemini
```

Gemini reads `GEMINI.md` automatically and knows all available skills.

**Run a prompt using the Read approach:**

```
Read skills/technical-seo/robots-txt-audit.md and follow its instructions.
[paste robots.txt here]
```

```
Read skills/analytics/ga4-organic-traffic-analysis.md and follow its instructions.
The GA4 data is in data/ga4-export.csv. Site: acme.com. Period: last 3 months vs prior 3 months.
```

With brand voice:
```
Read brand-voice.md and then read skills/content-link-building/write-blog-post.md and follow its instructions.
Primary keyword: "email marketing", site: acme.com
```

---

### 3. ChatGPT

No installation needed. Use inside a **ChatGPT Project**.

**One-time setup:**

1. Create a new ChatGPT Project
2. Go to **Instructions** and paste the contents of `chatgpt.md` from this repo
3. Upload the skill files you need from `skills/` into the project **Knowledge**
4. Optionally upload `brand-voice.md` so tone and language apply automatically

**Run a prompt:**

```
Use the robots-txt-audit skill and audit this robots.txt:
[paste robots.txt here]
```

```
Use the ga4-organic-traffic-analysis skill.
The GA4 data is attached. Site: acme.com. Period: last 3 months vs prior 3 months.
```

For data files, attach the CSV directly to the chat message.

---

### 4. Cursor, Windsurf & Antigravity

Open the repo as your workspace and reference skill files directly in the chat panel.

**[Cursor](https://cursor.com)** — use the chat (`Cmd+L`):
```
@skills/technical-seo/robots-txt-audit.md follow the instructions in this file.
[paste robots.txt here]
```

**[Windsurf](https://windsurf.com)** — use Cascade:
```
Read skills/reporting-analysis/google-search-console-analysis.md and follow its instructions.
GSC data: data/gsc-queries.csv. Site: acme.com. Period: last 3 months.
```

**[Antigravity](https://antigravity.google):**
```
Read brand-voice.md and then read skills/content-link-building/write-blog-post.md and follow its instructions.
Primary keyword: "email marketing", site: acme.com
```

---

### 5. MCP Servers (advanced)

MCP servers give Claude live access to GA4, Search Console, web pages, and your local files — no CSV exports needed.

**Recommended for SEO:**

| Server | Enables |
|---|---|
| `server-fetch` | Fetch live pages, check status codes |
| `server-filesystem` | Read/write local files |
| `analytics-mcp` | Pull GA4 data live via API |
| `mcp-server-gsc` | Pull GSC data live via API |

Copy `mcp-example.json` to `mcp.json`, fill in your credentials, and you're set.

> ⚠️ **Token warning:** Analytics MCPs can pull large amounts of data fast. Always specify date range, metrics, and dimensions. Instead of "pull all my GA4 data", say:
> ```
> Pull organic traffic by landing page for acme.com from 2026-01-01 to 2026-01-31.
> ```

<details>
<summary>Full MCP configuration example</summary>

```json
{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/ai-seo-skills"]
    },
    "google-analytics": {
      "command": "pipx",
      "args": ["run", "analytics-mcp"],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/service-account-key.json",
        "GOOGLE_PROJECT_ID": "YOUR_GOOGLE_CLOUD_PROJECT_ID"
      }
    },
    "google-search-console": {
      "command": "npx",
      "args": ["-y", "mcp-server-gsc"],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/service-account-key.json"
      }
    }
  }
}
```

> **Note:** `analytics-mcp` requires Python 3.10+ and `pipx`. `mcp-server-gsc` requires Node.js 18+.

</details>

---

## 🎨 Brand voice

Fill in `brand-voice.md` with your client's tone, vocabulary, and language. All content prompts read it automatically.

The most important field is **Content language** — set it to Greek, Spanish, French, or any language and every prompt outputs in that language without any extra instruction.

Copy `brand-voice.md` into your client folder and fill it in before running content prompts. The file includes examples to guide you.

---

## 📂 Working with data

Drop client data files into the `data/` folder before running analytics or audit prompts.

| Source | How to export |
|---|---|
| Google Search Console | Performance → Export CSV (Queries and Pages tabs) |
| GA4 | Reports → Acquisition → Landing page → Export CSV |
| Screaming Frog | File → Export → choose the relevant tab |
| Ahrefs / Semrush | Export button on any report |

Common patterns:

| File | Use with |
|---|---|
| `data/gsc-*.csv` | `/gsc-performance` · `/gsc-indexing` |
| `data/ga4-*.csv` | `/ga4-traffic` · `/ga4-content` · `/ga4-conversions` |
| `data/screaming-frog-*.csv` | `/internal-links` · `/canonical-audit` |
| `data/server-logs*` | `/server-logs` · `/crawl-budget` |
| `data/*.png` / `data/*.jpg` | Screenshots for any visual audit |

Outputs are saved automatically to `outputs/` with a descriptive filename after every command.

---

## 🔗 Prompt workflows

Prompts are designed to feed into each other.

**Content:**
```
/keyword-research → /topic-cluster → /content-brief → /pillar-page → /faq-generator → /schema-generator
```

**Analytics:**
```
/ga4-traffic → /ga4-content → /content-refresh (declining) · /thin-content (low quality)
```

**Audit:**
```
/gsc-indexing + /gsc-links → /internal-links → /monthly-report
```

**GEO:**
```
/geo-visibility → /geo-citations → /geo-entity → /geo-rewrite → /geo-audit
```

---

## 📂 Prompt Reference

### ⚙️ Technical SEO

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `robots-txt-audit.md` | Audits robots.txt for blocked resources, syntax errors, and missing sitemap directives. Returns severity-labeled findings and a corrected robots.txt. | `yoursite.com/robots.txt` | `/robots-audit` |
| `xml-sitemap-audit.md` | Audits XML sitemaps for non-200 URLs, noindex conflicts, and structural issues. Produces a health score and corrected XML. | `yoursite.com/sitemap.xml` · GSC Coverage report | `/sitemap-audit` |
| `schema-markup-generator.md` | Generates valid JSON-LD for any schema type with a rich result eligibility checklist. | Page content (no export needed) | `/schema-generator` |
| `canonical-tags-audit.md` | Audits canonical tags for chains, conflicts, and HTTP/HTTPS mismatches. | Screaming Frog · Sitebulb · Ahrefs | `/canonical-audit` |
| `hreflang-audit.md` | Audits hreflang annotations for missing return links and incorrect BCP 47 codes. | Screaming Frog (Hreflang tab) · Sitebulb | `/hreflang-audit` |
| `core-web-vitals-diagnosis.md` | Diagnoses LCP, INP, and CLS failures with root-cause analysis and a developer handoff checklist. | PageSpeed Insights · GSC Core Web Vitals | `/cwv-diagnosis` |
| `redirect-map-generator.md` | Generates a redirect map CSV and server config rules (Apache, Nginx, Cloudflare). | Migration spreadsheet · Screaming Frog | `/redirect-map` |
| `internal-linking-audit.md` | Audits internal link structure for orphaned pages, poor anchor text, and topic cluster gaps. | Screaming Frog · Sitebulb · Ahrefs | `/internal-links` |
| `check-server-app-logs.md` | Analyzes server logs for 404s, 5xx errors, redirect chains, and Googlebot anomalies. | Nginx · Apache · Cloudflare logs | `/server-logs` |
| `crawl-budget-analysis.md` | Identifies crawl waste (faceted URLs, duplicate parameters, thin pages) and undercrawled priority pages. | Server log export · Screaming Frog · GSC Coverage | `/crawl-budget` |

---

### 📄 On-Page SEO

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `title-tag-rewrite.md` | Rewrites title tags for CTR and keyword placement. Two variants per title with character counts. | Screaming Frog · GSC Performance | `/title-rewrite` |
| `heading-structure-audit.md` | Audits H1–H3 structure and outputs a fully optimized heading outline. | Screaming Frog (H1/H2 reports) · view-source | `/headings-audit` |
| `image-alt-text-generator.md` | Generates SEO-optimized, accessibility-compliant alt text. | Screaming Frog (Images tab) · Sitebulb | `/alt-text` |
| `content-brief.md` | Creates a writer-ready content brief: intent, heading outline, subtopics, SEO specs, and internal linking plan. | Ahrefs · Semrush · Google SERP | `/content-brief` |
| `content-refresh.md` | Section-by-section refresh plan (KEEP / UPDATE / EXPAND / CUT / ADD NEW) with rewritten sections. | Existing article (paste directly) · GSC Performance | `/content-refresh` |
| `faq-section-generator.md` | Generates a PAA-targeted FAQ section with 6–12 Q&As and FAQPage JSON-LD. | Google PAA · AlsoAsked · AnswerThePublic | `/faq-generator` |
| `thin-content-rewrite.md` | Diagnoses why a page is thin and rewrites it into comprehensive, intent-matched content. | Screaming Frog (word count) · GSC low-traffic pages | `/thin-content` |
| `write-meta-descriptions.md` | Generates click-optimized meta descriptions (150–160 characters) with keyword and CTA. | Screaming Frog · GSC | `/meta-descriptions` |

---

### ✍️ Content & Link Building

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `keyword-research.md` | Full keyword research: tiered keywords, intent classification, difficulty, and cluster suggestions. | Ahrefs · Semrush · Google Keyword Planner | `/keyword-research` |
| `write-blog-post.md` | 1,200–1,800 word SEO blog post with heading hierarchy, keyword placement, and meta elements. | Brief / keyword (no export needed) | `/write-blog` |
| `pillar-page-writer.md` | 2,500–4,000 word pillar page with table of contents, cluster link placeholders, and FAQ. | Ahrefs · Semrush · SERP research | `/pillar-page` |
| `topic-cluster-planner.md` | Complete topic cluster: pillar + 8–15 cluster articles with keyword targets and internal linking map. | Ahrefs · Semrush · Google SERP | `/topic-cluster` |
| `content-calendar.md` | SEO content calendar in markdown table format with keyword targets and topic cluster mapping. | Ahrefs · Semrush · existing content audit | `/content-calendar` |
| `comparison-article.md` | 1,500–2,500 word commercial comparison article with head-to-head table and verdict section. | G2 · Capterra · product/pricing pages | `/comparison-article` |
| `outreach-email-template.md` | Full outreach sequence (initial + 2 follow-ups) for 6 link building campaign types. | Hunter.io · LinkedIn · Ahrefs | `/outreach-email` |
| `unlinked-brand-mention-pitch.md` | High-conversion pitch to turn unlinked brand mentions into backlinks. | Google Alerts · Ahrefs Mentions · Brand24 | `/brand-mention-pitch` |
| `press-release.md` | 400–600 word AP-style press release for launches, funding, partnerships, or events. | Internal company data | `/press-release` |
| `write-a-backlink-article.md` | 500–700 word editorial article with a natural backlink placement using the exact anchor text. | Keyword + target URL | `/backlink-article` |

---

### 📍 Local SEO

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `google-business-profile-description.md` | 3 GBP description variants optimized for local keywords and Google's 750-character limit. | Google Business Profile dashboard | `/gbp-description` |
| `local-landing-page-writer.md` | Complete local landing page (600–1,000 words) for a service + city with FAQ and LocalBusiness schema. | Internal business data | `/local-landing` |
| `review-response-templates.md` | 12 review response templates covering 5-star, 3-star, and 1–2 star reviews. | Google Business Profile · Yelp | `/review-responses` |

---

### 🛒 E-commerce SEO

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `product-description-writer.md` | Product descriptions in three formats (short, long, bullets) plus title tag and meta description. | Product database · spec sheets | `/product-description` |
| `category-page-content-writer.md` | Above-fold intro and below-fold buyer's guide content for category pages. | Internal product data · competitor pages | `/category-page` |
| `product-schema-generator.md` | Complete Product JSON-LD with Offer, AggregateRating, and Review nesting. | Product database · pricing system | `/product-schema` |

---

### 📊 Analytics & Data

#### Google Analytics 4

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `ga4-organic-traffic-analysis.md` | GA4 organic traffic trends, landing page engagement quality, and hidden gem pages. | GA4 → Acquisition → Landing page → Export CSV | `/ga4-traffic` |
| `ga4-conversion-analysis.md` | Which organic pages drive the most conversions and where conversion leaks occur. | GA4 → Conversions (filter: Organic Search) → Export CSV | `/ga4-conversions` |
| `ga4-content-performance.md` | Four-quadrant content matrix (traffic × engagement) with refresh and consolidation recommendations. | GA4 → Engagement → Pages and Screens → Export CSV | `/ga4-content` |

#### Google Search Console

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `gsc-indexing-audit.md` | Diagnoses every GSC Coverage exclusion reason with fixes and an indexation health score. | GSC → Index → Pages → Export | `/gsc-indexing` |
| `gsc-links-report-analysis.md` | GSC external and internal link data: equity distribution, anchor text risks, and quick-win linking table. | GSC → Links → Export | `/gsc-links` |

---

### 📈 Reporting & Analysis

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `competitor-analysis.md` | Full competitive intelligence: keyword footprint, content strategy, backlink profile, and 3-month action plan. | Ahrefs · Semrush · SERP research | `/competitor-analysis` |
| `content-gap-analysis.md` | Keyword and topic gaps vs competitors, prioritized into a three-tier content roadmap. | Ahrefs Content Gap · Semrush Keyword Gap | `/content-gap` |
| `google-search-console-analysis.md` | GSC performance: traffic trends, CTR opportunities, declining pages, and top 10 action items. | GSC → Performance → Export CSV | `/gsc-performance` |
| `monthly-report-writer.md` | Client-ready monthly SEO report with executive summary, metrics, wins, concerns, and next steps. | GA4 · GSC · rank tracker | `/monthly-report` |
| `penalty-diagnosis.md` | Diagnoses organic traffic drops (algorithm, manual action, technical, competitive) with a recovery plan. | GA4 · GSC Performance · Ahrefs | `/penalty-diagnosis` |

---

### 🤖 GEO & LLM Optimization

GEO (Generative Engine Optimization) — optimizing content so AI tools like ChatGPT, Perplexity, and Gemini cite your site.

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `geo-content-audit.md` | Audits a page across 7 GEO dimensions and returns a GEO Readiness Score 1–10 with specific fixes. | Existing page content (paste directly) | `/geo-audit` |
| `geo-content-rewrite.md` | Rewrites a page to maximize AI citation chances: direct answers, entity definitions, structured facts. | Existing page content (paste directly) | `/geo-rewrite` |
| `geo-entity-definition.md` | Complete entity definition package — definition block, fact sheet, relationship statements, and JSON-LD. | Internal brand/product data | `/geo-entity` |
| `geo-brand-visibility-checker.md` | 15–20 query test set across brand, category, and intent queries with a visibility score across AI tools. | Brand info + competitor names | `/geo-visibility` |
| `geo-ai-citation-analysis.md` | Which sources AI tools cite for your topics, why, and a Citation Opportunity Map with fast wins. | Target queries + competitor domains | `/geo-citations` |

---

## ➕ Adding a New Skill

1. **Create the skill file** in the right category under `skills/`, using this structure:

```
Role:
Objective:
Core Requirements:
Input I Will Provide:
Output Instructions:
```

2. **Add it to `sync.sh`** in the `SKILL_TO_COMMAND` mapping:

```python
"technical-seo/your-skill-name.md": "your-command-name.md",
```

3. **Run the sync** to generate the Claude Code slash command:

```bash
python3 sync.sh
```

4. **Update** `help.md`, `CLAUDE.md`, `GEMINI.md`, `chatgpt.md`, and this README.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

---

## 🤝 Contributing

Contributions are welcome — new prompts, improvements to existing ones, bug fixes, or better documentation.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a PR. For ideas or questions, open an issue or send a message directly.

---

## ⚠️ Disclaimer

Always review AI output before publishing, deploying, or sending to a client. LLMs can make mistakes — facts, URLs, schema syntax, redirect rules, and recommendations may be incorrect. Treat every output as a first draft that requires human review.

Never share client data (analytics exports, crawl reports, GSC data, server logs) with any AI tool without explicit client permission. This data contains proprietary business information that belongs to the client.
