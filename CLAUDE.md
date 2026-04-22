# Speccon TAP Project - Claude Code Instructions

## Core Rules

### Rule: Auto-Startup Sequence
**Status: ACTIVE - ALWAYS RUN AT SESSION START**

On EVERY new session or context resume, automatically load these files in order BEFORE doing any task work. Do NOT wait for the user to ask:

1. `.claude/skills/session-resume/last-session.json` → Restore working context (~50 tokens)
2. `.claude/skills/task-journal/journal.md` → Check pending tasks and known issues (~100 tokens)
3. `.claude/skills/smart_context/cache/index.json` → Project overview (~100 tokens)

Then inform the user briefly: what the last task was, any open issues, and ask if they want to continue or start fresh.

### Rule: Auto-Save Before Context Loss
**Status: ACTIVE - ALWAYS RUN BEFORE COMPACTION**

Before context compaction or at session end:
1. Save current state to `.claude/skills/session-resume/last-session.json`
2. Update `.claude/skills/task-journal/journal.md` with any completed tasks or new issues

### Rule: Generic-First Design
**Status: ACTIVE - CRITICAL RULE - APPLIES TO ALL CREATED ARTIFACTS**

When creating ANY skill, agent, rule, hook, utility, or reusable artifact:

1. **NEVER hardcode** project-specific paths, names, frameworks, or conventions
2. **ALWAYS auto-detect** the technology stack, project structure, and conventions by scanning
3. **ALWAYS use caches** to store detected patterns — the skill scans once, then reads from cache
4. **Design for portability** — if the `.claude/skills/` folder is copied to another project, every skill must work by rescanning that new project
5. **Separate skill logic from project data** — SKILL.md contains the generic scanner logic, cache.md/cache.json contains the project-specific results

**Test question before saving any skill:** "If I drop this into a completely different project (e.g., Python/Django, Node/Express, Flutter), will it auto-detect and adapt, or will it break?" If it would break, rewrite it to be generic.

### Rule: Concise Mode
**Status: ACTIVE**

1. **Act, don't narrate** — Do the work first, summarize after. Don't describe what you're about to do in detail.
2. **Report results, not process** — Say "Fixed: added missing DI registration" not "Let me read the file... now I'll search for... I found that..."
3. **One-line status per step** — When working through a checklist, one line per item is enough.
4. **Skip obvious explanations** — Don't explain what `useQuery` does or what a controller is. The user knows the codebase.
5. **Tables over paragraphs** — Use tables for comparisons, lists of files, or skill summaries.
6. **Max 3 sentences** for reporting a completed task unless the user asks for detail.

### Rule: Lessons Learned Check
**Status: ACTIVE**

Before creating any new feature files:
1. Load `.claude/skills/lessons-learned/lessons.md`
2. Check for relevant prevention steps
3. Apply them to avoid repeating known mistakes

After encountering any bug or mistake:
1. Fix the issue
2. Add a new lesson to `lessons.md` with symptom, root cause, and prevention

---

## Persistent Commands

### Command: Smart Context Loading
**Status: ACTIVE** - Token-optimized context management.

**Instructions:**
1. Load `.claude/skills/smart_context/cache/index.json` at session start (~70 lines)
2. Follow `.claude/skills/smart_context/skill.md` rules for loading context
3. Load feature-specific files ONLY when user mentions that feature
4. Use Grep before Read - find exact location, then read only that section
5. Never pre-load entire directories "just in case"

**Context Loading Priority:**
1. Index file (always) → 2. Grep for keywords → 3. Read specific functions → 4. Expand if needed

### Command: Backend Patterns Reference
**Status: ACTIVE** - Pre-indexed .NET backend conventions.

**Instructions:**
When creating or modifying backend C# code (controllers, services, entities, DTOs):
1. Load `.claude/skills/backend-patterns/SKILL.md` for instant access to all code conventions
2. Follow the patterns exactly — do NOT re-read JobsController.cs, JobService.cs, etc. for reference
3. Use the Registration Checklist (section 6) to ensure nothing is missed
4. Skip `EnterPlanMode` for backend CRUD features when the pattern is standard

**This eliminates the need to re-explore pattern files every session.**

### Command: Frontend Patterns Reference
**Status: ACTIVE** - Pre-indexed React/frontend conventions.

**Instructions:**
When creating or modifying frontend React/TypeScript code (containers, components, hooks, services):
1. Load `.claude/skills/frontend-patterns/SKILL.md` for instant access to all code conventions
2. Follow the patterns exactly — do NOT re-read existing containers/hooks for reference
3. Use the Checklist (Phase 5) to ensure nothing is missed
4. Skip `EnterPlanMode` for frontend CRUD features when the pattern is standard

**This eliminates the need to re-explore pattern files every session.**

### Command: Architecture Scanner
**Status: ACTIVE** - Unified FE/BE layer detection.

**Instructions:**
When working on a task that spans frontend AND backend:
1. Load `.claude/skills/architecture-scanner/SKILL.md` to determine which layer a file belongs to
2. Use it to load the correct patterns skill (backend-patterns or frontend-patterns)
3. The scanner integrates with the project map to provide FE↔BE mappings

### Command: Session Resume
**Status: ACTIVE** - Cross-session context persistence.

**Instructions:**
1. At session start: Load `.claude/skills/session-resume/last-session.json` (~30 lines)
2. Use it to know what was being worked on, which files were modified, and any open issues
3. At session end or before compaction: Save current state to `last-session.json`

### Command: Task Journal
**Status: ACTIVE** - Persistent task log across sessions.

**Instructions:**
1. At session start: Load `.claude/skills/task-journal/journal.md` for pending tasks and known issues
2. After completing a task: Update journal (move to Completed, add summary)
3. When a blocker is found: Add to Known Issues with severity
4. When user mentions future work: Add to Backlog

### Command: File Index
**Status: ACTIVE** - Instant feature-to-file lookup.

**Instructions:**
When user mentions a feature name:
1. Load `.claude/skills/file-index/index.md` (~150 lines) to get exact file paths
2. Read the specific file needed — no grep/glob required
3. If a feature is missing from the index, grep for it and add it

**Session Startup Sequence (in order):**
1. `session-resume/last-session.json` → What was I doing? (~50 tokens)
2. `task-journal/journal.md` → What's pending? (~100 tokens)
3. `smart_context/cache/index.json` → Project overview (~100 tokens)
4. `file-index/index.md` → Feature file paths (load on demand)
5. Pattern caches → Load only when creating/modifying code

### Command: Build Check
**Status: ACTIVE** - Auto-compile/type-check after file changes.

**Instructions:**
After creating or modifying source files:
1. Load `.claude/skills/build-check/cache.json` to get build commands
2. Run the appropriate build/type-check command (backend or frontend)
3. If build fails, auto-fix straightforward errors and re-build (max 3 attempts)
4. Report result: pass or list of remaining errors

**When to run:** After completing a multi-file feature, NOT after every single file.
**When to skip:** Non-compiled changes (.md, .json, .txt, .css), or user says "skip build".

### Command: Post-Creation Verification
**Status: ACTIVE** - Verify all registrations after creating new features.

**Instructions:**
After creating new backend feature files (entity, service, controller):
1. Load `.claude/skills/post-creation-verify/cache.json` for registration points
2. Grep each registration file to verify the new feature is registered
3. Auto-fix any missing registrations (DI, repository, DbContext, routes)
4. Run BEFORE build-check

**Workflow:** Create files → post-creation-verify → build-check → report

### Command: Function Extract
**Status: ACTIVE** - Read only specific functions from large files.

**Instructions:**
When you need ONE function from a file that is 300+ lines:
1. Use function-index (in pattern caches) or grep to find the line number
2. Read only start-5 to start+80 lines (adjust by language)
3. Do NOT read the entire file unless the function is very large or the file is small (<100 lines)

### Command: Cache Refresh
**Status: ACTIVE** - Keep caches fresh after file changes.

**Instructions:**
After creating, deleting, or renaming source files:
1. Determine which caches are affected (see `.claude/skills/cache-refresh/SKILL.md`)
2. Incrementally update affected caches (add/remove entries)
3. On session start: quick staleness check (compare cache dates)

### Command: Lessons Learned
**Status: ACTIVE** - Error pattern memory.

**Instructions:**
1. Before creating features: Load `.claude/skills/lessons-learned/lessons.md` for prevention steps
2. After fixing bugs: Add new lesson with symptom, root cause, and prevention
3. When build errors occur: Search lessons for matching symptoms before investigating

### Command: Import Graph
**Status: ACTIVE** - Dependency tracking for shared files.

**Instructions:**
When modifying a shared type, interface, or service:
1. Load `.claude/skills/import-graph/graph.json`
2. Check which files depend on the file being modified
3. Update dependent files if the change is breaking

### Command: Test Map
**Status: ACTIVE** - Targeted test running.

**Instructions:**
After modifying source files:
1. Load `.claude/skills/test-map/map.json` to find relevant tests
2. Run targeted tests instead of the full suite
3. Report results

### Command: API Contract Validation
**Status: ACTIVE** - FE↔BE type and URL matching.

**Instructions:**
After creating or modifying API endpoints or service functions:
1. Load `.claude/skills/api-contract-validation/cache.json`
2. Verify FE service calls match BE controller routes (URL, HTTP method, types)
3. Flag mismatches before they reach runtime

### Command: Self-Review
**Status: ACTIVE** - Code quality check on own output.

**Instructions:**
After completing code changes and BEFORE reporting "done":
1. Follow `.claude/skills/self-review/SKILL.md` checklist
2. Re-read created/modified files and check for: unused imports, missing error handling, naming inconsistencies, security issues
3. Fix issues silently, report only if judgment needed

### Command: Feature Completeness
**Status: ACTIVE** - End-to-end wiring verification.

**Instructions:**
After completing a multi-layer feature (FE + BE):
1. Follow `.claude/skills/feature-completeness/SKILL.md` to trace the full chain
2. Verify: UI → Hook → Service → API → Controller → Service → DB
3. Report any disconnected links

**Complete Feature Workflow:**
1. lessons-learned → prevention steps
2. Create files
3. post-creation-verify → registrations
4. build-check → compile
5. api-contract-validation → FE↔BE match
6. feature-completeness → end-to-end chain
7. self-review → code quality
8. cache-refresh → update caches
9. Report to user

### Command: Development API Configuration
**Status: ACTIVE**
- Base URL: `https://dev-service.tap.co.za`
- Backend path: `Speccon_TAP_Ext/src-tap/`
- Frontend connects via `REACT_APP_API_URL`

### Command: No Auto-Generated Migrations
**Status: ACTIVE - CRITICAL RULE**

**NEVER ALLOWED:**
- Running `Add-Migration`, `dotnet ef migrations add`, or any EF Core migration commands
- Creating files in `AppContext/Migrations/` folder
- Modifying any existing migration files
- Using any code-first database migration approach

**REQUIRED INSTEAD:**
When database schema changes are needed (new tables, columns, indexes, constraints, etc.):
1. Create a `.txt` file in `.claude/docs/database-changes/` folder
2. Name format: `YYYY-MM-DD_description.txt` (e.g., `2026-01-28_add-rejection-reason-to-jobs.txt`)
3. Include in the file:
   - Description of what change is needed
   - The SQL script to apply the change
   - The SQL script to rollback the change
   - Which entity/table is affected
   - Why the change is needed

**Example file content:**
```
Database Change Request: Add RejectionReason to Jobs table
Date: 2026-01-28
Affected Table: dbo.Jobs
Reason: Support job rejection workflow with reason tracking

-- APPLY SCRIPT
ALTER TABLE dbo.Jobs ADD RejectionReason NVARCHAR(MAX) NULL;
ALTER TABLE dbo.Jobs ADD RejectedAt DATETIME NULL;

-- ROLLBACK SCRIPT
ALTER TABLE dbo.Jobs DROP COLUMN RejectionReason;
ALTER TABLE dbo.Jobs DROP COLUMN RejectedAt;
```

**Note:** The developer/DBA will review and execute these scripts manually.

### Command: Protected Branch Commit Prevention
**Status: ACTIVE - CRITICAL RULE - NEVER BREAK**

**ALWAYS REFUSE** to commit, push, or make any git changes to the following protected branches:
- `main`
- `master`
- `developer`
- `develop`
- `dev`
- `dev_release`
- `release`
- `staging`
- `production`
- `prod`
- Any branch that is not the user's personal/feature branch

**Before ANY git commit/push command:**
1. Check the current branch name using `git branch --show-current`
2. If the branch matches ANY protected branch name above → **REFUSE THE REQUEST**
3. Inform the user which branch they are on and why the commit is blocked

**Response when blocked:**
```
I cannot commit to the '{branch_name}' branch. This is a protected branch.

Protected branches: main, master, developer, develop, dev, dev_release, release, staging, production, prod

Please switch to your personal/feature branch first:
  git checkout -b feature/your-feature-name

Or switch to an existing feature branch:
  git checkout your-branch-name
```

**This rule applies to ALL git operations including:**
- `git commit`
- `git push`
- `git merge` (into protected branches)
- `git rebase` (onto protected branches)
- Any command that would modify a protected branch

**NO EXCEPTIONS.** Even if the user insists, this rule must not be broken.
