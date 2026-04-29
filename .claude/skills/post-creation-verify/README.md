# Post-Creation Verification Cache

This directory contains comprehensive documentation of all registration/wiring points in the Speccon TAP full-stack project.

## Files in This Directory

### 1. `cache.json` (Primary Cache File)
**Purpose**: Machine-readable JSON cache with all registration point metadata.

**Contains**:
- Project structure information
- Backend registration points (DbContext, Repository DI, Service DI)
- Frontend registration points (Routes, Barrel exports)
- Exact file paths and line numbers
- Pattern templates for new registrations
- File structure guides
- Common patterns and important rules

**Usage**: Parsed by verification tools and creation automation scripts.

### 2. `REGISTRATION_POINTS_SUMMARY.md` (Developer Guide)
**Purpose**: Human-readable markdown documentation for developers.

**Contains**:
- Architecture overview
- Detailed explanation of each registration point
- Current PassportToWork registrations (all 7 services, 12 repositories, 11 entities)
- Code pattern examples for each registration type
- File structure hierarchy
- Key files reference
- Important rules and restrictions
- Testing checklist
- Database connection details

**Usage**: Reference guide when adding new features.

### 3. `SCAN_REPORT.txt` (Audit Report)
**Purpose**: Detailed scan report of what was discovered.

**Contains**:
- Project structure confirmation
- All registration points found with statistics
- Line-by-line insertion points
- Verification checklist with checkmarks
- Key statistics (100+ services, 250+ repositories, 300+ entities)
- Insertion points summary (step-by-step)
- Important rules enforced

**Usage**: Audit trail and verification confirmation.

### 4. `SKILL.md` (Existing)
**Purpose**: Skill definition for the post-creation-verify functionality.

## Quick Reference: Insertion Points

### Backend - DbContext DbSet
- **File**: `Infrastructure/Data/Speccon.Tap.Data/AppContext/AppDbContext.cs`
- **Location**: Line 337 (after OfferTemplate)
- **Pattern**: `public virtual DbSet<{Entity}> {Entity} { get; set; }`

### Backend - Repository DI
- **File**: `Infrastructure/Data/Speccon.Tap.Data/DependancyInjectionExtentions.cs`
- **Location**: Line 441 (in PassportToWork region)
- **Pattern**: `services.AddTransient<IGenericRepository<{Entity}>, GenericRepository<{Entity}>>();`

### Backend - Service DI
- **File**: `Services/Speccon.Tap.Services/DependancyInjectionExtentions.cs`
- **Location**: Line 331 (in PassportToWork region)
- **Pattern**: `services.AddTransient<I{Name}Service, {Name}Service>();`

### Frontend - Routes
- **File**: `src/Routes.tsx`
- **Location**: Line 473+ (add both lazy import and route object)
- **Pattern**: See REGISTRATION_POINTS_SUMMARY.md for details

## How to Use This Cache

### For Adding New Features
1. Read `REGISTRATION_POINTS_SUMMARY.md` for patterns
2. Follow the "Verification Order" section
3. Check line numbers in `cache.json`
4. Use the insertion point locations provided
5. Reference `SCAN_REPORT.txt` for statistics

### For Verification Scripts
1. Parse `cache.json` for machine-readable data
2. Verify insertions match the patterns defined
3. Check file paths and line ranges
4. Validate against the rules in "Important Rules Enforced"

### For Code Reviews
1. Use line numbers from cache to verify all registrations exist
2. Check SCAN_REPORT for statistics of what was found
3. Ensure new features follow the same patterns

## Project Statistics

| Metric | Count |
|--------|-------|
| Total Service Registrations | 100+ |
| Total Repository Registrations | 250+ |
| Total DbSet Declarations | 300+ |
| Total Entities | 250+ |
| Frontend Routes | 50+ |
| Lazy-Loaded Components | 100+ |
| Barrel Export Files | 20+ |

## PassportToWork Feature Stats

| Type | Count |
|------|-------|
| Services | 7 |
| Generic Repositories | 12 |
| DbSet Entities | 11 |
| Related APIs | Multiple |

## Key Architecture Insights

- **Backend**: N-Tier with Domain → Services → Repositories → API pattern
- **DI Container**: Microsoft.Extensions.DependencyInjection
- **Lifetimes**: Transient for stateless services, Scoped for contexts
- **ORM**: Entity Framework Core with SQL Server
- **Frontend**: React 18 with React Router v6
- **Code Splitting**: Lazy-loaded components for better performance
- **No AutoMapper**: Project uses manual DTO mappings

## Important Rules

1. ✅ All entities MUST have DbSet declarations
2. ✅ All DbSet entities MUST have repository registrations  
3. ✅ All services MUST be registered in DI container
4. ✅ Use PassportToWork region for ALL PassportToWork code
5. ✅ Frontend routes use lazy loading
6. ✅ Always use ROUTES_CONST enum for route paths
7. ✅ NEVER manually edit migrations (use database-changes/*.txt instead)
8. ✅ Repositories use IGenericRepository<T> pattern for CRUD

## Generated Information

- **Generated Date**: 2026-01-29
- **Scan Scope**: Full-stack project analysis
- **Backend Path**: `Speccon_TAP_Ext/src-tap`
- **Frontend Path**: `Speccon_TAP_Ext_React/Speccon.Tap.Web/src`
- **Focus Feature**: PassportToWork

## Contact & Notes

For questions about these registration points, refer to:
1. The feature's existing implementations (Job, Application, Interview, etc.)
2. The PassportToWork region markers in source files
3. This cache documentation

---

**Cache Status**: ✅ Complete and validated
**Last Updated**: 2026-01-29
