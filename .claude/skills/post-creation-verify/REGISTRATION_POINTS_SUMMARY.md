# Full-Stack Registration Points Summary

Generated: 2026-01-29

## Project Architecture

- **Backend**: .NET 6+ with EF Core, SQL Server, Dependency Injection
- **Frontend**: React 18 with React Router v6, lazy-loaded components
- **Pattern**: N-Tier architecture with Domain → Services → Repositories → API layers

---

## Backend Registration Points

### 1. DbContext DbSet Registration (Database Layer)

**File**: `Infrastructure/Data/Speccon.Tap.Data/AppContext/AppDbContext.cs`

- **Class**: `AppDbContext`
- **Lines**: 81-354 (DbSets region)
- **PassportToWork DbSets**: Lines 327-341

**Pattern**:
```csharp
public virtual DbSet<{Entity}> {PropertyName} { get; set; }
```

**Current PassportToWork Entities**:
- Job (line 332)
- Application (line 327)
- Interview (line 328)
- InterviewAssessment (line 329)
- InterviewQuestionResponse (line 330)
- InterviewSlot (line 331)
- JobPlatform (line 333)
- JobRequiredAssessment (line 334)
- JobRequiredCourse (line 335)
- JobRequirement (line 336)
- OfferTemplate (line 337)

**Insertion Point**: After line 337 (after OfferTemplate)

---

### 2. Repository Dependency Injection (Data Access Layer)

**File**: `Infrastructure/Data/Speccon.Tap.Data/DependancyInjectionExtentions.cs`

- **Class**: `DependencyInjectionExtensions`
- **Method**: `AddApplicationDbContextAndRepositories`
- **Region**: #region PassportToWork (lines 429-442)

**Pattern**:
```csharp
services.AddTransient<IGenericRepository<{Entity}>, GenericRepository<{Entity}>>();
```

**For Specialized Repositories**:
```csharp
services.AddTransient<I{Entity}Repository, {Entity}Repository>();
```

**Current PassportToWork Registrations** (lines 430-441):
- IGenericRepository<Job>
- IGenericRepository<Application>
- IGenericRepository<Interview>
- IGenericRepository<InterviewSlot>
- IGenericRepository<JobRequirement>
- IGenericRepository<JobQuestion>
- IGenericRepository<JobPlatform>
- IGenericRepository<JobRequiredCourse>
- IGenericRepository<JobRequiredAssessment>
- IGenericRepository<InterviewAssessment>
- IGenericRepository<InterviewQuestionResponse>
- IGenericRepository<OfferTemplate>

**Insertion Point**: After line 441 (before #endregion on line 442)

---

### 3. Service Dependency Injection (Business Logic Layer)

**File**: `Services/Speccon.Tap.Services/DependancyInjectionExtentions.cs`

- **Class**: `DependancyInjectionExtentions`
- **Method**: `AddApplicationServices`
- **Region**: #region PassportToWork (lines 324-332)

**Pattern**:
```csharp
services.AddTransient<I{Name}Service, {Name}Service>();
```

**Lifetime Options**:
- `AddTransient`: New instance each time (stateless services)
- `AddScoped`: One per HTTP request (typical for business logic)
- `AddSingleton`: Single instance for app lifetime (expensive resources)

**Current PassportToWork Services** (lines 325-331):
- IApplicationService → ApplicationService
- IEmployEquityService → EmployEquityService
- IHeadhuntingService → HeadhuntingService
- IInterviewService → InterviewService
- ISystemSettingsService → SystemSettingsService
- IJobService → JobService
- IOfferTemplateService → OfferTemplateService

**Insertion Point**: After line 331 (before #endregion on line 332)

---

## Frontend Registration Points

### 1. Route Registration

**File**: `src/Routes.tsx`

- **Route Array**: `createBrowserRouter([...])` starting at line 473
- **Component Imports**: Dynamic lazy-loading (lines 1-470)
- **Route Constants**: `ROUTES_CONST` enum from `modules/core/models/constants/core.constants`

**Pattern**:
```tsx
const ComponentName = lazy(() => import("./modules/features/{Feature}/pages/{ComponentName}"));

// In router array:
{
  path: ROUTES_CONST.COMPONENT_ROUTE,
  element: <ComponentName />,
  index: true
}
```

**For Protected Routes**:
```tsx
{
  path: ROUTES_CONST.PROTECTED_ROUTE,
  element: <ProtectRoute><ComponentName /></ProtectRoute>,
  index: true
}
```

**Insertion Points**:
- Add lazy import at top of file (before `createBrowserRouter`)
- Add route object to appropriate section in router array

---

### 2. Barrel Exports (Optional)

**File Pattern**: `src/modules/{feature}/index.ts`

**Pattern**:
```typescript
export { ComponentName } from './pages/ComponentName';
export { AnotherExport } from './components/AnotherExport';
```

**Use Case**: Enable clean imports like `import { Component } from 'modules/feature'`

---

## Verification Order

When adding new features, register in this order:

1. **DbContext DbSet** - Map entity to database table
2. **Repository DI** - Register data access layer
3. **Service DI** - Register business logic layer
4. **Routes** (Frontend) - Add navigation if needed

---

## Key Files for Reference

### Backend Structure
```
Domain/
  └─ Entities/PassportToWork/
     ├─ Job.cs
     ├─ Application.cs
     ├─ Interview.cs
     └─ ...

Services/
  ├─ Speccon.Tap.Services/
  │  ├─ DependancyInjectionExtentions.cs (Service DI)
  │  ├─ Interfaces/Services/PassportToWork/
  │  │  ├─ IJobService.cs
  │  │  ├─ IApplicationService.cs
  │  │  └─ ...
  │  └─ Services/PassportToWork/
  │     ├─ JobService.cs
  │     ├─ ApplicationService.cs
  │     └─ ...

Infrastructure/Data/
  ├─ Speccon.Tap.Data/
  │  ├─ DependancyInjectionExtentions.cs (Repository DI)
  │  ├─ AppContext/
  │  │  └─ AppDbContext.cs (DbSets)
  │  └─ AppRepositories/PassportToWork/
  │     ├─ JobRepository.cs
  │     ├─ ApplicationRepository.cs
  │     └─ ...

Presentation/
  └─ Speccon.Tap.Api/
     └─ Controllers/
        ├─ JobsController.cs
        └─ ApplicationsController.cs
```

### Frontend Structure
```
src/
├─ Routes.tsx (Route definitions)
├─ modules/
│  ├─ core/
│  │  └─ models/constants/core.constants.ts (ROUTES_CONST)
│  ├─ auth/
│  └─ features/
│     ├─ PassportToWork/
│     │  ├─ pages/
│     │  ├─ components/
│     │  └─ index.ts (barrel export)
│     └─ ...
```

---

## Important Rules

1. **NEVER manually edit migrations** - Create `.txt` files in `.claude/docs/database-changes/` instead
2. **All entities must have DbSet declarations**
3. **All DbSet entities must have repository registrations**
4. **All services must be registered in DI before use**
5. **Use PassportToWork region** for all PassportToWork feature registrations
6. **Frontend routes use lazy loading** for code splitting
7. **Use ROUTES_CONST enum** for route paths (consistency)
8. **Repositories use IGenericRepository<T>** pattern for CRUD operations

---

## Database Connection

- **Connection String Key**: `ConnectionStrings:AppDb`
- **Provider**: SQL Server
- **AppDbContext**: Primary context for main application
- **AppDbContextBackground**: Background tasks context

---

## Testing Checklist After Registration

- [ ] Service is registered and resolvable from DI container
- [ ] Repository is registered and accessible in service
- [ ] DbSet is declared and entity compiles
- [ ] Database migration created (if new entity)
- [ ] API endpoint works and can access data
- [ ] Frontend route loads without errors
- [ ] Feature is accessible and functional
