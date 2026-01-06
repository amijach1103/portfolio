# Experiments

The messy middle—where learning actually happens. This folder documents iterations, failed attempts, and discoveries that shaped my AI-assisted PM workflows.

---

## Why Document This?

AI-forward companies value candidates who:
- Understand AI limitations through experience
- Can articulate *why* something didn't work
- Iterate systematically rather than randomly
- Know when to abandon an AI approach

This folder is proof of that understanding.

---

## Experiments Index

### Configuration & Setup

| Experiment | Hypothesis | Result |
|------------|------------|--------|
| ["Validate Each Fact Always"](./validate-each-fact-always.md) | User preference for citations would transform output quality | **Success** — highest ROI change I've made |

### Strategic Thinking

| Experiment | Hypothesis | Result |
|------------|------------|--------|
| [Reconciling Conflicting Data](./reconciling-conflicting-data.md) | "Both/and" thinking beats "either/or" for conflicting sources | **Success** — with nuance on when to apply |

### Automation & Tools

| Experiment | Hypothesis | Result |
|------------|------------|--------|
| [rclone sync Data Loss Incident](./rclone-sync-data-loss-incident.md) | `rclone sync` would safely mirror local files to Google Drive | **Failed** — sync deleted 22,719 Drive-only files; use `copy` not `sync` |

### To Document

- [ ] Board structure evolution (time-based → initiative-based → hybrid)
- [ ] Prompt iteration on landscape analysis (5 versions)
- [ ] When AI synthesis failed (stakeholder dynamics case)

---

## Experiment Template

```markdown
# Experiment: [Title]

**Date:** YYYY-MM-DD
**Hypothesis:** What I expected to happen
**Result:** What actually happened
**Verdict:** Success / Partial / Failed

---

## Setup

What I tried and how

## Observations

What happened, with examples

## Analysis

Why did this happen? What did I learn?

## What I'd Do Differently

Refinements for next time

## Key Takeaway

The one thing to remember
```

---

*Failures and iterations are more valuable than polished success stories. They show how I actually think.*
