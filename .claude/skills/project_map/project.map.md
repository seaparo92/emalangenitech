# Speccon Academy FE WS - Project Map

**Generated: 2026-02-02**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19.2 + TypeScript |
| Build | Vite 6.2 |
| Styling | Tailwind CSS (CDN) |
| Routing | React Router DOM 7.9 (HashRouter) |
| Charts | Recharts 3.4 |
| Icons | Lucide React |
| State | React Context (AuthContext, TapNavContext) |
| Tests | None configured |
| Backend | ASP.NET Core 7.0 (documented, not integrated) |
| API Base | https://dev-service.tap.co.za |

---

## Directory Structure

```
Speccon Academy FE WS/
├── CLAUDE.md                         # Project instructions
├── .claude/                          # Claude skills (18), agents (3), rules
│   ├── agents/                       # planner, refactor-cleaner, security-reviewer
│   ├── docs/                         # api-contracts, database-changes
│   └── skills/                       # 18 skill modules (see below)
└── Academy Classroom/                # Main React app
    ├── index.html                    # Entry HTML (Tailwind CDN, import maps)
    ├── index.tsx                     # React entry point
    ├── App.tsx                       # Root component + routing
    ├── types.ts                      # All TypeScript interfaces/enums
    ├── vite.config.ts                # Port 4000, host 0.0.0.0
    ├── tsconfig.json                 # ES2022, bundler resolution
    ├── package.json                  # 5 deps, 4 devDeps
    ├── .env.local                    # GEMINI_API_KEY
    ├── components/                   # 7 shared components
    ├── pages/                        # 30 page components
    │   ├── [6 public pages]
    │   ├── admin/    (5 pages)
    │   ├── learner/  (8 pages)
    │   ├── parent/   (2 pages)
    │   └── teacher/  (9 pages)
    ├── services/                     # mockData.ts (all mock data + MockService)
    ├── public/images/                # Static assets
    ├── dist/                         # Build output
    ├── Documentation/                # Specs, user stories, API docs
    └── Brand Guide/                  # Logos, colors, brand assets
```

---

## Components (7)

| File | Purpose |
|------|---------|
| components/AuthContext.tsx | Auth state (login/logout/user via Context) |
| components/TapNavContext.tsx | Navigation state for TAP integration |
| components/TapBranding.tsx | Logo and branding elements |
| components/Navbar.tsx | Role-based navigation bar |
| components/Layout.tsx | Common page layout wrapper |
| components/CreateClassModal.tsx | Modal: create new class |
| components/JoinClassModal.tsx | Modal: join class with code |

---

## Pages by Role

### Public (6)
| File | Route | Purpose |
|------|-------|---------|
| pages/LandingPage.tsx | / | Marketing homepage |
| pages/Login.tsx | /login | Authentication |
| pages/Register.tsx | /register | User registration |
| pages/AcademyDetails.tsx | /academy-details | Academy info |
| pages/SpecconBuddies.tsx | /speccon-buddies | Buddies program |
| pages/AdminDashboard.tsx | (root-level duplicate) | Admin overview |

### Learner (8)
| File | Route |
|------|-------|
| pages/learner/LearnerDashboard.tsx | /dashboard (learner) |
| pages/learner/SubjectDetail.tsx | /subject/:id |
| pages/learner/TakeAssignment.tsx | /take-assignment/:id |
| pages/learner/LearnerTests.tsx | /tests |
| pages/learner/LearnerResults.tsx | /results |
| pages/learner/LearnerMessages.tsx | /messages |
| pages/learner/LearnerNotifications.tsx | /notifications |
| pages/learner/QuestionBank.tsx | /question-bank |

### Teacher (9)
| File | Route |
|------|-------|
| pages/teacher/TeacherDashboard.tsx | /dashboard (teacher) |
| pages/teacher/TeacherClasses.tsx | /teacher-classes |
| pages/teacher/TeacherClassDetail.tsx | /teacher-class/:classId |
| pages/teacher/TeacherClusters.tsx | /teacher-clusters |
| pages/teacher/TeacherStudents.tsx | /teacher-students |
| pages/teacher/TeacherHomework.tsx | /teacher-homework |
| pages/teacher/TeacherTests.tsx | /teacher-tests |
| pages/teacher/TeacherMessages.tsx | /teacher-messages |
| pages/teacher/TeacherNotifications.tsx | /teacher-notifications |

### Parent (2)
| File | Route |
|------|-------|
| pages/parent/ParentDashboard.tsx | /dashboard (parent) |
| pages/parent/ParentMessages.tsx | /parent-messages |

### Admin (5)
| File | Route |
|------|-------|
| pages/admin/AdminDashboard.tsx | /dashboard (admin) |
| pages/admin/AdminStudents.tsx | /admin-students |
| pages/admin/AdminTeachers.tsx | /admin-teachers |
| pages/admin/AdminClasses.tsx | /admin-classes |
| pages/admin/AdminSettings.tsx | /admin-settings |

---

## Services

| File | Contents |
|------|----------|
| services/mockData.ts | All mock data (users, classes, assignments, submissions, messages, notifications, clusters) + MockService class with methods: login, getClasses, getAssignments, submitAssignment, getMessages, getNotifications, etc. |

---

## Type System (types.ts)

### Enums
- `UserRole`: LEARNER, TEACHER, ADMIN, PARENT

### Interfaces
- `User` - id, name, email, role, avatarUrl?, childIds?
- `Classroom` - id, name, subject, grade, joinCode, teacherId, studentIds, stats?
- `Assignment` - id, classId, title, type (HOMEWORK|TEST), dueDate, status, questions, timeLimitMinutes?
- `Question` - id, text, type, options?, correctAnswer, explanation, points, taxonomyLevel?
- `Submission` - id, assignmentId, studentId, answers, score, totalPoints, status
- `Message` - id, senderId, recipientId, subject, body, sentAt, read
- `Notification` - id, userId, type, title, message, timestamp, read
- `Cluster` - id, name, teacherIds, sharedQuestions

---

## Routing (App.tsx)

```
HashRouter → AuthProvider → Layout → Routes
  / → LandingPage
  /login → Login
  /register → Register
  /academy-details → AcademyDetails
  /speccon-buddies → SpecconBuddies
  /dashboard → DashboardRouter (role-based redirect)
  /teacher-* → ProtectedRoute → [Teacher pages]
  /subject/:id, /tests, /results, etc. → ProtectedRoute → [Learner pages]
  /admin-* → ProtectedRoute → [Admin pages]
  /parent-* → ProtectedRoute → [Parent pages]
  * → Navigate to /
```

---

## Data Flow (Current)

```
UI Action → Component → MockService.method() → Mock Data → Re-render
```

**Future (documented):**
```
UI Action → Component → API Service → ASP.NET Core API → SQL Server → Response
```

---

## Configuration

| File | Key Settings |
|------|-------------|
| vite.config.ts | port: 4000, host: 0.0.0.0, alias @ → root |
| tsconfig.json | ES2022, ESNext modules, bundler resolution |
| package.json | scripts: dev, build, preview |
| .env.local | GEMINI_API_KEY |

---

## Claude Skills (18)

| Skill | Purpose |
|-------|---------|
| api-contract-validation | FE↔BE type/URL matching |
| api-docs-sync | Keep API docs synchronized |
| api-validator | Validate API contracts |
| architecture-scanner | Detect FE/BE layers |
| auto-learning | Pattern learning system |
| backend-patterns | .NET conventions cache |
| frontend-patterns | React conventions cache |
| build-check | Auto-compile/type-check |
| cache-refresh | Keep caches fresh |
| coding-standards | Code quality enforcement |
| feature-completeness | End-to-end wiring check |
| file-index | Feature-to-file lookup |
| function-extract | Read specific functions |
| import-graph | Dependency tracking |
| lessons-learned | Error pattern memory |
| post-creation-verify | Registration verification |
| project_map | This file |
| self-review | Code quality checklist |
| session-resume | Cross-session context |
| smart_context | Token-optimized loading |
| strategic-compact | Context compaction |
| task-journal | Persistent task log |
| test-map | Targeted test running |

---

## Current Status

- **Frontend**: Fully functional prototype with mock data
- **Backend**: Documented but not integrated
- **Tests**: None configured
- **Deployment**: Google Cloud Run (documented)
- **File count**: 37 TSX files, 1 service, 18 skills, 3 agents
