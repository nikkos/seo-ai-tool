#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

// Paths
const PACKAGE_COMMANDS = path.join(__dirname, '..', 'commands');
const GLOBAL_CLAUDE_DIR = path.join(os.homedir(), '.claude');
const GLOBAL_CLAUDE_COMMANDS = path.join(GLOBAL_CLAUDE_DIR, 'commands');

// Colors
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

const log = {
  success: (msg) => console.log(`${c.green}✔${c.reset} ${msg}`),
  warn:    (msg) => console.log(`${c.yellow}⚠${c.reset}  ${msg}`),
  error:   (msg) => console.log(`${c.red}✖${c.reset} ${msg}`),
  info:    (msg) => console.log(`${c.cyan}→${c.reset} ${msg}`),
  dim:     (msg) => console.log(`${c.dim}  ${msg}${c.reset}`),
  title:   (msg) => console.log(`\n${c.bold}${msg}${c.reset}`),
};

// Helpers
function getPromptFiles() {
  return fs.readdirSync(PACKAGE_COMMANDS).filter(f => f.endsWith('.md'));
}

function isInstalled(cmd) {
  try {
    execSync(
      process.platform === 'win32' ? `where ${cmd}` : `which ${cmd}`,
      { stdio: 'ignore' }
    );
    return true;
  } catch {
    return false;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Commands
function cmdCheck() {
  log.title('Checking AI CLI tools...\n');

  const claude = isInstalled('claude');
  const gemini = isInstalled('gemini');

  if (claude) {
    log.success('Claude Code is installed');
  } else {
    log.warn('Claude Code not found');
    log.dim('Install: npm install -g @anthropic-ai/claude-code');
  }

  if (gemini) {
    log.success('Gemini CLI is installed');
  } else {
    log.warn('Gemini CLI not found (optional)');
    log.dim('Install: npm install -g @google/gemini-cli');
  }

  console.log();
}

function cmdInstall() {
  log.title('Installing SEO AI Tool prompts globally...\n');

  cmdCheck();

  ensureDir(GLOBAL_CLAUDE_COMMANDS);

  const files = getPromptFiles();
  let installed = 0;
  let skipped = 0;

  for (const file of files) {
    const dest = path.join(GLOBAL_CLAUDE_COMMANDS, file);
    const src = path.join(PACKAGE_COMMANDS, file);

    if (fs.existsSync(dest)) {
      // Overwrite — install always updates to latest
      fs.copyFileSync(src, dest);
      skipped++;
    } else {
      fs.copyFileSync(src, dest);
      installed++;
    }
  }

  log.success(`${files.length} prompts installed to ~/.claude/commands/`);
  log.dim(`Location: ${GLOBAL_CLAUDE_COMMANDS}`);
  console.log();
  log.info('All commands are now available as Claude Code slash commands.');
  log.dim('Example: /write-blog, /keyword-research, /robots-audit');
  console.log();
  log.info('To customize a prompt for a specific project:');
  log.dim('1. Run: seo-ai-tool init   (in your project folder)');
  log.dim('2. Copy the prompt file into .claude/commands/');
  log.dim('3. Edit it — local version takes priority over global');
  console.log();
}

function cmdUpdate() {
  log.title('Updating SEO AI Tool prompts...\n');

  if (!fs.existsSync(GLOBAL_CLAUDE_COMMANDS)) {
    log.error('Not installed yet. Run: seo-ai-tool install');
    process.exit(1);
  }

  const files = getPromptFiles();
  let updated = 0;

  for (const file of files) {
    const dest = path.join(GLOBAL_CLAUDE_COMMANDS, file);
    const src = path.join(PACKAGE_COMMANDS, file);
    fs.copyFileSync(src, dest);
    updated++;
  }

  log.success(`${updated} prompts updated in ~/.claude/commands/`);
  console.log();
}

function cmdInit() {
  const localClaudeDir = path.join(process.cwd(), '.claude');
  const localCommandsDir = path.join(localClaudeDir, 'commands');

  log.title('Initializing local prompt overrides...\n');

  if (fs.existsSync(localCommandsDir)) {
    log.warn('.claude/commands/ already exists in this folder');
    log.dim(`Location: ${localCommandsDir}`);
  } else {
    ensureDir(localCommandsDir);
    log.success('Created .claude/commands/ in current project');
    log.dim(`Location: ${localCommandsDir}`);
  }

  // Write a README inside .claude/commands/
  const readmePath = path.join(localCommandsDir, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, [
      '# Local SEO Prompt Overrides',
      '',
      'Files placed here override the global seo-ai-tool prompts.',
      '',
      '## How it works',
      '',
      'Claude Code reads commands in this priority order:',
      '',
      '```',
      '.claude/commands/write-blog.md     ← local (wins)',
      '~/.claude/commands/write-blog.md   ← global (fallback)',
      '```',
      '',
      '## Usage',
      '',
      '1. Find the prompt you want to customize in ~/.claude/commands/',
      '2. Copy it here: cp ~/.claude/commands/write-blog.md .claude/commands/',
      '3. Edit it to match your client or project needs',
      '4. Commit .claude/commands/ to git so your team shares the same prompts',
      '',
      '## Available global prompts',
      '',
      'Run `seo-ai-tool list` to see all 50+ available prompts.',
    ].join('\n'));
    log.success('Created .claude/commands/README.md with usage instructions');
  }

  console.log();
  log.info('Next steps:');
  log.dim('• Copy a prompt to customize: cp ~/.claude/commands/write-blog.md .claude/commands/');
  log.dim('• Edit it for your client');
  log.dim('• Commit .claude/commands/ to git for team sharing');
  console.log();
}

function cmdList() {
  const files = getPromptFiles();

  const categories = {
    'Technical SEO':       ['robots-audit', 'sitemap-audit', 'schema-generator', 'canonical-audit', 'hreflang-audit', 'cwv-diagnosis', 'redirect-map', 'internal-links', 'server-logs', 'crawl-budget'],
    'On-Page SEO':         ['title-rewrite', 'headings-audit', 'alt-text', 'content-brief', 'content-refresh', 'faq-generator', 'thin-content', 'meta-descriptions'],
    'Content & Links':     ['keyword-research', 'write-blog', 'pillar-page', 'topic-cluster', 'content-calendar', 'comparison-article', 'outreach-email', 'brand-mention-pitch', 'press-release', 'backlink-article'],
    'Local SEO':           ['gbp-description', 'local-landing', 'review-responses'],
    'E-commerce':          ['product-description', 'category-page', 'product-schema'],
    'Analytics':           ['ga4-traffic', 'ga4-conversions', 'ga4-content', 'gsc-indexing', 'gsc-links', 'gsc-performance'],
    'Reporting':           ['competitor-analysis', 'content-gap', 'monthly-report', 'penalty-diagnosis'],
    'GEO / LLM':           ['geo-audit', 'geo-rewrite', 'geo-entity', 'geo-visibility', 'geo-citations'],
    'Agents':              ['agent-monthly-report'],
  };

  log.title(`SEO AI Tool — ${files.length} prompts available\n`);

  for (const [category, prompts] of Object.entries(categories)) {
    console.log(`${c.bold}${c.cyan}${category}${c.reset}`);
    for (const p of prompts) {
      console.log(`  ${c.dim}/${p}${c.reset}`);
    }
    console.log();
  }
}

function cmdUninstall() {
  log.title('Uninstalling SEO AI Tool prompts...\n');

  if (!fs.existsSync(GLOBAL_CLAUDE_COMMANDS)) {
    log.warn('No prompts found in ~/.claude/commands/ — nothing to remove');
    process.exit(0);
  }

  const files = getPromptFiles();
  let removed = 0;

  for (const file of files) {
    const dest = path.join(GLOBAL_CLAUDE_COMMANDS, file);
    if (fs.existsSync(dest)) {
      fs.unlinkSync(dest);
      removed++;
    }
  }

  log.success(`Removed ${removed} prompts from ~/.claude/commands/`);
  console.log();
}

function cmdHelp() {
  console.log(`
${c.bold}seo-ai-tool${c.reset} — Professional SEO prompts for Claude Code

${c.bold}USAGE${c.reset}
  seo-ai-tool <command>

${c.bold}COMMANDS${c.reset}
  ${c.cyan}install${c.reset}      Copy all prompts to ~/.claude/commands/ (global)
  ${c.cyan}update${c.reset}       Update global prompts to the latest version
  ${c.cyan}init${c.reset}         Create .claude/commands/ in the current project for local overrides
  ${c.cyan}list${c.reset}         List all available prompts by category
  ${c.cyan}check${c.reset}        Check if Claude Code and Gemini CLI are installed
  ${c.cyan}uninstall${c.reset}    Remove all prompts from ~/.claude/commands/
  ${c.cyan}help${c.reset}         Show this help message

${c.bold}EXAMPLES${c.reset}
  ${c.dim}# Install globally (do this once)${c.reset}
  seo-ai-tool install

  ${c.dim}# Set up local overrides for a client project${c.reset}
  cd ~/projects/my-client
  seo-ai-tool init

  ${c.dim}# Customize a prompt for this client${c.reset}
  cp ~/.claude/commands/write-blog.md .claude/commands/write-blog.md

${c.bold}DOCS${c.reset}
  https://github.com/nikkos/ai-seo-tool
`);
}

// Router
const [,, command] = process.argv;

switch (command) {
  case 'install':   cmdInstall();   break;
  case 'update':    cmdUpdate();    break;
  case 'init':      cmdInit();      break;
  case 'list':      cmdList();      break;
  case 'check':     cmdCheck();     break;
  case 'uninstall': cmdUninstall(); break;
  case 'help':
  case '--help':
  case '-h':
  case undefined:   cmdHelp();      break;
  default:
    log.error(`Unknown command: ${command}`);
    console.log(`Run ${c.cyan}seo-ai-tool help${c.reset} to see available commands.`);
    process.exit(1);
}
