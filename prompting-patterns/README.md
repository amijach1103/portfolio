# Prompting Patterns

Reusable prompt templates developed over 3+ months of AI-assisted product management work. Each pattern includes the template, when to use it, and real examples.

---

## Patterns Index

### Research & Analysis

| Pattern | Use Case | Time Savings |
|---------|----------|--------------|
| [Landscape Analysis](./landscape-analysis.md) | Market research, competitive intelligence, go/no-go decisions | ~85% |
| [Evidence-Based Recommendations](./evidence-based-recommendations.md) | Validating intuitions with research | 3-4 hours |

### Executive Communication

| Pattern | Use Case | Time Savings |
|---------|----------|--------------|
| [Executive Summary Framework](./executive-summary.md) | C-level presentations, board updates, stakeholder decisions | ~75% |

### Process & Productivity

| Pattern | Use Case | Time Savings |
|---------|----------|--------------|
| [Two-Phase Prompting](./two-phase-prompting.md) | Moving from recommendations to implementation | Eliminates paralysis |

---

## Core Configuration

Before using any pattern, set this user preference in Claude:

> "Validate each fact always and make sure any claim or statement is supported by a relevant, accessible and valid source. Make sure all artifacts have a 'references' section in APA format."

This single setting transforms outputs from "plausible" to "presentation-ready." See [the experiment](../experiments/validate-each-fact-always.md) for details.

---

## Pattern Template

When adding new patterns, use this structure:

```markdown
# Pattern Name

**Use When:** [Scenarios where this helps]
**Avoid When:** [Counter-indications]
**Time Investment:** [How long it takes]
**Time Savings:** [Compared to traditional approach]

---

## The Template

[The actual prompt, copy-paste ready]

---

## Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `[VAR]` | What it is | Sample value |

---

## Example Output

[What good looks like]

---

## Tips & Pitfalls

[Refinement suggestions, common mistakes]

---

## Real-World Application

[How you've used this, with outcomes]
```

---

## Patterns To Document

These patterns are used but not yet fully documented:

- [ ] Stakeholder Feedback Synthesis (extracting insights from document comments)
- [ ] Decision Framework Development (when to use sections vs. projects)
- [ ] Research-Backed Alternatives ("what does research say about this?")
- [ ] Competitive Deep Dive (following up on landscape analysis)
- [ ] Meeting Prep & Synthesis

---

*These patterns have been refined through actual PM work and represent tested, production-ready approaches.*
