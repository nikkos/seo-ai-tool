# Contributing to seo-ai-tool

First off — thank you for taking the time to contribute. Every improvement, whether it's a typo fix, a better prompt, or a brand new command, makes this tool more useful for the entire SEO community.

---

## Ways to contribute

### 🐛 Report a bug
If a command produces wrong output, crashes, or behaves unexpectedly:

1. Open an [issue on GitHub](https://github.com/nikkos/seo-ai-tool/issues)
2. Use the title format: `[bug] /command-name — short description`
3. Include:
   - Which command you ran
   - What input you provided
   - What output you got
   - What you expected instead

---

### 💡 Suggest a new command
Have an SEO task that isn't covered yet?

1. Open an [issue on GitHub](https://github.com/nikkos/seo-ai-tool/issues)
2. Use the title format: `[new command] /command-name — short description`
3. Include:
   - What the command should do
   - What input the user would provide
   - What the output should look like
   - Why it would be useful

---

### ✍️ Improve an existing prompt
If you think a command could produce better, more accurate, or more structured output:

1. Fork the repository
2. Edit the relevant file in `commands/`
3. Test it inside Claude Code
4. Submit a pull request (see below)

---

### 📖 Improve the documentation
Spotted something unclear in the README or this file? Fix it directly and open a pull request. Documentation improvements are always welcome.

---

## How to submit a pull request

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/seo-ai-tool.git
cd seo-ai-tool

# 2. Create a new branch
git checkout -b improve/write-blog-prompt

# 3. Make your changes

# 4. Test your changes
#    Install your local version into Claude Code:
npm install -g .
seo-ai-tool install

#    Then open Claude Code and test the command you changed

# 5. Commit and push
git add .
git commit -m "Improve /write-blog prompt — add FAQ section output"
git push origin improve/write-blog-prompt

# 6. Open a pull request on GitHub
```

---

## Prompt file guidelines

All commands live in the `commands/` folder as `.md` files. When writing or editing a prompt, follow this structure:

```markdown
Role:
You are a [expert persona with specific credentials].

Objective:
[One clear sentence describing what this command delivers.]

Core Requirements:

1) [Requirement one]
2) [Requirement two]
...

---

$ARGUMENTS

If no input is provided above, respond with a short bullet list of exactly what this command needs from the user, then stop. Do not run the analysis.
```

**Rules to follow:**
- Keep the role focused — one expert persona per command
- Be specific in requirements — vague instructions produce vague output
- Always end with the `$ARGUMENTS` block and the no-input fallback
- No fluff — every requirement must affect the output
- Use plain English — avoid meta-commentary inside the prompt
- Test on real data before submitting

---

## Adding a new command

1. Create a new file in `commands/` named after the command (e.g. `image-seo.md`)
2. Follow the prompt structure above
3. Add the command to the relevant category table in `README.md` with:
   - Command name
   - What it does
   - What input it expects
4. Submit a pull request

**Naming rules:**
- All lowercase, words separated by hyphens
- Short and descriptive (`image-seo`, not `optimize-images-for-search-engines`)
- Should match what a user would intuitively type

---

## Need help?

Open an issue and ask. There are no stupid questions.

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
