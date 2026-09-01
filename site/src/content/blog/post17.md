---
title: "I use one model to check the other one's work"
description: "Claude writes it, Codex reads it. Not because either is better, but because they are wrong about different things."
pubDate: "Aug 31 2026"
tags: ["experiments"]
---

Most of what I build now, I build with Claude Code. It is fast and it is good and after a year of daily use I have a reasonable sense of where it is strong.

The problem with that sense is that it is built from the same place the work comes from. I am reading Claude's output with a set of expectations that Claude shaped. If it has a blind spot, there is a decent chance I share it by now.

So I started running Codex over what Claude writes. Not as a second opinion in the polite sense, where you ask if it looks fine and get told yes. As an actual second pass, on the code, with no context about what the first model was trying to do.

It catches things. Not usually big things. An edge case that will not fire, a check that looks like it validates something and does not, a variable doing two jobs. The kind of error that survives review because it reads correctly and the reviewer is skimming for correctness rather than for meaning.

What I did not expect is how differently they are wrong. Claude tends to be over-thorough and will build something more general than the problem needs. Codex tends to be literal and will do exactly what I asked, including the part I asked for by mistake. Those are different failure shapes, which is the whole reason the check works. Two models with the same failure shape would just agree with each other.

I do not think this is a durable finding. Models change, and the specific differences I am describing may not survive the next few releases. But the general move seems right: if you are going to let something write for you, do not also let it be the only thing that reads.
