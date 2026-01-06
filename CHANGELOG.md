# Changelog

All notable changes to this portfolio will be documented in this file.

This portfolio is a work in progress. Entries here track major additions, refinements, and learnings.

---

## [Unreleased]

### Added
- **rclone sync Data Loss Incident** - Documented failed automation attempt where `rclone sync` deleted 22,719 files from Google Drive. Key learning: use `copy` not `sync` for shared resources.

### To Add
- Additional prompting patterns (stakeholder feedback synthesis, decision frameworks)
- More experiments documenting iterations and failures
- Project artifacts as they reach shareable state
- Refined metrics as more data is collected

### To Refine
- Vibe case study (pending project outcomes)
- Preliminary metrics (pending additional validation)
- Methodology documentation (evolving with use)

---

## [0.3.0] - December 2025

### Added
- **MCP Integration Workflow** - Connected Claude.ai to Asana and Google Drive
- **Two-step update process** - Claude.ai collects data → Claude Code updates portfolio
- **Prompts library** - Ready-to-use prompts for weekly/monthly reviews
- **System architecture diagram** - Visual showing how tools connect

### Changed
- **PROCESS.md** completely rewritten for automated data collection
- Weekly review now starts in Claude.ai with MCP queries
- Milestone updates can be captured directly to Asana via Claude.ai

### Technical
- Asana MCP integration active
- Google Drive MCP integration active
- Notion MCP available (not yet utilized)

---

## [0.2.0] - December 2025

### Added
- **PROCESS.md** - Comprehensive update workflow
  - Source inventory (Claude chats, Asana, Drive, meetings)
  - Weekly and monthly review processes
  - Quality gates for portfolio content
  - Handling failed/abandoned approaches
- **raw/** folder structure for staging captures (gitignored)
- **Failed approach template** for documenting learnings from dead ends

### Changed
- README now references update process
- Changelog linked from README

---

## [0.1.0] - December 2025

### Added
- Initial repository structure
- README with portfolio overview and WIP framing
- **Case Studies**
  - Vibe Entrepreneurship Project (draft)
- **Prompting Patterns**
  - Systematic Landscape Analysis
  - Executive Summary Framework
  - Two-Phase Prompting (Theory → Execution)
- **Experiments**
  - "Validate Each Fact Always" user preference
  - Reconciling Conflicting Data Sources

### Notes
- All content reflects work in progress
- Metrics are preliminary and will be validated
- Case study outcomes pending project completion

---

## Version Numbering

- **0.x.x** — Work in progress, not ready for external sharing
- **1.0.0** — First version ready for portfolio presentation
- Major versions indicate significant additions or refinements

---

## How to Use This Log

When updating this portfolio:
1. Add changes under [Unreleased] as you work
2. When reaching a milestone, move unreleased items to a new version
3. Date each version
4. Note what's still in progress vs. complete

---

*This changelog helps track the evolution of the portfolio and provides transparency about what's finalized vs. in development.*
