# AI-Assisted PM Workflows: Summary

> **Purpose:** Quick reference of established workflows for working with Claude. Shareable overview for demonstrating AI integration capabilities.

---

## At a Glance

| Workflow | Use Case | Key Benefit |
|----------|----------|-------------|
| **Claude Code as PM** | Daily task management | AI as coworker (recommended start) |
| Systematic Landscape Analysis | Market research, competitive intel | ~85% time reduction |
| Two-Phase Prompting | Moving from research to action | Eliminates analysis paralysis |
| Executive Summary Framework | C-level presentations | Decision-ready outputs |
| Validate Each Fact Always | All research outputs | Presentation-ready with citations |
| Reconciling Conflicting Data | Strategic decisions | Better synthesis than either/or |
| Portfolio Update Process | Knowledge capture | Automated data collection |

---

## Workflow Details

### 1. Claude Code as PM (Recommended Starting Point)

**What it is:** Using Claude Code as your project manager through conversational commands and MCP integrations.

**Why start here:** This is the most accessible workflow - everyone does task management. It directly demonstrates the "AI as coworker" concept that was the #1 priority in our team survey.

**Required Setup:**
- Claude Enterprise account
- Claude Code (terminal interface)
- Asana MCP connection
- Slack MCP connection (optional)

**The Architecture:**
```
                    YOU
                     │
                     │ Conversational commands
                     ▼
            ┌─────────────────┐
            │   CLAUDE CODE   │
            │   (Your PM)     │
            └────────┬────────┘
                     │
       ┌─────────────┼─────────────┐
       │             │             │
       ▼             ▼             ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   ASANA     │ │   LOCAL     │ │   SLACK     │
│   (MCP)     │ │   FILES     │ │   (MCP)     │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Common Commands:**

| You Say | Claude Does |
|---------|-------------|
| "What's due this week?" | Reads Asana, summarizes deadlines |
| "Write a status update" | Compiles from Asana + files, saves locally |
| "Mark the WS1 task complete" | Updates Asana directly |
| "What's blocked?" | Checks Asana for blocked tasks |
| "Draft leadership brief" | Creates formatted brief |

**Daily Workflow (5-10 min):**
1. Open Claude Code in project directory
2. "What's due today?"
3. Work on tasks
4. "Update Asana: [task name] is complete"
5. "Write a quick status update" (if needed)

**Weekly Workflow (15-20 min):**
1. "Summarize what I accomplished this week"
2. "What's coming up next week?"
3. "Draft the weekly brief for leadership"
4. Copy to Google Docs/Slack manually

**Design Principles:**
- Single control point: Claude Code is your PM interface
- No automated sync: Manual control over what gets shared
- You stay in control: Updates happen when you ask
- Simple to understand: Easy to know what's running

**Real Example (Vibe Entrepreneurship Project):**
```
Me: "Claude, write a leadership brief"
  │
  ▼
Claude Code:
  1. Reads Asana for task status
  2. Reads local files for recent work
  3. Drafts brief in markdown
  4. Saves to local file
  │
  ▼
Me: Copy to Google Doc or email manually
```

**Lessons Learned:**
- Start with Asana read/update before trying complex automation
- Manual sharing prevents accidental data issues
- The "PM" framing helps adoption ("my AI PM" vs "my AI tool")

**Failure Case (What NOT to Do):**
An attempt to automate file sync with `rclone sync` deleted 22,719 files. Key lesson: Keep it simple. Manual control > automated risk.

Full architecture: `~/Projects/VE-Discovery/ARCHITECTURE.md`

---

### 2. Systematic Landscape Analysis

**What it is:** Structured research methodology for comprehensive market/competitive analysis.

**The Process:**
1. 10-15 targeted web searches (not random browsing)
2. 50+ sources analyzed (90% from last 2 years)
3. Source diversity: government, academic, industry, nonprofit
4. Cross-verification of key statistics
5. Complete APA citations throughout

**Output Structure:**
- Executive Summary
- Detailed findings by research area
- Competitive Matrix
- Strategic Recommendations
- Key Questions for Further Exploration
- Full References (APA format)

**Results:** Reduces research time from 2-3 weeks to 3-4 hours while maintaining academic rigor.

**Used for:** Vibe Entrepreneurship project - analyzed 50+ sources to inform strategic recommendation.

---

### 3. Two-Phase Prompting (Theory → Execution)

**What it is:** A pattern for moving from recommendations to concrete action.

**The Process:**

**Phase 1 - Theory:**
```
"How should I [organize/approach/structure] [TOPIC]?
What does research say? What are best practices?"
```
→ Get research-backed recommendations

**Phase 2 - Execution:**
```
"Follow the implementation steps for [CHOSEN APPROACH].
Give me specific tasks, templates, and setup instructions."
```
→ Get concrete deliverables

**Why it works:**
- Phase 1 satisfies "am I doing this right?" anxiety
- Phase 2 eliminates "but how do I start?" barrier
- Prevents both analysis paralysis AND implementation stall

**Used for:** Knowledge base setup, process design, tool decisions.

---

### 4. Executive Summary Framework

**What it is:** Structure for presenting recommendations to executives.

**The Formula:**
```
Tension → Recommendation → Rationale → Implications → Next Steps
```

**Structure:**
1. **Tension** (2-3 sentences): Frame the competing paths
2. **Recommendation** (1 sentence, bold): State your position
3. **Rationale** (3-5 bullets): Evidence-based support
4. **Implications** (2-3 bullets): Financial, timeline, resource impact
5. **Next Steps** (2-3 specific actions): What you need from them

**Key insight:** Executives want decisions, not options. Take a stance.

**Used for:** CEO presentation on Vibe strategic direction - achieved executive buy-in.

---

### 5. "Validate Each Fact Always" Configuration

**What it is:** A Claude user preference that transforms output quality.

**The Setting:**
> "Validate each fact always and make sure any claim or statement is supported by a relevant, accessible and valid source. Make sure all artifacts have a 'references' section in APA format."

**Impact:**

| Before | After |
|--------|-------|
| "Most startups fail in first few years" | "20% fail within year one (SBA, 2024)" |
| Plausible but unverified | Presentation-ready with citations |
| Required manual fact-checking | Directly usable in executive presentations |

**Why it works:** Changes Claude's behavior to actively search for verifiable sources rather than synthesizing from training data.

**Used for:** All research outputs, landscape analyses, strategic recommendations.

---

### 6. Reconciling Conflicting Data Sources

**What it is:** A thinking pattern for when data sources disagree.

**The Approach:**

Instead of picking one source over another, ask:
```
"What would it mean if BOTH data sources are valid?
Could they be measuring different dimensions?"
```

**Framework:**
1. What is each source actually measuring?
2. Could these be different stages/dimensions?
3. Is there a frame where both are true?
4. What would a "both/and" approach look like?

**Example:**
- Survey said: Educational product (students want to learn)
- Landscape said: Operational product (market opportunity)
- Synthesis: They're measuring different journey stages → Phased approach

**Used for:** Vibe strategic recommendation - phased hybrid strategy instead of binary choice.

---

### 7. Portfolio Update Process (MCP-Enabled)

**What it is:** Automated system for capturing and documenting AI-assisted work.

**Architecture:**
```
Claude.ai (with MCP integrations)
├── Reads Asana → Project progress, tasks
├── Reads Google Drive → Deliverables, documents
└── Creates tasks → Capture learnings directly

        ↓ (you copy summary)

Claude Code (this repo)
├── Updates case studies
├── Updates experiments
└── Maintains changelog
```

**Weekly Process (20-30 min Fridays):**
1. Query sources in Claude.ai (10 min)
2. Manual captures - Granola, chats (5 min)
3. Update portfolio in Claude Code (10-15 min)

**Used for:** This portfolio - systematic capture of learnings and methodologies.

---

## How These Workflows Connect

```
Daily Operations (Start Here)
└── Claude Code as PM (task management, status updates)
        ↓
Research Phase
├── Systematic Landscape Analysis (gather data)
├── Validate Each Fact Always (ensure quality)
└── Reconciling Conflicting Data (synthesize insights)
        ↓
Decision Phase
├── Two-Phase Prompting (move to action)
└── Executive Summary Framework (present recommendation)
        ↓
Documentation Phase
└── Portfolio Update Process (capture learnings)
```

**Recommended Learning Path:**
1. **Week 1-2:** Claude Code as PM (daily task management)
2. **Week 3-4:** Add Landscape Analysis or Executive Summary (as needed)
3. **Month 2+:** Full workflow integration

---

## Demonstrated Outcomes

| Metric | Result |
|--------|--------|
| Research time reduction | ~85% (3-4 hours vs 2-3 weeks) |
| Sources per analysis | 50+ with citations |
| Project delivery | 2 weeks vs typical 6-8 weeks |
| Citation rate | 100% in research outputs |
| Executive buy-in | Achieved on strategic recommendations |

---

## Key Differentiators

**This isn't "I use ChatGPT."** This is:

1. **Systematic methodologies** - Repeatable, documented processes
2. **Evidence-based outputs** - Every claim validated, every recommendation cited
3. **Measured outcomes** - Time savings, quality improvements tracked
4. **Critical thinking** - Knowing when AI helps vs. when it doesn't
5. **Knowledge capture** - Continuous documentation of learnings

---

## Quick Reference: When to Use What

| Situation | Workflow |
|-----------|----------|
| **Daily task management** | **Claude Code as PM** (start here) |
| Need market/competitive research | Landscape Analysis |
| Have recommendations, need action plan | Two-Phase Prompting |
| Presenting to executives | Executive Summary Framework |
| Any research output | Validate Each Fact Always |
| Data sources disagree | Reconciling Conflicting Data |
| End of week/month | Portfolio Update Process |

---

*These workflows have been developed through 3+ months of AI-assisted product management work at WGU Labs.*
