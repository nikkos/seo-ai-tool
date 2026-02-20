#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

// Paths — Claude
const PACKAGE_COMMANDS = path.join(__dirname, '..', 'commands');
const GLOBAL_CLAUDE_DIR = path.join(os.homedir(), '.claude');
const GLOBAL_CLAUDE_COMMANDS = path.join(GLOBAL_CLAUDE_DIR, 'commands');

// Paths — Gemini
const GLOBAL_GEMINI_DIR = path.join(os.homedir(), '.gemini');
const GLOBAL_GEMINI_COMMANDS = path.join(GLOBAL_GEMINI_DIR, 'commands');

// Colors
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  dim: '\x1b[2m',
};

const log = {
  success: (msg) => console.log(`${c.green}✔${c.reset} ${msg}`),
  warn:    (msg) => console.log(`${c.yellow}⚠${c.reset}  ${msg}`),
  error:   (msg) => console.log(`${c.red}✖${c.reset} ${msg}`),
  info:    (msg) => console.log(`${c.cyan}→${c.reset} ${msg}`),
  dim:     (msg) => console.log(`${c.dim}  ${msg}${c.reset}`),
  title:   (msg) => console.log(`\n${c.bold}${msg}${c.reset}`),
  claude:  (msg) => console.log(`${c.cyan}[Claude]${c.reset} ${msg}`),
  gemini:  (msg) => console.log(`${c.blue}[Gemini]${c.reset} ${msg}`),
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

function copyPrompts(destDir) {
  const files = getPromptFiles();
  for (const file of files) {
    fs.copyFileSync(path.join(PACKAGE_COMMANDS, file), path.join(destDir, file));
  }
  return files.length;
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

  const claudeInstalled = isInstalled('claude');
  const geminiInstalled = isInstalled('gemini');

  // Claude
  if (claudeInstalled) {
    ensureDir(GLOBAL_CLAUDE_COMMANDS);
    const count = copyPrompts(GLOBAL_CLAUDE_COMMANDS);
    log.claude(`${count} prompts installed → ~/.claude/commands/`);
  } else {
    log.warn('Skipping Claude — not installed');
  }

  // Gemini
  if (geminiInstalled) {
    ensureDir(GLOBAL_GEMINI_COMMANDS);
    const count = copyPrompts(GLOBAL_GEMINI_COMMANDS);
    log.gemini(`${count} prompts installed → ~/.gemini/commands/`);
  } else {
    log.warn('Skipping Gemini — not installed');
  }

  if (!claudeInstalled && !geminiInstalled) {
    log.error('No AI CLI tools found. Install at least one:');
    log.dim('Claude Code: npm install -g @anthropic-ai/claude-code');
    log.dim('Gemini CLI:  npm install -g @google/gemini-cli');
    process.exit(1);
  }

  console.log();
  log.info('Commands are available as slash commands in Claude Code and Gemini CLI.');
  log.dim('Example: /write-blog, /keyword-research, /robots-audit');
  console.log();
  log.info('To customize a prompt for a specific project:');
  log.dim('1. Run: seo-ai-tool init   (in your project folder)');
  log.dim('2. Copy the prompt file into .claude/commands/ or .gemini/commands/');
  log.dim('3. Edit it — local version takes priority over global');
  console.log();
}

function cmdUpdate() {
  log.title('Updating SEO AI Tool prompts...\n');

  let updated = false;

  if (fs.existsSync(GLOBAL_CLAUDE_COMMANDS)) {
    const count = copyPrompts(GLOBAL_CLAUDE_COMMANDS);
    log.claude(`${count} prompts updated in ~/.claude/commands/`);
    updated = true;
  }

  if (fs.existsSync(GLOBAL_GEMINI_COMMANDS)) {
    const count = copyPrompts(GLOBAL_GEMINI_COMMANDS);
    log.gemini(`${count} prompts updated in ~/.gemini/commands/`);
    updated = true;
  }

  if (!updated) {
    log.error('Not installed yet. Run: seo-ai-tool install');
    process.exit(1);
  }

  console.log();
}

function cmdInit() {
  log.title('Initializing local prompt overrides...\n');

  const overrideReadme = (claudeDir, geminiDir) => [
    '# Local SEO Prompt Overrides',
    '',
    'Files placed here override the global seo-ai-tool prompts for this project only.',
    '',
    '## Priority order',
    '',
    '```',
    '.claude/commands/write-blog.md     ← local (wins)',
    '~/.claude/commands/write-blog.md   ← global (fallback)',
    '```',
    '',
    '```',
    '.gemini/commands/write-blog.md     ← local (wins)',
    '~/.gemini/commands/write-blog.md   ← global (fallback)',
    '```',
    '',
    '## Usage',
    '',
    '1. Copy the prompt you want to customize:',
    '   cp ~/.claude/commands/write-blog.md .claude/commands/',
    '   cp ~/.gemini/commands/write-blog.md .gemini/commands/',
    '2. Edit it to match your client or project needs',
    '3. Commit these folders to git so your team shares the same prompts',
    '',
    'Run `seo-ai-tool list` to see all available prompts.',
  ].join('\n');

  // Claude
  const localClaudeCommands = path.join(process.cwd(), '.claude', 'commands');
  if (fs.existsSync(localClaudeCommands)) {
    log.warn('.claude/commands/ already exists — skipping');
  } else {
    ensureDir(localClaudeCommands);
    log.claude(`Created .claude/commands/`);
  }

  // Gemini
  const localGeminiCommands = path.join(process.cwd(), '.gemini', 'commands');
  if (fs.existsSync(localGeminiCommands)) {
    log.warn('.gemini/commands/ already exists — skipping');
  } else {
    ensureDir(localGeminiCommands);
    log.gemini(`Created .gemini/commands/`);
  }

  // Write shared README into .claude/commands/
  const readmePath = path.join(localClaudeCommands, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, overrideReadme());
    log.success('Created .claude/commands/README.md');
  }

  console.log();
  log.info('Next steps:');
  log.dim('• Claude: cp ~/.claude/commands/write-blog.md .claude/commands/');
  log.dim('• Gemini: cp ~/.gemini/commands/write-blog.md .gemini/commands/');
  log.dim('• Edit the file, then commit both folders to git');
  console.log();
}

function cmdList() {
  const files = getPromptFiles();

  const categories = {
    'Technical SEO':   ['robots-audit', 'sitemap-audit', 'schema-generator', 'canonical-audit', 'hreflang-audit', 'cwv-diagnosis', 'redirect-map', 'internal-links', 'server-logs', 'crawl-budget'],
    'On-Page SEO':     ['title-rewrite', 'headings-audit', 'alt-text', 'content-brief', 'content-refresh', 'faq-generator', 'thin-content', 'meta-descriptions'],
    'Content & Links': ['keyword-research', 'write-blog', 'pillar-page', 'topic-cluster', 'content-calendar', 'comparison-article', 'outreach-email', 'brand-mention-pitch', 'press-release', 'backlink-article'],
    'Local SEO':       ['gbp-description', 'local-landing', 'review-responses'],
    'E-commerce':      ['product-description', 'category-page', 'product-schema'],
    'Analytics':       ['ga4-traffic', 'ga4-conversions', 'ga4-content', 'gsc-indexing', 'gsc-links', 'gsc-performance'],
    'Reporting':       ['competitor-analysis', 'content-gap', 'monthly-report', 'penalty-diagnosis'],
    'GEO / LLM':       ['geo-audit', 'geo-rewrite', 'geo-entity', 'geo-visibility', 'geo-citations'],
    'Agents':          ['agent-monthly-report'],
  };

  log.title(`SEO AI Tool v1.1 — ${files.length} prompts available\n`);

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

  const files = getPromptFiles();
  let removed = 0;

  // Claude
  if (fs.existsSync(GLOBAL_CLAUDE_COMMANDS)) {
    for (const file of files) {
      const dest = path.join(GLOBAL_CLAUDE_COMMANDS, file);
      if (fs.existsSync(dest)) { fs.unlinkSync(dest); removed++; }
    }
    log.claude(`Removed prompts from ~/.claude/commands/`);
  }

  // Gemini
  if (fs.existsSync(GLOBAL_GEMINI_COMMANDS)) {
    for (const file of files) {
      const dest = path.join(GLOBAL_GEMINI_COMMANDS, file);
      if (fs.existsSync(dest)) { fs.unlinkSync(dest); removed++; }
    }
    log.gemini(`Removed prompts from ~/.gemini/commands/`);
  }

  if (removed === 0) {
    log.warn('No prompts found to remove');
  } else {
    log.success(`Removed ${removed} prompt files total`);
  }

  console.log();
}

function cmdHelp() {
  console.log(`
${c.bold}seo-ai-tool${c.reset} v1.1 — Professional SEO prompts for Claude Code and Gemini CLI

${c.bold}USAGE${c.reset}
  seo-ai-tool <command>

${c.bold}COMMANDS${c.reset}
  ${c.cyan}install${c.reset}      Copy all prompts globally (Claude + Gemini)
  ${c.cyan}update${c.reset}       Update global prompts to the latest version
  ${c.cyan}init${c.reset}         Create local override folders in the current project
  ${c.cyan}list${c.reset}         List all available prompts by category
  ${c.cyan}check${c.reset}        Check if Claude Code and Gemini CLI are installed
  ${c.cyan}uninstall${c.reset}    Remove all prompts from global directories
  ${c.cyan}help${c.reset}         Show this help message

${c.bold}EXAMPLES${c.reset}
  ${c.dim}# Install globally for both Claude and Gemini (do this once)${c.reset}
  seo-ai-tool install

  ${c.dim}# Set up local overrides for a client project${c.reset}
  cd ~/projects/my-client
  seo-ai-tool init

  ${c.dim}# Customize a prompt for Claude only${c.reset}
  cp ~/.claude/commands/write-blog.md .claude/commands/write-blog.md

  ${c.dim}# Customize a prompt for Gemini only${c.reset}
  cp ~/.gemini/commands/write-blog.md .gemini/commands/write-blog.md

${c.bold}DOCS${c.reset}
  https://github.com/nikkos/seo-ai-tool
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
