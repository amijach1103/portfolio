# [Abandoned]: Newsletter Automation Experiments

> **Status:** Documented learnings from multiple automation attempts

**Date:** December 2025
**Category:** Tool Use | Process
**Time Invested:** ~1 week across multiple iterations
**Verdict:** Pivoted to simpler approach

---

## What I Was Trying To Do

Automate the weekly AI Landscape newsletter workflow to reduce Friday production time from ~30 minutes to near-zero. The vision was:

```
Save articles during week → Fully automated newsletter → Send
```

## The Approaches Tried

### 1. Anthropic API Automation

**What:** Python scripts to call Claude API directly for newsletter generation

**Files created:**
- `newsletter_generator.py` - Called Claude API with two modes:
  - "full" mode: Pre-fetch article content, send to Claude
  - "urls-only" mode: Send URLs, let Claude analyze
- `generate_newsletter.py` - Orchestration script
- `article_fetcher.py` - BeautifulSoup web scraper for articles

**Why abandoned:**
- Claude Code does the same thing with more flexibility
- API script couldn't "see" paywalled content Claude Code sometimes can
- No ability to iterate or ask follow-up questions
- Added complexity without adding value

### 2. Notion Publishing Integration

**What:** Auto-publish newsletter to Notion as an archive

**Files created:**
- `publish_to_notion.py` - Convert markdown to Notion blocks, create page
- `publish.sh` - Shell wrapper

**Technical approach:**
- Used `notion-client` Python library
- Converted markdown → Notion block types (heading_1, heading_2, paragraphs, dividers)
- Required Notion token and parent page ID in `.env`

**Why abandoned:**
- Integration didn't work reliably
- Markdown-to-Notion conversion was lossy
- Newsletter archive wasn't actually needed
- Added maintenance burden without clear benefit

### 3. Article Web Scraping

**What:** Automatically fetch and parse article content from URLs

**Files created:**
- `article_fetcher.py` - BeautifulSoup scraper
- `article_parser.py` - Extract articles from tracker markdown

**Why abandoned:**
- Many sites block scrapers or have paywalls
- Content extraction was inconsistent
- Claude Code with WebFetch handles this better
- Manual URL passing works fine

---

## What Actually Works

The winning workflow is much simpler:

```
Chrome Extension → ./import.sh → Manual Claude Code prompt → ./send.sh → Send!
```

**What survived:**
- Chrome extension (one-click article saving)
- `import.sh` / `import_articles.py` (import from extension)
- `send.sh` / `create_outlook_draft.py` (create Outlook draft)
- `AI Newsletter Tracker.md` (central tracking file)
- Prompt template in tracker (copy-paste to Claude Code)

**Friday time: ~10 minutes** (not zero, but acceptable)

---

## Why Simpler Won

| Approach | Pros | Cons |
|----------|------|------|
| **Full automation** | Hands-off | Brittle, can't iterate, black box |
| **Hybrid (current)** | Flexible, can adjust on the fly | 10 min Friday investment |

The "10 minutes on Friday" isn't wasted time—it's:
- Quality control (catch errors before sending)
- Personal touch (write "My Take" section)
- Iteration (adjust based on what Claude generates)

---

## Key Learnings

1. **Start manual, automate pain points**
   - Don't automate the whole workflow upfront
   - Identify where manual steps actually hurt
   - Chrome extension + import saved real time; API generation didn't

2. **Claude Code > Claude API for iterative work**
   - API is fire-and-forget
   - Claude Code allows conversation, refinement
   - For creative work, interaction matters

3. **Notion isn't always the answer**
   - Integration complexity vs. actual need
   - Email archive serves the same purpose
   - Don't add tools just because you can

4. **Web scraping is fragile**
   - Every site structures content differently
   - Paywalls and bot detection
   - Claude's built-in web access is more reliable

---

## What I'd Do Differently

1. **Test the simplest version first** - Should have tried manual Claude Code prompting before writing API scripts

2. **Question the end goal** - "Full automation" sounded good but wasn't necessary

3. **Delete faster** - Abandoned code sat around creating confusion

---

## Files to Delete (Cleanup)

**Safe to remove (not used in current workflow):**
- `scripts/publish_to_notion.py`
- `scripts/newsletter_generator.py`
- `scripts/article_fetcher.py`
- `scripts/article_parser.py`
- `scripts/prepare_prompt.py`
- `publish.sh`
- `generate.sh`

**Keep:**
- `scripts/import_articles.py`
- `scripts/create_outlook_draft.py`
- `scripts/generate_html.py` (optional HTML export)
- `import.sh`
- `send.sh`
- `email.sh`

---

## Was This Worth Documenting?

- **Shows:** Knowing when to simplify, iteration over perfection
- **Prevents:** Over-engineering automation in future projects

---

*Sometimes the best automation is knowing what not to automate.*
