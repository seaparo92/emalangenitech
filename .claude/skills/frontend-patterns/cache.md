# Frontend Patterns Cache
## Generated: 2026-01-29
## Project: SpecCon (v4.1.208)
## Stack: React 18 + Ant Design 5 + Redux Toolkit (redux-persist) + TanStack React Query 5 + Axios + Tailwind CSS + i18next + react-router-dom 6

### Paths
src root: `Speccon_TAP_Ext_React/Speccon.Tap.Web/src/`
Modules root: `src/modules/`
Features: `src/modules/features/{FeatureName}/`
Core: `src/modules/core/`
Auth: `src/modules/auth/`
Public Pages: `src/modules/PublicPages/`

**Feature folder structure** (per feature):
- `containers/` - Container components (stateful, business logic)
- `presentation/` - Presentation components (UI, props-driven)
- `pages/` - Route-level page components
- `hooks/` - Feature-specific hooks (TanStack Query wrappers)
- `service/` - API service functions + type exports
- `models/` - Enums, constants, form field names
- `helper/` - Utility functions and constants
- `components/` - Reusable feature-scoped components (some features)
- `types/` - Additional type definitions (some features)
- `context/` - React context providers (some features)

**Core folder structure:**
- `src/modules/core/component/ui/` - Shared UI components (SC-prefixed: SCButton, SCSearch, SCTable, etc.)
- `src/modules/core/presentation/` - Shared presentation components (e.g., ConfirmDelete)
- `src/modules/core/services/` - Interceptors.tsx (axios instance), API.service.tsx (legacy context-based API), services.type.ts
- `src/modules/core/models/enums/` - url.enums.ts (API_URLS enum), core.enums.ts, tap.enum.ts
- `src/modules/core/models/constants/` - core.constants.ts (ROUTES_CONST, NOTIFICATION_CONST, etc.)
- `src/modules/core/models/interfaces/` - Shared interfaces
- `src/modules/core/hooks/` - Shared hooks (useSafeTranslation, useProfilePic, useUserDesignation)
- `src/modules/core/helper/` - Shared utility functions

**Global paths:**
- Store: `src/store/index.ts` (configureStore), `src/store/slice/` (Redux slices)
- Routes: `src/Routes.tsx` (createBrowserRouter with lazy loading)
- Shared hooks: `src/hooks/` (useClickOutside, useQueryParams, useToaster, etc.)
- Styles: `src/styles/` (global.css, antd-custom.css, style.css, responsive.css)
- Helpers: `src/helper/`
- Assets: `src/assets/`
- HOCs: `src/hocs/`
- i18n: `src/i18next.tsx`, `src/locales/`
- Constants: `src/constants/`

### Container Template
```tsx
import { useState } from "react";
import { Flex } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import SCButton from "../../../../core/component/ui/SCButton";
import SCSearch from "../../../../core/component/ui/SCSearch";
import {{PRESENTATION_COMPONENT}} from "../../presentation/{{PRESENTATION_COMPONENT}}";

import { setGlobalState } from "../../../../../store/slice/GlobalSlice";
import { NOTIFICATION_CONST, ROUTES_CONST } from "../../../../core/models/constants/core.constants";
import { {{QUERY_KEY}}, use{{MUTATION_HOOK}} } from "../../hooks/{{feature}}.hook";
import { RootState } from "../../../../../store";
import { GenericResponse } from "../../../../core/services/services.type";
import { useSafeTranslation } from "../../../../core/hooks/useSafeTranslation";

type {{COMPONENT_NAME}}Type = {
  // props
};

const {{COMPONENT_NAME}}: React.FC<{{COMPONENT_NAME}}Type> = ({
  // destructured props
}: {{COMPONENT_NAME}}Type) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const t = useSafeTranslation("locale");
  const { isAdmin, isHR } = useSelector((state: RootState) => state.userDetail);

  const mutation = use{{MUTATION_HOOK}}();

  const onAction = () => {
    mutation.mutate(payload, {
      onSuccess(data) {
        dispatch(
          setGlobalState({
            error: {
              message: data.message as string,
              type: NOTIFICATION_CONST.SUCCESS,
            },
          })
        );
        queryClient.invalidateQueries({ queryKey: [{{QUERY_KEY}}] });
      },
      onError(error) {
        const errorData = error.response?.data as GenericResponse<void>;
        const errorMessage = errorData.errorMessage as string;
        dispatch(
          setGlobalState({
            error: {
              message: errorMessage,
              type: NOTIFICATION_CONST.ERROR,
            },
          })
        );
      },
    });
  };

  return (
    <div className="w-full px-8 mx-auto">
      {/* Tailwind CSS classes for layout */}
    </div>
  );
};

export default {{COMPONENT_NAME}};
```

### Presentation Component Template
```tsx
import { FC, useState } from "react";
import { Image, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "../../../../../store";
import SCButton from "../../../../core/component/ui/SCButton";
import SCTable from "../../../../core/component/ui/SCTable";
import { useSafeTranslation } from "../../../../core/hooks/useSafeTranslation";
import { use{{QUERY_HOOK}} } from "../../hooks/{{feature}}.hook";
import { {{ResponseType}} } from "../../service/{{feature}}Services";

type {{COMPONENT_NAME}}Props = {
  // props
};

const {{COMPONENT_NAME}}: FC<{{COMPONENT_NAME}}Props> = ({
  // destructured props
}) => {
  const t = useSafeTranslation("locale");
  const { id } = useParams();

  const { data, isLoading } = use{{QUERY_HOOK}}({ /* params */ });

  const columns: ColumnsType<{{ResponseType}}> = [
    // column definitions
  ];

  return (
    <div className="...tailwind classes...">
      <SCTable
        columns={columns}
        dataSource={data?.result?.items}
        loading={isLoading}
        rowClassName={rowClassName}
        // pagination, onChange, etc.
      />
    </div>
  );
};

export default {{COMPONENT_NAME}};
```

### Page Template
```tsx
import { FC } from "react";
import { Outlet, useParams } from "react-router-dom";
import {{CONTAINER_NAME}} from "../../containers/{{CONTAINER_NAME}}/{{CONTAINER_NAME}}";

type {{PAGE_NAME}}Type = {
  // props
};

const {{PAGE_NAME}}: FC<any> = ({ /* props */ }: {{PAGE_NAME}}Type) => {
  let params = useParams();

  return (
    <>{params.id ? <Outlet /> : <{{CONTAINER_NAME}} /* pass props */ />}</>
  );
};

export default {{PAGE_NAME}};
```

### Hook Templates

**Query hook (useQuery):**
```tsx
import { useQuery } from "@tanstack/react-query";

export const GET_{{RESOURCE}}_QUERY_KEY = "GET_{{RESOURCE}}_QUERY_KEY";

export const useGet{{Resource}} = (params: {{ParamsType}}) => {
  const resp = useQuery({
    queryKey: [GET_{{RESOURCE}}_QUERY_KEY, params],
    queryFn: async () => {
      const response = await get{{Resource}}(params);
      return response;
    },
    enabled: !!params.key,           // optional conditional
    refetchOnWindowFocus: false,      // optional
    staleTime: 60 * 60000,           // optional (1 hour)
  });
  return resp;
};
```

**Mutation hook (useMutation):**
```tsx
import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { GenericResponse } from "../../../core/services/services.type";

export const use{{Action}} = (
  options?: MutateOptions<
    GenericResponse<{{ResponseType}}>,
    AxiosError,
    {{PayloadType}}
  >
) => {
  const queryClient = useQueryClient(); // optional, for invalidation
  return useMutation({
    mutationFn: {{serviceFn}},
    ...options,
    onSuccess: (data, vars, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, vars, context);
      }
      // Optional: queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
    onError: (error, vars, context) => {
      if (options?.onError) {
        options.onError(error, vars, context);
      }
    },
  });
};
```

**Infinite query hook (useInfiniteQuery):**
```tsx
import { useInfiniteQuery } from "@tanstack/react-query";

export const GET_{{RESOURCE}}_QUERY_KEY = "GET_{{RESOURCE}}_QUERY_KEY";

export const useGet{{Resource}}List = (params: Partial<{{ParamsType}}>) => {
  const resp = useInfiniteQuery({
    queryKey: [GET_{{RESOURCE}}_QUERY_KEY, params],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await Get{{Resource}}List({
        ...params,
        pageIndex: params?.pageIndex || pageParam,
        pageSize: params?.pageSize || RECORDS_PER_PAGE,
      });
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.items?.length ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
  return resp;
};
```

### Service Template
```tsx
import { AxiosError } from "axios";
import { message } from "antd";
import { API_URLS } from "../../../core/models/enums/url.enums";
import axiosHttp from "../../../core/services/Interceptors";
import { GenericResponse } from "../../../core/services/services.type";

const { REACT_APP_API_URL } = process.env;

// --- Types co-located in service file ---

export type {{PayloadType}} = {
  key: string;
  // ...fields
};

export type {{ResponseItemType}} = {
  id: number;
  name: string;
  // ...fields
};

export type {{ResponseType}} = {
  items: {{ResponseItemType}}[];
  totalCount: number;
};

// --- GET request (with try/catch error toast) ---

export const get{{Resource}} = async (params: {{ParamsType}}) => {
  try {
    const response = await axiosHttp.get<GenericResponse<{{ResponseType}}>>(
      REACT_APP_API_URL + API_URLS.BASE_{{FEATURE}} + API_URLS.GET_{{RESOURCE}},
      { params }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      message.error(error.message);
    }
  }
};

// --- POST request (no try/catch, error handled in hook/container) ---

export const create{{Resource}} = async (params: {{PayloadType}}) => {
  const response = await axiosHttp.post<GenericResponse<{{ResponseType}}>>(
    REACT_APP_API_URL + API_URLS.BASE_{{FEATURE}} + API_URLS.CREATE,
    params
  );
  return response.data;
};

// --- PUT request ---

export const update{{Resource}} = async (params: {{PayloadType}}) => {
  const response = await axiosHttp.put<GenericResponse<void>>(
    REACT_APP_API_URL + API_URLS.BASE_{{FEATURE}} + API_URLS.UPDATE,
    params
  );
  return response.data;
};

// --- DELETE request ---

export const delete{{Resource}} = async (params: {{DeletePayloadType}}) => {
  const response = await axiosHttp.delete<GenericResponse<void>>(
    REACT_APP_API_URL + API_URLS.BASE_{{FEATURE}} + API_URLS.DELETE,
    { params }   // GET-style params for DELETE
    // OR: { data: params }   // body-style for DELETE
  );
  return response.data;
};
```

### Type/Interface Template
```tsx
// --- GenericResponse wrapper (from core/services/services.type.ts) ---
export type GenericResponse<T> = {
  result: T;
  statusCode: number;
  message: string;
  errorMessage: string | FieldData[];
  isError: boolean;
  isFieldLevel: boolean;
};

// --- Payload types (use `type`) ---
export type {{Action}}Payload = {
  key: string;
  name: string;
};

// --- Response types (use `type`) ---
export type {{Resource}}Response = {
  items: {{Resource}}Type[];
  totalCount: number;
};

// --- Entity types (use `type`) ---
export type {{Resource}}Type = {
  id: number;
  key: string;
  name: string;
  // ...fields matching backend DTO
};

// --- Enums (use `enum` in separate .enum.ts file) ---
export enum {{FEATURE}}_STATUS {
  Active = "Active",
  Inactive = "Inactive",
}

// --- Form field name constants (in models/ folder) ---
export const {{FEATURE}}_FORM = {
  FIELD_NAME: "fieldName",
  OTHER_FIELD: "otherField",
};

// --- Interfaces (used occasionally, mainly for mutation options) ---
export interface I{{Action}}Request {
  key: string;
  value: string;
}
```

### Route Configuration Template
```tsx
// Routes.tsx - uses createBrowserRouter with lazy loading
import { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ProtectRoute from "./modules/auth/ProtectRoute";
import { ROUTES_CONST } from "./modules/core/models/constants/core.constants";

const {{PageComponent}} = lazy(() => import("./modules/features/{{Feature}}/pages/{{PageComponent}}"));

const router = createBrowserRouter([
  {
    path: ROUTES_CONST.HOME,
    element: <ProtectRoute><App /></ProtectRoute>,
    children: [
      {
        path: ROUTES_CONST.{{FEATURE_ROUTE}},
        element: <{{PageComponent}} />,
        children: [
          {
            path: ":id",
            element: <{{DetailPage}} />,
          },
        ],
      },
    ],
  },
]);
```

### Redux Store Template
```tsx
// Store uses @reduxjs/toolkit + redux-persist
// src/store/index.ts exports: store, persistor, RootState, AppDispatch
// Slices in: src/store/slice/{{SliceName}}Slice.ts

// Access state:
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
const { isAdmin, isHR } = useSelector((state: RootState) => state.userDetail);

// Dispatch actions:
import { useDispatch } from "react-redux";
import { setGlobalState } from "../../../../../store/slice/GlobalSlice";
dispatch(setGlobalState({
  error: {
    message: "...",
    type: NOTIFICATION_CONST.SUCCESS, // or .ERROR
  },
}));
```

### Conventions
- **Styling**: Tailwind CSS (utility-first) + custom CSS files in `src/styles/`. Ant Design theme overrides in `antd-custom.css`. Classes applied directly in JSX via `className`.
- **Exports**: Default exports for components (containers, pages, presentation). Named exports for hooks, services, types, enums. Barrel `index.ts` files re-export default: `export { default } from "./ComponentName";`
- **Props**: Type alias naming: `{{ComponentName}}Type` or `{{ComponentName}}Props` (both used, `Type` suffix more common).
- **File naming**: PascalCase for components/pages/containers (folder + file match). camelCase for hooks (`{{feature}}.hook.ts`), services (`{{feature}}Services.ts`), helpers. SCREAMING_SNAKE_CASE for query keys and enum values.
- **Error handling**: Two patterns: (1) Services with try/catch using `message.error()` from antd for GET requests. (2) Mutations handle errors in container `onError` callback via `dispatch(setGlobalState({ error: ... }))`.
- **Global notifications**: Via Redux GlobalSlice: `dispatch(setGlobalState({ error: { message, type: NOTIFICATION_CONST.SUCCESS|ERROR } }))`.
- **Import ordering**: External packages first (react, antd, react-router, tanstack, redux), then internal absolute imports (core modules, store), then relative imports (local feature files). Enforced by `@trivago/prettier-plugin-sort-imports`.
- **Query keys**: Exported const string in SCREAMING_SNAKE_CASE: `export const GET_{{RESOURCE}}_QUERY_KEY = "GET_{{RESOURCE}}_QUERY_KEY";` defined in hook files alongside the hook.
- **API URL pattern**: `REACT_APP_API_URL + API_URLS.BASE_{{FEATURE}} + API_URLS.{{ACTION}}`. API_URLS is an enum in `core/models/enums/url.enums.ts`. Base URL from `process.env.REACT_APP_API_URL`.
- **HTTP client**: Axios via custom instance `axiosHttp` from `core/services/Interceptors.tsx` (handles JWT auth, token refresh, request throttling/queueing).
- **i18n**: `useSafeTranslation("locale")` hook from core, returns `t` function. Translation keys like `t("teams.createEditTeam.titles.add")`.
- **Date library**: dayjs (with UTC plugin).
- **UI component prefix**: Custom shared components prefixed with `SC` (SCButton, SCSearch, SCTable, SCDatePicker, etc.) in `core/component/ui/`. Some prefixed with `EC` (ECModal, ECGooglePlaceAutocomplete).
- **Types co-location**: Payload types and response types are typically co-located in the service file, not in separate type files. Enums go in `models/{{feature}}.enum.ts`.
- **Architecture**: Feature-based modular architecture. Each feature under `modules/features/` is self-contained with containers/presentation/pages/hooks/service/models layers.

### Function Index (PassportToWork)

**passportToWork.hook.ts** (`modules/features/PassportToWork/hooks/passportToWork.hook.ts`):
```
  Re-exports (systemSettings.hooks) → L42-55
  Re-exports (jobs.hooks) → L58-80
  Re-exports (applications.hooks) → L83-97
  Re-exports (offerTemplates.hooks) → L100-107
  Re-exports (interviews.hooks) → L110-126
  Re-exports (jobRequests.hooks) → L129-132
  Re-exports (query key constants) → L135-157
  GET_RECRUITER_PERMISSIONS_QUERY_KEY → L170
  useGetRecruiterPermissions → L172
  useUpdateRecruiterPermissions → L200
```

**passportToWork.service.ts** (`modules/features/PassportToWork/services/passportToWork.service.ts`):
```
  --- Types ---
  Job (interface) → L11
  Application (interface) → L44
  ApplicationNote (interface) → L64
  OfferData (interface) → L71
  AIAnalysis (interface) → L79
  EligibilityCheck (interface) → L87
  ApplicationSearchParams (interface) → L93
  BulkActionRequest (interface) → L102
  BulkUpdateStatusRequest (interface) → L108
  Interview (interface) → L113
  InterviewAssessment (interface) → L138
  JobRequest (interface) → L170
  PaginatedResponse (interface) → L186
  JobSearchParams (interface) → L194
  RecruiterPortalData (interface) → L205
  InterviewSlot (interface) → L813
  InterviewResults (interface) → L828
  CandidateSearchParams (interface) → L1314
  Candidate (interface) → L1323
  CandidateSearchResponse (interface) → L1339
  CandidateProfileData (interface) → L1364
  RubricCriteriaResult (interface) → L1469
  ScreeningEvaluationResult (interface) → L1481
  ScreeningEvaluationRequest (interface) → L1493
  BulkScreeningEvaluationRequest (interface) → L1501
  BulkScreeningEvaluationResponse (interface) → L1506

  --- Service Objects ---
  jobsService → L226
    .getAll → L228
    .search → L276
    .getRecommended → L285
    .getById → L293
    .getByKey → L301
    .create → L309
    .update → L318
    .delete → L327
    .getDashboardStats → L332
    .getRecruiterDashboardStats → L345
    .getRecruiterPortalData → L361
    .approveRequest → L369
    .approve → L374
    .reject → L378
    .saveDraft → L387
    .getManagerDashboardStats → L396
    .getPendingApprovals → L422
    .getByManager → L430
    .getMyRequests → L438
    .getRequirements → L456
    .updateRequirements → L473
    .getQuestions → L503
    .updateQuestions → L516
    .submitForApproval → L552
    .requestChanges → L559

  applicationsService → L572
    .getMyApplications → L574
    .getByJob → L582
    .getById → L681
    .getByKey → L689
    .checkEligibility → L697
    .apply → L718
    .updateStatus → L735
    .shortlist → L742
    .reject → L747
    .search → L752
    .getAiAnalysis → L761
    .flagFutureStar → L769
    .addToBlacklist → L774
    .addNote → L779
    .sendOffer → L784
    .acceptOffer → L789
    .declineOffer → L794
    .bulkAction → L799
    .bulkUpdateStatus → L804

  mapInterviewFromBackend (helper) → L841

  interviewsService → L884
    .getAll → L886
    .getById → L909
    .getByKey → L917
    .getByJob → L925
    .getByApplication → L933
    .create → L942
    .createSlot → L979
    .getSlots → L1000
    .bookSlot → L1008
    .cancelSlot → L1013
    .start → L1018
    .cancel → L1023
    .reschedule → L1028
    .getAssessment → L1037
    .saveAssessmentDraft → L1157
    .submitAssessment → L1192
    .updateQuestionResponse → L1225
    .getResults → L1258
    .sendInvitation → L1266
    .respond → L1271
    .getPendingInvitations → L1279

  jobRequestsService → L1291
    .createRequest → L1293
    .getById → L1302

  headhuntingService → L1344
    .findCandidates → L1346
    .inviteCandidate → L1355

  candidateProfileService → L1454
    .getByApplicationKey → L1457

  screeningEvaluationService → L1517
    .evaluateSingle → L1519
    .evaluateBulk → L1571
    .saveResults → L1606
    .getResponses → L1627

  systemSettingsService (re-export) → L1651
```

**RecruiterPortalContainer.tsx** (`modules/features/PassportToWork/containers/RecruiterPortalContainer/RecruiterPortalContainer.tsx`):
```
  RecruiterPortalContainer (component) → L23
  enrichJobsWithBusinessUnitNames → L35
  stats (useMemo) → L57
  draftJobs (useMemo) → L67
  pendingJobs (useMemo) → L71
  incompleteJobs (useMemo) → L75
  waitingApprovalJobs (useMemo) → L79
  activeJobs (useMemo) → L83
  allJobs (useMemo) → L87
  handleViewInterviewDetails → L96
  handleStartInterview → L100
  handleCancelInterview → L111
  handleRescheduleInterview → L115
  handleRefresh → L119
  handleRejectJob → L124
  handleApproveRequest → L136
  handleCompleteJob → L140
  handleCompleteSetup → L168
  handleManageJob → L175
  handleDeleteJob → L179
  handleEditDraft → L183
```
