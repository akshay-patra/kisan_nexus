kisan_nexus/
├── .github
│   └── modernize
│       └── java-upgrade
│           ├── hooks
│           │   ├── scripts
│           │   │   ├── recordToolUse.ps1
│           │   │   └── recordToolUse.sh
│           │   └── 9dd88e20-67c3-4982-997a-b0f8313c96b8.json
│           └── .gitignore
├── ai_service
│   ├── app
│   ├── data
│   ├── models
│   ├── tests
│   ├── .env.example
│   ├── README.md
│   └── requirements.txt
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── kisannexus
│   │   │   │           ├── aggregation
│   │   │   │           │   ├── Aggregation.java
│   │   │   │           │   ├── AggregationContribution.java
│   │   │   │           │   ├── AggregationContributionRepository.java
│   │   │   │           │   └── AggregationRepository.java
│   │   │   │           ├── authentication
│   │   │   │           │   ├── dto
│   │   │   │           │   │   ├── RegisterRequest.java
│   │   │   │           │   │   └── RegistrationResponse.java
│   │   │   │           │   ├── otp
│   │   │   │           │   │   ├── dto
│   │   │   │           │   │   │   ├── OtpResponse.java
│   │   │   │           │   │   │   ├── ResendOtpRequest.java
│   │   │   │           │   │   │   ├── SendOtpRequest.java
│   │   │   │           │   │   │   └── VerifyOtpRequest.java
│   │   │   │           │   │   ├── DemoOtpService.java
│   │   │   │           │   │   ├── OtpController.java
│   │   │   │           │   │   ├── OtpPurpose.java
│   │   │   │           │   │   ├── OtpRepository.java
│   │   │   │           │   │   ├── OtpService.java
│   │   │   │           │   │   └── OtpVerification.java
│   │   │   │           │   ├── RegistrationController.java
│   │   │   │           │   └── RegistrationService.java
│   │   │   │           ├── buyers
│   │   │   │           │   ├── Buyer.java
│   │   │   │           │   └── BuyerRepository.java
│   │   │   │           ├── common
│   │   │   │           │   ├── enums
│   │   │   │           │   │   ├── OrderStatus.java
│   │   │   │           │   │   ├── QualityGrade.java
│   │   │   │           │   │   ├── QuantityUnit.java
│   │   │   │           │   │   ├── SupplyStatus.java
│   │   │   │           │   │   └── UserRole.java
│   │   │   │           │   └── exception
│   │   │   │           │       ├── ErrorResponse.java
│   │   │   │           │       └── GlobalExceptionHandler.java
│   │   │   │           ├── farmers
│   │   │   │           │   ├── Farmer.java
│   │   │   │           │   └── FarmerRepository.java
│   │   │   │           ├── forecasting
│   │   │   │           │   ├── DemandForecast.java
│   │   │   │           │   └── DemandForecastRepository.java
│   │   │   │           ├── fpos
│   │   │   │           │   ├── Fpo.java
│   │   │   │           │   ├── FpoMember.java
│   │   │   │           │   ├── FpoMemberRepository.java
│   │   │   │           │   └── FpoRepository.java
│   │   │   │           ├── impact
│   │   │   │           ├── logistics
│   │   │   │           ├── marketplace
│   │   │   │           ├── matching
│   │   │   │           ├── orders
│   │   │   │           │   ├── Order.java
│   │   │   │           │   ├── OrderItem.java
│   │   │   │           │   └── OrderRepository.java
│   │   │   │           ├── products
│   │   │   │           │   ├── Product.java
│   │   │   │           │   └── ProductRepository.java
│   │   │   │           ├── requirements
│   │   │   │           │   ├── BuyerRequirement.java
│   │   │   │           │   └── RequirementRepository.java
│   │   │   │           ├── security
│   │   │   │           │   ├── PasswordConfig.java
│   │   │   │           │   └── SecurityConfig.java
│   │   │   │           ├── supply
│   │   │   │           │   ├── SupplyListing.java
│   │   │   │           │   └── SupplyRepository.java
│   │   │   │           ├── users
│   │   │   │           │   ├── User.java
│   │   │   │           │   └── UserRepository.java
│   │   │   │           └── BackendApplication.java
│   │   │   └── resources
│   │   │       ├── static
│   │   │       │   └── index.html
│   │   │       ├── templates
│   │   │       └── application.properties
│   │   └── test
│   │       ├── java
│   │       │   └── com
│   │       │       └── kisannexus
│   │       │           ├── authentication
│   │       │           │   ├── otp
│   │       │           │   │   ├── DemoOtpServiceTest.java
│   │       │           │   │   └── OtpControllerTest.java
│   │       │           │   └── RegistrationServiceTest.java
│   │       │           └── BackendApplicationTests.java
│   │       └── resources
│   │           ├── application-test.properties
│   │           └── application.properties
│   ├── .env.example
│   ├── .gitattributes
│   ├── .gitignore
│   ├── Dockerfile
│   ├── HELP.md
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
├── database
│   ├── migrations
│   ├── seed
│   └── README.md
├── docs
│   ├── api.md
│   ├── architecture.md
│   ├── database.md
│   └── mvp-scope.md
├── frontend
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── kisan_nexus_logo_transparent.png
│   │   ├── kisan_nexus_logo_white_bg.png
│   │   ├── kisan_nexus_sidebar_image.png
│   │   ├── kisan_nexus_web_logo.png
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── src
│   │   ├── app
│   │   │   ├── admin
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── AdminDashboard.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── impact
│   │   │   │   │   ├── AdminImpact.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── listings
│   │   │   │   │   ├── AdminListings.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── orders
│   │   │   │   │   ├── AdminOrders.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── profile
│   │   │   │   │   ├── AdminProfile.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── users
│   │   │   │   │   ├── AdminUsers.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── AdminLayout.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── buyer
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── BuyerDashboard.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── marketplace
│   │   │   │   │   ├── BuyerMarketplace.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── orders
│   │   │   │   │   ├── BuyerOrders.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── profile
│   │   │   │   │   ├── BuyerProfile.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── requirements
│   │   │   │   │   ├── create
│   │   │   │   │   │   ├── CreateBuyerRequirement.tsx
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── BuyerRequirements.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── BuyerLayout.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── farmer
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── FarmerDashboard.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── matches
│   │   │   │   │   ├── FarmerMatches.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── orders
│   │   │   │   │   ├── FarmerOrders.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── profile
│   │   │   │   │   ├── FarmerProfile.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── supply
│   │   │   │   │   ├── add
│   │   │   │   │   │   ├── AddFarmerSupply.tsx
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── FarmerSupply.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── FarmerLayout.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── fpo
│   │   │   │   ├── aggregation
│   │   │   │   │   ├── FpoAggregation.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── FpoDashboard.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── farmers
│   │   │   │   │   ├── FpoFarmers.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── forecasting
│   │   │   │   │   ├── FpoForecasting.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── logistics
│   │   │   │   │   ├── FpoLogistics.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── marketplace
│   │   │   │   │   ├── FpoMarketplace.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── orders
│   │   │   │   │   ├── FpoOrders.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── profile
│   │   │   │   │   ├── FpoProfile.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── FpoLayout.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── login
│   │   │   │   ├── Login.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── register
│   │   │   │   ├── Register.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components
│   │   │   ├── charts
│   │   │   ├── common
│   │   │   ├── forms
│   │   │   ├── marketplace
│   │   │   ├── navigation
│   │   │   ├── orders
│   │   │   └── ui
│   │   ├── features
│   │   │   ├── authentication
│   │   │   ├── buyer
│   │   │   ├── farmer
│   │   │   ├── forecasting
│   │   │   ├── fpo
│   │   │   ├── impact
│   │   │   ├── logistics
│   │   │   ├── marketplace
│   │   │   ├── matching
│   │   │   └── orders
│   │   ├── hooks
│   │   ├── lib
│   │   │   ├── api
│   │   │   ├── auth
│   │   │   ├── constants
│   │   │   └── utils
│   │   └── types
│   ├── .env.example
│   ├── .gitignore
│   ├── AGENTS.md
│   ├── CLAUDE.md
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── tools
│   ├── generate_structure.js
│   └── scaffold.js
├── .gitignore
├── DIRECTORY_STRUCTURE.md
└── README.md
