---
title: "Designing a PM Operating System Around AI"
description: "How I built a system where Claude Code knows where I left off, what's blocked, and what decisions have been made, across every project."
pubDate: "Sep 01 2025"
tags: ["methods"]
---

The biggest problem with using AI across multiple projects isn't the AI. It's the context loss. Every new session starts from zero. You explain the project again, re-establish what's been decided, re-orient on what's blocked. The ramp-up time erodes the speed gains.

I designed a system to eliminate that.

## The architecture

Every project has a lightweight status framework: a set of markdown files that auto-load when a session starts. They contain the current state, key dates, a decision log, and stakeholder context.

Claude Code reads these files at session start. No ramp-up. No "let me catch you up." I open a project and pick up exactly where I left off.

## What's in them, specifically

- **Current status:** phase, what just happened, what's next, active blockers
- **Key dates:** upcoming deadlines, recurring cadences, milestone timelines
- **Decisions:** append-only log with rationale preserved, so I can revisit why I made a call, not just what I decided
- **People:** stakeholders, their priorities, last interaction, what they're waiting on

## A real session, before and after

Before the system: I'd open a project after a few days away and spend the first 15-20 minutes re-explaining context. "We're in the sixth sprint, the main deliverable is a landing page, one teammate gave feedback on the copy last week, another's user interviews are ongoing, and the go/no-go decision is in two weeks." By the time the AI was caught up, I'd already burned my best thinking energy on narration.

After: I open the project. The status files load automatically. The first message is about the work, not the context. One morning I opened a session, said "what's blocking the landing page launch?", and got an answer that referenced the right sprint, the right stakeholders, and the right blockers. No ramp-up. No re-orientation.

Over a three-month project, that's hundreds of minutes saved. But the bigger win is continuity. Decisions made early in the project are still visible twenty sessions later. Nothing falls through the cracks because everything is written down in a place the system reads every time.

## What connects to what

The system integrates the tools I already use: task management, messaging, meeting notes, documents, and cloud storage. All accessible through a single natural language layer. I don't switch between apps to get a status update. I ask a question and the system pulls from whatever source has the answer.

## The design decision that matters most

Shared state. The status files aren't just for the AI. They're for me. The discipline of writing down what happened and what's next after every session has made me more organized than any project management tool ever did. The AI reading it is a bonus. The practice of writing it is the real product.

## What this doesn't solve

The system handles information management and coordination. It doesn't handle stakeholder dynamics, relationship building, or the judgment calls that depend on reading the room. The system handles information. The human handles judgment.
