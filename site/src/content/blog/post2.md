---
title: "Speed works until it works against you"
description: "An automated file sync tool wiped an entire Drive folder. What I learned about guardrails, manual control, and designing systems where speed doesn't kill."
pubDate: "Dec 01 2025"
tags: ["failures"]
---

I was connecting Claude Code to cloud storage as part of building my PM operations system. I set up `rclone sync` to mirror local files to Google Drive. The word "sync" sounded safe.

It wasn't. `rclone sync` makes the destination match the source exactly, including deletions. It wiped 22,719 files that existed only in Drive. One word difference between `sync` and `copy`, and I didn't read the docs carefully enough to catch it.

The automation worked perfectly. It just did exactly what I told it to do, which was the wrong thing. I was so excited about the possibilities that I was optimizing for speed without thinking about what happens when the speed works against you.

After that I redesigned every workflow around one principle: manual control over automation. Claude Code drafts, I review and push. No automated sync, manual confirmation for anything that touches shared systems. Every external-facing action requires a human checkpoint.

That principle runs through everything I build now. The failure wasn't that I used AI wrong, it was that I trusted automation without understanding the blast radius. Now I always ask: "What's the worst thing this could do if it works perfectly?"
