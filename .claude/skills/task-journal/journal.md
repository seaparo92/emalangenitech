# Task Journal
Last updated: 2026-01-29

## Active / In Progress
- [ ] [PassportToWork] Reject button debugging — needs browser console verification
  - File: RecruiterPortalContainer.tsx, RecruiterDashboard.tsx
  - Status: Added guard checks and console.log debugging. Code path looks correct in static analysis.
  - Blocker: Need user to check browser DevTools console for log output when clicking reject

## Completed (Recent)
- [x] [PassportToWork] Right-align draftsColumns actions in RecruiterDashboard — 2026-01-29
  - Files: RecruiterDashboard.tsx
  - Summary: Added `align: "right"` and `justify-end` to draftsColumns actions column

- [x] [PassportToWork] Create full CRUD backend for OfferTemplates — 2026-01-29
  - Files: OfferTemplate.cs, OfferTemplateDto.cs, OfferTemplateCreateDto.cs, OfferTemplateUpdateDto.cs, DtoExtensions.cs, IOfferTemplateService.cs, OfferTemplateService.cs, OfferTemplatesController.cs, DependancyInjectionExtentions.cs, AppDbContext.cs
  - Summary: Created missing backend API endpoints (entity, DTOs, service, interface, controller, DI registration, DbContext entry). DB table script in .claude/docs/database-changes/

- [x] [PassportToWork] Fix "failed to load offer templates" on admin screen — 2026-01-29
  - Files: OfferTemplatesTabContainer.tsx
  - Summary: Re-enabled useGetOfferTemplates hook with DEFAULT_OFFER_TEMPLATES fallback. Root cause was missing backend controller.

- [x] [Skills] Create generic backend-patterns scanner skill — 2026-01-29
  - Files: .claude/skills/backend-patterns/SKILL.md, cache.md
  - Summary: Auto-detecting scanner for any backend stack (.NET, Node, Python, Java, Go, etc.)

- [x] [Skills] Create generic frontend-patterns scanner skill — 2026-01-29
  - Files: .claude/skills/frontend-patterns/SKILL.md, cache.md
  - Summary: Auto-detecting scanner for any frontend stack (React, Vue, Angular, Svelte)

- [x] [Skills] Create architecture-scanner skill — 2026-01-29
  - Files: .claude/skills/architecture-scanner/SKILL.md, cache.json
  - Summary: Unified FE/BE layer detection with API route mapping. Technology-agnostic.

- [x] [Skills] Create session-resume, task-journal, file-index skills — 2026-01-29
  - Files: .claude/skills/session-resume/SKILL.md, .claude/skills/task-journal/SKILL.md, .claude/skills/file-index/SKILL.md
  - Summary: Speed optimization skills for cross-session persistence and instant file lookup

## Known Issues
- [!] [PassportToWork] Reject button may not fire API call — 2026-01-29
  - File: RecruiterPortalContainer.tsx (handleRejectJob)
  - Severity: medium
  - Notes: Static analysis shows code path is correct. Added console.log at entry. Possible cause: jobKey is empty at runtime, or modal doesn't pass values correctly. User needs to reproduce and check browser console.

- [!] [PassportToWork] Backend RejectJob uses "Incomplete" status instead of "Rejected" — 2026-01-29
  - File: JobService.cs (RejectJob method)
  - Severity: medium
  - Notes: Job status is set to StatusIncomplete when rejecting. May need a dedicated "Rejected" status constant.

- [!] [PassportToWork] OfferTemplates DB table not yet created — 2026-01-29
  - File: .claude/docs/database-changes/2026-01-29_create-offer-templates-table.txt
  - Severity: high
  - Notes: Backend code exists but table doesn't. DBA needs to run the SQL script. Frontend falls back to defaults until then.

## Backlog
(empty)
