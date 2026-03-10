---
title: "Validate Each Fact Always"
description: "A single user preference transformed Claude outputs from plausible to presentation-ready. The highest-ROI configuration change I've made."
pubDate: "Oct 01 2025"
tags: ["methods"]
---

Early in my work with Claude, I noticed a pattern: outputs sounded authoritative but weren't verifiable. Statistics appeared without sources. Claims were plausible but not citable. I couldn't confidently use the work in executive presentations without spending 30-60 minutes fact-checking each output.

## The fix

I added one user preference in Claude settings:

> "Validate each fact always and make sure any claim or statement is supported by a relevant, accessible and valid source. Make sure all artifacts have a 'references' section in APA format."

That's it. One sentence.

## What changed

**Before:** "Most startups fail within the first few years, often due to poor planning."

"Most" = how many? "First few years" = 1? 3? 5? "Often" = what percentage? No sources to verify.

**After:** Specific percentages with named sources. Multiple independent sources cross-verifying. APA citations I can include directly in deliverables.

The shift wasn't just about citations. The rigor requirement seemed to improve reasoning overall. Vague claims got replaced with specific, sourced claims because you can't say "most" when you need to cite a number.

## Unexpected benefits

- Less back-and-forth asking "source?" on individual claims
- Executives see citations and trust the work more
- Built a reusable library of go-to sources for EdTech topics

## Where it falls short

- Training data has a cutoff, so very recent events may lack verifiable sources
- Sometimes cites sources behind paywalls
- Occasionally over-cites obvious common knowledge

## Refined version

I've since updated the preference to prioritize recent sources (last 2 years), request diverse source types (government, academic, industry), and flag claims where verification was uncertain.

This is the kind of AI practice that doesn't make for a flashy demo. It's a single settings change. But it's the difference between outputs you have to check and outputs you can use.
