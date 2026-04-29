# API Contracts Documentation

> Auto-maintained by Claude's `api-docs-sync` and `api-validator` skills

This directory contains synchronized documentation for Frontend ↔ Backend API contracts.

## Quick Links

| Document | Purpose |
|----------|---------|
| [validation-report.md](./validation-report.md) | Overall FE↔BE sync status and issues |
| [pending-backend.md](./pending-backend.md) | APIs that Frontend needs, Backend must implement |
| [pending-frontend.md](./pending-frontend.md) | APIs that Backend provides, Frontend must implement |
| [contracts/](./contracts/) | Synchronized API contracts by feature |

## Skills

| Skill | Purpose |
|-------|---------|
| `api-docs-sync` | Documents what FE↔BE contracts SHOULD be |
| `api-validator` | Validates what FE↔BE contracts ACTUALLY are |

## How It Works

### Documentation (api-docs-sync)

1. **Frontend Change** → Claude detects new API needs → Documents in `pending-backend.md`
2. **Backend Change** → Claude detects new endpoints → Documents in `pending-frontend.md`
3. **Both Synced** → Claude creates/updates contract file in `contracts/`

### Validation (api-validator)

1. **First Run** → Full scan of all endpoints → Creates `validation-report.md`
2. **Ongoing** → Proactive monitoring after code changes
3. **Issues Found** → Alerts user, updates report and pending docs

## For Backend Developers

Check `pending-backend.md` for:
- New endpoints the frontend team needs
- Request/response specifications
- Validation requirements
- Error handling expectations

## For Frontend Developers

Check `pending-frontend.md` for:
- New endpoints available from backend
- How to call them (service methods)
- Response types to expect
- Error handling patterns

## Status Legend

| Status | Meaning |
|--------|---------|
| PENDING | Not started |
| IN_PROGRESS | Being worked on |
| COMPLETED | Done, needs verification |
| SYNCHRONIZED | Both sides confirmed working |

## Last Updated

- **pending-backend.md**: Auto-updated by Claude
- **pending-frontend.md**: Auto-updated by Claude
- **contracts/**: Auto-synced when both sides match

---

*This documentation is automatically maintained. Do not edit headers or metadata manually.*
