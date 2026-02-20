List all available SEO slash commands from this project, organized by category. For each command, show the command name and a one-line description of what it does.

The commands are:

## Technical SEO
- `/robots-audit` — Audit robots.txt for blocked resources, syntax errors, and crawl issues
- `/sitemap-audit` — Audit XML sitemaps for non-200 URLs, noindex conflicts, and structural issues
- `/schema-generator` — Generate valid JSON-LD schema markup (Article, Product, LocalBusiness, FAQ, HowTo, etc.)
- `/canonical-audit` — Audit canonical tags for chains, conflicts, and HTTP/HTTPS mismatches
- `/hreflang-audit` — Audit hreflang annotations for missing return links and incorrect BCP 47 codes
- `/cwv-diagnosis` — Diagnose LCP, INP, and CLS failures with developer-ready fixes
- `/redirect-map` — Generate a redirect map CSV and server config rules (Apache, Nginx, Cloudflare)
- `/internal-links` — Audit internal link structure for orphaned pages and anchor text issues
- `/server-logs` — Analyze server/app logs for 404s, crawl waste, and Googlebot anomalies
- `/crawl-budget` — Analyze crawl budget waste and produce a prioritized crawl efficiency action plan

## On-Page SEO
- `/title-rewrite` — Rewrite title tags with two variants and character counts
- `/headings-audit` — Audit H1–H3 structure and produce an optimized heading outline
- `/alt-text` — Generate SEO-optimized alt text for images
- `/content-brief` — Create a detailed, writer-ready content brief for a target keyword
- `/content-refresh` — Produce a section-by-section refresh plan for existing content
- `/faq-generator` — Generate a PAA-targeted FAQ section with FAQPage JSON-LD schema
- `/thin-content` — Diagnose and rewrite thin content pages
- `/meta-descriptions` — Write click-optimized meta descriptions (150–160 characters)

## Content & Link Building
- `/keyword-research` — Full keyword research with tiered keywords and cluster suggestions
- `/write-blog` — Write a 1,200–1,800 word SEO-optimized blog post
- `/pillar-page` — Write a 2,500–4,000 word pillar page with cluster link placeholders
- `/topic-cluster` — Design a complete topic cluster with 8–15 cluster articles
- `/content-calendar` — Build an SEO content calendar in markdown table format
- `/comparison-article` — Write a commercial comparison article with head-to-head table
- `/outreach-email` — Write link building outreach email sequences (6 campaign types)
- `/brand-mention-pitch` — Write pitches to convert unlinked brand mentions into backlinks
- `/press-release` — Write a 400–600 word AP-style press release
- `/backlink-article` — Write a 500–700 word editorial article with a natural backlink

## Local SEO
- `/gbp-description` — Write 3 Google Business Profile description variants
- `/local-landing` — Write a complete local landing page for a service + city
- `/review-responses` — Generate 12 review response templates (5-star, 3-star, 1-2 star)

## E-commerce SEO
- `/product-description` — Write short, long, and bullet-point product descriptions
- `/category-page` — Write above-fold and below-fold category page content
- `/product-schema` — Generate complete Product JSON-LD with Offer and AggregateRating

## Analytics
- `/ga4-traffic` — Analyze GA4 organic traffic trends and landing page performance
- `/ga4-conversions` — Identify which organic pages drive the most conversions
- `/ga4-content` — Map content into a performance matrix (traffic × engagement)
- `/gsc-indexing` — Deep-dive GSC Coverage report — diagnose every exclusion reason
- `/gsc-links` — Analyze GSC external and internal link data

## Reporting & Analysis
- `/competitor-analysis` — Full competitive intelligence report with 3-month action plan
- `/content-gap` — Identify keyword and topic gaps vs competitors
- `/gsc-performance` — Analyze GSC performance data with top 10 action items
- `/monthly-report` — Write a client-ready monthly SEO report
- `/penalty-diagnosis` — Diagnose organic traffic drops with a recovery action plan

## GEO & LLM Optimization
- `/geo-audit` — Audit a page across 7 GEO dimensions with a GEO Readiness Score
- `/geo-rewrite` — Rewrite content to maximize AI citation chances
- `/geo-entity` — Create a complete entity definition package with JSON-LD schema
- `/geo-visibility` — Generate a brand visibility test set across AI tools
- `/geo-citations` — Analyze the AI citation landscape and find content opportunities

## Agents
- `/agent-monthly-report` — Autonomous end-to-end monthly SEO report: detects GA4 and GSC data, runs the full analysis, writes the client report, and saves it to outputs/

---

**Usage tip:** Most commands accept inline context after the command name. Example:
```
/write-blog primary keyword: "remote team management", audience: HR managers, site: acme.com (B2B SaaS)
```

For data-heavy commands (GA4, GSC, crawl exports), either paste your data after the command or — if you started Claude Code from your client folder — reference the local CSV file name.

If a `brand-voice.md` file exists in the current directory, content commands will read it automatically and match the brand's tone and language.
