# Jobs API Contract

> Last synced: 2026-01-28
> Status: SYNCHRONIZED
> FE Service: `Speccon_TAP_Ext_React/Speccon.Tap.Web/src/Services/JobService.ts`
> BE Controller: `Speccon_TAP_Ext/Controllers/JobController.cs`

---

## File Mapping

| Side | File | Path |
|------|------|------|
| FE Service | `JobService.ts` | `src/Services/JobService.ts` |
| FE Types | `job.types.ts` | `src/types/job.types.ts` |
| BE Controller | `JobController.cs` | `Controllers/JobController.cs` |
| BE DTOs | `JobDto.cs` | `Models/DTOs/JobDto.cs` |

---

## Endpoints

### 1. GetJobs - GET /api/Job

**FE Function:** `getJobs(params)`
**BE Action:** `JobController.GetJobs()`

#### Call Details

| Aspect | Value |
|--------|-------|
| Method | GET |
| Endpoint | `/api/Job` |
| Auth Required | Yes (JWT) |
| Content-Type | application/json |

#### Query Parameters

| Param | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| pageNumber | number | No | 1 | Page number |
| pageSize | number | No | 10 | Items per page (max 100) |
| status | string | No | - | Filter: Draft, Active, Closed, Archived |
| searchTerm | string | No | - | Search in title, description |
| sortBy | string | No | createdAt | Sort field |
| sortOrder | string | No | desc | asc or desc |

#### FE Call Example

```typescript
// JobService.ts
export async function getJobs(params: GetJobsParams): Promise<PagedResult<Job>> {
  const response = await api.get<ApiResponse<PagedResult<Job>>>('/api/Job', {
    params: {
      pageNumber: params.page || 1,
      pageSize: params.limit || 10,
      status: params.status,
      searchTerm: params.search,
      sortBy: params.sortBy,
      sortOrder: params.sortOrder
    }
  })
  return response.data.data
}
```

#### Expected Response

```typescript
interface PagedResult<T> {
  items: T[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

interface Job {
  jobId: number
  title: string
  description: string
  status: 'Draft' | 'Active' | 'Closed' | 'Archived'
  location: string
  remote: boolean
  salaryMin?: number
  salaryMax?: number
  salaryCurrency?: string
  createdAt: string        // ISO 8601
  updatedAt: string        // ISO 8601
  applicantCount: number
  companyId: number
  companyName: string
}
```

```json
// Example response
{
  "success": true,
  "data": {
    "items": [
      {
        "jobId": 74,
        "title": "Senior Developer",
        "description": "Looking for experienced developer...",
        "status": "Active",
        "location": "Cape Town",
        "remote": true,
        "salaryMin": 50000,
        "salaryMax": 80000,
        "salaryCurrency": "ZAR",
        "createdAt": "2026-01-15T10:30:00Z",
        "updatedAt": "2026-01-20T14:22:00Z",
        "applicantCount": 12,
        "companyId": 5,
        "companyName": "Speccon"
      }
    ],
    "totalCount": 45,
    "pageNumber": 1,
    "pageSize": 10,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

#### BE Implementation

```csharp
[HttpGet]
[Authorize]
public async Task<ActionResult<PagedResult<JobDto>>> GetJobs(
    [FromQuery] int pageNumber = 1,
    [FromQuery] int pageSize = 10,
    [FromQuery] string? status = null,
    [FromQuery] string? searchTerm = null,
    [FromQuery] string sortBy = "createdAt",
    [FromQuery] string sortOrder = "desc")
{
    var userId = User.GetUserId();
    var companyId = User.GetCompanyId();

    var query = _context.Jobs
        .Where(j => j.CompanyId == companyId);

    if (!string.IsNullOrEmpty(status))
        query = query.Where(j => j.Status == status);

    if (!string.IsNullOrEmpty(searchTerm))
        query = query.Where(j =>
            j.Title.Contains(searchTerm) ||
            j.Description.Contains(searchTerm));

    var result = await query
        .OrderByDescending(j => j.CreatedAt)
        .ToPagedResultAsync(pageNumber, pageSize);

    return Ok(new { success = true, data = result });
}
```

#### Response Codes

| Status | Condition | Response |
|--------|-----------|----------|
| 200 | Success | `{ success: true, data: {...} }` |
| 401 | Not authenticated | Redirect to login |
| 403 | No company access | `{ success: false, error: "Access denied" }` |

---

### 2. GetJob - GET /api/Job/{id}

**FE Function:** `getJob(id)`
**BE Action:** `JobController.GetJob(id)`

#### Call Details

| Aspect | Value |
|--------|-------|
| Method | GET |
| Endpoint | `/api/Job/{id}` |
| Auth Required | Yes (JWT) |

#### Path Parameters

| Param | Type | Description |
|-------|------|-------------|
| id | number | Job ID |

#### FE Call Example

```typescript
export async function getJob(jobId: number): Promise<JobDetail> {
  const response = await api.get<ApiResponse<JobDetail>>(`/api/Job/${jobId}`)
  return response.data.data
}
```

#### Expected Response

```typescript
interface JobDetail extends Job {
  requirements: string[]
  benefits: string[]
  responsibilities: string[]
  interviewQuestions: InterviewQuestion[]
  applicationDeadline?: string
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Lead'
  employmentType: 'FullTime' | 'PartTime' | 'Contract' | 'Internship'
}

interface InterviewQuestion {
  questionId: number
  question: string
  expectedAnswer?: string
  order: number
}
```

#### Response Codes

| Status | Condition | Response |
|--------|-----------|----------|
| 200 | Success | `{ success: true, data: {...} }` |
| 404 | Job not found | `{ success: false, error: "Job not found" }` |
| 403 | Not owner | `{ success: false, error: "Access denied" }` |

---

### 3. CreateJob - POST /api/Job

**FE Function:** `createJob(data)`
**BE Action:** `JobController.CreateJob(dto)`

#### Call Details

| Aspect | Value |
|--------|-------|
| Method | POST |
| Endpoint | `/api/Job` |
| Auth Required | Yes (JWT) |
| Content-Type | application/json |

#### Request Payload

```typescript
interface CreateJobRequest {
  title: string              // Required, max 200 chars
  description: string        // Required, max 5000 chars
  location: string           // Required
  remote: boolean            // Required
  salaryMin?: number         // Optional, positive
  salaryMax?: number         // Optional, >= salaryMin
  salaryCurrency?: string    // Optional, default "ZAR"
  requirements: string[]     // Optional
  benefits: string[]         // Optional
  responsibilities: string[] // Optional
  experienceLevel: string    // Required: Entry, Mid, Senior, Lead
  employmentType: string     // Required: FullTime, PartTime, Contract, Internship
  applicationDeadline?: string // Optional, ISO 8601 date
}
```

```json
// Example request
{
  "title": "Senior React Developer",
  "description": "We are looking for an experienced React developer...",
  "location": "Cape Town",
  "remote": true,
  "salaryMin": 50000,
  "salaryMax": 80000,
  "salaryCurrency": "ZAR",
  "requirements": [
    "5+ years React experience",
    "TypeScript proficiency",
    "Experience with REST APIs"
  ],
  "benefits": [
    "Medical aid",
    "Remote work",
    "Flexible hours"
  ],
  "responsibilities": [
    "Build and maintain React applications",
    "Code reviews",
    "Mentor junior developers"
  ],
  "experienceLevel": "Senior",
  "employmentType": "FullTime",
  "applicationDeadline": "2026-03-01"
}
```

#### FE Call Example

```typescript
export async function createJob(data: CreateJobRequest): Promise<{ jobId: number }> {
  const response = await api.post<ApiResponse<{ jobId: number }>>('/api/Job', data)
  return response.data.data
}
```

#### BE Validation

```csharp
public class CreateJobDto
{
    [Required(ErrorMessage = "Title is required")]
    [StringLength(200, ErrorMessage = "Title cannot exceed 200 characters")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Description is required")]
    [StringLength(5000, ErrorMessage = "Description cannot exceed 5000 characters")]
    public string Description { get; set; }

    [Required]
    public string Location { get; set; }

    [Required]
    public bool Remote { get; set; }

    [Range(0, int.MaxValue, ErrorMessage = "Salary must be positive")]
    public int? SalaryMin { get; set; }

    [Range(0, int.MaxValue)]
    public int? SalaryMax { get; set; }

    public string SalaryCurrency { get; set; } = "ZAR";

    [Required]
    public string ExperienceLevel { get; set; }

    [Required]
    public string EmploymentType { get; set; }
}
```

#### Expected Response

```typescript
interface CreateJobResponse {
  success: boolean
  data: {
    jobId: number
  }
  message: string
}
```

```json
{
  "success": true,
  "data": {
    "jobId": 75
  },
  "message": "Job created successfully"
}
```

#### Response Codes

| Status | Condition | Response |
|--------|-----------|----------|
| 201 | Created | `{ success: true, data: { jobId: 75 } }` |
| 400 | Validation failed | `{ success: false, errors: { title: ["Required"] } }` |
| 401 | Not authenticated | 401 response |
| 403 | No permission | `{ success: false, error: "Cannot create jobs" }` |

---

### 4. UpdateJob - PUT /api/Job/{id}

**FE Function:** `updateJob(id, data)`
**BE Action:** `JobController.UpdateJob(id, dto)`

#### Call Details

| Aspect | Value |
|--------|-------|
| Method | PUT |
| Endpoint | `/api/Job/{id}` |
| Auth Required | Yes (JWT) |
| Content-Type | application/json |

#### Request Payload

Same as CreateJobRequest

#### Response Codes

| Status | Condition | Response |
|--------|-----------|----------|
| 200 | Updated | `{ success: true }` |
| 400 | Validation failed | `{ success: false, errors: {...} }` |
| 403 | Not owner | `{ success: false, error: "Access denied" }` |
| 404 | Not found | `{ success: false, error: "Job not found" }` |

---

### 5. DeleteJob - DELETE /api/Job/{id}

**FE Function:** `deleteJob(id)`
**BE Action:** `JobController.DeleteJob(id)`

#### Call Details

| Aspect | Value |
|--------|-------|
| Method | DELETE |
| Endpoint | `/api/Job/{id}` |
| Auth Required | Yes (JWT) |
| Roles | Owner, Admin |

#### FE Call Example

```typescript
export async function deleteJob(jobId: number): Promise<void> {
  await api.delete(`/api/Job/${jobId}`)
}
```

#### Business Logic

1. Verify user is job owner OR admin
2. Check job has no active applications (or warn)
3. Soft delete (set IsDeleted = true) or hard delete
4. Create audit log entry

#### Response Codes

| Status | Condition | Response |
|--------|-----------|----------|
| 204 | Deleted | No content |
| 403 | Not owner/admin | `{ success: false, error: "Access denied" }` |
| 404 | Not found | `{ success: false, error: "Job not found" }` |
| 409 | Has applications | `{ success: false, error: "Cannot delete job with applications" }` |

---

## Type Sync Status

| Field | FE Type | BE Type | Synced |
|-------|---------|---------|--------|
| jobId | number | int | YES |
| title | string | string | YES |
| description | string | string | YES |
| status | union | enum | YES |
| location | string | string | YES |
| remote | boolean | bool | YES |
| salaryMin | number? | int? | YES |
| salaryMax | number? | int? | YES |
| createdAt | string (ISO) | DateTime | YES |
| applicantCount | number | int | YES |

---

## Error Response Format

All endpoints return errors in this format:

```typescript
interface ErrorResponse {
  success: false
  error?: string           // Single error message
  errors?: {               // Validation errors
    [field: string]: string[]
  }
  code?: string            // Error code for programmatic handling
}
```

---

## Change History

| Date | Change | FE | BE | Notes |
|------|--------|----|----|-------|
| 2026-01-28 | Detailed documentation | - | - | Full contract documented |
| 2026-01-20 | Initial contract | YES | YES | Basic endpoints |

---

*This contract is maintained by Claude's api-docs-sync skill.*
