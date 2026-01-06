# Experiment: "Validate Each Fact Always" User Preference

> **Status:** Ongoing observation — Initial results are promising; continuing to validate across more use cases.

**Date:** October 2025 (ongoing)
**Hypothesis:** Setting a user preference requiring citation validation would transform Claude outputs from "plausible" to "presentation-ready"
**Initial Result:** Strong positive signal
**Verdict:** Preliminary success — needs more validation

---

## Setup

### The Problem
Early Claude outputs were helpful but risky:
- Claims sounded authoritative but weren't verified
- Statistics appeared without sources
- Couldn't confidently use outputs in executive presentations
- Required manual fact-checking that negated time savings

### The Intervention
Added this user preference in Claude settings:

> "Validate each fact always and make sure any claim or statement is supported by a relevant, accessible and valid source. Make sure all artifacts have a 'references' section in APA format."

### What I Expected
- More citations in outputs
- Slightly slower responses
- Possibly more hedging language

---

## Observations

### Before the Preference

**Sample output (paraphrased):**
> "Most startups fail within the first few years, often due to poor planning. AI tools can help entrepreneurs avoid common mistakes by providing structured guidance."

**Issues:**
- "Most" = how many exactly?
- "First few years" = 1? 3? 5?
- "Often due to poor planning" = what percentage? Says who?
- No sources to verify or cite

### After the Preference

**Sample output (paraphrased):**
> "According to the U.S. Small Business Administration (2024), 20% of new businesses fail within the first year, with this rate increasing to 50% by year five. The primary factor cited in 42% of failures is 'lack of planning or business model viability' (SBA, 2024). This aligns with Kauffman Foundation research (2023) showing that entrepreneurs who complete structured planning programs are 2.5x more likely to secure initial funding."

**Improvements:**
- Specific percentages with sources
- Multiple independent sources cross-verifying
- APA citations I can include in deliverables
- Claims I can confidently present to executives

---

## Analysis

### Why This Works

1. **Changes Claude's search behavior**
   - Without preference: Synthesizes from training data
   - With preference: Actively searches for verifiable sources

2. **Forces specificity**
   - Can't say "most" when you need to cite—have to find the actual number
   - Vague claims get replaced with specific, sourced claims

3. **Creates accountability**
   - Reader can verify any claim
   - AI "hallucinations" become obvious (if source doesn't exist or say what's claimed)

4. **APA format requirement**
   - Standardizes citation style
   - Makes outputs directly usable in professional documents
   - Signals "this is research-grade work"

### Unexpected Benefits

- **Better quality overall**: The rigor requirement seems to improve reasoning too
- **Faster iteration**: Less back-and-forth asking "source?" on individual claims
- **Stakeholder trust**: Executives see citations and trust the work more
- **Reusable references**: Built a library of go-to sources for EdTech topics

### Limitations Discovered

- **Recency lag**: Training data has a cutoff; very recent events may not have verifiable sources
- **Paywalled sources**: Sometimes cites sources behind paywalls I can't access
- **Over-citation**: Occasionally cites obvious common knowledge unnecessarily
- **Source availability**: Some cited sources no longer accessible (link rot)

---

## Observed Impact (Preliminary)

*These observations are based on initial use cases. Will continue tracking.*

| Metric | Before | After | Confidence |
|--------|--------|-------|------------|
| Outputs usable without fact-checking | ~30% | ~95% | Medium — limited sample |
| Time spent verifying claims | 30-60 min/output | 5-10 min/output | Medium |
| Confidence presenting to executives | Low | Higher | Subjective |
| Citation rate in deliverables | Rare | ~100% | High |

---

## What I'd Do Differently

1. **Add recency requirement**: "Prioritize sources from the last 2 years"
2. **Specify source types**: "Include government, academic, and industry sources"
3. **Request verification notes**: "Flag any claims that couldn't be independently verified"

---

## Refined Preference (Current Version)

> "Validate each fact always and make sure any claim or statement is supported by a relevant, accessible and valid source. Prioritize sources from the last 2 years. Include diverse source types: government, academic, industry, and nonprofit. Make sure all artifacts have a 'references' section in APA format. Flag any claims where verification was uncertain."

---

## Key Takeaway

This is the highest-ROI configuration change I've made. A single user preference transformed Claude from "helpful assistant" to "research partner I can trust."

If you do nothing else from this portfolio, do this.

---

---

## Still Testing

- [ ] Does this work equally well for different content types?
- [ ] Are there domains where citation requirements slow down useful outputs?
- [ ] How does this interact with creative/brainstorming tasks?

---

*This experiment began during the Vibe Entrepreneurship project. Continuing to observe across additional use cases.*
