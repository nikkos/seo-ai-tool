# seo-ai-tool

> 50+ professional SEO prompt commands for Claude Code — install once, use from any folder.

If you do SEO work and use Claude Code, this tool gives you a full library of ready-made commands for every SEO task: technical audits, content writing, keyword research, analytics analysis, local SEO, e-commerce, GEO/LLM optimization, and more.

Instead of writing prompts from scratch every time, you just type `/write-blog`, `/robots-audit`, or `/keyword-research` directly inside Claude Code and get a professional, structured result immediately.

---

## What is Claude Code?

[Claude Code](https://www.npmjs.com/package/@anthropic-ai/claude-code) is Anthropic's official AI assistant for the terminal. It lets you work with AI directly from your command line — no browser needed. Once you have it installed, you can run slash commands like `/write-blog` and Claude will execute a pre-written expert prompt for you.

This package installs 50+ SEO-specific slash commands into Claude Code so you have a professional SEO toolkit ready at all times.

---

## Requirements

Before installing, make sure you have:

1. **Node.js 16+** — [Download here](https://nodejs.org)
   Check if installed: `node --version`

2. **Claude Code** — Anthropic's AI CLI
   Install: `npm install -g @anthropic-ai/claude-code`
   Check if installed: `claude --version`

Not sure if you have both? Run `seo-ai-tool check` after installing and it will tell you.

---

## Installation

```bash
# Step 1 — Install the package globally
npm install -g seo-ai-tool

# Step 2 — Copy all prompts into Claude Code
seo-ai-tool install
```

That's it. All 50+ commands are now available inside Claude Code from any folder on your computer.

---

## How to use a command

Open any folder in your terminal, start Claude Code, and type a slash command:

```bash
# Start Claude Code in your project folder
claude

# Then inside Claude Code, type a command:
/write-blog target keyword: "best crm for small business"

/robots-audit
# (then paste your robots.txt content when prompted)

/keyword-research niche: "email marketing tools"
```

If you run a command without providing any input, Claude will tell you exactly what information it needs. You never have to guess.

---

## Available commands

### Technical SEO
| Command | What it does |
|---|---|
| `/robots-audit` | Audit a robots.txt file for issues |
| `/sitemap-audit` | Review an XML sitemap for errors and gaps |
| `/schema-generator` | Generate structured data markup (JSON-LD) |
| `/canonical-audit` | Find canonical tag issues |
| `/hreflang-audit` | Check hreflang implementation for international SEO |
| `/cwv-diagnosis` | Diagnose Core Web Vitals problems |
| `/redirect-map` | Generate a redirect map for migrations |
| `/internal-links` | Audit internal linking structure |
| `/server-logs` | Analyze server log files for crawl insights |
| `/crawl-budget` | Identify crawl budget waste |

### On-Page SEO
| Command | What it does |
|---|---|
| `/title-rewrite` | Rewrite page titles for better CTR and rankings |
| `/headings-audit` | Review heading structure (H1-H6) |
| `/alt-text` | Write optimized alt text for images |
| `/content-brief` | Create a full SEO content brief |
| `/content-refresh` | Update and improve existing content |
| `/faq-generator` | Generate FAQ sections with schema markup |
| `/thin-content` | Identify and fix thin content issues |
| `/meta-descriptions` | Write click-worthy meta descriptions |

### Content & Link Building
| Command | What it does |
|---|---|
| `/keyword-research` | Full keyword research and clustering |
| `/write-blog` | Write a complete, SEO-optimized blog post |
| `/pillar-page` | Create a comprehensive pillar page |
| `/topic-cluster` | Plan a full topic cluster strategy |
| `/content-calendar` | Build an SEO content calendar |
| `/comparison-article` | Write a comparison/versus article |
| `/outreach-email` | Write link building outreach emails |
| `/brand-mention-pitch` | Turn unlinked mentions into backlinks |
| `/press-release` | Write an SEO-friendly press release |
| `/backlink-article` | Write content designed to earn backlinks |

### Local SEO
| Command | What it does |
|---|---|
| `/gbp-description` | Write a Google Business Profile description |
| `/local-landing` | Create a local landing page |
| `/review-responses` | Write professional responses to reviews |

### E-commerce SEO
| Command | What it does |
|---|---|
| `/product-description` | Write SEO product descriptions |
| `/category-page` | Optimize category page content |
| `/product-schema` | Generate product structured data |

### Analytics
| Command | What it does |
|---|---|
| `/ga4-traffic` | Analyze GA4 organic traffic data |
| `/ga4-conversions` | Review GA4 conversion performance |
| `/ga4-content` | Analyze GA4 content performance |
| `/gsc-indexing` | Diagnose Google Search Console indexing issues |
| `/gsc-links` | Analyze GSC link data |
| `/gsc-performance` | Full GSC performance analysis |

### Reporting & Analysis
| Command | What it does |
|---|---|
| `/competitor-analysis` | Analyze a competitor's SEO strategy |
| `/content-gap` | Find content gaps vs competitors |
| `/monthly-report` | Generate a monthly SEO report |
| `/penalty-diagnosis` | Diagnose a potential Google penalty |

### GEO / LLM Optimization
| Command | What it does |
|---|---|
| `/geo-audit` | Audit content for AI/LLM visibility |
| `/geo-rewrite` | Rewrite content to appear in AI answers |
| `/geo-entity` | Build entity authority for LLM recognition |
| `/geo-visibility` | Improve visibility in generative search |
| `/geo-citations` | Build citation-worthy content |

### Agents
| Command | What it does |
|---|---|
| `/agent-monthly-report` | Autonomous agent that generates a full monthly SEO report |

---

## Working with client data

Many commands can analyze real data you provide. Just drop your files into a `data/` folder in your project and reference them when running the command.

```
my-client-project/
└── data/
    ├── gsc-performance.csv      ← use with /gsc-performance
    ├── ga4-organic.csv          ← use with /ga4-traffic
    ├── screaming-frog-export.csv ← use with /internal-links
    └── pagespeed-screenshot.png  ← use with /cwv-diagnosis
```

---

## Brand voice

If you create a `brand-voice.md` file in your project folder, all content commands will read it automatically and match the brand's tone, vocabulary, and style.

```
my-client-project/
├── brand-voice.md    ← Claude reads this automatically
└── data/
```

Your `brand-voice.md` can include things like:
- Tone of voice (formal, casual, bold, friendly)
- Words and phrases to use or avoid
- Target audience description
- Example sentences that match the brand style

---

## Saving outputs

After running any command, save the output to an `outputs/` folder for reference:

```
my-client-project/
├── brand-voice.md
├── data/
└── outputs/
    ├── keyword-research-2026-02.md
    ├── write-blog-best-crm-2026-02.md
    └── robots-audit-2026-02.md
```

---

## Customize prompts for a specific client

The global prompts work for general use, but sometimes you want to tweak a prompt for a specific client or project. The local override system makes this easy — no global prompts are changed.

### How it works

Claude Code reads commands in this priority order:

```
.claude/commands/write-blog.md     ← local version (wins if it exists)
~/.claude/commands/write-blog.md   ← global version (fallback)
```

### Set it up

```bash
# Go to your client project folder
cd ~/projects/acme-client

# Create the local overrides folder
seo-ai-tool init

# Copy the prompt you want to customize
cp ~/.claude/commands/write-blog.md .claude/commands/write-blog.md

# Edit it to fit the client's needs
```

Commit `.claude/commands/` to git and your whole team automatically shares the same customized prompts.

---

## CLI reference

```
seo-ai-tool install     Copy all prompts to ~/.claude/commands/ (global)
seo-ai-tool update      Update global prompts to the latest version
seo-ai-tool init        Create .claude/commands/ in the current project for local overrides
seo-ai-tool list        List all available prompts by category
seo-ai-tool check       Check if Claude Code and Gemini CLI are installed
seo-ai-tool uninstall   Remove all prompts from ~/.claude/commands/
seo-ai-tool help        Show help
```

---

## Updating

When a new version is released:

```bash
npm update -g seo-ai-tool
seo-ai-tool update
```

---

## License

MIT
