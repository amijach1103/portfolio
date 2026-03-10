---
title: "When AI Deleted 22,719 Files"
description: "An automated file sync tool wiped an entire Drive folder. What I learned about guardrails, manual control, and designing systems where speed doesn't kill."
pubDate: "Dec 01 2025"
tags: ["failures"]
---

This is the story of my most expensive AI-adjacent mistake, and why it made my entire operating system better.

## What happened

I was connecting Claude Code to cloud storage as part of building my PM operations system. I set up `rclone sync` to mirror local files to Google Drive. The word "sync" sounded safe.

It wasn't. `rclone sync` makes the destination match the source *exactly*. Including deletions. It wiped 22,719 files that existed only in Drive.

## Why it happened

I moved too fast. I was excited about the automation possibilities and didn't read the docs carefully enough. `sync` vs `copy`: one word, massive difference.

The deeper cause: I was optimizing for speed without building in guardrails. The automation worked perfectly. It just did exactly what I told it to do, which was the wrong thing.

## What I changed

After that incident, I redesigned every workflow with a core principle: **manual control over automation.**

- Claude Code drafts; I review and push
- No automated sync. Manual confirmation for any action that touches shared systems.
- Speed with guardrails, not speed at all costs

This principle now runs through my entire operating system. Every workflow has checkpoints. Every external-facing action requires human confirmation.

## The lesson

The failure wasn't that I used AI wrong. It was that I trusted automation without understanding the blast radius. Now I always ask: "What's the worst thing this could do if it works perfectly?"

Documenting this failure openly is part of the practice. It builds credibility, prevents repeating mistakes, and shows that I take the risks of AI seriously, not just the benefits.
