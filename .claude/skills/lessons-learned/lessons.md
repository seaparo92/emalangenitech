# Lessons Learned
Last updated: 2026-01-29

## Category: DI/Registration

### L001: Missing repository DI registration for new entities
- **Date**: 2026-01-29
- **Symptom**: Runtime DI error: "Unable to resolve service for type IGenericRepository<OfferTemplate>"
- **Root cause**: Created entity, service, controller, and registered the service in Services DI file, but forgot to register `IGenericRepository<Entity>` in the Data DI file
- **Fix**: Added `services.AddTransient<IGenericRepository<OfferTemplate>, GenericRepository<OfferTemplate>>();` to `Infrastructure/Data/Speccon.Tap.Data/DependancyInjectionExtentions.cs`
- **Prevention**: After creating any new entity, ALWAYS register in BOTH DI files:
  1. Services DI (`Services/DependancyInjectionExtentions.cs`) → `IService → Service`
  2. Data DI (`Data/DependancyInjectionExtentions.cs`) → `IGenericRepository<Entity> → GenericRepository<Entity>`
  3. DbContext (`AppDbContext.cs`) → `DbSet<Entity>`
- **Applies to**: Any new backend entity
- **Tags**: backend, di, entity, registration, repository

### L002: Two separate DI files exist
- **Date**: 2026-01-29
- **Symptom**: Easy to miss one DI file when only checking the other
- **Root cause**: Project has TWO DependancyInjectionExtentions.cs files:
  1. `Services/Speccon.Tap.Services/DependancyInjectionExtentions.cs` → service registrations
  2. `Infrastructure/Data/Speccon.Tap.Data/DependancyInjectionExtentions.cs` → repository + data registrations
- **Prevention**: Always check post-creation-verify cache which lists both files with exact line numbers
- **Tags**: backend, di, registration, architecture

## Category: Frontend/API

### L003: Missing backend endpoint causes frontend "failed to load" error
- **Date**: 2026-01-29
- **Symptom**: Frontend shows "failed to load offer templates" on admin screen
- **Root cause**: Frontend was calling `api/offer-templates/get-all` but no backend OfferTemplatesController existed yet. Returns 404.
- **Fix**: Created full backend CRUD (entity, DTOs, service, controller). Temporarily used DEFAULT_OFFER_TEMPLATES fallback.
- **Prevention**: When frontend calls an API endpoint, verify the backend controller + route exists before assuming it's a frontend bug
- **Tags**: frontend, backend, api, 404, missing-endpoint

## Category: Investigation

### L004: Limit investigation depth before reporting
- **Date**: 2026-01-29
- **Symptom**: Spent too long tracing reject button code path across 6+ files without finding a definitive bug
- **Root cause**: Static analysis can't catch runtime data issues (empty jobKey, timing, API errors)
- **Prevention**:
  1. Trace max 3 files deep in static analysis
  2. If no obvious code bug found → add logging/guards and report to user
  3. Ask user to reproduce and check browser console instead of going deeper
- **Tags**: debugging, investigation, efficiency

## Category: Database

### L005: Database table must exist before backend works
- **Date**: 2026-01-29
- **Symptom**: Backend code compiles but API returns 500 at runtime
- **Root cause**: Entity and DbContext reference a table that hasn't been created by DBA yet
- **Prevention**: After creating backend entity, ALWAYS create the database change .txt file and flag it as a blocker in task-journal
- **Tags**: backend, database, entity, deployment

## Category: Backend/Status

### L006: Axios interceptor strips Content-Type — never use [FromBody] string with JSON.stringify
- **Date**: 2026-01-29
- **Symptom**: PUT request to `api/jobs/reject/{jobKey}` never hits the backend endpoint. Error: "The JSON value could not be converted to System.String"
- **Root cause**: The Axios interceptor in `Interceptors.tsx:210-213` replaces ALL request headers with `{ Authorization: "Bearer " + token }`, stripping any explicit `Content-Type: application/json`. For object bodies, Axios's `transformRequest` re-applies Content-Type automatically after the interceptor. But for `JSON.stringify(string)` (pre-stringified to a raw string), Axios does NOT re-apply Content-Type. So the backend receives the body without `application/json` and can't bind `[FromBody] string`.
- **Fix**:
  1. FE: Send body as an **object** (e.g., `{ rejectionReason: reason }`) instead of `JSON.stringify(reason)` with explicit headers
  2. BE: Change `[FromBody] string` to `[FromBody] SomeRequestDto` with a matching property
- **Prevention**:
  1. **NEVER** use `JSON.stringify(value)` + `{ headers: { "Content-Type": "application/json" } }` in service calls — the interceptor will strip the Content-Type
  2. **NEVER** use `[FromBody] string` in ASP.NET Core controllers — always use a DTO class
  3. **ALWAYS** send body data as an object and let Axios serialize it — this ensures Content-Type is set by `transformRequest` AFTER the interceptor runs
  4. When an endpoint "fails to hit", check if the Content-Type is being stripped by the interceptor
- **Applies to**: All PUT/POST endpoints that send string body values
- **Tags**: frontend, backend, api, axios, interceptor, content-type, fromBody, critical

### L007: RejectJob uses "Incomplete" status instead of "Rejected" (FIXED)
- **Date**: 2026-01-29
- **Symptom**: Jobs rejected by recruiter show status "Incomplete" instead of "Rejected"
- **Root cause**: Backend JobService.RejectJob set status to `"Incomplete"`. No dedicated "Rejected" status was used.
- **Fix**: Changed `job.Status = "Incomplete"` to `job.Status = "Rejected"` in RejectJob method. Added `rejectedJobs` filter to portal data query. Added "Rejected" tab in RecruiterDashboard.
- **Prevention**: When implementing status-changing features, verify the status constant name matches the business intent
- **Tags**: backend, status, business-logic, passport-to-work
