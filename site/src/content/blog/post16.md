---
title: "I stopped writing rules for the AI and started building checks"
description: "My instructions file kept growing and the rules in it kept getting broken. The fix was not a better-worded rule."
pubDate: "Aug 31 2026"
tags: ["methods"]
---

I keep an instructions file for the AI I work with. It is where I put the things I do not want to see go wrong again. Do not state a claim about a person without a source. Do not infer someone's role from a document title. Do not describe a finished project in the present tense.

The file kept getting longer, and the rules in it kept getting broken anyway.

For a while I assumed I was writing them badly, so I rewrote them. Shorter. More specific. In capitals, eventually, which tells you how that was going. The rules got clearer and the violations kept happening, which is when I finally accepted that the problem was not the wording.

An instruction is a request. The model reads it along with everything else in the context, weighs it against the thing I have just asked for, and complies most of the time. Most of the time is fine for a preference. It is not fine for a rule that exists because being wrong is expensive.

So I stopped treating them as instructions. The rule about unsourced claims is now something that fires before such a claim can be written down at all. The rule about checking a claim against its source is now a separate step that reads the source and comes back with a verdict, not a rewrite, because a rewrite hides the disagreement and a verdict makes me look at it.

I still keep the file. Plenty of things cannot be enforced mechanically, and a sentence in a file is better than nothing.

But the ones that matter now run whether the model complies or not. That is the whole difference, and it took me an embarrassing number of rewrites to see it.
