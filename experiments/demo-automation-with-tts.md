# Experiment: Automated Demo Runner with TTS

**Date:** 2026-01-20 to 2026-01-23 (Sprint 4, Week 1)
**Hypothesis:** Building an automated demo tool would be faster than manually coordinating typing, voiceover, and screen recording
**Result:** Built a fully automated demo runner in ~2 hours that handles typing, transitions, scrolling, and optional voiceover automatically
**Verdict:** Success — with significant learnings about TTS timing

---

## Context

**Week Overview (Jan 20-23):**
This was a delivery sprint for the Gates Foundation presentation (Feb 10). The week's work culminated in a demo recording on Friday Jan 23. (Monday Jan 19 was MLK Day holiday.)

| Day | Work Completed |
|-----|----------------|
| Jan 20 (Tue) | Sprint 4 planning, V3 prototype review |
| Jan 21 (Wed) | AI Coach 5-7-5 Framework integration, demo script updates |
| Jan 22 (Thu) | Script tightening, story-driven narrative rewrite |
| Jan 23 (Fri) | Demo runner built, demo recorded, documentation |

I needed to record a 2-minute demo video for the Gates Foundation presentation. The demo had to show:
- A mobile prototype with multiple screens
- User typing inputs
- AI responses appearing
- Scrolling to highlight relevant content
- Voiceover narration throughout

**The problem:** Coordinating all of this manually while screen recording was overwhelming. I couldn't type, read voiceover, scroll the phone, and click "next" at the right times.

---

## Setup

Asked Claude Code to build a demo runner HTML tool that would:
1. Auto-advance through scenes with a timer
2. Handle typing animation automatically
3. Show voiceover cues so I know what to say
4. Display the prototype in a phone frame

**Initial implementation:** Fixed-duration timers for each scene (10s, 8s, 3s, etc.)

---

## Iterations & Observations

### Iteration 1: Basic Auto-Advance
**What happened:** Built a working demo runner with countdown, auto-advance, and voiceover cues.
**Problem:** Still had to coordinate reading voiceover with fixed timers.

### Iteration 2: Added Text-to-Speech
**Hypothesis:** Browser TTS could read the voiceover automatically.
**What happened:** TTS worked, but scenes advanced before speech finished.
**Learning:** Fixed timing doesn't sync with variable speech duration.

### Iteration 3: Dynamic TTS Timing
**Solution:** Changed to event-driven timing — only advance after `onend` event fires.
```javascript
utterance.onend = () => {
    setTimeout(callback, 1200); // Pause after speech
};
```
**Result:** Voiceover never gets cut off. Demo pacing matches speech naturally.

### Iteration 4: Screen-Voiceover Sync Issue
**Problem:** Voiceover said "She asks what AI can't do..." but the screen didn't show her message yet.
**Solution:** Split scenes so visuals match narration. Added `addUserQuestion()` before `addBoundariesAnswer()`.
**Learning:** Visuals must match exactly what's being said — even slight mismatches feel wrong.

### Iteration 5: Auto-Scrolling
**Problem:** Phone showed top of page when voiceover was discussing content at the bottom.
**Solution:** Added `scrollTo` property to each scene with element IDs.
```javascript
if (step.scrollTo) {
    scrollToElement(step.scrollTo, step.scrollDelay || 300);
}
```
**Learning:** Auto-scroll makes the demo feel guided and intentional.

### Iteration 6: Layout Refinement
**Problem:** Controls and voiceover cues blocked the phone view.
**Solution:** Sidebar layout — all controls on left, phone unobstructed on right.
**Learning:** The demo subject (phone) should always be fully visible.

---

## Analysis

### Why This Worked

1. **Automation eliminated coordination** — Instead of juggling 4 things simultaneously, I click one button and everything runs.

2. **Dynamic timing > Fixed timing** — TTS speech rate varies by voice and system. Waiting for `onend` is the only reliable approach.

3. **Progressive enhancement** — Started simple (timer-based), then added TTS, then added scrolling. Each iteration was usable.

4. **Claude Code excels at this** — Rapid prototyping of web tools with iterative refinement is a sweet spot.

### Why TTS Timing Was Tricky

Browser speech synthesis is asynchronous and unpredictable:
- Different voices speak at different speeds
- Same voice varies by system
- `onend` doesn't always fire (needed `onerror` fallback)
- Need padding between utterances (1.2s worked well)

### The Story-Driven Reframe

Midway through, I realized the voiceover felt "choppy" because it was labeling features ("This is Constructive Challenge"). Reframing to follow a character ("Destiny") through her journey made the narrative flow naturally.

---

## What I'd Do Differently

1. **Start with story-driven narrative** — Don't write feature-focused voiceover first
2. **Build TTS timing dynamically from the start** — Fixed durations are a waste of time
3. **Plan visual-voiceover sync upfront** — Map exactly what's on screen for each sentence
4. **Test with multiple voices early** — Voice selection affects pacing significantly

---

## Key Takeaways

### For Demo Automation
- **Auto-scrolling is essential** — viewers should see exactly what's being discussed
- **Dynamic timing beats fixed timing** — especially with variable-length content
- **Sidebar layout for controls** — keep the demo subject unobstructed

### For Claude Code Workflows
- **Rapid iteration works** — 6 major iterations in ~2 hours
- **Ask for specific changes** — "make the demo only advance when speech finishes" is better than "fix the timing"
- **Test after each change** — small iterations compound faster than big rewrites

### For TTS Integration
- **Always wait for `onend`** — never assume fixed speech duration
- **Add padding between utterances** — 1-1.5 seconds feels natural
- **Provide voice selection** — system voices vary dramatically in quality

---

## Artifacts

**Demo Runner URL:** https://amijach1103.github.io/VE-prototype/demo-runner.html

**Features Built:**
| Feature | Purpose |
|---------|---------|
| Auto-advance with countdown | Hands-free demo execution |
| TTS voiceover | Automated narration |
| Dynamic timing | Syncs with speech duration |
| Auto-scrolling | Shows relevant content |
| Voice selection | Choose best available voice |
| Sidebar layout | Phone always visible |

**Time Investment:** ~2 hours for complete tool (6 iterations)

**Outcome:** Demo recorded successfully on first attempt after tool was complete.

---

## When to Use This Approach

**Good fit:**
- Multi-step product demos requiring coordination
- Demos with specific timing requirements
- Recording without live audience (pre-recorded)
- Mobile/web prototypes that can be embedded

**Not a fit:**
- Live presentations (TTS voice may not match desired tone)
- Demos requiring improvisation
- Non-web prototypes

---

---

## Broader Week Learnings (Sprint 4, Week 1)

### AI Coach Framework Integration (Jan 21)

Before building the demo runner, we integrated the AI Coach 5-7-5 Framework into the prototype:

**5-7-5 Framework:**
- 5 Coach Principles (flexibility, facilitate clarity, support peers, protect resources, measure impact)
- 7 Behavior Patterns (constructive challenge, specific actions, cross-domain insight, etc.)
- 5 Hard Boundaries (what AI explicitly cannot do)

**Key Learning:** Explicitly stating what AI *can't* do builds trust. Each prototype moment now acknowledges a boundary:
- Moment 1: "I can't replace real conversations"
- Moment 2: "You know your community better than I do"
- Moment 3: "Find other entrepreneurs"
- Moment 4: "I can't make you do these actions"
- Moment 5: "What AI can't give me" (all 5 boundaries)

### Story-Driven Narrative (Jan 22)

The original demo script used feature-focused voiceover ("This is Constructive Challenge"). Reframing to follow "Destiny" — a home health aide exploring a meal prep business — made the narrative flow naturally.

**Learning:** Story-driven > feature-driven for demos. Follow a character through their journey rather than naming features.

### Rapid Iteration with Claude Code

Throughout the week, Claude Code enabled:
- 6+ prototype file modifications in one session
- 8 git commits in one day
- Complete demo tool built in ~2 hours
- Immediate testing after each change

**Learning:** The compound effect of rapid iteration. Small changes, tested quickly, add up to major progress in hours rather than days.

---

## Full Week Artifacts

| Artifact | Purpose | URL/Location |
|----------|---------|--------------|
| V3 Prototype | Mobile-first AI-guided business planning | https://amijach1103.github.io/VE-prototype/ |
| Demo Runner | Automated demo with TTS | https://amijach1103.github.io/VE-prototype/demo-runner.html |
| Poster | Gates presentation visual | https://amijach1103.github.io/VE-prototype/poster.html |
| Demo Video | 2-min recorded demo | Recorded Jan 23 |
| Sprint 4 Summary | Week documentation | `_project_docs/Sprint_4_Summary.md` |

---

*This experiment demonstrates how Claude Code can rapidly build productivity tools for specific workflows. The demo runner saved hours of coordination and eliminated retakes. The broader week shows how AI-assisted development enables delivery sprints that would typically take 2-3x longer.*
