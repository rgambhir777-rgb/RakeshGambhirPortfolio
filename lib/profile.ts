// Single source for contact details and section content. Edit here, not in the components.
// Sourced from Rakesh's two resumes in ../source-docs (timeline follows the CCaaS version).

export const contact = {
  name: "Rakesh Gambhir",
  role: "AI Quality Analyst",
  title: "AI Quality Analyst",
  email: "rakesh.gambhir@live.com",
  phone: "(614) 547-3171",
  tel: "tel:+16145473171",
  linkedin: "https://www.linkedin.com/in/rgambhir/",
  linkedinShort: "linkedin.com/in/rgambhir",
  hfSpace: "https://huggingface.co/spaces/nusoftai/RakeshGambhir",
  hfShort: "huggingface.co/nusoftai",
};

export const status = "Open to AI QA roles";

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
];

export const idRoles = ["LLM Evaluation", "AI-Assisted Test Automation", "Performance Testing"];

// Illustrative scorecard for the hero graphic (example numbers, not a real run)
export const evalScores = [
  { name: "context_awareness", score: 92, color: "var(--violet)" },
  { name: "accuracy", score: 95, color: "var(--cyan)" },
  { name: "hallucination_free", score: 97, color: "var(--green)" },
  { name: "intent_routing", score: 94, color: "var(--cyan)" },
  { name: "policy_compliance", score: 100, color: "var(--green)" },
  { name: "handoff_to_agent", score: 89, color: "var(--amber)" },
];

export const evalStats = [
  { label: "conversations", value: "50" },
  { label: "turns", value: "312" },
  { label: "hallucination", value: "1.8%" },
  { label: "verdict", value: "PASS", color: "var(--green)" },
];

export const metrics = [
  { value: "10+ yrs", label: "QA, test automation & test leadership" },
  { value: "10,000", label: "users simulated in load tests" },
  { value: "150+", label: "API tests automated in Playwright" },
  { value: "70%", label: "less manual regression effort" },
];

export const about = [
  "I've spent more than ten years making sure enterprise systems work before real people depend on them: PeopleSoft time and payroll, Salesforce CRM, and cloud contact centers on Genesys and NICE CXone.",
  "My recent work is about AI. I test agentic, LLM-driven virtual agents across voice, chat, email and SMS, and score multi-turn conversations for context awareness, accuracy and hallucination. I also use AI to test faster, generating Playwright page objects, fixtures and test data with Cursor, GitHub Copilot and MCP, with a human review and an automated run before anything is accepted.",
  "Underneath that is classic QA discipline: test strategy, traceability from requirement to result, load and performance testing, accessibility, and clear go/no-go calls for release.",
];

export const quickFacts = [
  { label: "Based in", value: "Columbus, OH" },
  { label: "Focus", value: "AI quality & test automation" },
  { label: "Status", value: status, tone: "green" },
];

// org and period are optional: leave them empty until known
export const experience = [
  {
    role: "Accuracy, Hallucination & Bias Regression Suite",
    org: "",
    period: "",
    points: [
      "Built a versioned golden dataset to measure LLM answers for accuracy, groundedness and citation quality, release over release.",
      "Added fairness slices that compare results across user segments, so bias shows up as a number instead of an anecdote.",
      "Ran the suite in CI with thresholds that block a release when accuracy drops or hallucination or bias rises.",
    ],
    chips: ["LLM evaluation", "Hallucination", "Bias & fairness", "GitHub Actions"],
  },
  {
    role: "Call Center Operations Test Analyst Lead",
    org: "Nassau Financial Group",
    period: "Jun 2025 – Sep 2026",
    points: [
      "Led discovery of customer journeys, agent workflows, IVR and routing for a NICE CXone transformation, producing the artifacts architects used to build test plans and scripts.",
      "Tested virtual agents and multi-turn chat transactions, scoring LLM responses for context awareness, accuracy and hallucination.",
      "Covered test planning, system and integration testing, UAT, regression and production smoke tests, including CRM integration, QM, WFM and digital channels.",
    ],
    chips: ["NICE CXone", "Salesforce", "Virtual agents", "LLM evaluation"],
  },
  {
    role: "Genesys Migration Test Lead",
    org: "Lockton Insurance",
    period: "Sep 2024 – Jun 2025",
    points: [
      "Owned test strategy for a Genesys CTI cloud migration integrated with Salesforce: scope, entry/exit criteria, environments, test data and defect management.",
      "Led functional, integration, regression, UAT and production-readiness testing of IVR, skills-based routing, transfers, callbacks and recordings.",
      "Directed testing of click-to-dial, screen pops, automated call logging and Salesforce case association, through cutover and hypercare.",
    ],
    chips: ["Genesys Cloud", "Salesforce", "Test strategy", "UAT"],
  },
  {
    role: "Playwright Automation Architect / Performance Tester",
    org: "Federal client",
    period: "Jan 2024 – Sep 2024",
    points: [
      "Architected an enterprise Playwright framework for UI, API, integration and end-to-end testing of a time entry system under Title V rules.",
      "Used Cursor and GitHub Copilot to generate page objects, fixtures, locators and test-data generators, then reviewed and hardened them against framework standards.",
      "Built and ran dozens of JMeter scripts simulating 10,000 users, and turned the results into tuning recommendations against SLAs.",
    ],
    chips: ["Playwright", "TypeScript", "Cursor", "JMeter"],
  },
  {
    role: "Performance Test Engineer",
    org: "UT System",
    period: "Apr 2023 – Nov 2023",
    points: [
      "Designed a JMeter suite for a customer-facing ERP application: login, multi-criteria invoice search, supplier search and drill-down.",
      "Ran load, stress, spike and endurance tests, handling session IDs and auth tokens with extractors and correlation.",
    ],
    chips: ["JMeter", "Load testing", "Correlation"],
  },
  {
    role: "Test Automation Architect",
    org: "Harris County",
    period: "Sep 2020 – Apr 2023",
    points: [
      "Led enterprise rollout of ALM test automation and built a reusable test library for PeopleSoft PUM upgrades.",
      "Coached and managed four consultants and three client team members across test planning, scripting and execution.",
      "Architected Selenium framework scripts, and focused testing on ADA and WCAG 2.1 gaps ahead of a county-wide Section 508 effort.",
    ],
    chips: ["ALM", "Selenium", "PeopleSoft", "WCAG 2.1"],
  },
  {
    role: "Test Architect & Test Lead",
    org: "Various clients",
    period: "Jan 2015 – Dec 2020",
    points: [
      "Led QA for contact-center, Salesforce CRM and PeopleSoft initiatives, staying hands-on in functional, integration, regression and UAT testing.",
      "Tested PeopleSoft Time and Labor and payroll: time entry, approvals, exceptions, schedules, calculations and downstream payroll.",
      "Built requirement-to-result traceability and reported defect trends, risks and go/no-go recommendations to stakeholders.",
    ],
    chips: ["PeopleSoft PTF", "Salesforce", "Selenium", "Jira"],
  },
];

export const projects = [
  {
    label: "AI evaluation", client: "Contact center · NICE CXone", title: "Scoring multi-turn LLM virtual agents",
    summary: "Testing agentic, LLM-driven virtual agents across chat, voice, email and SMS before they reach customers.",
    problem: "A virtual agent can sound fluent while losing context, giving wrong answers or inventing facts mid-conversation.",
    approach: "Multi-turn test conversations built from discovered customer journeys, each turn scored for context awareness, accuracy and hallucination.",
    result: "Quality evidence the business could use to decide when the agents were ready for real callers.",
    chips: ["LLM evaluation", "Multi-turn", "Hallucination"],
    color: "var(--violet)",
  },
  {
    label: "AI-assisted automation", client: "Time entry system", title: "AI-assisted Playwright framework",
    summary: "An enterprise Playwright framework built faster with Cursor, GitHub Copilot and MCP, without giving up review.",
    problem: "Hand-writing page objects, fixtures and test data for a large time entry system was slow and repetitive.",
    approach: "AI generated first drafts of page objects, locators and fixtures from source, DOM and requirements; every draft went through human review and an automated test run.",
    result: "A scalable POM architecture with shared standards for locators, fixtures, synchronization and parallel runs.",
    chips: ["Playwright", "Cursor", "MCP", "Human-in-the-loop"],
    color: "var(--amber)",
  },
  {
    label: "API automation", client: "Insurance", title: "Playwright API and UI test suite",
    summary: "End-to-end workflows that combine API and UI checks in one Playwright suite.",
    problem: "Regression relied on manual checks and on the UI alone.",
    approach: "Custom fixtures, API interception and backend validation, with AI-assisted refactoring to fold duplicate code into reusable pieces.",
    result: "150+ API tests automated, 70% less manual regression effort, and more defects caught before production.",
    chips: ["Playwright", "REST APIs", "Fixtures"],
    color: "var(--cyan)",
  },
  // Added at Rakesh's request (not in the resumes): no measured numbers yet
  {
    label: "UI & payments testing", client: "E-commerce · customer accounts", title: "Playwright testing of balances and payments",
    summary: "End-to-end Playwright tests for an e-commerce site where customers check their account balance and make payments.",
    problem: "A wrong balance or a double-charged payment costs customers money and trust, and these bugs hide in edge cases manual testing misses.",
    approach: "Page objects for login, account balance and checkout; API checks that the balance on screen matches the backend before and after each payment; data-driven runs for successful, declined and repeated payments across browsers.",
    result: "Each release proves balances are correct and every payment posts exactly once before customers see the change.",
    chips: ["Playwright", "TypeScript", "Payments", "API validation"],
    color: "var(--green)",
  },
  {
    label: "Performance", client: "Benefits enrollment · time entry · e-commerce", title: "High-volume load testing",
    summary: "Distributed JMeter testing for peak events, where failure means people can't enroll, log time or buy.",
    problem: "Systems had to survive year-end enrollment peaks and thousands of simultaneous users.",
    approach: "Distributed load generators in non-GUI mode, realistic pacing and ramp-up, workload models, and HTML dashboards for trends.",
    result: "Found maximum stable capacity at 3,000 concurrent users and 1,200 enrollments an hour; tested other systems at up to 8,000 and 10,000 users.",
    chips: ["JMeter", "LoadRunner", "Dynatrace"],
    color: "var(--rose)",
  },
  // From the earlier version of the site, not the resumes: results describe what each project does, not measured numbers
  {
    label: "LLM cost", client: "Personal project", title: "Token cost & latency observatory",
    summary: "Tracing and dashboards that attribute token spend and latency to each feature and agent step.",
    problem: "Nobody could say which feature or agent step drove the LLM bill, or why responses were slow.",
    approach: "OpenTelemetry spans per agent step, cost attribution per feature, and caching and model-routing experiments.",
    result: "A cost-per-task and latency view per release, so cost and speed are tested alongside accuracy.",
    chips: ["OpenTelemetry", "Grafana", "Caching"],
    color: "var(--amber)",
  },
  {
    label: "AI trust", client: "Personal project", title: "Accuracy, hallucination & bias regression suite",
    summary: "A golden dataset with accuracy, groundedness, citation and fairness-slice metrics, tracked release over release.",
    problem: "Quality drifted silently with every prompt and model change.",
    approach: "A versioned golden set, groundedness and citation checks, and fairness slices across user segments, run in CI.",
    result: "Thresholds that block a release when accuracy drops or hallucination or bias rises.",
    chips: ["RAG evals", "Fairness", "GitHub Actions"],
    color: "var(--green)",
  },
  {
    label: "Agent QA", client: "Personal project", title: "Agent evaluation harness",
    summary: "A test framework that scores multi-step AI agent runs, not just their final answers, and runs in CI on every pull request.",
    problem: "Agents passed demos but failed on edge cases: wrong tool, wasted steps, or a confident wrong answer at the end.",
    approach: "Replays scripted tasks and scores each trajectory for tool choice, step efficiency and final-answer correctness, using LLM-as-judge rubrics calibrated against human review.",
    result: "Agent changes get a pass/fail score per task before merge, so regressions surface in review instead of production.",
    chips: ["Python", "pytest", "LLM-as-judge", "CI"],
    color: "var(--violet)",
  },
];

export const focusAreas = [
  { color: "var(--violet)", title: "LLM & agent evaluation", text: "Multi-turn conversations scored for context awareness, accuracy and hallucination, across voice, chat, email and SMS." },
  { color: "var(--amber)", title: "AI-assisted test engineering", text: "Cursor, GitHub Copilot and MCP to generate tests, page objects and test data, always with human review." },
  { color: "var(--cyan)", title: "Test automation architecture", text: "Playwright and Selenium frameworks with page objects, fixtures, API and UI coverage, running in CI." },
  { color: "var(--rose)", title: "Performance & load", text: "JMeter and LoadRunner scripts, workload models and bottleneck analysis, measured against SLAs." },
  { color: "var(--green)", title: "Test strategy & release readiness", text: "Test plans, traceability, UAT, accessibility (WCAG 2.1) and clear go/no-go recommendations." },
];

export const processSteps = [
  { title: "Discover", text: "Walk through customer journeys, workflows and integrations with the people who run them.", out: "journeys & requirements" },
  { title: "Plan", text: "Set scope, risks, entry and exit criteria, environments and test data, traced back to requirements.", out: "test strategy & RTM" },
  { title: "Automate", text: "Build Playwright and API suites, using AI to draft code and a human to approve it.", out: "framework in CI" },
  { title: "Evaluate", text: "Score AI conversations, run load and accessibility tests, and triage defects with the team.", out: "scores & defect trends" },
  { title: "Release", text: "Support UAT, give a go/no-go call, validate cutover and stay through hypercare.", out: "go/no-go & hypercare" },
];

export const skills = [
  { group: "AI quality", items: ["Multi-turn LLM evaluation", "Hallucination scoring", "Context-awareness scoring", "Virtual agents", "AI failure analysis", "AI test data generation"] },
  { group: "AI-assisted engineering", items: ["Cursor", "GitHub Copilot", "MCP", "LangChain", "OpenAI", "Anthropic Claude", "LlamaIndex", "ChromaDB"] },
  { group: "Test automation", items: ["Playwright", "Selenium WebDriver", "TypeScript", "Python", "Java", "pytest", "TestNG", "Rest Assured", "Postman / Newman"] },
  { group: "Performance", items: ["JMeter", "LoadRunner", "Performance Center", "Dynatrace", "AppDynamics"] },
  { group: "CI/CD & test management", items: ["GitHub Actions", "Jenkins", "Azure DevOps", "Docker", "Jira", "ALM", "qTest", "Confluence"] },
  { group: "Platforms & data", items: ["NICE CXone", "Genesys Cloud", "Salesforce", "PeopleSoft", "Oracle", "SQL Server", "Postgres", "MongoDB"] },
];
