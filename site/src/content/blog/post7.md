---
title: "The memory file I built for Claude Code"
description: "Every new session started from zero. So I built a system where Claude Code already knows where I left off."
pubDate: "Sep 01 2025"
tags: ["methods"]
---

Even before Claude Code, I kept written records of my work: sprint notes, decision logs, what I've tried and what I haven't. So when I started using it seriously, the friction wasn't that I didn't know where things stood. It was that the model didn't, and every new session I was spending fifteen to twenty minutes catching it up. "We're in the sixth sprint, the main deliverable is a landing page, one teammate gave feedback on the copy last week, another's user interviews are ongoing, and the go/no-go decision is in two weeks." By the time the model was caught up, I'd burned the best thinking energy of the day on narration.

The reason I could see exactly what the model was missing was that I already had most of it written somewhere. The gap was format and location, not discipline. So I built a set of markdown files that auto-load when a session starts: current status, key dates, a decision log, stakeholder context. Claude Code reads them automatically. One morning I opened a session, asked "what's blocking the landing page launch?", and got an answer that referenced the right sprint, the right stakeholders, and the right blockers. No ramp-up.

Over a three-month project, the time saved adds up. But the bigger shift was continuity across sessions. Decisions I made in sprint 2 were still visible in sprint 6. Nothing fell through the cracks because everything I knew was written down in a place the system reads every time.

What surprised me is how much writing for the model has sharpened how I write for myself. The status files are written for two readers now, and that's made both reads better.
