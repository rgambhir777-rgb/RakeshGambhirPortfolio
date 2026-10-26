// Single source for contact details and section content. Edit here, not in the components.

export const contact = {
  name: "Rakesh Gambhir",
  role: "Forward Deployed Engineer",
  email: "rakesh.gambhir@live.com",
  phone: "(614) 547-3171",
  tel: "tel:+16145473171",
  linkedin: "https://www.linkedin.com/in/rgambhir/",
  linkedinShort: "linkedin.com/in/rgambhir",
  hfSpace: "https://huggingface.co/spaces/nusoftai/RakeshGambhir",
  hfShort: "huggingface.co/nusoftai",
};

export const navLinks = ["focus", "fde", "approach", "work", "stack", "about"];

export const idRoles = ["AI Agents", "LLM Cost & Observability", "AI QA Automation"];

// Illustrative trace for the hero graphic (placeholder numbers)
export const traceSpans = [
  { name: "agent.run", left: 0, width: 100, color: "var(--amber)", root: true },
  { name: "plan", left: 0, width: 14, color: "var(--violet)" },
  { name: "retrieve.docs", left: 14, width: 18, color: "var(--cyan)" },
  { name: "tool.crm_lookup", left: 32, width: 16, color: "var(--cyan)" },
  { name: "llm.generate", left: 48, width: 36, color: "var(--violet)" },
  { name: "eval.grounded", left: 84, width: 9, color: "var(--green)" },
  { name: "eval.bias", left: 93, width: 7, color: "var(--green)" },
];

export const traceStats = [
  { label: "tokens", value: "3,412" },
  { label: "cost", value: "$0.012" },
  { label: "latency", value: "1.8s" },
  { label: "grounded", value: "0.94", color: "var(--green)" },
];

// Placeholder: replace with real numbers
export const metrics = [
  { label: "experience", value: "10+ yrs", text: "Quality engineering & test automation" },
  { label: "practice", value: "LLM evals", text: "Automated in CI/CD pipelines" },
  { label: "systems", value: "Agents", text: "Built, instrumented and tested in production" },
  { label: "delivery", value: "Customer-facing", text: "Embedded delivery with engineering and business teams" },
];

export const layers = [
  { n: "L1", color: "var(--violet)", title: "Agents & orchestration", tag: "act", text: "Tools, memory, planning, human-in-the-loop", left: 0, width: 34 },
  { n: "L2", color: "var(--amber)", title: "Tokens & cost", tag: "$ / task", text: "Budgets, caching, routing, cost per successful task", left: 18, width: 30 },
  { n: "L3", color: "var(--cyan)", title: "LLM observability", tag: "see", text: "Traces, spans, tool calls, drift and quality signals", left: 30, width: 36 },
  { n: "L4", color: "var(--rose)", title: "Accuracy, bias & hallucination control", tag: "trust", text: "Grounding checks, fairness slices, refusal policy", left: 48, width: 32 },
  { n: "L5", color: "var(--green)", title: "Quality gates & QA automation", tag: "ship / block", text: "Eval suites in CI, regression on every prompt change", left: 66, width: 34 },
];

export const focusAreas = [
  {
    path: "01 / agents", color: "var(--violet)", title: "Agentic systems",
    text: "Agents that call tools, plan over several steps and hand off to humans when they should.",
    points: ["Tool design, guardrails and permission boundaries", "Trajectory and step-level evaluation, not just final answers", "Failure recovery, retries and loop detection"],
    chips: ["LangGraph", "MCP", "tool use"],
  },
  {
    path: "02 / cost", color: "var(--amber)", title: "LLM cost & tokens",
    text: "Token spend treated as an engineering metric, with owners and budgets.",
    points: ["Cost per successful task, not cost per call", "Prompt caching, context trimming, model routing", "Budget alerts and per-feature cost attribution"],
    chips: ["token budgets", "caching", "routing"],
  },
  {
    path: "03 / observability", color: "var(--cyan)", title: "LLM observability",
    text: "Seeing what the model and agent actually did, why, and what it cost.",
    points: ["End-to-end tracing of prompts, retrievals and tool calls", "Latency, error and quality dashboards per release", "Drift detection and production sampling for review"],
    chips: ["OpenTelemetry", "Langfuse", "Arize"],
  },
  {
    path: "04 / trust", color: "var(--rose)", title: "Accuracy, bias & hallucination management", big: true,
    text: "Trust is designed and measured, not hoped for. I define what \"correct\" means with the customer, then make it testable.",
    points: [
      "Golden datasets and rubric-based LLM-as-judge, calibrated against human labels",
      "Groundedness and citation checks for RAG; hallucination rate tracked per release",
      "Bias and fairness evaluation across user segments, with documented thresholds",
      "Red-teaming, prompt-injection testing and safe-refusal behavior",
    ],
    chips: ["evals", "groundedness", "fairness slices", "red-teaming"],
  },
  {
    path: "05 / qa", color: "var(--green)", title: "QA & QA automation for AI",
    text: "Classic quality engineering adapted to systems that don't give the same answer twice.",
    points: ["Eval suites running in CI as release gates", "Regression tests for prompts, models and retrieval", "Statistical pass criteria for non-deterministic output"],
    chips: ["pytest", "promptfoo", "GitHub Actions"],
  },
];

export const fdeSteps = [
  { title: "Discover", text: "Map the workflow, the data and the real cost of a wrong answer. Agree on what success means.", out: "success criteria & risk map" },
  { title: "Prototype", text: "Build the smallest agent or LLM flow that proves value on real customer data.", out: "working agent + baseline evals" },
  { title: "Harden", text: "Test for accuracy, bias and hallucination. Add guardrails, then optimise tokens and latency.", out: "eval suite & cost model" },
  { title: "Deploy", text: "Ship behind automated quality gates, with tracing and dashboards in place from day one.", out: "CI gates & observability" },
  { title: "Operate & hand over", text: "Monitor drift and spend, run regressions, and train the team to own it.", out: "runbooks & team enablement" },
];

export const asserts = [
  { code: "assert release.evaluated", title: "If it isn't evaluated, it isn't done", text: "Every prompt, model or tool change runs against a versioned eval set before it reaches users. Quality is a gate, not an afterthought." },
  { code: "assert cost_per_task <= budget", title: "Cost is a quality attribute", text: "A correct answer that costs ten times too much is a failed release. Tokens, latency and accuracy are tracked together." },
  { code: "assert every_step.traced", title: "Observable by default", text: "Every agent step is traced and every failure is explainable. When something goes wrong, the team can see why in minutes." },
];

// Placeholder: these repos don't exist yet
export const repos = [
  {
    label: "Agent QA", repo: "agent-eval-harness", title: "Agent evaluation harness",
    text: "A test framework that scores multi-step agent trajectories for tool choice, step efficiency and final-answer correctness, and runs in CI on every pull request.",
    chips: ["Python", "pytest", "LLM-as-judge"],
  },
  {
    label: "Cost", repo: "llm-cost-observatory", title: "Token cost & latency observatory",
    text: "Tracing and dashboards that attribute token spend and latency to each feature and agent step. Includes caching and routing experiments with measured savings.",
    chips: ["OpenTelemetry", "Grafana", "caching"],
  },
  {
    label: "Trust", repo: "llm-trust-suite", title: "Hallucination & bias regression suite",
    text: "A golden dataset with groundedness, citation and fairness-slice metrics, tracked release over release, with thresholds that block deployment.",
    chips: ["RAG evals", "fairness", "GitHub Actions"],
  },
];

export const githubUser = "rgambhir777-rgb";

export const stack = [
  "LangChain", "OpenAI", "Anthropic Claude", "Python", "FastAPI", "Pinecone", "Weaviate", "FAISS", "Chroma", "Qdrant",
  "n8n", "Make", "Zapier", "Streamlit", "Supabase", "Docker", "GitHub Actions", "GPT-4", "Claude 3.5", "LlamaIndex",
];

export const toolbox = [
  "Python", "TypeScript", "LangGraph", "MCP", "OpenTelemetry", "Langfuse", "promptfoo", "pytest",
  "Playwright", "GitHub Actions", "Docker", "AWS / Azure / GCP",
];
