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

**After:** "According to the U.S. Bureau of Labor Statistics, approximately 20% of new businesses fail within their first year, and about 50% fail within five years (BLS, 2023). A CB Insights analysis of 101 startup post-mortems found that 'no market need' was the top reason (35%), followed by 'ran out of cash' (29%) and 'not the right team' (23%)."

Every claim is checkable. I can put the second version in a stakeholder deck without spending 30 minutes verifying it first.

## Where it changed a real decision

I was preparing a brief on market size for an entrepreneurship platform targeting underserved populations. Without the validation preference, the initial output cited a market size figure that sounded right but traced back to a blog post citing a report that no longer existed. With the preference active, the output flagged that the most commonly cited figure couldn't be independently verified and offered three alternative data points from government sources that could.

That distinction matters when a senior leader asks "where did this number come from?" in a meeting.

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
