// Official books library for Dot Net Interview Community by Nirbhay Chauhan
import { site } from "./site";

export const books = [
  {
    id: 1,
    slug: "master-net-fundamentals",
    title: "Master .NET Fundamentals",
    series: "Dot Net Interview Preparation Series",
    category: "developer",
    categoryLabel: "Developer Interviews",
    label: "01 / FOUNDATIONS",
    color: "teal",
    accentHex: "#079C87",
    cardBg: "#E9F8F4",
    coverImage: "/images/books/book-01.png",
    coverImageTight: "/images/books/book-01-tight.png",
    author: "Nirbhay Chauhan",
    kicker: "Essential Strategies for Successful Interview",
    tagline: "Learn Core Concepts, Optimize Your Preparation, Nail the Interview Process, and Secure Your Dream Job in Tech.",
    summary: "A focused, visual guide to mastering the Common Language Runtime (CLR), memory allocation, garbage collection, and runtime internals.",
    whoIsItFor: "Students, freshers, junior developers, and professionals revising fundamental .NET runtime architecture.",
    whatsInside: [
      "CLR execution model, IL bytecode, JIT compilation & assembly resolution",
      "Memory internals: Stack vs Heap, Boxing/Unboxing & allocation overhead",
      "Garbage Collection (GC) generations, Large Object Heap (LOH) & GC pauses",
      "Type system: Value types, Reference types, Structs vs Classes & memory layout",
      "Exception handling best practices, filters, and unwinding mechanics",
      "Top 50 frequently tested runtime interview questions with model answers"
    ],
    learningOutcomes: [
      "Explain the exact CLR execution lifecycle step-by-step on a whiteboard",
      "Diagnose memory leaks and explain how modern GC generations work",
      "Answer tricky value-type and reference-type questions without hesitating",
      "Demonstrate deep fundamental clarity that interviewers look for in foundational rounds"
    ],
    topics: [".NET CLR Internals", "Garbage Collection & Generations", "Memory Management", "Value vs Reference Types", "Exception Architecture"],
    ebookPrice: 299,
    hardcoverPrice: 599,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: ".NET CLR Execution & Memory Management Demystified", duration: "18 mins", url: site.youtube },
      { title: "Garbage Collection Generations 0, 1, 2 Explained with Diagrams", duration: "14 mins", url: site.youtube }
    ]
  },
  {
    id: 2,
    slug: "master-csharp-interview-preparation",
    title: "Master C# Interview Preparation",
    series: "Dot Net Interview Preparation Series",
    category: "developer",
    categoryLabel: "Developer Interviews",
    label: "02 / C#",
    color: "blue",
    accentHex: "#2563EB",
    cardBg: "#EFF6FF",
    coverImage: "/images/books/book-02.png",
    coverImageTight: "/images/books/book-02-tight.png",
    author: "Nirbhay Chauhan",
    kicker: "The Ultimate Guide to Success",
    tagline: "Learn C# Fundamentals, Excel in Technical Interviews, Gain Insights into Real-World Applications, and Secure Your Dream Job.",
    summary: "Organize your knowledge and prepare to answer deep language questions from OOP fundamentals to modern C# records, pattern matching, and spans.",
    whoIsItFor: "C# engineers of all experience levels preparing for coding interviews and technical discussions.",
    whatsInside: [
      "OOP principles in modern C#: abstract classes vs interfaces & default interface methods",
      "Generics, collections, IEnumerable vs IQueryable vs IList performance trade-offs",
      "Async/await under the hood: State machines, SynchronizationContext & deadlock prevention",
      "LINQ internals, deferred execution, and query optimization",
      "Modern C# 10/11/12/13 features: records, pattern matching, raw strings & ref structs",
      "Real code snippets with common interviewer follow-up and 'what happens if' questions"
    ],
    learningOutcomes: [
      "Articulate the difference between Task.Run, async/await, and thread pool workers",
      "Explain complex LINQ query execution and avoid memory allocations in loops",
      "Design clean, testable object models using modern C# idiom and design patterns",
      "Confidently answer senior-level language trivia and performance questions"
    ],
    topics: ["Modern C# Features", "Async / Await State Machine", "LINQ Deferred Execution", "OOP & Interface Design", "Collections & Generics"],
    ebookPrice: 299,
    hardcoverPrice: 599,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "Async/Await Under the Hood in C# with Visual State Machines", duration: "22 mins", url: site.youtube },
      { title: "IEnumerable vs IQueryable: The Interview Trap You Must Avoid", duration: "12 mins", url: site.youtube }
    ]
  },
  {
    id: 3,
    slug: "net-developers-interview-toolkit",
    title: ".NET Developer's Interview Toolkit",
    series: "Dot Net Interview Preparation Series",
    category: "developer",
    categoryLabel: "Developer Interviews",
    label: "03 / ENGINEERING",
    color: "indigo",
    accentHex: "#4F46E5",
    cardBg: "#EEF2FF",
    coverImage: "/images/books/book-03.png",
    coverImageTight: "/images/books/book-03-tight.png",
    author: "Nirbhay Chauhan",
    kicker: "The Ultimate Guide to Success",
    tagline: "Demystifying Multithreading, Become an Authentication & Authorization Expert, Develop WinForms, WebForms, Web Services, & WCF, and Secure Your Career.",
    summary: "Go deeper into enterprise application engineering: multithreading, synchronization, JWT/OAuth2, caching, and resilient microservices communication.",
    whoIsItFor: "Mid-level and senior .NET developers aiming for top engineering positions and product companies.",
    whatsInside: [
      "Multithreading & concurrency: lock, Monitor, Mutex, and SemaphoreSlim",
      "Enterprise authentication: JWT bearer tokens, OAuth2 flows, and claims authorization",
      "Dependency Injection lifetimes (Transient, Scoped, Singleton) and captive dependency traps",
      "RESTful API best practices, versioning, idempotency, and gRPC communication",
      "Caching architectures: in-memory, distributed Redis caching & Cache-Aside pattern",
      "Microservice resilience patterns: Circuit Breakers, retries, and rate limiting with Polly"
    ],
    learningOutcomes: [
      "Identify and debug race conditions and deadlocks in concurrent C# code",
      "Explain end-to-end user authentication and token exchange architectures",
      "Design robust distributed caching and data consistency strategies",
      "Demonstrate systems engineering maturity beyond basic CRUD controllers"
    ],
    topics: ["Concurrency & Synchronization", "JWT & Security Architecture", "Dependency Injection Mechanics", "Distributed Caching", "Polly Resilience"],
    ebookPrice: 349,
    hardcoverPrice: 649,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "DI Lifetimes Explained: Avoid the Captive Dependency Bug", duration: "16 mins", url: site.youtube },
      { title: "Multithreading & Concurrency Interview Questions Solved", duration: "20 mins", url: site.youtube }
    ]
  },
  {
    id: 4,
    slug: "mastering-net-core-interview",
    title: "Mastering the .NET Core Interview",
    series: "Dot Net Interview Preparation Series",
    category: "developer",
    categoryLabel: "Developer Interviews",
    label: "04 / ASP.NET CORE",
    color: "amber",
    accentHex: "#D97706",
    cardBg: "#FFFBEB",
    coverImage: "/images/books/book-04.png",
    coverImageTight: "/images/books/book-04-tight.png",
    author: "Nirbhay Chauhan",
    kicker: "Demystify MVC to Modern Web API",
    tagline: "Gain Expertise in MVC, ASP.NET Core, Web APIs, and EF Core, Excel in Complex Technical Interviews, Demonstrate Real-world Problem-solving Skills, and Unlock Top Career Opportunities.",
    summary: "Prepare for high-level discussions around ASP.NET Core web architecture, middleware pipelines, EF Core query performance, and backend containerization.",
    whoIsItFor: "Backend developers building production web applications, microservices, and high-throughput APIs on .NET 8+.",
    whatsInside: [
      "ASP.NET Core request pipeline: middleware order, short-circuiting & custom branches",
      "Configuration system: appsettings.json, environment overrides & Options pattern validation",
      "EF Core internals: ChangeTracker, Tracking vs No-Tracking queries & DbContext pooling",
      "High-performance data queries: avoiding N+1 queries, compiled queries & raw SQL projections",
      "Background processing: IHostedService, BackgroundService, and durable queued tasks",
      "Containerizing .NET Core services: Dockerfile multi-stage builds & health probes"
    ],
    learningOutcomes: [
      "Trace an incoming HTTP request through middleware to action filters and back",
      "Eliminate EF Core performance bottlenecks and optimize database round-trips",
      "Structure clean multi-project ASP.NET Core architectures (Clean Architecture / Vertical Slice)",
      "Speak with authority during architectural system design rounds"
    ],
    topics: ["Middleware Pipeline", "EF Core Performance & Optimization", "Options Pattern & Configuration", "Background Services", "Docker Containerization"],
    ebookPrice: 349,
    hardcoverPrice: 649,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "ASP.NET Core Middleware Pipeline: How Requests Actually Flow", duration: "19 mins", url: site.youtube },
      { title: "EF Core 8 Performance: How to Fix N+1 and Tracking Issues", duration: "24 mins", url: site.youtube }
    ]
  },
  {
    id: 5,
    slug: "conquer-azure-developer-interview",
    title: "Conquer the Azure Developer Interview",
    series: "Dot Net Interview Preparation Series",
    category: "developer",
    categoryLabel: "Developer Interviews",
    label: "05 / CLOUD",
    color: "cyan",
    accentHex: "#0891B2",
    cardBg: "#ECFEFF",
    coverImage: "/images/books/book-05.png",
    coverImageTight: "/images/books/book-05-tight.png",
    author: "Nirbhay Chauhan",
    kicker: "From Basics to Advanced",
    tagline: "Simplify Complex Concepts, Master Advanced Azure Practices, Optimize Interview Preparation, and Unlock Career Opportunities in Azure.",
    summary: "Clear mental models and interview answers for Microsoft Azure services: App Services, Azure Functions, Service Bus, Cosmos DB, and Managed Identities.",
    whoIsItFor: ".NET developers expanding into Azure cloud roles, engineers preparing for AZ-204, and full-stack cloud developers.",
    whatsInside: [
      "Azure App Services: deployment slots, custom domains, auto-scaling & ARR affinity",
      "Serverless computing with Azure Functions: triggers, bindings & consumption scaling",
      "Messaging and event architectures: Service Bus queues/topics, Event Grid & Event Hubs",
      "Cloud databases: Cosmos DB consistency levels, partitioning strategies & Azure SQL tiers",
      "Zero-trust security: Azure Key Vault, Managed Identities & RBAC access control",
      "Production observability: Application Insights, distributed tracing & Azure Monitor alerts"
    ],
    learningOutcomes: [
      "Compare Service Bus, Event Grid, and Event Hubs with clear architectural criteria",
      "Explain Managed Identities and how to build zero-credential cloud applications",
      "Design partition keys for distributed Cosmos DB collections under high write loads",
      "Pass cloud design interview questions with confidence"
    ],
    topics: ["Azure App Services", "Serverless Azure Functions", "Service Bus & Event Grid", "Cosmos DB Consistency", "Managed Identity & Key Vault"],
    ebookPrice: 399,
    hardcoverPrice: 699,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "Azure Service Bus vs Event Grid vs Event Hubs in 15 Minutes", duration: "15 mins", url: site.youtube },
      { title: "Azure Managed Identity Explained: Zero Secrets in Code", duration: "17 mins", url: site.youtube }
    ]
  },
  {
    id: 6,
    slug: "complete-front-end-interview-guide",
    title: "The Complete Front-End Interview Guide",
    series: "Dot Net Interview Preparation Series",
    category: "developer",
    categoryLabel: "Developer Interviews",
    label: "06 / FRONTEND",
    color: "violet",
    accentHex: "#7C3AED",
    cardBg: "#F5F3FF",
    coverImage: "/images/books/book-06.png",
    coverImageTight: "/images/books/book-06-tight.png",
    author: "Nirbhay Chauhan",
    kicker: "Angular, Node.js, React, Next.js, Vue.js, & TypeScript",
    tagline: "Master the Fundamentals and Advanced Concepts, Become a Front-End Expert with Comprehensive Interview Preparation.",
    summary: "Frame the fundamental principles of modern JavaScript, React hooks, DOM rendering pipeline, and web performance needed in full-stack and front-end engineering interviews.",
    whoIsItFor: "Full-stack .NET developers and web engineers wanting to excel in browser-side engineering interviews.",
    whatsInside: [
      "JavaScript runtime internals: event loop, call stack, microtasks vs macrotasks & closures",
      "DOM rendering: reflow, repaint, composite layers & Core Web Vitals optimization",
      "React internals: Virtual DOM, reconciliation, component lifecycle & Hooks rules",
      "State management: Context API vs Redux Toolkit vs Zustand trade-offs",
      "Web security essentials: XSS attack vectors, CSRF tokens, and Content Security Policy (CSP)",
      "Responsive design layouts with modern Flexbox, CSS Grid, and responsive image strategies"
    ],
    learningOutcomes: [
      "Explain the browser event loop and microtask queue execution order with code",
      "Build high-performance React components without unnecessary re-renders",
      "Answer modern front-end security and web vitals optimization questions",
      "Complete full-stack engineering rounds with equal confidence in backend and frontend"
    ],
    topics: ["JavaScript Event Loop & Closures", "React Reconciliation & Hooks", "DOM Performance & Web Vitals", "Web Security (XSS/CSRF)", "State Management"],
    ebookPrice: 299,
    hardcoverPrice: 599,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "JavaScript Event Loop: Visualizing Microtasks and Macrotasks", duration: "21 mins", url: site.youtube },
      { title: "React Re-renders: When to Use useMemo and useCallback", duration: "15 mins", url: site.youtube }
    ]
  },
  {
    id: 7,
    slug: "software-testing-interview-secrets",
    title: "Software Testing Interview Secrets",
    series: "Dot Net Interview Preparation Series",
    category: "qa",
    categoryLabel: "QA & Testing",
    label: "07 / QUALITY",
    color: "emerald",
    accentHex: "#059669",
    cardBg: "#ECFDF5",
    coverImage: "/images/books/book-07.png",
    coverImageTight: "/images/books/book-07-tight.png",
    author: "Nirbhay Chauhan & Vinal Chouhan",
    kicker: "Your Comprehensive Roadmap to In-Depth Answers",
    tagline: "Your Comprehensive Roadmap to In-Depth Answers on Fundamentals, Planning, and Automation.",
    summary: "An interview-focused reading choice for software testing and QA candidates looking to speak with authority about quality standards, defect lifecycle, and test design.",
    whoIsItFor: "Manual QA testers, test engineers, QA analysts, and career switchers preparing for software quality interviews.",
    whatsInside: [
      "SDLC & STLC models: Waterfall, Agile Scrum, sprint QA ceremonies & DoD/DoR criteria",
      "Black-box test design techniques: Boundary Value Analysis (BVA), Equivalence Partitioning (EP)",
      "Defect lifecycle management: writing crisp bug reports that developers respect and prioritize",
      "API testing fundamentals: HTTP status codes, headers, payloads & Postman automation",
      "Database testing with SQL: writing verification queries and validating data integrity",
      "Scenario-based interview questions: 'How would you test this feature under tight deadlines?'"
    ],
    learningOutcomes: [
      "Deconstruct any product requirement into comprehensive test scenarios within minutes",
      "Structure test strategy documents and explain defect severity vs priority with real examples",
      "Demonstrate structured analytical thinking in scenario-based testing rounds",
      "Interview with the professional vocabulary and rigor expected by QA hiring managers"
    ],
    topics: ["STLC & Agile Testing", "Test Design Techniques (BVA / EP)", "Defect Lifecycle & Triage", "API Testing with Postman", "Scenario-Based Testing"],
    ebookPrice: 299,
    hardcoverPrice: 599,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "Boundary Value Analysis & Equivalence Partitioning Explained", duration: "14 mins", url: site.youtube },
      { title: "Top 20 Software Testing Interview Questions and How to Answer Them", duration: "25 mins", url: site.youtube }
    ]
  },
  {
    id: 8,
    slug: "advanced-qa-interview-handbook",
    title: "The Advanced QA Interview Handbook",
    series: "Dot Net Interview Preparation Series",
    category: "qa",
    categoryLabel: "QA & Testing",
    label: "08 / ADVANCED QA",
    color: "rose",
    accentHex: "#E11D48",
    cardBg: "#FFF1F2",
    coverImage: "/images/books/book-08.png",
    coverImageTight: "/images/books/book-08-tight.png",
    author: "Nirbhay Chauhan & Vinal Chouhan",
    kicker: "Advanced Strategies for Performance, Security, Agile and Mobile Testing",
    tagline: "Position your technical experience for senior QA, SDET, and automation leadership roles.",
    summary: "Deepen your test automation expertise: Page Object Model, Selenium, Playwright, Cypress, CI/CD pipelines, performance testing, and test architecture.",
    whoIsItFor: "Automation engineers, SDETs, and QA leads preparing for senior testing and test architecture discussions.",
    whatsInside: [
      "Test automation frameworks: Page Object Model (POM), data-driven and hybrid frameworks",
      "Modern test runners: Selenium WebDriver, Playwright, and Cypress core comparison",
      "CI/CD integration: orchestrating automated test suites in GitHub Actions & Azure DevOps",
      "API automation with RestSharp / RestAssured and schema validation",
      "Performance & load testing fundamentals: JMeter test plans, virtual users & throughput metrics",
      "Behavior-Driven Development (BDD) with Cucumber / SpecFlow and feature file best practices"
    ],
    learningOutcomes: [
      "Architect a robust, scalable test automation framework from scratch on a whiteboard",
      "Explain how to minimize flaky tests and optimize CI/CD test execution speed",
      "Design end-to-end quality strategies across unit, integration, API, and UI layers",
      "Position yourself for high-paying SDET and QA lead opportunities"
    ],
    topics: ["Page Object Model & Frameworks", "Playwright & Selenium Architecture", "CI/CD Test Automation", "API Automation Frameworks", "Performance & Load Testing"],
    ebookPrice: 349,
    hardcoverPrice: 649,
    amazonUrl: null,
    authorAmazonStore: site.amazonAuthor,
    relevantVideos: [
      { title: "Page Object Model (POM) in C# / .NET from Scratch", duration: "26 mins", url: site.youtube },
      { title: "Playwright vs Selenium in 2026: What Hiring Managers Expect", duration: "18 mins", url: site.youtube }
    ]
  }
];

export const getBook = (slug) => books.find((book) => book.slug === slug);
export const getBooksByCategory = (category) => books.filter((book) => book.category === category);
