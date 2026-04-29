# Smart Context Skill

## Purpose
Token-optimized context loading using the project_map as the data source.

## Data Sources (Priority Order)
1. `.claude/skills/smart_context/cache/index.json` - Lightweight index (~70 lines)
2. `.claude/skills/project_map/project.map.md` - Full project map (load sections on demand)

## Activation
This skill is ALWAYS ACTIVE. Apply these rules to every task.

---

## Phase 1: Session Start

Load ONLY the lightweight index:
```
.claude/skills/smart_context/cache/index.json
```

This gives you:
- Tech stack (React + .NET)
- Feature names (50 features)
- File patterns (Page, Container, Service, Controller)
- Project structure roots

**DO NOT load the full project_map yet.**

---

## Phase 2: Task Analysis

### Step 2.1: Extract Keywords
From user message, identify:
- **Feature name**: interviews, academy, users, auth, payments, etc.
- **Action type**: fix, add, update, delete, explain, find
- **Layer**: frontend, backend, api, database, full-stack

### Step 2.2: Determine What to Load

| Task Type | What to Load |
|-----------|--------------|
| Feature-specific task | Grep for feature files only |
| "Where is X?" | Grep, don't read full map |
| "List all controllers" | Load project_map backend section only |
| Architecture question | Load project_map structure section |
| Bug fix in specific file | Grep → Read that file only |

---

## Phase 3: Smart Loading from Project Map

When you need the project_map, load ONLY the relevant section:

### Section Loading
```markdown
# To find frontend files for a feature:
Grep "PassportToWork" in project.map.md → Get file paths → Read specific files

# To find backend controller:
Grep "InterviewsController" in project.map.md → Get path → Read controller

# To understand FE→BE mapping:
Load only the "FE → BE Mappings" section if it exists
```

### Never Do This
❌ Read entire project.map.md (3,800 lines)
❌ Load all controllers "to understand the project"
❌ Pre-load map sections not related to current task

### Always Do This
✅ Grep project.map.md for keywords first
✅ Extract only the paths you need
✅ Read actual source files targeted by path

---

## Phase 4: Using Both Systems Together

```
User asks about "interviews"
         ↓
Check index.json → "Interviews" is a known feature
         ↓
Grep project.map.md for "*Interview*" → Get 5 file paths
         ↓
Read only the relevant file (e.g., InterviewListContainer.tsx)
         ↓
If needed, follow imports to related files
```

---

## Phase 5: Pattern Reference (from index.json)

| Pattern | Glob |
|---------|------|
| Page | `**/pages/*Page.tsx` |
| Container | `**/containers/*Container.tsx` |
| Service (FE) | `**/services/*.service.ts` |
| Hook | `**/hooks/*.hook.ts` |
| Controller | `**/*Controller.cs` |
| Service (BE) | `**/*Service.cs` |

---

## Feature Keywords → Search Patterns

| Keyword | Search |
|---------|--------|
| interview | `**/[Ii]nterview*` |
| job, jobs | `**/[Jj]ob*` |
| academy | `**/[Aa]cademy*` |
| equity | `**/[Ee]quity*` |
| auth, login | `**/[Aa]uth*` |
| team | `**/[Tt]eam*` |
| course | `**/[Cc]ourse*` |
| buddy | `**/[Bb]udd*` |
| payment | `**/[Pp]ay*` |
| user | `**/[Uu]ser*` |
| dashboard | `**/[Dd]ashboard*` |
| whatsapp | `**/[Ww]hats[Aa]pp*` |

---

## Anti-Patterns (DO NOT DO)

1. ❌ Loading entire project.map.md at session start
2. ❌ Reading all files in a feature folder
3. ❌ Pre-loading "just in case"
4. ❌ Ignoring index.json and going straight to map
5. ❌ Reading files not mentioned by user

---

## Token Budget Guide

| Action | Estimated Tokens |
|--------|------------------|
| Load index.json | ~100 |
| Grep project.map.md | ~50 |
| Read specific section of map | ~200-500 |
| Read one source file | ~200-800 |
| **Target per task** | **< 1,500** |

---

## Summary

```
index.json (always)
      ↓
Grep for keywords (fast)
      ↓
project.map.md section (if needed)
      ↓
Actual source files (targeted)
```

The project_map is your detailed reference. The index.json is your quick lookup. Use them together, but always start minimal.
