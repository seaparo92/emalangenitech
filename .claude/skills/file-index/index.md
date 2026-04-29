# File Index
Generated: 2026-01-29
Root: c:\Users\USER-PC\Desktop\P2W\
FE base: Speccon_TAP_Ext_React/Speccon.Tap.Web/src/modules/features/
BE base: Speccon_TAP_Ext/src-tap/

## Academy
FE: hooks/{academy,academyAssessment,academyExamintaion,analytics,studentProfile}.hook.ts | services/questionReport.service.ts | context/AcademyFiltersContext.tsx
BE-ctrl: AcademyAnalyticsController, AcademyExaminationController, AcademyMasterController, AssessmentController, StudentController
BE-svc: Services/Academy/{AcademyAnalyticsService,AcademyExaminationService,AcademyMasterService}.cs
BE-iface: Interfaces/Services/Academy/I{AcademyAnalytics,AcademyExamination,AcademyMaster}Service.cs
BE-entity: Entities/{Academy,AcademyMaster}.cs | BE-dtos: ServiceDtos/Academy/

## Buddies
FE: models/constants/index.ts
BE-ctrl: BuddiesController, BuddiesDocumentController, BuddiesProfileController
BE-svc: Services/Buddies/{BuddiesService,BuddiesDocumentService,BuddiesProfileService}.cs
BE-iface: Interfaces/Services/Buddies/I{Buddies,BuddiesDocument,BuddiesProfile}Service.cs
BE-dtos: ServiceDtos/Buddies/

## Dashboard
FE: hooks/{useHomeDashboardConfig,useTabbedDashboardConfig,useUserDashboardConfig}.ts | types/{homeDashboard,tabbedDashboard}.types.ts | context/TAPManagerFiltersContext.tsx
BE-ctrl: DashboardController
BE-svc: Services/Dashboard/Configurations/UserDashboardConfigService.cs

## Teams
FE: hooks/{teams,teamLeaderboard}.hook.ts | service/{teamsServices,teamLeaderboard.Services}.ts | models/teams.enum.ts
BE-ctrl: TeamsController, TeamMemberController, TeamLeaderboardController
BE-svc: Services/Teams/{TeamService,TeamMemberRolesService}.cs | Services/Teams/TeamLeaderboards/TeamLeaderboardService.cs
BE-dtos: ServiceDtos/Teams/

## EmploymentEquity
FE: hooks/{employmentEquity.hook,useCompanyProfile,useGetPlanDetails,useSearchWorkforceProfile}.ts | services/{employmentEquity,employmentEquityPlan,employmentEquityReports}.service(s).ts
BE-ctrl: EmploymentEquityReportingController, EntityController, EntityPlanController, EntitySectionController, EntityWorkForceAnalysisController, EquityEntityConfigurationController, EquityWorkforceProfileController
BE-svc: Services/EmployeeEquity/{EquityEntity/EquityEntityService,EquityPlan/EntityPlanService,EquitySection/EquitySectionService,EquityWorkforceAnalysis/EntityWorkForceAnalysisService,EquityWorkforceProfile/EntityWorkforceProfileService}.cs
BE-entity: Entities/{Entity,EntityPlan}.cs | BE-dtos: ServiceDtos/EmployeeEquity/

## ManageCourses
FE: containers/ManageCoursesContainer.tsx | services/{manageCourses,examManagement,quizManagement,unitAndLessonManagement}.services.ts | models/{ManageCourses,ExamManagement,QuizManagement}.interfaces.ts
BE-ctrl: CourseManagementController, ExamManagementController, QuizManagementController, UnitManagementController, LessonManagementController
BE-svc: Services/Moodle/{CourseManagement,ExamManagement,QuizManagement,UnitManagement,LessonManagement}Service.cs

## PassportToWork
FE: hooks/{jobs,applications,interviews,offerTemplates,systemSettings}.hooks.ts | services/{passportToWork,offerTemplates,systemSettings}.service.ts | models/{passportToWork.enums,offerLetter.types}.ts
BE-ctrl: HeadhuntingController, JobsController, ApplicationsController, InterviewsController, OfferTemplatesController
BE-svc: Services/PassportToWork/{HeadhuntingService,JobService,ApplicationService,OfferTemplateService,SystemSettingsService}.cs

## WhiteLabeling
FE: hooks/{banner,broadcasts,customCertificate}.hook.ts + {useTheme,useSMTPConfigurationServices,useTokens.hook}.ts | services/{theme,banners,broadcasts,customCertificate,tokens}.services.ts
BE-ctrl: CompanyThemeSettingController, BroadCastController, CertificateSignatureController, AccessKeysController
BE-svc: CompanyProfile/CompanyThemeSettingService.cs | Clients/ClientBroadcastService.cs | CertificateSignatures/CerificateSignatureService.cs

## WorkforceProfile
FE: hooks/{workforce.hooks,useGetOFOCodes}.ts | service/{workforceServices,commonServices}.ts
BE-ctrl: WorkforceProfileController
BE-svc: Services/WorkforceProfiles/WorkforceProfileService.cs

## PaymentModule
FE: hooks/paymentModule.hook.ts | services/paymentModule.services.ts | models/types/course.type.ts | models/enums/course.enum.ts
BE-ctrl: PaymentController, PayFastController
BE-svc: Payments/Transactions/PaymentTransactionService.cs | PayFast/PayFastService.cs

## MyShoppingCart
FE: hooks/myShoppingCart.hook.ts | services/myShoppingCart.service.ts | models/CheckoutForm.ts
BE-ctrl: ShoppingController | BE-svc: Users/UserCarts/UserCartService.cs

## CourseDetail
FE: hooks/{exam,quiz}.hook.ts | services/{exam,quiz}.services.ts
BE-ctrl: CourseController, UserCourseController
BE-svc: Courses/CourseService.cs | Users/UserCourses/UserCourseService.cs

## DefaultCompanyProfile
FE: hooks/{useCompanyProfile,useSearchWorkforceProfile}.ts | services/companyRegistrationBasicService.ts
BE-ctrl: CompanyProfileController | BE-svc: CompanyProfile/CompanyProfileService.cs

## AdminReports + DashboardReporting
FE-admin: hooks/useAdminReports.ts | services/adminReports.services.ts | types/dashboard.types.ts
FE-reporting: hooks/useAssignment.ts | services/{assignment,emailSubscribe}.services.ts
BE-svc: DevExpress/{ReportService,UserBasedReportConfigurationService}.cs

## HelpAndSupport
FE: services/helpAndSupport.services.ts | models/types/helpAndSupport.type.ts
BE-svc: Dashboard/HelpAndSupports/HelpAndSupportRequestService.cs | BE-entity: Entities/HelpAndSupportRequest.cs

## Entity (EE Entity Management)
FE: hooks/entity.hook.ts | services/entityServices.ts | models/entity.enum.ts
BE-ctrl: EntityCompanyProfileController, EntityEquityCommitteeMeetingController, EntityEquityCommitteeMemberController, EntityEquityManagerController

## FE-Only Features (no dedicated BE controller)
- AboutUs: containers/ | pages/ | presentation/ | services/
- BillingDetails: containers/ | pages/ | presentation/ | services/
- BundlesDetails: hooks/bundlesDetails.hook.ts | services/bundlesDetails.services.ts
- ContactUs: containers/ | pages/ | presentation/
- CourseLibrary: hooks/searchFilter.hook.ts | services/
- CoursesDetails: hooks/coursesDetails.hooks.ts | services/coursesDetails.services.ts
- CreateCourse: containers/ | pages/ | presentation/
- DownloadApp: containers/ | pages/ | services/
- MyCourseDetails: hooks/course.hook.ts
- MyProfile: hooks/useWorkExperienceModel.hook.ts
- QuizPage: containers/ | pages/ | presentation/
- Settings: containers/ | pages/ | presentation/
- WishList: presentation/

---

## Shared / Core

### FE Auth
Speccon_TAP_Ext_React/Speccon.Tap.Web/src/modules/auth/ (Auth.tsx, ProtectRoute.tsx, containers/, hooks/, services/, pages/)

### FE Core
Speccon_TAP_Ext_React/Speccon.Tap.Web/src/modules/core/ (component/, hooks/, models/, services/, presentation/)

### FE Shared Services
src/services/common/commonService.ts | src/services/profile/profileService.ts | src/services/cvParser/cvParser.service.ts | src/services/cvAnalysis/cvAnalysis.service.ts

### FE Store (Redux)
src/store/index.ts | src/store/slice/{AcademySlice,AuthSlice,CartDetails,CompanyConfigSlice,DashboardBuilder.slice,GlobalSlice,PermissionSlice,ThemeSlice,UserDetailSlice,...}.ts

### FE Global Hooks
src/hooks/{useEventListener,useIsThemePreview,useQueryParams,useResizeObserver,useThemeColor,useThemeLogo,...}.ts

### FE Entry
src/App.tsx | src/Routes.tsx

### BE Base Controllers
Presentation/Speccon.Tap.Api/Controllers/BaseController.cs | UserController.cs | ClientController.cs | SystemConfigurationController.cs

### BE Core Services
Services/Authorizations/Auths/AuthService.cs | Users/Users/UserService.cs | Clients/ClientService.cs | Emails/EmailService.cs | Azure/BlobStorage/BlobStorageService.cs | Documents/DocumentService.cs

### BE Domain Entities
Domain/Speccon.Tap.Domain/Entities/

### BE Other Presentations
GenAI: Presentation/Speccon.Tap.GenAI/Controllers/GenAIController.cs
WhatsApp: Presentation/Speccon.Tap.WhatsApp/Controllers/{WebhookController,AcademyWebhookController}.cs
Scheduler: Presentation/Speccon.Tap.Scheduler/Controllers/SchedulerController.cs
Enterprise: Presentation/Speccon.Tap.Enterprise/Controllers/{CourseController,UserController}.cs
Reporting: Presentation/Speccon.Tap.Reporting/DefaultDashboardController.cs
