# 🔍 AI SEO Skills

> Ready-to-use AI prompts for professional SEO work — covering technical audits, content creation, link building, local SEO, e-commerce, analytics, and reporting.

Each prompt is structured with a defined role, objective, and output format — run as slash commands in Claude Code or use the Read approach with Gemini CLI for professional, structured results.

> ⚡ **Fastest workflow (Claude Code):** Clone this repo, symlink the commands globally, and type slash commands from any project folder — no copy-pasting prompts, no file paths. See [Setup](#setup).

> 💡 **Also works great with Gemini CLI:** Use the Read approach pointing to the `skills/` folder. See [Gemini CLI](#gemini-cli).

> ⚠️ **Always review AI output before using it.** LLMs can make mistakes — facts, URLs, schema syntax, redirect rules, or recommendations may be incorrect. Treat every output as a first draft that requires human review before publishing, deploying, or sending to a client.

> 🔒 **Always get client permission before sharing their data with any AI tool.** Analytics exports, Search Console data, crawl reports, server logs, and similar files contain proprietary business information that belongs to the client. Never upload or paste client data into an AI system without explicit written permission to do so.

---

## 📋 Table of Contents

- [Repo Structure](#-repo-structure)
- [Setup](#-setup)
  - [Claude Code — Slash Commands](#claude-code--slash-commands)
  - [Gemini CLI](#gemini-cli)
  - [MCP Servers](#-run-with-mcp-servers)
- [Workflow](#-workflow)
- [Prompt Reference](#-prompt-reference)
  - [Technical SEO](#️-technical-seo)
  - [On-Page SEO](#-on-page-seo)
  - [Content & Link Building](#️-content--link-building)
  - [Local SEO](#-local-seo)
  - [E-commerce SEO](#-e-commerce-seo)
  - [Analytics & Data](#-analytics--data)
  - [Reporting & Analysis](#-reporting--analysis)
  - [GEO & LLM Optimization](#-geo--llm-optimization)
- [Tips](#-tips)

---

## 📁 Repo Structure

```
ai-seo-skills/
├── skills/                        ← prompt source files (Gemini CLI / Read approach)
│   ├── technical-seo/
│   ├── on-page-seo/
│   ├── content-link-building/
│   ├── local-seo/
│   ├── ecommerce-seo/
│   ├── analytics/
│   ├── reporting-analysis/
│   └── geo-llm/
├── .claude/commands/              ← Claude Code slash commands (auto-generated from skills/)
├── data/                          ← drop client data files here (CSV, screenshots, logs)
├── outputs/                       ← AI-generated outputs are saved here automatically
├── brand-voice.md                 ← fill in for your client/brand
├── CLAUDE.md                      ← context file read automatically by Claude Code
└── GEMINI.md                      ← context file read automatically by Gemini CLI
```

---

## ⚙️ Setup

### Claude Code — Slash Commands

**Recommended: symlink (one repo, works across all projects)**

Install once and every project on your machine gets the commands automatically. When you update a skill in the repo, all projects see the change instantly — no copying needed.

```bash
# Back up existing global commands if any
mv ~/.claude/commands ~/.claude/commands.bak

# Symlink the repo's commands folder as your global commands
ln -s /path/to/ai-seo-skills/.claude/commands ~/.claude/commands
```

Then open any project folder and the commands are ready:

```bash
cd ~/projects/acme-corp
claude
```

**Alternative: copy (simpler, but requires re-copying after updates)**

```bash
cp -r /path/to/ai-seo-skills/.claude/commands/* ~/.claude/commands/
```

**Or use from inside the repo** (no install needed — commands load automatically):

```bash
cd ai-seo-skills
claude
```

---

**Usage pattern:**

```
/[command] [your context — site, data file names, keyword, period, etc.]
```

Examples:

```
/robots-audit [paste robots.txt here]

/write-blog primary keyword: "project management software", audience: SMB owners, site: acme.com

/gsc-performance GSC data in data/gsc-queries.csv and data/gsc-pages.csv. Site: acme.com. Last 3 months vs prior 3.

/content-brief keyword: "remote team management", site: acme.com, niche: B2B SaaS
```

Output is saved automatically to `outputs/` after each command.

**All 49 commands:**

| Category | Commands |
|---|---|
| Technical SEO | `/robots-audit` `/sitemap-audit` `/schema-generator` `/canonical-audit` `/hreflang-audit` `/cwv-diagnosis` `/redirect-map` `/internal-links` `/server-logs` |
| On-Page SEO | `/title-rewrite` `/headings-audit` `/alt-text` `/content-brief` `/content-refresh` `/faq-generator` `/thin-content` `/meta-descriptions` |
| Content & Links | `/keyword-research` `/write-blog` `/pillar-page` `/topic-cluster` `/content-calendar` `/comparison-article` `/outreach-email` `/brand-mention-pitch` `/press-release` `/backlink-article` |
| Local SEO | `/gbp-description` `/local-landing` `/review-responses` `/nap-checker` |
| E-commerce | `/product-description` `/category-page` `/product-schema` |
| Analytics | `/ga4-traffic` `/ga4-conversions` `/ga4-content` `/gsc-indexing` `/gsc-links` |
| Reporting | `/competitor-analysis` `/content-gap` `/gsc-performance` `/monthly-report` `/penalty-diagnosis` |
| GEO / LLM | `/geo-audit` `/geo-rewrite` `/geo-entity` `/geo-visibility` `/geo-citations` |

See all commands:

```
/help
```

---

### Gemini CLI

Gemini CLI reads `GEMINI.md` automatically when you open the repo. It uses the **Read approach** — point Gemini at a skill file and provide your context.

```bash
cd ai-seo-skills
gemini
```

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

Output is saved automatically to `outputs/` after each prompt.

---

### Working with data files

Drop client data into the `data/` folder before running any analytics or audit prompt.

| Source | How to export |
|---|---|
| Google Search Console | Performance → Export CSV (grab Queries and Pages tabs) |
| GA4 | Reports → Acquisition → Landing page → Export CSV |
| Screaming Frog | File → Export → choose the relevant tab |
| Ahrefs / Semrush | Use the Export button on any report |

Common file patterns:

| File | Use with |
|---|---|
| `data/gsc-performance*.csv` | `/gsc-performance` |
| `data/ga4-organic*.csv` | `/ga4-traffic` · `/ga4-content` |
| `data/screaming-frog*.csv` | `/internal-links` · `/canonical-audit` |
| `data/server-logs*` · `data/*.log` | `/server-logs` |
| `data/*.png` · `data/*.jpg` | Screenshots (PageSpeed, GSC, GA4, etc.) |

---

### Example: GSC performance analysis

**1. Export from Google Search Console**

1. Open [Google Search Console](https://search.google.com/search-console)
2. Go to **Performance → Search results**
3. Set the date range (e.g. last 3 months)
4. Click **Export → Download CSV** — do this for the Queries tab and the Pages tab

**2. Drop the files in `data/`**

```
ai-seo-skills/
└── data/
    ├── gsc-queries.csv
    └── gsc-pages.csv
```

**3. Run the analysis**

With Claude Code slash commands:
```
/gsc-performance GSC data in data/gsc-queries.csv and data/gsc-pages.csv.
Site: acme.com. Period: last 3 months vs prior 3 months.
```

With Gemini CLI:
```
Read skills/reporting-analysis/google-search-console-analysis.md and follow its instructions.
GSC data: data/gsc-queries.csv and data/gsc-pages.csv.
Site: acme.com. Period: last 3 months vs prior 3 months.
```

**4. Find the output in `outputs/`**

```
ai-seo-skills/
└── outputs/
    └── gsc-performance-acme-2026-02.md
```

**What you get back:** traffic trends, high-impression/low-CTR opportunities, declining pages, indexing issues, and a prioritized top 10 action items list — based on your actual data.

---

### 🔌 Run with MCP Servers

MCP (Model Context Protocol) servers give Claude live data access — web browsing, search, filesystem, and more. Configure once, then Claude fetches live pages and runs searches automatically as part of the prompt.

**Recommended MCP servers for SEO:**

| Server | Enables | Use with |
|---|---|---|
| `server-fetch` | Fetch live web pages, check status codes | Canonical audit, hreflang audit, Core Web Vitals |
| `server-filesystem` | Read/write local files | All data-heavy prompts |
| Web search MCP | Run searches, pull SERP data | Competitor analysis, content gap, NAP checker |
| Puppeteer / Playwright | Headless browser for JS-rendered pages | Technical audits on SPAs |
| Google Analytics MCP | Pull GA4 data live via API — no CSV export needed | GA4 traffic, content performance, conversion analysis |
| Google Search Console MCP | Pull GSC data live via API | Performance, indexing, links reports |

**Google Analytics & Search Console via MCP — enable the API first**

MCPs can connect directly to GA4 and GSC and pull live data without any CSV exports. This is the most efficient workflow once it's set up. But it requires enabling the APIs in Google Cloud first:

1. Go to [Google Cloud Console](https://console.cloud.google.com) → create or select a project
2. Enable the **Google Analytics Data API** and/or the **Google Search Console API**
3. Create a **Service Account**, download the JSON key file
4. In GA4: go to Admin → Account Access Management → add the service account email with Viewer role
5. In GSC: go to Settings → Users and permissions → add the service account email
6. Configure your MCP server to use the JSON key for authentication

Once connected, instead of exporting CSVs you can simply say:

```
Connect to GA4 property ID 123456789 and pull organic traffic data
for the last 3 months broken down by landing page.
```

<details>
<summary>📄 Example MCP configuration</summary>

A ready-to-use template is included in the repo as `mcp-example.json`. Copy it to `mcp.json`, fill in your credentials, and point Claude Code at it.

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

> **Note:** The Google Analytics MCP (`analytics-mcp`) requires Python 3.10+ and `pipx`. The GSC MCP (`mcp-server-gsc`) requires Node.js 18+.

</details>

**Best for:** `/canonical-audit` · `/hreflang-audit` · `/cwv-diagnosis` · `/competitor-analysis` · `/content-gap` · `/nap-checker` · `/penalty-diagnosis` · `/geo-visibility` · `/geo-citations`

---

## 📂 Prompt Reference

### ⚙️ Technical SEO

> `skills/technical-seo/`

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `robots-txt-audit.md` | Audits robots.txt for accidentally blocked resources, syntax errors, crawl-budget issues, and missing sitemap directives. Returns severity-labeled findings and a corrected, deploy-ready robots.txt. | `yoursite.com/robots.txt` | `/robots-audit` |
| `xml-sitemap-audit.md` | Audits XML sitemaps for non-200 URLs, noindex conflicts, canonical mismatches, and structural issues. Produces a health score and corrected XML example. | `yoursite.com/sitemap.xml` · GSC Coverage report | `/sitemap-audit` |
| `schema-markup-generator.md` | Generates valid JSON-LD for any schema type (Article, Product, LocalBusiness, FAQ, HowTo, etc.) with a rich result eligibility checklist per schema block. | Page content (no export needed) | `/schema-generator` |
| `canonical-tags-audit.md` | Audits canonical tags for chains, conflicts, HTTP/HTTPS mismatches, and noindex contradictions. Produces a prioritized fix table. | Screaming Frog · Sitebulb · Ahrefs Site Audit | `/canonical-audit` |
| `hreflang-audit.md` | Audits hreflang annotations for missing return links, incorrect BCP 47 codes, and implementation conflicts. Recommends the best implementation method. | Screaming Frog (Hreflang tab) · Sitebulb | `/hreflang-audit` |
| `core-web-vitals-diagnosis.md` | Diagnoses LCP, INP, and CLS failures from PageSpeed data. Returns root-cause analysis, code-level fixes, and a developer handoff checklist. | PageSpeed Insights · GSC Core Web Vitals report | `/cwv-diagnosis` |
| `redirect-map-generator.md` | Generates a redirect map CSV and server config rules (Apache, Nginx, Cloudflare) from old/new URL pairs. Detects chains, loops, and backlink-critical URLs. | Migration spreadsheet · Screaming Frog (old site crawl) | `/redirect-map` |
| `internal-linking-audit.md` | Audits internal link structure for orphaned pages, poor anchor text, broken links, and topic cluster gaps. Produces a quick-win link recommendations table. | Screaming Frog · Sitebulb · Ahrefs Site Audit | `/internal-links` |
| `check-server-app-logs.md` | Analyzes server and application logs for SEO-impacting issues: 404s, 5xx errors, redirect chains, crawl waste, and Googlebot anomalies. | Server / hosting panel (Nginx · Apache · Cloudflare logs) | `/server-logs` |

---

### 📄 On-Page SEO

> `skills/on-page-seo/`

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `title-tag-rewrite.md` | Rewrites title tags to improve CTR and keyword placement. Produces two variants per title with character counts and strategic notes. | Screaming Frog (Page Titles) · GSC Performance report | `/title-rewrite` |
| `heading-structure-audit.md` | Audits H1–H3 structure for keyword coverage, skipped levels, and vague headings. Outputs a fully optimized heading outline. | Screaming Frog (H1/H2 reports) · view-source | `/headings-audit` |
| `image-alt-text-generator.md` | Generates SEO-optimized, accessibility-compliant alt text. Flags missing, filename-only, and keyword-stuffed attributes. | Screaming Frog (Images tab) · Sitebulb | `/alt-text` |
| `content-brief.md` | Creates a detailed, writer-ready content brief: search intent, heading outline, mandatory subtopics, on-page SEO specs, and internal linking plan. | Ahrefs · Semrush · Google SERP research | `/content-brief` |
| `content-refresh.md` | Analyzes existing content and produces a section-by-section refresh plan (KEEP / UPDATE / EXPAND / CUT / ADD NEW) with rewritten sections included. | Existing article (paste directly) · GSC Performance | `/content-refresh` |
| `faq-section-generator.md` | Generates a PAA-targeted FAQ section with 6–12 Q&As plus a complete FAQPage JSON-LD schema block. Flags top featured snippet opportunities. | Google PAA · AlsoAsked · AnswerThePublic | `/faq-generator` |
| `thin-content-rewrite.md` | Diagnoses why a page is thin, then rewrites it into comprehensive, intent-matched content with an updated title tag and meta description. | Screaming Frog (word count filter) · GSC low-traffic pages | `/thin-content` |
| `write-meta-descriptions.md` | Generates click-optimized meta descriptions (150–160 characters) with keyword, intent match, and CTA for one or more pages. | Screaming Frog (Meta Description report) · GSC | `/meta-descriptions` |

---

### ✍️ Content & Link Building

> `skills/content-link-building/`

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `keyword-research.md` | Performs full keyword research for a topic — tiered keywords, intent classification, difficulty estimates, and cluster suggestions. | Ahrefs · Semrush · Google Keyword Planner | `/keyword-research` |
| `write-blog-post.md` | Writes a 1,200–1,800 word SEO-optimized blog post with heading hierarchy, keyword placement, internal linking suggestions, and meta elements. | Brief / keyword (no export needed) | `/write-blog` |
| `pillar-page-writer.md` | Writes a 2,500–4,000 word pillar page with table of contents, cluster article link placeholders, FAQ section, and full on-page SEO block. | Ahrefs · Semrush · SERP research | `/pillar-page` |
| `topic-cluster-planner.md` | Designs a complete topic cluster: pillar page + 8–15 cluster articles with keyword targets, intent, internal linking map, and quick-win callouts. | Ahrefs · Semrush · Google SERP | `/topic-cluster` |
| `content-calendar.md` | Builds an SEO content calendar in markdown table format with keyword targets, content types, topic cluster mapping, and production notes. | Ahrefs · Semrush · existing content audit | `/content-calendar` |
| `comparison-article.md` | Writes a 1,500–2,500 word commercial comparison article with a head-to-head table, verdict section, and on-page SEO elements. | G2 · Capterra · product/pricing pages | `/comparison-article` |
| `outreach-email-template.md` | Produces a full outreach sequence (initial + 2 follow-ups) for 6 link building campaign types, with subject line variants and a quality checklist. | Hunter.io · LinkedIn · Ahrefs (link prospects) | `/outreach-email` |
| `unlinked-brand-mention-pitch.md` | Writes a high-conversion pitch to turn unlinked brand mentions into backlinks, with subject lines, primary email, and a follow-up. | Google Alerts · Ahrefs Mentions · Brand24 | `/brand-mention-pitch` |
| `press-release.md` | Writes a 400–600 word newswire-ready press release in AP style for launches, funding rounds, partnerships, research findings, or events. | Internal company data (no export needed) | `/press-release` |
| `write-a-backlink-article.md` | Writes a 500–700 word editorial article that naturally incorporates a backlink using the exact keyword as anchor text. | Keyword + target URL (no export needed) | `/backlink-article` |

---

### 📍 Local SEO

> `skills/local-seo/`

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `google-business-profile-description.md` | Writes 3 GBP description variants optimized for local keywords and Google's 750-character limit, plus a GBP optimization checklist. | Google Business Profile dashboard | `/gbp-description` |
| `local-landing-page-writer.md` | Writes a complete local landing page (600–1,000 words) for a service + city combination with FAQ, LocalBusiness schema placeholder, and on-page SEO block. | Internal business data (no export needed) | `/local-landing` |
| `review-response-templates.md` | Produces a library of 12 review response templates covering 5-star, 3-star, and 1–2 star reviews, with local keyword integration. | Google Business Profile · Yelp dashboard | `/review-responses` |
| `nap-consistency-checker.md` | Audits NAP data across directories for inconsistencies, duplicates, and missing citations. Produces a correction table and top 10 citation source recommendations. | BrightLocal · Moz Local · manual directory search | `/nap-checker` |

---

### 🛒 E-commerce SEO

> `skills/ecommerce-seo/`

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `product-description-writer.md` | Writes original product descriptions in three formats — short (50–80 words), long (200–350 words), and feature bullets — plus title tag and meta description. | Product database · manufacturer spec sheets | `/product-description` |
| `category-page-content-writer.md` | Writes above-the-fold intro and below-the-fold buyer's guide content for category pages, with an on-page SEO block. | Internal product data · competitor category pages | `/category-page` |
| `product-schema-generator.md` | Generates complete Product JSON-LD with Offer, AggregateRating, and Review nesting, plus a rich result eligibility checklist per product. | Product database · pricing system | `/product-schema` |

---

### 📊 Analytics & Data

> `skills/analytics/`

#### Google Analytics 4

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `ga4-organic-traffic-analysis.md` | Analyzes GA4 organic traffic trends, landing page engagement quality, and device/geo breakdown. Identifies hidden gem pages with strong engagement but low organic traffic. | GA4 → Reports → Acquisition → Landing page (filter: Organic Search) → Export CSV | `/ga4-traffic` |
| `ga4-conversion-analysis.md` | Identifies which organic landing pages, content types, and keyword intents drive the most conversions. Surfaces conversion leaks and high-potential pages for SEO investment. | GA4 → Reports → Conversions (filter: Organic Search channel) → Export CSV | `/ga4-conversions` |
| `ga4-content-performance.md` | Maps all organic content into a four-quadrant matrix (traffic × engagement) and produces prioritized refresh, amplification, and consolidation recommendations. | GA4 → Reports → Engagement → Pages and Screens (filter: Organic Search) → Export CSV | `/ga4-content` |

#### Google Search Console

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `gsc-indexing-audit.md` | Deep-dives into the GSC Coverage report — diagnoses every exclusion reason ("Discovered not indexed", crawl errors, canonical conflicts, noindex) with fixes and an indexation health score. | GSC → Index → Pages → Export (all categories) | `/gsc-indexing` |
| `gsc-links-report-analysis.md` | Analyzes GSC external and internal link data for equity distribution, anchor text risks, link-poor priority pages, and produces a quick-win internal linking table. | GSC → Links → Export (top linked pages, linking sites, anchor text) | `/gsc-links` |

---

### 📈 Reporting & Analysis

> `skills/reporting-analysis/`

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `competitor-analysis.md` | Produces a full competitive intelligence report: keyword footprint, content strategy, backlink profile, technical setup, and a 3-month action plan. | Ahrefs · Semrush · SERP research | `/competitor-analysis` |
| `content-gap-analysis.md` | Identifies keyword and topic gaps across three categories (keyword, topic, intent) and prioritizes them into a three-tier content roadmap. | Ahrefs Content Gap · Semrush Keyword Gap → Export CSV | `/content-gap` |
| `google-search-console-analysis.md` | Analyzes GSC performance data for traffic trends, CTR opportunities, declining pages, and indexing issues. Returns a top 10 action items list. | GSC → Performance → Export CSV (Queries + Pages tabs) | `/gsc-performance` |
| `monthly-report-writer.md` | Writes a client-ready monthly SEO report with executive summary, metrics dashboard, work completed, wins, concerns, and next month's plan. | GA4 · GSC · rank tracker (Ahrefs · SERPWatcher · Semrush) | `/monthly-report` |
| `penalty-diagnosis.md` | Diagnoses organic traffic drops as algorithm updates, manual actions, technical issues, or competitive shifts, with a recovery action plan by timeframe. | GA4 organic traffic · GSC Performance · Ahrefs traffic chart | `/penalty-diagnosis` |

---

### 🤖 GEO & LLM Optimization

> `skills/geo-llm/`

GEO (Generative Engine Optimization) — optimizing content and brand presence so AI tools cite your site in their generated answers.

| Prompt | What it does | Get data from | Command |
|---|---|---|---|
| `geo-content-audit.md` | Audits a page across 7 GEO dimensions (direct answer format, entity clarity, structured facts, E-E-A-T, quote-ready passages, formatting, citation worthiness) and returns a GEO Readiness Score 1–10 with specific fixes. | Existing page content (paste directly) | `/geo-audit` |
| `geo-content-rewrite.md` | Rewrites a page to maximize AI citation chances: leads with a direct answer, adds entity definitions, structures content for extractability, adds citation-worthy data, and writes quote-ready sentences. | Existing page content (paste directly) | `/geo-rewrite` |
| `geo-entity-definition.md` | Creates a complete entity definition package — primary definition block, short definition (≤160 chars), entity fact sheet, relationship statements, and Organization/Person JSON-LD schema. Includes a distribution checklist. | Internal brand/product data (no export needed) | `/geo-entity` |
| `geo-brand-visibility-checker.md` | Generates a 15–20 query test set across brand, category, and problem/intent queries. Returns an evaluation framework table and brand visibility score across AI tools, plus top 10 improvement actions. | Brand info + competitor names (no export needed) | `/geo-visibility` |
| `geo-ai-citation-analysis.md` | Analyzes which sources AI tools currently cite for your target topics, why they are chosen, and what content gaps exist. Produces a Citation Opportunity Map and top 3 fast citation wins. | Target queries + competitor domains (no export needed) | `/geo-citations` |

---

## 💡 Tips

**🎨 Brand voice:** Content prompts read `brand-voice.md` automatically if it exists in the current folder. Fill in tone, vocabulary, words to avoid, and 2–3 real content samples as style anchors. The most important field is **Content language** — set it once and every content prompt outputs in that language automatically (Greek, Spanish, or anything else).

- **Claude Code:** place `brand-voice.md` in the folder where you run `claude` — it is picked up automatically.
- **Gemini CLI:** `Read brand-voice.md and then read skills/content-link-building/pillar-page-writer.md and follow its instructions.`

**💾 Outputs:** Every command saves its result to `outputs/` automatically with a descriptive filename (e.g. `outputs/gsc-performance-acme-2026-02.md`). You can also specify a custom filename at the end of any command.

**🧱 Prompt structure:** Every prompt follows the same format — Role, Objective, Core Requirements, Input I Will Provide, Output Instructions. The Core Requirements section can be edited to match your site type, niche, CMS, or client constraints without breaking the prompt.

**🔖 Placeholders:** Prompts use `[PLACEHOLDER: description]` where site-specific data is required. Search for `[` before treating any output as final.

**🔗 Chaining prompts:** Prompts are designed to feed into each other.

Content workflow:
```
/keyword-research → /topic-cluster
  → /content-brief → /pillar-page
  → /faq-generator → /schema-generator
```

Analytics workflow:
```
/ga4-traffic → /ga4-content
  → /content-refresh  (for declining pages)
  → /thin-content     (for low-quality pages)
```

Audit workflow:
```
/gsc-indexing + /gsc-links
  → /internal-links → /monthly-report
```

GEO workflow:
```
/geo-visibility → /geo-citations
  → /geo-entity → /geo-rewrite
  → /geo-audit  (score the final page before publishing)
```
