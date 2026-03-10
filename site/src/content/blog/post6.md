---
title: "Building a Demo in 2 Hours (6 Iterations)"
description: "I needed to record a product demo but couldn't coordinate typing, scrolling, voiceover, and screen recording simultaneously. So I built a tool."
pubDate: "Jan 01 2026"
tags: ["experiments"]
---

I had a 2-minute demo video to record for a stakeholder presentation. The demo needed to show a mobile prototype with user inputs, AI responses, scrolling, and voiceover narration. Coordinating all of that manually while screen recording was overwhelming.

So I asked Claude Code to build a demo runner. Two hours and six iterations later, I had a fully automated tool and recorded the demo on the first attempt.

## How it evolved

**Iteration 1:** Basic auto-advance with countdown timers. Worked, but fixed timers didn't sync with voiceover.

**Iteration 2:** Added browser text-to-speech. TTS worked, but scenes advanced before speech finished.

**Iteration 3:** Switched to event-driven timing. Scenes only advance after the speech `onend` event fires. This was the breakthrough. Fixed timing doesn't sync with variable speech duration.

**Iteration 4:** Fixed a sync issue where the voiceover was describing something the screen hadn't shown yet. Even slight mismatches between audio and visuals feel wrong to viewers.

**Iteration 5:** Added auto-scrolling so the phone view always shows what's being discussed.

**Iteration 6:** Moved controls to a sidebar so the demo subject (the phone) is always fully visible.

## What I learned

**Dynamic timing beats fixed timing.** TTS speech rate varies by voice and system. Waiting for the `onend` event is the only reliable approach.

**Story-driven beats feature-driven.** Midway through, I realized the voiceover felt choppy because it was labeling features ("This is [feature name]"). Reframing it to follow a character through their journey made the narrative flow naturally.

**Progressive enhancement works.** Each iteration was usable on its own. I could have stopped at iteration 3 and still had a working tool. The later iterations refined it.

## The broader point

This is the kind of task where AI-assisted development shines: a specific, well-defined problem that benefits from rapid iteration. I didn't need a production-grade tool. I needed something that worked well enough to record one demo. Two hours, six iterations, done.
