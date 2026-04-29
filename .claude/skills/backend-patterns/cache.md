# Backend Patterns Cache
## Generated: 2026-01-29
## Project: Speccon.Tap.DevExpress.Api (solution name)
## Stack: .NET 8.0, ASP.NET Core, EF Core 8.0.3, SQL Server, Identity, JWT Auth, Clean Architecture (Domain/Infrastructure/Services/Presentation)

### Paths
Solution: `Speccon_TAP_Ext/src-tap/Presentation/Speccon.Tap.Reporting/Speccon.Tap.DevExpress.Api.sln`
Controllers: `Speccon_TAP_Ext/src-tap/Presentation/Speccon.Tap.Api/Controllers/`
Services (impl): `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/Services/{FeatureArea}/`
Services (interfaces): `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/Interfaces/Services/{FeatureArea}/`
ServiceDtos: `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/ServiceDtos/{FeatureArea}/`
Entities: `Speccon_TAP_Ext/src-tap/Domain/Speccon.Tap.Domain/Entities/`
Entities (sub-feature): `Speccon_TAP_Ext/src-tap/Domain/Speccon.Tap.Domain/Entities/{FeatureArea}/`
DbContext: `Speccon_TAP_Ext/src-tap/Infrastructure/Data/Speccon.Tap.Data/AppContext/AppDbContext.cs`
DI Registration (services): `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/DependancyInjectionExtentions.cs`
DI Registration (data/repos): `Speccon_TAP_Ext/src-tap/Infrastructure/Data/Speccon.Tap.Data/DependancyInjectionExtentions.cs`
Base Controller (Api): `Speccon_TAP_Ext/src-tap/Presentation/Speccon.Tap.Api/Controllers/BaseController.cs`
Base Controller (Enterprise): `Speccon_TAP_Ext/src-tap/Presentation/Speccon.Tap.Enterprise/Controllers/BaseController.cs`
Constants: `Speccon_TAP_Ext/src-tap/Domain/Speccon.Tap.Domain/Constants/Constants.cs`
Generic Repository Interface: `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/Interfaces/AppRepositories/IGenericRepository.cs`
UnitOfWork Interface: `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/Interfaces/UnitOfWork/IUnitOfWork.cs`
Response DTOs: `Speccon_TAP_Ext/src-tap/Services/Speccon.Tap.Services/ServiceDtos/Common/ResponseDto.cs`

### Entity Template
```csharp
using System.ComponentModel.DataAnnotations;
using Speccon.Tap.Domain.Constants;

namespace Speccon.Tap.Domain.Entities.{{FEATURE_AREA}}
{
    public class {{ENTITY_NAME}}
    {
        [Key]
        public int {{ENTITY_NAME}}Id { get; set; }
        public Guid {{ENTITY_NAME}}Key { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public int CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public int RecordStatusId { get; set; } = Constants.Constants.ActiveRecordStatusID;

        public int ClientId { get; set; }
        // ... feature-specific properties
    }
}
```
**Notes:**
- Simple entities (lookup tables) may omit `CreatedBy`, `UpdatedBy`, `UpdatedDate` fields
- `RecordStatusId` is used for soft-delete (1=Active, 2=Inactive, 6=Deprecated)
- `ClientId` provides multi-tenancy
- Navigation properties are nullable: `public Sector? Sector { get; set; }`
- Sub-features go in subfolders: `Entities/PassportToWork/`, `Entities/WhatsApp/`, etc.

### Controller Template
```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using Speccon.Tap.Services.Interfaces.Services.{{FEATURE_AREA}};
using Speccon.Tap.Services.Interfaces.Services.Systems.Errors;
using Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}};

namespace Speccon.Tap.Api.Controllers
{
    [Route("api/{{ROUTE_PREFIX}}")]
    [ApiController]
    [Authorize]
    public class {{ENTITY_NAME_PLURAL}}Controller : BaseController
    {
        private readonly I{{ENTITY_NAME}}Service _{{ENTITY_NAME_CAMEL}}Service;

        public {{ENTITY_NAME_PLURAL}}Controller(
            I{{ENTITY_NAME}}Service {{ENTITY_NAME_CAMEL}}Service,
            IStringLocalizer stringLocalizer,
            ISystemErrorLogService errorLog)
            : base(stringLocalizer, errorLog)
        {
            _{{ENTITY_NAME_CAMEL}}Service = {{ENTITY_NAME_CAMEL}}Service;
        }

        [HttpGet("get-all")]
        public async Task<IActionResult> GetAll()
        {
            return await GetResultDtoAsync(async () =>
            {
                var clientId = GetClientId();
                return await _{{ENTITY_NAME_CAMEL}}Service.GetAll(clientId);
            });
        }

        [HttpGet("get-by-key/{key}")]
        public async Task<IActionResult> GetByKey(Guid key)
        {
            return await GetResultDtoAsync(async () =>
            {
                var clientId = GetClientId();
                return await _{{ENTITY_NAME_CAMEL}}Service.GetByKey(key, clientId);
            });
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] {{ENTITY_NAME}}CreateDto dto)
        {
            return await GetResultDtoAsync(async () =>
            {
                var userId = GetUserId();
                var clientId = GetClientId();
                return await _{{ENTITY_NAME_CAMEL}}Service.Create(dto, userId, clientId);
            }, "{{ENTITY_DISPLAY_NAME}} created successfully");
        }

        [HttpPut("update/{key}")]
        public async Task<IActionResult> Update(Guid key, [FromBody] {{ENTITY_NAME}}UpdateDto dto)
        {
            return await GetResultDtoAsync(async () =>
            {
                var userId = GetUserId();
                var clientId = GetClientId();
                return await _{{ENTITY_NAME_CAMEL}}Service.Update(key, dto, userId, clientId);
            }, "{{ENTITY_DISPLAY_NAME}} updated successfully");
        }

        [HttpDelete("delete/{key}")]
        public async Task<IActionResult> Delete(Guid key)
        {
            return await GetResultDtoAsync(async () =>
            {
                var userId = GetUserId();
                var clientId = GetClientId();
                return await _{{ENTITY_NAME_CAMEL}}Service.Delete(key, userId, clientId);
            }, "{{ENTITY_DISPLAY_NAME}} deleted successfully");
        }
    }
}
```
**Notes:**
- Always extends `BaseController` (requires `IStringLocalizer` + `ISystemErrorLogService`)
- Route pattern: `api/kebab-case-plural` (e.g., `api/offer-templates`, `api/jobs`)
- All actions wrapped in `GetResultDtoAsync()` which handles ResponseDto wrapping + error handling
- `GetClientId()` extracts tenant from JWT "Tenant" claim
- `GetUserId()` extracts user from JWT "Identity" claim
- Success messages passed as second param to `GetResultDtoAsync()`
- For paginated endpoints: use `GetResultDtoPagingAsync()`
- For multi-error responses: use `GetMultiErrorResultDtoAsync()`
- For file streaming: use `GetStreamResultAsync()`

### Service Interface Template
```csharp
using Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}};

namespace Speccon.Tap.Services.Interfaces.Services.{{FEATURE_AREA}}
{
    public interface I{{ENTITY_NAME}}Service
    {
        Task<IList<{{ENTITY_NAME}}Dto>> GetAll(int clientId);
        Task<{{ENTITY_NAME}}Dto> GetById(int id, int clientId);
        Task<{{ENTITY_NAME}}Dto> GetByKey(Guid key, int clientId);
        Task<{{ENTITY_NAME}}Dto> Create({{ENTITY_NAME}}CreateDto dto, int userId, int clientId);
        Task<{{ENTITY_NAME}}Dto> Update(Guid key, {{ENTITY_NAME}}UpdateDto dto, int userId, int clientId);
        Task<bool> Delete(Guid key, int userId, int clientId);
    }
}
```

### Service Implementation Template
```csharp
using Microsoft.Extensions.Localization;
using Speccon.Tap.Domain.Constants;
using Speccon.Tap.Domain.Entities.{{FEATURE_AREA}};
using Speccon.Tap.Services.Interfaces.AppRepositories;
using Speccon.Tap.Services.Interfaces.Services.{{FEATURE_AREA}};
using Speccon.Tap.Services.Interfaces.Services.Systems.Errors;
using Speccon.Tap.Services.Interfaces.UnitOfWork;
using Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}};

namespace Speccon.Tap.Services.Services.{{FEATURE_AREA}}
{
    public class {{ENTITY_NAME}}Service : I{{ENTITY_NAME}}Service
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISystemErrorLogService _errorLog;
        private readonly IGenericRepository<{{ENTITY_NAME}}> _repository;
        private readonly IStringLocalizer _stringLocalizer;

        public {{ENTITY_NAME}}Service(
            IUnitOfWork unitOfWork,
            ISystemErrorLogService errorLog,
            IGenericRepository<{{ENTITY_NAME}}> repository,
            IStringLocalizer stringLocalizer)
        {
            _unitOfWork = unitOfWork;
            _errorLog = errorLog;
            _repository = repository;
            _stringLocalizer = stringLocalizer;
        }

        public async Task<IList<{{ENTITY_NAME}}Dto>> GetAll(int clientId)
        {
            try
            {
                var entities = await _repository.GetAllAsync(
                    a => a.RecordStatusId == Constants.ActiveRecordStatusID && a.ClientId == clientId,
                    null, null, false);

                return entities.Select(e => e.To{{ENTITY_NAME}}Dto()).ToList();
            }
            catch (FieldAccessException) { throw; }
            catch (Exception ex)
            {
                _errorLog.LogSystemError(clientId.ToString(), ex.ToString(), "Service", nameof({{ENTITY_NAME}}Service), nameof(GetAll), Guid.Empty, string.Empty);
                throw;
            }
        }

        public async Task<{{ENTITY_NAME}}Dto> GetByKey(Guid key, int clientId)
        {
            try
            {
                var entity = await _repository.GetByCondition(
                    a => a.{{ENTITY_NAME}}Key == key
                         && a.ClientId == clientId
                         && a.RecordStatusId == Constants.ActiveRecordStatusID,
                    false);

                if (entity == null)
                    throw new FieldAccessException(Convert.ToString(_stringLocalizer["ResponseCodes.Errors.ApiDataNotFound"]));

                return entity.To{{ENTITY_NAME}}Dto();
            }
            catch (FieldAccessException) { throw; }
            catch (Exception ex)
            {
                _errorLog.LogSystemError($"{key},{clientId}", ex.ToString(), "Service", nameof({{ENTITY_NAME}}Service), nameof(GetByKey), Guid.Empty, string.Empty);
                throw;
            }
        }

        public async Task<{{ENTITY_NAME}}Dto> Create({{ENTITY_NAME}}CreateDto dto, int userId, int clientId)
        {
            try
            {
                var entity = new {{ENTITY_NAME}}();
                entity.ToEntity(dto);
                entity.ClientId = clientId;
                entity.CreatedBy = userId;
                entity.UpdatedBy = userId;

                await _repository.AddAsync(entity);
                await _unitOfWork.SaveChangesAsync();

                return entity.ToReturnDto();
            }
            catch (FieldAccessException) { throw; }
            catch (Exception ex)
            {
                _errorLog.LogSystemError($"{userId},{clientId}", ex.ToString(), "Service", nameof({{ENTITY_NAME}}Service), nameof(Create), Guid.Empty, string.Empty);
                throw;
            }
        }

        public async Task<{{ENTITY_NAME}}Dto> Update(Guid key, {{ENTITY_NAME}}UpdateDto dto, int userId, int clientId)
        {
            try
            {
                var entity = await _repository.GetByCondition(
                    a => a.{{ENTITY_NAME}}Key == key
                         && a.ClientId == clientId
                         && a.RecordStatusId == Constants.ActiveRecordStatusID,
                    true);

                if (entity == null)
                    throw new FieldAccessException(Convert.ToString(_stringLocalizer["ResponseCodes.Errors.ApiDataNotFound"]));

                entity.ToEntity(dto);
                entity.UpdatedBy = userId;

                await _repository.UpdateAsync(entity);
                await _unitOfWork.SaveChangesAsync();

                return entity.ToReturnDto();
            }
            catch (FieldAccessException) { throw; }
            catch (Exception ex)
            {
                _errorLog.LogSystemError($"{key},{userId},{clientId}", ex.ToString(), "Service", nameof({{ENTITY_NAME}}Service), nameof(Update), Guid.Empty, string.Empty);
                throw;
            }
        }

        public async Task<bool> Delete(Guid key, int userId, int clientId)
        {
            try
            {
                var entity = await _repository.GetByCondition(
                    a => a.{{ENTITY_NAME}}Key == key
                         && a.ClientId == clientId
                         && a.RecordStatusId == Constants.ActiveRecordStatusID,
                    true);

                if (entity == null)
                    throw new FieldAccessException(Convert.ToString(_stringLocalizer["ResponseCodes.Errors.ApiDataNotFound"]));

                // Soft delete
                entity.RecordStatusId = Constants.InactiveRecordStatusID;
                entity.UpdatedBy = userId;
                entity.UpdatedDate = DateTime.Now;

                await _repository.UpdateAsync(entity);
                await _unitOfWork.SaveChangesAsync();

                return true;
            }
            catch (FieldAccessException) { throw; }
            catch (Exception ex)
            {
                _errorLog.LogSystemError($"{key},{userId},{clientId}", ex.ToString(), "Service", nameof({{ENTITY_NAME}}Service), nameof(Delete), Guid.Empty, string.Empty);
                throw;
            }
        }
    }
}
```

### DTO Templates

**Return DTO** (`ServiceDtos/{{FEATURE_AREA}}/{{FEATURE_DTOS_FOLDER}}/{{ENTITY_NAME}}Dto.cs`):
```csharp
namespace Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}}
{
    public class {{ENTITY_NAME}}Dto
    {
        public int {{ENTITY_NAME}}Id { get; set; }
        public Guid {{ENTITY_NAME}}Key { get; set; }
        // ... mapped properties (user-facing subset of entity)
        public int ClientId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
```

**Create DTO** (`ServiceDtos/{{FEATURE_AREA}}/{{FEATURE_DTOS_FOLDER}}/{{ENTITY_NAME}}CreateDto.cs`):
```csharp
namespace Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}}
{
    public class {{ENTITY_NAME}}CreateDto
    {
        // Only user-provided fields, no Id/Key/audit fields
        public string PropertyName { get; set; } = string.Empty;
    }
}
```

**Update DTO** (`ServiceDtos/{{FEATURE_AREA}}/{{FEATURE_DTOS_FOLDER}}/{{ENTITY_NAME}}UpdateDto.cs`):
```csharp
namespace Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}}
{
    public class {{ENTITY_NAME}}UpdateDto
    {
        // Same fields as CreateDto (mutable fields only)
        public string PropertyName { get; set; } = string.Empty;
    }
}
```

**DTO Extensions** (`ServiceDtos/{{FEATURE_AREA}}/{{FEATURE_DTOS_FOLDER}}/DtoExtensions.cs`):
```csharp
using Speccon.Tap.Domain.Constants;
using Speccon.Tap.Domain.Entities.{{FEATURE_AREA}};

namespace Speccon.Tap.Services.ServiceDtos.{{FEATURE_AREA}}.{{FEATURE_DTOS_FOLDER}}
{
    public static class DtoExtensions
    {
        // Entity -> Return DTO
        public static {{ENTITY_NAME}}Dto To{{ENTITY_NAME}}Dto(this {{ENTITY_NAME}} entity)
        {
            return new {{ENTITY_NAME}}Dto
            {
                {{ENTITY_NAME}}Id = entity.{{ENTITY_NAME}}Id,
                {{ENTITY_NAME}}Key = entity.{{ENTITY_NAME}}Key,
                // ... map all return properties
            };
        }

        // CreateDto -> Entity (extension on entity, returns entity)
        public static {{ENTITY_NAME}} ToEntity(this {{ENTITY_NAME}} entity, {{ENTITY_NAME}}CreateDto dto)
        {
            entity.{{ENTITY_NAME}}Key = Guid.NewGuid();
            entity.CreatedDate = DateTime.Now;
            entity.UpdatedDate = DateTime.Now;
            entity.RecordStatusId = Constants.ActiveRecordStatusID;
            // ... map dto properties to entity
            return entity;
        }

        // UpdateDto -> Entity (extension on entity, returns entity)
        public static {{ENTITY_NAME}} ToEntity(this {{ENTITY_NAME}} entity, {{ENTITY_NAME}}UpdateDto dto)
        {
            entity.UpdatedDate = DateTime.Now;
            // ... map dto properties to entity
            return entity;
        }

        // Convenience alias
        public static {{ENTITY_NAME}}Dto ToReturnDto(this {{ENTITY_NAME}} entity)
        {
            return entity.To{{ENTITY_NAME}}Dto();
        }
    }
}
```

### Registration Points

**Service DI** (`Services/Speccon.Tap.Services/DependancyInjectionExtentions.cs`):
- Method: `AddApplicationServices()`
- Insert new service at appropriate `#region` block or end of method (before `return services;` at line 337)
- Pattern: `services.AddTransient<I{{ENTITY_NAME}}Service, {{ENTITY_NAME}}Service>();`
- Existing region example: `#region PassportToWork` (lines 324-332)

**Repository DI** (`Infrastructure/Data/Speccon.Tap.Data/DependancyInjectionExtentions.cs`):
- Method: `AddApplicationDbContextAndRepositories()`
- Insert generic repository at appropriate `#region` block or near similar entities
- Pattern: `services.AddTransient<IGenericRepository<{{ENTITY_NAME}}>, GenericRepository<{{ENTITY_NAME}}>>();`
- Existing region example: `#region PassportToWork` (lines 429-441)

**DbContext** (`Infrastructure/Data/Speccon.Tap.Data/AppContext/AppDbContext.cs`):
- Insert new DbSet inside `#region DbSets` (lines 81-354)
- Pattern: `public virtual DbSet<{{ENTITY_NAME}}> {{ENTITY_NAME}} { get; set; }`
- Last entity DbSet before SP region is around line 352

### Conventions

- **Soft delete**: Set `RecordStatusId = Constants.InactiveRecordStatusID` (2). Never hard-delete. Filter active records with `a.RecordStatusId == Constants.ActiveRecordStatusID` (1).
- **Multi-tenancy**: `ClientId` on entities. Extracted from JWT claim "Tenant" via `GetClientId()`. Always filter queries by `clientId`.
- **Audit fields**: `CreatedDate` (DateTime.Now), `CreatedBy` (int userId), `UpdatedDate` (DateTime.Now), `UpdatedBy` (int userId)
- **Primary keys**: Integer auto-increment `{{Entity}}Id` + GUID `{{Entity}}Key`. Key is used in API routes, Id for internal references.
- **Error handling**: Services catch `FieldAccessException` (re-throw for client errors) and `Exception` (log + re-throw). Controllers use `GetResultDtoAsync()` which wraps in `ResponseDto<T>`.
- **Not-found pattern**: `throw new FieldAccessException(Convert.ToString(_stringLocalizer["ResponseCodes.Errors.ApiDataNotFound"]))` when entity is null
- **Response wrapper**: `GetResultDtoAsync<TResult>()` on BaseController wraps all responses in `ResponseDto<T>` with fields: `{ result, isError, errorMessage, message, statusCode }`
- **Auth claims**: `GetUserId()` -> JWT claim "Identity" (int), `GetClientId()` -> JWT claim "Tenant" (int), `GetUserRole()` -> ClaimTypes.Role, `GetStudentProfileId()` -> "StudentProfileId", `GetStudentProfileKey()` -> "StudentProfileKey"
- **Namespace conventions**:
  - Domain entities: `Speccon.Tap.Domain.Entities` or `Speccon.Tap.Domain.Entities.{FeatureArea}`
  - Service interfaces: `Speccon.Tap.Services.Interfaces.Services.{FeatureArea}`
  - Service implementations: `Speccon.Tap.Services.Services.{FeatureArea}`
  - ServiceDtos: `Speccon.Tap.Services.ServiceDtos.{FeatureArea}.{SubFolder}`
  - Controllers: `Speccon.Tap.Api.Controllers`
  - Data/DbContext: `Speccon.Tap.Data.AppContext`
  - Repository interfaces: `Speccon.Tap.Services.Interfaces.AppRepositories`
  - Constants: `Speccon.Tap.Domain.Constants`
- **Repository pattern**: Generic `IGenericRepository<T>` via `GenericRepository<T>`. Custom repos extend this for complex queries (stored procedures, joins).
- **Unit of Work**: `IUnitOfWork` injected into services. Call `_unitOfWork.SaveChangesAsync()` after mutations.
- **DI lifetime**: Services and repos use `AddTransient<>()`. Some WhatsApp services use `AddScoped<>()`. Singletons only for `IBlobStorageService`, `IpWhitelistChecker`, `IBackgroundTaskService`.
- **Database**: SQL Server via EF Core. Connection string key: `ConnectionStrings:AppDb`. Uses `IdentityDbContext` as base.
- **Localization**: `IStringLocalizer` injected everywhere for localized error/success messages. Key pattern: `_stringLocalizer["ResponseCodes.Errors.ApiDataNotFound"]`
- **Error logging**: `_errorLog.LogSystemError(parameters, exception, layer, className, methodName, guid, extra)` - 7 params
- **Route style**: kebab-case with action prefixes: `get-all`, `get-by-id/{id}`, `get-by-key/{key}`, `create`, `update/{key}`, `delete/{key}`, `search`
- **DTO mapping**: Extension methods on entity (not AutoMapper). File: `DtoExtensions.cs` in the DTO folder. Pattern: `entity.To{{Name}}Dto()`, `entity.ToEntity(createDto)`, `entity.ToEntity(updateDto)`, `entity.ToReturnDto()`

### Project Layer Summary
```
Speccon_TAP_Ext/src-tap/
  Domain/Speccon.Tap.Domain/        -> Entities, Constants, Enums (no dependencies)
  Infrastructure/Data/Speccon.Tap.Data/ -> DbContext, Migrations, Repositories (depends on Domain + Services interfaces)
  Services/Speccon.Tap.Services/    -> Interfaces + Implementations + ServiceDtos (depends on Domain)
  Presentation/Speccon.Tap.Api/     -> Controllers, Validators, Program.cs (depends on Services + Data)
  Presentation/Speccon.Tap.Enterprise/ -> Enterprise API (separate presentation)
  Presentation/Speccon.Tap.GenAI/   -> GenAI API (separate presentation)
  Presentation/Speccon.Tap.WhatsApp/ -> WhatsApp webhook API
  Presentation/Speccon.Tap.Scheduler/ -> Background scheduler
  Presentation/Speccon.Tap.Reporting/ -> DevExpress reporting
```

### Function Index (PassportToWork)

**JobsController.cs** (`Presentation/Speccon.Tap.Api/Controllers/JobsController.cs`):
```
  Create → L28
  SaveDraft → L40
  CreateRequest → L79
  ApproveRequest → L97
  Update → L108
  GetById → L120
  GetByKey → L130
  GetAll → L140
  Search → L150
  Delete → L160
  SubmitForApproval → L172
  Approve → L183
  Reject → L194
  RequestChanges → L205
  Publish → L216
  Close → L227
  GetRequirements → L238
  UpdateRequirements → L248
  GetInterviewQuestions → L259
  UpdateInterviewQuestions → L269
  GetRecruiterDashboardStats → L279
  GetManagerDashboardStats → L289
  GetRecruiterPortalData → L299
  GetPendingApprovals → L310
  GetMyRequests → L320
  GetRecommended → L330
```

**JobService.cs** (`Services/Speccon.Tap.Services/Services/PassportToWork/JobService.cs`):
```
  CreateJob → L42
  UpdateJob → L68
  GetJobById → L100
  GetJobByKey → L124
  GetJobsPaginated → L148
  GetJobs → L204
  DeleteJob → L228
  SubmitForApproval → L259
  ApproveRequest → L295
  ApproveJob → L326
  RejectJob → L360
  RequestChanges → L392
  PublishJob → L424
  CloseJob → L456
  GetJobRequirements → L488
  UpdateJobRequirements → L539
  GetJobQuestions → L614
  UpdateJobQuestions → L665
  GetJobRequirementsByKey → L744
  UpdateJobRequirementsByKey → L756
  GetJobQuestionsByKey → L768
  UpdateJobQuestionsByKey → L780
  GetRecruiterDashboardStats → L792
  GetManagerDashboardStats → L822
  GetRecruiterPortalData → L851
  GetPendingApprovals → L899
  GetMyRequests → L922
  GetRecommendedJobs → L945
```

**InterviewsController.cs** (`Presentation/Speccon.Tap.Api/Controllers/InterviewsController.cs`):
```
  GetAll → L26
  GetById → L36
  GetByKey → L45
  GetByJob → L55
  GetByApplication → L64
  Create → L74
  CreateSlot → L95
  GetSlots → L105
  BookSlot → L114
  CancelSlot → L125
  GetAssessment → L136
  SaveAssessmentDraft → L146
  SubmitAssessment → L157
  UpdateQuestionResponse → L168
  Start → L179
  Cancel → L190
  Reschedule → L201
  GetResults → L212
  GetPendingInvitations → L222
  SendInvitation → L232
  Respond → L243
```

**OfferTemplatesController.cs** (`Presentation/Speccon.Tap.Api/Controllers/OfferTemplatesController.cs`):
```
  GetAll → L27
  GetById → L37
  GetByKey → L47
  Create → L57
  Update → L68
  Delete → L79
```

**OfferTemplateService.cs** (`Services/Speccon.Tap.Services/Services/PassportToWork/OfferTemplateService.cs`):
```
  GetAll → L31
  GetById → L52
  GetByKey → L78
  Create → L104
  Update → L136
  Delete → L174
  ClearExistingDefaults → L208 (private)
```
