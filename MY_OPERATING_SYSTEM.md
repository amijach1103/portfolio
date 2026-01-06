# My Operating System: AI-Augmented PM Workflow

**Purpose:** Keep me organized, effective, and sane while upskilling in AI and delivering real work.

**Last Updated:** December 16, 2025

---

## Core Principles

1. **Automation serves delivery** - Don't optimize systems endlessly; ship the prototype
2. **One insight per week** - Capture learnings without creating documentation debt
3. **Separate terminals, separate contexts** - One project per terminal window
4. **Good enough beats perfect** - Move forward, iterate later

---

## Weekly Rhythm

### Monday: Plan (30 min)
- [ ] Review Asana board - what's due this week?
- [ ] Identify 3 priorities (write them down)
- [ ] Check blockers - anything waiting on others?
- [ ] Quick scan of Slack for anything urgent

**Prompt for Claude:**
> "Here are my priorities this week: [list]. What's the smallest first step for each?"

### Tuesday-Thursday: Build
- [ ] 2-3 hours deep work on prototype/pilot (block calendar)
- [ ] Process meetings and comms in batches
- [ ] Use Claude Code for building, Claude.ai for thinking

**Deep Work Rules:**
- No Slack during deep work blocks
- No automation improvements (it's good enough)
- Focus on WS4/WS5 deliverables only

### Friday: Reflect (30-45 min)
- [ ] Run session export: `~/scripts/export-claude-sessions.sh`
- [ ] Update Leadership Brief (if needed)
- [ ] Add one insight to Claude-Playbook
- [ ] Review: What moved forward? What spun wheels?
- [ ] Set up Monday's plan

**Friday Questions:**
1. What did I ship this week?
2. What did I learn about AI that's worth keeping?
3. What's the ONE thing that would make next week better?

---

## Tool Lanes (Stay in Your Lane)

| Tool | ONLY Use For | NOT For |
|------|--------------|---------|
| **Asana** | Tasks, deadlines, assignments | Long-form documentation |
| **Notion** | Decisions, knowledge, partner portal | Daily task tracking |
| **Slack** | Quick comms, automated digests | Decisions (move to Notion) |
| **Google Drive** | Documents, deliverables | Task tracking |
| **Claude Code** | Building, analyzing, automating | Open-ended exploration |
| **Claude.ai** | Thinking, drafting, brainstorming | File operations |

**Rule:** If you're doing something in the wrong tool, stop and move it.

---

## Terminal Setup

Keep three terminal tabs open:

```bash
# Tab 1: VE Discovery
cd ~/Projects/VE-Discovery && claude

# Tab 2: Newsletter
cd ~/Projects/Newsletter && claude

# Tab 3: Claude Playbook
cd ~/Projects/Claude-Playbook && claude
```

Each project gets its own Claude context. Don't mix.

---

## When I'm Stuck Protocol

```
1. Write the problem in ONE sentence
2. Ask Claude: "What are 3 ways to move forward on: [problem]"
3. Pick the SMALLEST action
4. Set a 25-minute timer
5. Do that one thing
6. Reassess
```

**If still stuck after 25 min:**
- Switch to a different task
- Or ask someone (Slack Angela, schedule time with stakeholder)
- Don't spin for hours

---

## Project Focus Areas

### VE-Discovery: Two Tracks

| Track | Current Focus | Status |
|-------|---------------|--------|
| **Operations** (automation) | DONE for now - revisit after pilot | ✅ Freeze |
| **Delivery** (prototype → pilot) | ACTIVE FOCUS | 🔄 In Progress |

**Rule:** No more automation work until prototype is testable.

### Newsletter
- Weekly cadence (Fridays)
- Already automated - just run the flow

### Claude-Playbook
- One update per week max
- Fed by automated session exports

---

## VE-Discovery Milestones

### Now: Prototype (WS4)
- [ ] Complete PROTOTYPE_BRIEF.md
- [ ] Build first testable version
- [ ] Internal testing (Angela, Brendan)
- [ ] Iterate based on feedback

### Next: Pilot (WS5)
- [ ] Define cohort criteria
- [ ] Recruit participants
- [ ] Create facilitator guide
- [ ] Run pilot
- [ ] Evaluate results

### Exit Criteria
See: `ws4-prototype/PROTOTYPE_BRIEF.md` and `ws5-pilot/PILOT_RUNBOOK.md`

---

## AI Upskilling System

### Inputs (Automatic)
- Daily session export runs at 6 PM
- Raw sessions saved to `Claude-Playbook/raw/chat-exports/auto/`

### Processing (Weekly - Friday)
- Review week's sessions (skim summaries)
- Extract ONE insight worth keeping
- Add to relevant Playbook section (prompting-patterns, experiments, etc.)

### Outputs (Monthly)
- Update case study if significant progress
- Refine prompting patterns that worked
- Archive what didn't work to experiments/

**Goal:** Steady improvement without documentation burden.

---

## Recurring Tasks to Add to Asana

Copy these to your Asana 🔧 Recurring Maintenance section:

| Task | Frequency | Day/Time |
|------|-----------|----------|
| Weekly planning | Weekly | Monday 9 AM |
| Friday reflection | Weekly | Friday 4 PM |
| Export Claude sessions | Weekly | Friday 4 PM |
| Update Leadership Brief | Bi-weekly | Friday (sprint end) |
| Claude-Playbook update | Weekly | Friday |
| Review tool usage (am I in the right lane?) | Monthly | First Monday |

---

## Emergency Resets

### When Overwhelmed
1. Close all tabs except one
2. Write down everything in your head (brain dump)
3. Pick ONE thing
4. Work on it for 25 minutes
5. Repeat

### When Behind on Everything
1. List all commitments with deadlines
2. Identify what's truly urgent vs. feels urgent
3. Communicate proactively if something will slip
4. Focus on highest-impact item only

### When Tools Feel Like Too Much
1. Ignore Notion for a week - it's not urgent
2. Use only Asana + Slack + Drive
3. Come back to optimization later
4. Shipping beats organizing

---

## Key Files Quick Reference

| Purpose | Location |
|---------|----------|
| Architecture overview | `VE-Discovery/ARCHITECTURE.md` |
| Prototype planning | `VE-Discovery/ws4-prototype/PROTOTYPE_BRIEF.md` |
| Pilot planning | `VE-Discovery/ws5-pilot/PILOT_RUNBOOK.md` |
| Session exports | `Claude-Playbook/raw/chat-exports/` |
| This document | `Claude-Playbook/MY_OPERATING_SYSTEM.md` |

---

## Review Cadence

- **Weekly:** Skim this doc during Friday reflection
- **Monthly:** Is this system working? Adjust what isn't.
- **Quarterly:** Major review - what's changed?

---

*The goal is progress, not perfection. When in doubt, ship something.*
