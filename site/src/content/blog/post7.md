---
title: "Designing a PM Operating System Around AI"
description: "How I built a system where Claude Code knows where I left off, what's blocked, and what decisions have been made, across every project."
pubDate: "Sep 01 2025"
tags: ["methods"]
---

The biggest problem with using AI across multiple projects isn't the AI. It's the context loss. Every new session starts from zero. You explain the project again, re-establish what's been decided, re-orient on what's blocked. The ramp-up time erodes the speed gains.

I designed a system to eliminate that.

## The architecture

Every project has a lightweight status framework: a set of markdown files that auto-load when a session starts. They contain the current state (what's happening, what's blocked, who the stakeholders are), key dates, and a decision log.

Claude Code reads these files at session start. No ramp-up. No "let me catch you up." I open a project and pick up exactly where I left off.

## What connects to what

The system integrates five tools I already use: task management, messaging, meeting notes, documents, and cloud storage. All accessible through a single natural language layer. I don't switch between apps to get a status update. I ask a question and the system pulls from whatever source has the answer.

## The design decision that matters most

Shared state. The status files aren't just for the AI. They're for me. They force me to articulate what's happening, what I've decided, and why. That discipline of writing it down, even briefly, has made me a sharper PM regardless of whether AI reads it.

## What I track

- Current status and phase for each project
- Active decisions with rationale (append-only, so the reasoning history is preserved)
- Key dates and deadlines
- Stakeholder context
- What happened in the last session and what's next

## What this doesn't solve

The system handles information management and coordination. It doesn't handle stakeholder dynamics, relationship building, or the judgment calls that depend on reading the room. Those are still entirely human skills, and knowing that boundary is part of the design.
