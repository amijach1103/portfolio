# [Failed]: rclone sync to Google Drive - Data Loss Incident

> **Status:** Documented learning from automation failure

**Date:** 2025-12-17
**Category:** Tool Use | Automation
**Time Invested:** ~3 hours (setup) + 2 hours (recovery)
**Verdict:** Failed - Resulted in data loss, required recovery

---

## What I Was Trying To Do

Set up automatic synchronization between a local project directory (`~/Projects/Discovery/`) and a Google Drive shared folder so that:
1. Local edits would automatically appear in Drive for team access
2. Claude Code could work on local files, with changes syncing to the team

This was part of a "Claude Code as PM" architecture where Claude would manage local files and Drive would serve as the team-accessible location.

## The Approach

1. **Tool selected:** rclone (installed via Homebrew)
2. **Command used:** `rclone sync` with hourly cron job
3. **Configuration:**
   ```bash
   rclone sync "$SOURCE" "$DEST" \
       --exclude ".DS_Store" \
       --exclude "*.tmp" \
       --exclude ".git/**"
   ```
4. **Cron schedule:** `0 * * * *` (hourly)

## What Happened

The `rclone sync` command **deleted 22,719 files and 13,523 directories** from Google Drive that didn't exist in the local folder.

**Timeline:**
- Dec 16, 4:25 PM - First sync ran, uploaded local files to Drive
- Dec 16-17 - Multiple syncs ran hourly
- Dec 17, 8:25 AM - Sync started deleting Drive-only files
- Dec 17, ~11:00 AM - User discovered files missing from Drive

**Files deleted included:**
- `Rob-Ken_Materials/` - 22,604 files (historical Quatere archive)
- Various Google Docs that existed only in Drive
- Other team-created content

**Root cause:** The local folder was a *subset* of what existed in Drive. `rclone sync` makes the destination match the source exactly - including deletions.

## Why It Didn't Work

- [x] Wrong tool for the job
- [ ] Poorly framed problem
- [ ] AI limitations
- [x] Missing context or information
- [x] Misaligned with actual need

**Specific failures:**

1. **Wrong command:** Used `sync` instead of `copy`
   - `rclone sync` = make destination identical to source (deletes extras)
   - `rclone copy` = only add files, never delete

2. **Didn't understand the data landscape:** The Drive folder contained files that were never downloaded locally (Ken's historical archives). I assumed local = complete copy of Drive.

3. **No safety measures:**
   - No `--dry-run` test first
   - No backup before running
   - No `--backup-dir` flag to preserve deleted files

4. **Shared drive trash behavior:** Files deleted from shared drives go to shared drive trash (not personal trash), which wasn't immediately obvious.

## Recovery

**What worked:**
```bash
# List trashed files
rclone ls "gdrive:Project-Folder" --drive-trashed-only

# Copy from trash to recovery folder
rclone copy "gdrive:path/to/folder" "gdrive:_RECOVERED/folder" --drive-trashed-only
```

**What couldn't be recovered via rclone:**
- Native Google Docs (show as `-1` size in trash)
- These required manual restore from Drive trash UI

**Recovery results:**
- 9,959 files (10.67 GB) recovered via rclone
- Google Docs restored manually from shared drive trash
- Total recovery time: ~2.5 hours

## What I Learned

1. **`sync` vs `copy` is critical:**
   - `sync` = dangerous for shared resources
   - `copy` = safe, additive only
   - Always use `copy` unless you truly want deletion

2. **Test with `--dry-run` first:**
   ```bash
   rclone sync source dest --dry-run
   ```
   This shows what WOULD happen without doing it.

3. **Use `--backup-dir` for safety:**
   ```bash
   rclone sync source dest --backup-dir dest/_backups/$(date +%Y%m%d)
   ```
   Moves deleted files to backup instead of deleting.

4. **Shared drives have separate trash:**
   - Access via Drive UI: Shared Drive > Trash
   - Files recoverable for 25 days
   - rclone can copy FROM trash with `--drive-trashed-only`

5. **Know your data landscape:**
   - Before syncing, understand what exists in BOTH locations
   - Don't assume local = complete copy
   - Map out what's source-of-truth for what

6. **Native Google Docs can't be synced:**
   - rclone can't download/upload native Google Docs
   - They show as `-1` size
   - Requires Google Drive API or manual handling

## What I'd Do Differently

1. **Use `rclone copy` not `sync`** for any shared resource
2. **Run `--dry-run` before any new sync configuration**
3. **Start with manual runs** before setting up cron
4. **Audit both locations** before syncing
5. **Set up `--backup-dir`** as safety net
6. **Consider one-way sync only** - local as source of truth, Drive as read-only mirror

## Better Architecture

Instead of bidirectional sync, use:

```
LOCAL (source of truth)
    │
    │ rclone copy (one-way, additive)
    ▼
GOOGLE DRIVE (read-only mirror for team)
```

Or for true collaboration:
- Use Google Drive as source of truth
- Download specific files to local when needed
- Don't automate uploads that could overwrite team work

## Was This Worth Documenting?

- **Shows:** Understanding of automation risks, incident response, recovery procedures
- **Prevents:** Future data loss from sync misconfigurations
- **Demonstrates:** Ability to diagnose, recover, and learn from failures

---

## Quick Reference: Safe rclone Commands

```bash
# SAFE: Copy only (never deletes)
rclone copy source dest

# SAFE: See what would happen
rclone sync source dest --dry-run

# SAFER SYNC: Backup before delete
rclone sync source dest --backup-dir dest/_backups/$(date +%Y%m%d)

# RECOVERY: List trashed files
rclone ls "remote:path" --drive-trashed-only

# RECOVERY: Copy from trash
rclone copy "remote:path" "remote:_recovered" --drive-trashed-only
```

---

*Failed approaches are data. This one cost 2+ hours of recovery but taught invaluable lessons about sync vs copy semantics.*
