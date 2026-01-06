# Portfolio Update Process

> **Purpose:** Define how to capture, validate, and document learnings from multiple sources into this portfolio.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUTOMATED DATA COLLECTION                    │
│                        (Claude.ai + MCP)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Claude.ai ←──MCP──→ Asana (Knowledge Base, Personal Board)    │
│           ←──MCP──→ Google Drive (Vibe folder, deliverables)   │
│           ←──MCP──→ Notion (if added later)                    │
│                                                                 │
│  Use Claude.ai to:                                              │
│  • Query what's new across all connected sources               │
│  • Create tasks directly in Asana                              │
│  • Search for specific deliverables in Drive                   │
│  • Generate summaries for portfolio updates                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                    MANUAL COLLECTION                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Granola (meeting notes)                                        │
│  └── Weekly export to raw/meeting-notes/ (manual copy)         │
│                                                                 │
│  Claude.ai chat history                                         │
│  └── Copy significant conversations to raw/chat-exports/       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                    PORTFOLIO UPDATES                            │
│                        (Claude Code)                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Claude Code (this repo)                                        │
│  • Receives summaries from Claude.ai (you paste)               │
│  • Updates case studies, patterns, experiments                 │
│  • Maintains changelog and version tracking                    │
│  • Keeps portfolio files accurate and current                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key Point:** Claude.ai and Claude Code don't connect directly. You bridge them by copying Claude.ai's output into Claude Code conversations.

---

## Source Inventory

### Automated Access (via Claude.ai MCP)

| Source | What's There | Claude.ai Can... |
|--------|--------------|------------------|
| **Asana - Knowledge Base** | 14+ documented learnings | Read tasks, create new ones, search |
| **Asana - Personal Board** | Active tasks, sprint work | Read progress, check completions |
| **Google Drive** | Vibe deliverables, research docs | Search files, read content |

### Manual Access

| Source | What's There | How to Capture |
|--------|--------------|----------------|
| **Granola** | Meeting notes | Weekly export → `raw/meeting-notes/` |
| **Claude.ai Chats** | Conversations, iterations | Copy relevant exchanges → `raw/chat-exports/` |
| **Feedback** | .docx comments, emails, Slack | Copy → `raw/feedback/` |

---

## Update Workflow

### Weekly Review (20-30 min, Fridays)

**Asana Task:** "Document Claude PM learnings (weekly)"

#### Step 1: Automated Collection in Claude.ai (10 min)

Open Claude.ai and run these prompts:

**Prompt 1 - Asana Knowledge Base:**
```
Look at my Asana project "Working with Claude - Knowledge Base" and:
1. List any tasks added or updated this week
2. Summarize key learnings captured
3. Note which ones are ready for full documentation
```

**Prompt 2 - Asana Personal Board:**
```
Check my Asana "Agueda" board and:
1. What Vibe tasks were completed this week?
2. Any Professional Development tasks done?
3. What's currently blocked or waiting?
```

**Prompt 3 - Google Drive:**
```
Search my Google Drive for files modified this week related to:
- Vibe project
- AI workflows
- Portfolio materials
List what you find with brief descriptions.
```

**Save Claude.ai's responses** - you'll use these in Step 3.

#### Step 2: Manual Collection (5 min)

- [ ] Export Granola notes from the week → `raw/meeting-notes/`
- [ ] Copy any significant Claude.ai conversations → `raw/chat-exports/`
- [ ] Save any feedback received → `raw/feedback/`

#### Step 3: Portfolio Update in Claude Code (10-15 min)

Open Claude Code in this repo and paste:

```
Here's my weekly summary from Claude.ai:

[Paste Claude.ai responses here]

And these manual captures:
- Meeting notes: [list any key meetings]
- Conversations: [note any significant chats]
- Feedback: [note any received]

Based on this, please:
1. Identify what should be added to the portfolio
2. Update relevant files (case studies, experiments, patterns)
3. Update the CHANGELOG
```

**Output:** Portfolio files updated, changelog current

---

### Monthly Deep Documentation (1-2 hours, end of month)

#### Step 1: Comprehensive Review in Claude.ai (20 min)

**Prompt:**
```
Review my Asana Knowledge Base project "Working with Claude - Knowledge Base" and:
1. List ALL tasks/learnings captured this month
2. Categorize them: prompting patterns, experiments, case study material
3. Identify which have enough detail for full documentation
4. Note any gaps - what's missing that should be captured?

Also check my Google Drive for any Vibe deliverables that could serve as portfolio artifacts.
```

#### Step 2: Deep Documentation in Claude Code (1+ hour)

Paste Claude.ai's findings and request:

```
Here's my monthly review from Claude.ai:

[Paste response]

Please:
1. Fully document the top 2-3 learnings ready for the portfolio
2. Update the Vibe case study with any new outcomes
3. Refine any experiments with additional data points
4. Update metrics where we have new evidence
5. Update CHANGELOG with this month's additions
```

#### Step 3: Quality Check

Review updated files against quality gates (below).

---

### Milestone Updates (as they occur)

**Triggers:**
- Major deliverable completed
- Stakeholder presentation done
- Decision made (go/no-go, pivot)
- Significant feedback received

**Immediate Capture in Claude.ai:**
```
I just [describe what happened].

Please:
1. Create a task in my Asana Knowledge Base capturing this learning
2. Include: what happened, outcome, what I learned
3. Tag it as [case-study / experiment / pattern] material
```

**Then in Claude Code:**
```
I just [describe milestone]. Claude.ai captured it in Asana.

Please update the relevant portfolio files:
- [Case study if outcome related]
- [Experiment if learning related]
- [Pattern if methodology related]
```

---

## Prompts Library for Claude.ai

Save these for quick access:

### Weekly Check-In
```
Review my Asana projects and Google Drive. What's new this week that's portfolio-worthy? Check:
- "Working with Claude - Knowledge Base" for new learnings
- "Agueda" board for completed tasks
- Drive for new/updated Vibe files
```

### Capture a Learning
```
Create a task in my Asana "Working with Claude - Knowledge Base" project:
- Title: [Learning title]
- Description: [Context, what I learned, how I'll use it]
- Tag as: [pattern / experiment / case-study]
```

### Find Evidence
```
Search my Google Drive for [specific deliverable or topic]. I need this as evidence for my portfolio case study on [topic].
```

### Progress Summary
```
Give me a summary of my Vibe project progress based on:
- Completed tasks in Asana
- Documents in my Drive Vibe folder
- Any recent updates

Format as: accomplishments, current status, next steps.
```

---

## Quality Gates

### Before Adding to Portfolio

**For Case Studies:**
- [ ] Clear problem statement?
- [ ] Approach documented (not just outcome)?
- [ ] Measurable outcomes (even preliminary)?
- [ ] AI's role clearly articulated?
- [ ] Limitations/failures included?
- [ ] Appropriately framed (WIP vs. complete)?

**For Prompting Patterns:**
- [ ] Used more than once?
- [ ] Template copy-paste ready?
- [ ] Real examples included?
- [ ] Limitations documented?

**For Experiments:**
- [ ] Hypothesis clear?
- [ ] Evidence included (even anecdotal)?
- [ ] Open questions identified?
- [ ] Honest about confidence level?

### Before Publishing Externally

- [ ] Confidentiality review (no proprietary details)
- [ ] Metrics validated (not just estimated)
- [ ] Outcomes confirmed (not just anticipated)
- [ ] Case studies have final results
- [ ] Removed WIP framing where appropriate

---

## Handling Different Scenarios

### When a Conversation Goes Nowhere

**In Claude.ai:**
```
Create a task in my Knowledge Base for a failed approach:
- Title: "Failed: [what I tried]"
- Description: What I was trying, why it didn't work, what I learned
```

**In Claude Code:** Document in experiments folder using failed-approach template.

### When Direction Changes

Capture the pivot in both systems - this shows adaptability.

### When Feedback Contradicts Your Approach

Document the tension - shows stakeholder management skills.

### When You Can't Share Details

Abstract the learning - focus on methodology over specifics.

---

## Folder Structure

```
Working with Claude/
├── raw/                    # Gitignored, working area
│   ├── chat-exports/       # Claude.ai conversations
│   ├── meeting-notes/      # Granola exports
│   ├── feedback/           # Comments, emails
│   └── document-analysis/  # Claude Code outputs
├── case-studies/           # Polished case studies
├── prompting-patterns/     # Documented patterns
├── experiments/            # Learnings and iterations
├── projects/               # Artifacts and deliverables
├── PROCESS.md              # This file
├── CHANGELOG.md            # Version history
└── README.md               # Portfolio overview
```

---

## Granola Workaround

Until you upgrade Granola or find an alternative:

**Weekly (every Friday):**
1. Open Granola
2. Copy notes from relevant meetings
3. Paste into `raw/meeting-notes/[DATE]_[meeting-topic].md`
4. Note any portfolio-worthy insights for Claude Code to process

**Remember:** Granola free tier has 14-day history limit. Export before notes disappear.

---

## Revision History

| Date | Change |
|------|--------|
| Dec 2025 | Added MCP integration workflow (Claude.ai + Asana + Drive) |
| Dec 2025 | Defined two-step process (Claude.ai → Claude Code) |
| Dec 2025 | Added prompts library for Claude.ai |
| Dec 2025 | Initial process documented |

---

*This process leverages Claude.ai's MCP integrations for automated data collection, with Claude Code handling portfolio file updates.*
