# Two-Phase Prompting: Theory → Execution

**Use When:**
- You're stuck in analysis paralysis
- You need both "what should I do" AND "how do I do it"
- Setting up new systems, processes, or tools
- The task has research and implementation components

**Avoid When:**
- You already know the approach and just need execution
- The task is purely creative (single-phase works better)
- Time pressure requires immediate action

**Time Investment:** 15-30 minutes (both phases)
**Value:** Eliminates the gap between recommendation and action

---

## The Pattern

Most people stop at Phase 1 (getting recommendations) and then struggle to implement. This pattern ensures you get from theory to concrete deliverables.

### Phase 1: Theory
Ask for research-backed recommendations.

```
How should I [organize/approach/structure] [TOPIC]?

Context:
- Current situation: [what exists now]
- Goal: [what I'm trying to achieve]
- Constraints: [time, resources, tools]

Please provide:
- Research-backed recommendations (with citations if possible)
- Pros/cons of different approaches
- Your recommended approach and why
```

### Phase 2: Execution
Once you have a recommendation you agree with:

```
Follow the implementation steps for [RECOMMENDED APPROACH].

Provide:
- Specific tasks in sequence
- Templates or examples I can use immediately
- Setup instructions if tools are involved
- Timeline estimate for each step
```

---

## Real Example: Knowledge Base Setup

### Phase 1 Prompt
```
How should I organize a knowledge base for documenting my AI-assisted PM workflows?

Context:
- Currently using Asana for task management
- Have 14 learnings documented informally
- Goal: Portfolio-ready documentation, also useful for daily reference
- Will grow to 50+ items over time

What structure and approach do you recommend?
```

### Phase 1 Output (Summary)
> **Recommendation:** Create a separate Asana project (not a section on your personal board) with 6 category-based sections.
>
> **Rationale:**
> - Scalability: Will grow to 50+ items
> - Portfolio value: Showcaseable as standalone asset
> - Different cadence: Continuous capture vs. sprint-based work
> - Searchability: Complex categorization needs
>
> **Proposed sections:**
> 1. Quick Captures
> 2. Prompt Engineering Best Practices
> 3. Research Workflows
> 4. Project Management Use Cases
> 5. Thinking Partnership Examples
> 6. Tool Integrations

### Phase 2 Prompt
```
Follow the implementation steps for the separate Asana project approach.

I need:
- Step-by-step setup instructions
- Template for documenting each learning
- Weekly review process
- Getting started guide I can reference
```

### Phase 2 Output (Summary)
> **Setup Steps:**
> 1. Create new Asana project "Working with Claude - Knowledge Base"
> 2. Set to List view (better for reference material)
> 3. Create 6 sections manually (in order above)
> ...
>
> **Learning Documentation Template:**
> ```
> Task Name: [Category]: [Specific Learning]
> Description:
> - Context: When/why this came up
> - The Learning: What I discovered
> - Application: How I use this now
> - Evidence: Results or examples
> ```
>
> **Weekly Review Process:**
> - Every Friday, 15 minutes
> - Review week's Claude conversations
> - Identify 2-3 patterns
> - Create tasks with key insights
> - Elaborate 1-2 using full template

---

## Why This Works

### The Gap It Solves

| Phase 1 Only | Phase 1 + Phase 2 |
|--------------|-------------------|
| "You should use a separate project" | "Here's how to create it, step by step" |
| "Categorize by type" | "Here are the 6 categories with definitions" |
| "Document regularly" | "Here's a 15-minute Friday routine" |
| "Use a template" | "Here's the template, copy-paste ready" |

### Psychological Benefit
- Phase 1 satisfies the "am I doing this right?" anxiety
- Phase 2 eliminates the "but how do I actually start?" barrier
- Combined, they prevent analysis paralysis AND implementation stall

---

## Variations

### For Tool Decisions
**Phase 1:** "What tool should I use for [TASK]? Compare options."
**Phase 2:** "Walk me through setting up [CHOSEN TOOL] for my use case."

### For Process Design
**Phase 1:** "What's the best practice for [PROCESS]? What does research say?"
**Phase 2:** "Create a step-by-step SOP I can follow and share with my team."

### For Strategic Decisions
**Phase 1:** "What are my options for [DECISION]? Help me think through tradeoffs."
**Phase 2:** "I'm going with [OPTION]. Create an implementation plan with milestones."

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Skipping Phase 1 | You might implement the wrong thing efficiently |
| Stopping at Phase 1 | Recommendations without execution = shelf-ware |
| Combining into one prompt | Separation ensures you can evaluate before committing |
| Not providing context | Phase 2 needs specifics about your situation |

---

## Key Phrase

The magic words for Phase 2:

> **"Follow the implementation steps"**

This phrase signals to Claude that you want:
- Concrete, sequential actions
- Ready-to-use templates
- Specific instructions (not principles)
- Deliverables you can act on immediately

---

*This pattern emerged from noticing that I often got great recommendations but then stalled on implementation. The explicit two-phase structure solved that.*
