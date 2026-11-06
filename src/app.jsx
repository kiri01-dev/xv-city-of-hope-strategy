// ---------- Palette ----------
// City of Hope brand hex could not be verified from public sources; deep navy used for contrast safety.
const sponsorPrimary = "#1E3A5F";

const accentNavy    = "#1E3A5F";
const accentForest  = "#1F4E3D";
const accentWine    = "#6B2737";
const accentGold    = "#7A5C1E";

const surfacePage   = "#F8F8F6";
const surfaceCard   = "#FFFFFF";
const surfaceSubtle = "#F1F3F5";
const borderColor   = "#DDE1E7";

const textPrimary   = "#111827";
const textSecondary = "#374151";
const textMuted     = "#6B7280";
const textDisabled  = "#9CA3AF";

const impactColors = { High: accentForest, Medium: accentGold, Low: accentNavy };
const effortColors = { Lower: accentForest, Moderate: accentGold, Higher: accentWine };

const stackCategoryColors = {
  "Data Ingestion & Integration": accentNavy,
  "Storage & Processing":         accentForest,
  "ML & AI":                      accentGold,
  "Governance & Observability":   accentWine,
  "BI & Reporting":               accentNavy,
};

const companyName = "City of Hope";

// ---------- Content ----------
const industryChallenges = [
  {
    icon: "💲",
    title: "Outpatient drug payment is being cut from three directions",
    color: accentWine,
    description: "The CY2026 OPPS rule pays drug administration at excepted off-campus departments at 40% of the hospital rate. The CY2027 rule, finalized November 4, 2026, sets 340B drug payment at ASP minus 28%, raises the 340B remedy clawback from 0.5% to 2% a year, and extends site-neutral payment to imaging without contrast; cancer hospitals are exempt from the 340B cut. The IRA's third negotiation round, the first to include Part B drugs, selected four oncology drugs for 2028 prices.",
    source: "Polsinelli, Nov 2025; AHA, Nov 4 2026; CMS, Jan 2026"
  },
  {
    icon: "📋",
    title: "Prior authorization and denials keep getting heavier",
    color: accentWine,
    description: "Medicare Advantage plans made 53 million prior-auth decisions in 2024 and denied 7.7%, up from 6.4%. 41% of providers now report denial rates of 10% or more, up from 30% in 2022. In oncology, 72% of MA patients faced prior auth and 40% reported treatment delays, even though 95% were eventually approved. CMS-0057-F decision deadlines took effect in January 2026, payer prior-auth APIs are due January 2027, and the proposed CMS-0062-P would extend the rules to drugs.",
    source: "KFF, Jan 2026; Experian, Sep 2025; CancerCare, Jun 2025; Federal Register, Apr 2026"
  },
  {
    icon: "💊",
    title: "Drug cost and supply are the most volatile line on the P&L",
    color: accentNavy,
    description: "Hospital drug expense rose 12% year over year in June 2026, against 4% for labor. Every one of 31 NCCN cancer centers surveyed in September 2026 reported at least one shortage, with ifosfamide short at 94% of centers and carboplatin at 71%. Global oncology drug spend is on track to grow from $252B in 2024 to $441B in 2029, while oncology biosimilars reach an average 81% share within five years of launch.",
    source: "Kaufman Hall via Becker's, 2026; NCCN survey via ASCO Post, Sep 2026; IQVIA, May 2025; Cardinal Health, Feb 2026"
  },
  {
    icon: "📈",
    title: "Cancer demand is rising while margins and staff are thin",
    color: accentGold,
    description: "ACS projects 2.11 million new US cancer cases in 2026, 5.7% above its 2024 projection. Hematology/oncology burnout stands at 49.3%, and 39.9% of RNs intend to leave or retire within five years. Hospital operating margins averaged 2.5% year to date in mid-2026, with 43% of hospitals in the red. Growth has to come from throughput and better decisions, not headcount.",
    source: "ACS Cancer Statistics 2026; AMA, 2025; NCSBN, Apr 2025; Kaufman Hall via Advisory Board, Aug 2026"
  }
];

const competitorMoves = [
  {
    icon: "🧠",
    title: "The clinical AI race is crowded",
    color: accentNavy,
    description: "MSK rolled out Abridge ambient documentation systemwide and embedded its OncoKB knowledge base in OpenEvidence inside its Epic. Cedars-Sinai gave clinicians EHR-integrated OpenEvidence in May 2026. Mayo runs Abridge for about 2,000 clinicians and built its Atlas pathology model on NVIDIA infrastructure. Dana-Farber named its first Chief AI Officer.",
    source: "MSK, Sep 2026; Business Wire, Jan and Mar 2025; Cedars-Sinai, May 2026; Healthcare IT News, 2025; Becker's, 2025"
  },
  {
    icon: "🔗",
    title: "Peers are pooling research data without City of Hope",
    color: accentWine,
    description: "The Cancer AI Alliance (Fred Hutch, Dana-Farber, MSK and Johns Hopkins) launched a federated learning platform in October 2025 that trains models inside each center's firewall. It runs eight projects on clinical data from more than 1 million patients, backed by AWS, Google, Microsoft and NVIDIA. City of Hope is not a member.",
    source: "HIT Consultant, Oct 2025; ASCO Post, Apr 2026"
  },
  {
    icon: "🏥",
    title: "Epic is the default route for in-workflow AI",
    color: accentGold,
    description: "At HIMSS 2026, Epic previewed Agent Factory and its Penny revenue cycle AI, citing 42% faster medication prior-auth submission at Summit Health and coding-denial reductions above 20% for heavy users (Epic-reported). Epic will own tasks inside its own screens. Decisions that need Epic data joined with Salesforce, Blackbaud, Snowflake, wholesaler and finance systems remain open.",
    source: "Fierce Healthcare, Mar 2026"
  },
  {
    icon: "🟢",
    title: "Operational AI is open ground",
    color: accentForest,
    description: "Across MD Anderson, MSK, Dana-Farber, Mayo, Moffitt, Fred Hutch, Cedars-Sinai, UCLA, USC and Providence, none has publicly reported results from AI for scheduling, infusion capacity, revenue cycle or prior authorization. The first cancer center to publish measured operational results sets the benchmark.",
    source: "xVector review of public announcements, Nov 2024 to Nov 2026"
  }
];

const companyStats = [
  { value: "$4.79B", label: "FY25 total revenue and support (obligated group)", color: accentNavy },
  { value: "7.6%",   label: "FY25 all-in margin, down from 15.2% in FY24", color: accentWine },
  { value: "+19%",   label: "Supplies and pharmaceuticals, to $1.60B in FY25", color: accentWine },
  { value: "+47%",   label: "Outpatient visits and infusions, FY23 to FY25", color: accentGold },
  { value: "~$95M",  label: "Combined FY25 loss at the Atlanta, Chicago and Phoenix hospitals", color: accentWine },
  { value: "~800",   label: "Active clinical studies across 5 campuses and 40 sites", color: accentForest }
];

const companyChallenges = [
  {
    icon: "📉",
    title: "Costs are outrunning revenue",
    color: accentWine,
    description: "FY25 expenses grew 14% to $4.43B while revenue grew 4% to $4.79B. Supplies and pharmaceuticals rose 19% to $1.60B, driven in part by specialty pharmacy growth, and labor rose 9% to $1.50B. The all-in margin halved from 15.2% to 7.6%, and operating debt service coverage fell to 1.4x against a 1.10x covenant, with about $2.5B of debt outstanding.",
    source: "CHFFA Staff Report, Resolution 470, Apr 30 2026 (audited FY23 to FY25)"
  },
  {
    icon: "🏥",
    title: "The national sites are still losing money",
    color: accentWine,
    description: "The former CTCA hospitals sit outside the obligated group and lost about $95M combined in FY25, the same as in FY24: Atlanta −$26.7M on $305M of revenue, Chicago −$19.2M on $306M, and Phoenix −$49.3M on $321M. New Arizona and Atlanta presidents were named in October 2026, giving each site a fresh mandate to turn margin around.",
    source: "Form 990 filings via ProPublica Nonprofit Explorer (FY24 and FY25); OncoDaily, Oct 2026"
  },
  {
    icon: "🪑",
    title: "Demand is outrunning capacity",
    color: accentGold,
    description: "Outpatient visits and infusions rose from 813,902 to 1,196,932 between FY23 and FY25, and occupancy rose from 60.9% to 66.6%. The 73-bed Orange County hospital had to open another floor within a week of opening in December 2025. CEO Robert Stone has said a 14-week wait for a specialist is too long. Hope Plaza added 110 infusion spaces in Duarte in 2025.",
    source: "CHFFA Res. 470; Chief Healthcare Executive, Apr 2026; Business Wire, May 2025"
  },
  {
    icon: "💳",
    title: "Payer friction is rising and revenue leakage is a named problem",
    color: accentNavy,
    description: "UnitedHealthcare's Medicare Advantage and Group Retiree plans went out of network at City of Hope's California locations on January 15, 2026. City of Hope's Data Scientist, Revenue Cycle role, open since June 2026, is chartered to find revenue leakage and predict denials, collections and reimbursement, and its new HIM, Coding and CDI executive role centers on denials prevention.",
    source: "uhc.com/cityofhope, Jan 2026; cityofhopejobs.org postings, Jun to Sep 2026"
  },
  {
    icon: "🎗️",
    title: "Philanthropy dipped while donor data is being rebuilt",
    color: accentGold,
    description: "Contributions fell from $297M in FY24 to $201M in FY25. City of Hope is hiring an AVP of Philanthropy Data and Systems to govern donor data across Blackbaud CRM and Salesforce and to set the CRM roadmap.",
    source: "CHFFA Res. 470; cityofhopejobs.org, Jul 2026"
  }
];

const aiProgram = [
  {
    icon: "🤖",
    title: "A strong clinical AI foundation is already in place",
    color: accentForest,
    description: "HopeLLM, launched in June 2025 on Azure OpenAI and integrated into Epic, supports onboarding for a system that took in more than 150,000 new patients in 2024, matches patients across 200+ trials and extracts real-world data. Predictive models for sepsis and surgical complications have run since 2017. Chief AI and Analytics Officer Nasim Eftekhari has warned that agents without orchestration produce chaos, and names MLOps, LLMOps and unified patient data as priorities.",
    source: "EurekAlert, Jun 2025; Microsoft, Apr 2025; Clinical Leader, Feb 2026; CDO Magazine, Apr 2026"
  },
  {
    icon: "🎯",
    title: "The mandate: AI products in governed production",
    color: accentNavy,
    description: "City of Hope's enterprise AI product role owns the portfolio from experiment to retirement: agent-based, AI-orchestrated workflows for patients, clinicians, staff and researchers; moving proofs of concept into governed production; enterprise KPIs that include operational efficiency; and AI vendor partnerships. Chief Digital and Technology Officer Simon Nazarian has said AI must start from a defined problem and its impact, with governance built into the architecture and drift and bias monitored.",
    source: "City of Hope role description, Apr 2026; Chief Healthcare Executive, May 2026; Health System CIO, Mar 2026"
  }
];

const stackGroups = [
  {
    label: "Data Ingestion & Integration",
    items: [
      { name: "Epic Clarity & Caboodle", note: "Epic's reporting databases (Clarity, Caboodle and SlicerDicer are named in postings). xVector's SQL Server connector reads them and joins Epic data with systems Epic reporting cannot see." },
      { name: "Epic Willow", note: "Pharmacy inventory and 340B logic. Joined with administration, charge and purchasing data, it becomes the base for drug revenue integrity." },
      { name: "Salesforce", note: "Runs New Patient Services outreach and philanthropy prospecting. xVector's native Salesforce connector reads it, and predictions go back to the records staff work from." },
      { name: "Blackbaud CRM", note: "Donor system of record. No native xVector connector today; ingest through a scheduled file export or API." }
    ]
  },
  {
    label: "Storage & Processing",
    items: [
      { name: "Snowflake", note: "Named in revenue cycle analytics postings. Not yet in xVector's published connector catalog; confirm the connector or stage extracts through S3." },
      { name: "Enterprise data warehouse", note: "Finance and 340B analysts work from an EDW. xVector datasets upsert from it, keep the history of values and keep lineage back to each source." },
      { name: "Azure & AWS", note: "Azure is the most-cited cloud and hosts HopeLLM; AWS also appears in postings. xVector deploys in City of Hope's own cloud, so PHI stays in its environment." }
    ]
  },
  {
    label: "ML & AI",
    items: [
      { name: "HopeLLM (Azure OpenAI)", note: "Owns clinical text: summaries, trial matching and real-world data extraction. xVector adds structured-data prediction and can use HopeLLM outputs as model features." },
      { name: "Python, PyTorch, LangChain", note: "The data science team builds LLM and agent pipelines. xVector custom drivers bring those models under experiment tracking and drift and performance monitoring." },
      { name: "Power Automate & Copilot Studio", note: "Task automation in Microsoft 365. xVector supplies the predictions and rules that decide which tasks get triggered, and when." },
      { name: "Epic AI (Agent Factory, Penny)", note: "Epic's roadmap for in-workflow agents and revenue cycle AI. xVector covers the decisions that need data from outside Epic." }
    ]
  },
  {
    label: "Governance & Observability",
    items: [
      { name: "AI governance framework", note: "City of Hope governs AI through a multidisciplinary framework. xVector's audit trail, versioned resources and drift reports give that body evidence for every model." },
      { name: "Data quality", note: "Unifying patient data is still in progress. xVector dataset profiling and anomaly alerts surface quality issues each time data syncs." }
    ]
  },
  {
    label: "BI & Reporting",
    items: [
      { name: "Tableau, Power BI, SAS, Sisense", note: "Four BI tools appear across postings. xVector Reports add sensitivity analysis and what-if scenarios on live models, which static dashboards lack." },
      { name: "Enterprise planning module", note: "Decision Support is rolling out budgeting, cost accounting and episode analytics. xVector driver models can feed it scenario inputs rather than replace it." }
    ]
  }
];

const useCases = [
  {
    id: "drug-revenue-integrity",
    icon: "💊",
    title: "Drug Revenue Integrity",
    short: "Drug Revenue Integrity",
    impact: "High", effort: "Lower", agentic: true, fit: 9,
    problem: "Supplies and pharmaceuticals are City of Hope's fastest-growing cost line at $1.60B (+19% in FY25), and its open revenue cycle data science role is chartered to find revenue leakage. Any high-cost oncology drug that is administered but not charged, billed at the wrong units or mis-split for 340B is lost margin, and the CY2026 site-neutral cut on drug administration leaves less room for error.",
    capability: "Dataset joins and anomaly detection across administration, dispense, charge and purchase records; an AI agent ranks variances into a reviewer worklist with human-in-the-loop correction, and every resolution lands in the governance audit trail.",
    ttv: "8 to 12 weeks to the first recovered-charge worklist",
    integrationReqs: "Epic Clarity (medication administrations, hospital and professional charges) through the SQL Server connector; Epic Willow inventory and the EDW 340B database (dispense and accumulator data); wholesaler purchase files (CSV or S3). Gap: write-back to Epic charge-review work queues needs an Epic interface built with City of Hope's Epic team; the scope of the 340B program needs confirmation."
  },
  {
    id: "drug-shortage-forecasting",
    icon: "📦",
    title: "Oncology Drug Spend & Shortage Forecasting",
    short: "Drug Spend & Shortage Forecasting",
    impact: "High", effort: "Moderate", agentic: true, fit: 9,
    problem: "Every NCCN center surveyed in September 2026 reported at least one shortage, and City of Hope's drug and supply spend grew 19% in FY25 as specialty pharmacy expanded. Buyers and pharmacists need a forward view of demand by drug and site, not last month's usage.",
    capability: "Time-series forecasting on scheduled treatment plans and dispense history, anomaly alerts on inventory against forecast, and what-if scenarios for biosimilar conversion and IRA price changes; an agent drafts reorder and substitution recommendations for pharmacist approval.",
    ttv: "12 to 16 weeks",
    integrationReqs: "Epic oncology treatment plans and orders (future cycles) and Willow inventory through Clarity; wholesaler purchasing and allocation feeds; FDA and ASHP shortage lists as third-party data. Gap: confirm that treatment-plan tables are populated in Clarity at City of Hope and agree the wholesaler feed format."
  },
  {
    id: "capacity-forecasting",
    icon: "🪑",
    title: "Infusion & Clinic Capacity Forecasting",
    short: "Infusion & Clinic Capacity",
    impact: "High", effort: "Moderate", agentic: true, fit: 9,
    problem: "Outpatient visits and infusions rose 47% in two years, the Orange County hospital opened another floor within a week of opening, and Robert Stone has called a 14-week specialist wait too long. Chairs, rooms and nurse staffing need to be planned from forecast demand by site, day and hour.",
    capability: "Time-series forecasting of chair and clinic demand from scheduled and ordered treatment, what-if scenarios in Reports for templates, hours and staffing, and an agent that proposes template changes for operations managers to approve.",
    ttv: "12 to 16 weeks for the first site",
    integrationReqs: "Epic Cadence schedules and treatment-plan orders through Clarity; the staffing and timekeeping system (to be identified); site capacity master data (chairs, rooms, hours). Gap: confirm whether an infusion-scheduling point solution already runs at any site; the staffing data source is not yet identified."
  },
  {
    id: "site-margin-drivers",
    icon: "🧭",
    title: "National Site Margin Driver Model",
    short: "National Site Margin Drivers",
    impact: "High", effort: "Higher", agentic: false, fit: 9,
    problem: "The Atlanta, Chicago and Phoenix hospitals lost about $95M combined in FY25, and new Arizona and Atlanta presidents started in October 2026. Each site needs to know which levers (payer mix, service-line volume, labor productivity, drug margin) move its margin most, and by how much.",
    capability: "Regression models on site-level drivers with Sensitivity Analysis and What-If Scenarios in Reports, versioned so each site's plan is traceable; outputs feed the enterprise planning module rather than replace it.",
    ttv: "16 to 20 weeks",
    integrationReqs: "Epic encounter, charge and payer data through Clarity; general ledger and cost accounting from the enterprise planning module; payroll and labor productivity data. Gap: the planning module vendor and its export interface are unconfirmed, and service-line cost data may need 4 to 6 weeks of profiling before modeling."
  },
  {
    id: "referral-conversion",
    icon: "📞",
    title: "New Patient Referral Conversion",
    short: "Referral Conversion",
    impact: "High", effort: "Lower", agentic: true, fit: 8,
    problem: "City of Hope took in more than 150,000 new patients in 2024, and its New Patient Services team schedules across Epic and Salesforce. Filling the national sites depends on converting more referrals and inquiries into first visits, faster, while specialist waits stretch.",
    capability: "A classification model predicts which referrals are at risk of not converting or converting late, using data joined across Salesforce and Epic; an agent prioritizes the outreach queue and writes scores back to Salesforce, the CRM write-back pattern xVector's Data Destination is built for.",
    ttv: "6 to 10 weeks",
    integrationReqs: "Salesforce (inquiries, referrals, outreach activity) through xVector's native Salesforce connector; Epic referrals, scheduling and first-visit outcomes through Clarity; HopeLLM onboarding status as a model feature. Gap: agree the Salesforce write-back fields and the patient-matching key between Salesforce and Epic."
  },
  {
    id: "denial-prediction",
    icon: "🛡️",
    title: "Denial Prediction & Payer Behavior Monitoring",
    short: "Denial Prediction & Payer Monitoring",
    impact: "High", effort: "Moderate", agentic: true, fit: 8,
    problem: "Denials keep rising industry-wide, with 41% of providers now above 10%. UnitedHealthcare's Medicare Advantage plans left City of Hope's California network in January 2026, and City of Hope's new HIM, coding and CDI executive role is focused on denials prevention. Payer rules change faster than static claim edits.",
    capability: "Classification models (XGBoost) score claims for denial risk before submission; anomaly alerts flag shifts in denial rates by payer, code or site; an agent routes high-risk claims with reason codes to work queues; model drift monitoring catches payer behavior changes early.",
    ttv: "12 to 16 weeks",
    integrationReqs: "Epic hospital and professional claims, remittances (835) and denial records through Clarity; the Snowflake revenue cycle marts named in the role posting; payer contract and authorization data. Gap: Snowflake is not in xVector's published connector catalog, so confirm it or stage through S3; scope alongside Epic's claim edits and Penny to avoid overlap."
  },
  {
    id: "underpayment-detection",
    icon: "🔍",
    title: "Payer Underpayment Detection",
    short: "Payer Underpayment Detection",
    impact: "Medium", effort: "Moderate", agentic: true, fit: 7,
    problem: "With net patient service revenue at $3.84B in FY25, small gaps between contracted and paid amounts add up, and City of Hope's finance analyst roles are already chartered to model reimbursement and contracts. Underpayments are rarely caught without line-level comparison of expected and actual payment.",
    capability: "Expected-reimbursement modeling and anomaly detection on remittances against contract terms; an agent assembles variance packages for analyst review and appeal, with every decision logged in the audit trail.",
    ttv: "12 to 16 weeks",
    integrationReqs: "Epic remittances (835) and expected reimbursement through Clarity; payer contract terms from the contract management system or Epic contract tables; Snowflake revenue cycle marts. Gap: contract terms may need structuring before models can use them, and the contract system is not yet identified."
  },
  {
    id: "trial-accrual",
    icon: "🔬",
    title: "Trial Accrual Forecasting",
    short: "Trial Accrual Forecasting",
    impact: "Medium", effort: "Moderate", agentic: false, fit: 7,
    problem: "City of Hope runs about 800 active studies across five campuses and 40 sites under its national clinical trials model, and NCI's move away from paylines makes every funded study's performance matter. HopeLLM matches patients to trials, but nobody yet forecasts which studies and sites will miss accrual targets.",
    capability: "Time-series and classification models on screening, enrollment and site activity, with HopeLLM match volumes as a leading indicator; Reports show study-level forecasts, and threshold alerts flag at-risk studies early.",
    ttv: "12 to 16 weeks",
    integrationReqs: "Clinical trial management system (to be identified); Epic research enrollment and research billing data through Clarity; HopeLLM match outputs. Gap: the CTMS platform and access to HopeLLM outputs need confirmation."
  },
  {
    id: "donor-propensity",
    icon: "🎗️",
    title: "Grateful Patient Donor Propensity",
    short: "Donor Propensity",
    impact: "High", effort: "Lower", agentic: false, fit: 7,
    problem: "Contributions fell from $297M in FY24 to $201M in FY25, and City of Hope is hiring an AVP to govern philanthropy data across Blackbaud CRM and Salesforce. Gift officers need to know which grateful patients and families to approach, and when.",
    capability: "A classification model scores donor propensity from giving history and HIPAA-permitted patient data (demographics, dates and department of service) and writes scores back to Salesforce for gift officers; dataset profiling and quality checks support the new governance role.",
    ttv: "6 to 10 weeks",
    integrationReqs: "Blackbaud CRM giving history through file export or API; Salesforce prospect management through the native connector; Epic demographics and service dates under HIPAA fundraising rules. Gap: there is no native Blackbaud connector, so scope the export; a privacy and opt-out review is required before Epic data is used."
  },
  {
    id: "policy-scenarios",
    icon: "📐",
    title: "Reimbursement Policy Scenario Modeling",
    short: "Reimbursement Policy Scenarios",
    impact: "Medium", effort: "Lower", agentic: false, fit: 7,
    problem: "The CY2027 OPPS final rule (November 4, 2026) changes 340B drug payment, the remedy clawback and site-neutral imaging, and the IRA's third negotiation round sets 2028 prices for four oncology drugs. Finance needs site-by-site impact estimates now, not after the first remittances arrive.",
    capability: "What-If Scenarios and Sensitivity Analysis in Reports on a versioned model of City of Hope's claims mix; CMS rate files enter as third-party data, so each rule change becomes a new, comparable scenario.",
    ttv: "4 to 6 weeks",
    integrationReqs: "Epic claims by site and place of service through Clarity; CMS OPPS, PFS and ASP rate files (public downloads); IRA negotiated price lists. Gap: finance needs to confirm which sites qualify for the cancer hospital exemption."
  }
];

const valueChainMap = [
  { stage: "Patient Access", useCases: ["Referral Conversion"] },
  { stage: "Diagnosis & Care Planning", useCases: [] },
  { stage: "Treatment & Pharmacy", useCases: ["Drug Spend & Shortage Forecasting", "Infusion & Clinic Capacity"] },
  { stage: "Revenue Cycle", useCases: ["Drug Revenue Integrity", "Denial Prediction & Payer Monitoring", "Payer Underpayment Detection"] },
  { stage: "Research & Trials", useCases: ["Trial Accrual Forecasting"] },
  { stage: "Enterprise Performance", useCases: ["National Site Margin Drivers", "Donor Propensity", "Reimbursement Policy Scenarios"] }
];

const useCaseImpacts = {};
useCases.forEach(u => { useCaseImpacts[u.short] = u.impact; });

const quickWins = useCases
  .filter(u => u.effort === "Lower" && u.impact === "High")
  .sort((a, b) => b.fit - a.fit);
const strategicBets = useCases
  .filter(u => !quickWins.includes(u))
  .sort((a, b) => b.fit - a.fit);

const roadmapCopy = {
  "drug-revenue-integrity": "Recover missed and mis-billed charges on the highest-spend infusion drugs, with a reviewer worklist and a full audit trail. First worklist in 8 to 12 weeks.",
  "referral-conversion": "Score at-risk referrals across Salesforce and Epic and write priorities back to New Patient Services. Live in 6 to 10 weeks.",
  "donor-propensity": "Give gift officers a ranked prospect list in Salesforce, built from Blackbaud giving history and HIPAA-permitted patient data. Live in 6 to 10 weeks.",
  "drug-shortage-forecasting": "Forecast drug demand from scheduled treatment and flag shortage risk before it reaches the infusion chair, with pharmacist-approved substitutions.",
  "capacity-forecasting": "Plan chairs, rooms and nurse staffing from forecast demand, starting at the site under the most pressure, then scale across campuses.",
  "site-margin-drivers": "Give each national-site president a versioned what-if model of the levers that move margin, feeding the enterprise planning module.",
  "denial-prediction": "Score claims for denial risk before submission and catch payer behavior shifts early, alongside Epic's own claim edits.",
  "underpayment-detection": "Compare paid with contracted amounts line by line and route variance packages to analysts for appeal.",
  "trial-accrual": "Forecast accrual by study and site, using HopeLLM match volumes as a leading indicator, so at-risk studies get attention early.",
  "policy-scenarios": "Model CY2027 OPPS and IRA changes by site as comparable, versioned scenarios for finance."
};

const longTermNarrative = "Within 24 months, City of Hope runs its operating decisions (drug revenue, capacity, patient access, denials and national-site performance) as a portfolio of governed DataApps in its own cloud, each versioned, monitored for drift and auditable by its AI governance body. HopeLLM keeps leading on clinical text; xVector supplies the structured-data predictions and agentic write-back that turn the AI product portfolio into measurable margin, access and cash results. With no peer cancer center yet publishing operational AI results, City of Hope is positioned to set that benchmark.";

// ---------- Responsive helpers ----------
const MOBILE_QUERY = '(max-width: 640px)';
const MobileCtx = React.createContext(false);
const useMobile = () => React.useContext(MobileCtx);
const useIsMobileViewport = () => {
  const get = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(MOBILE_QUERY).matches : false);
  const [isMobile, setIsMobile] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
    return () => { if (mq.removeEventListener) mq.removeEventListener('change', onChange); else mq.removeListener(onChange); };
  }, []);
  return isMobile;
};

// ---------- Components ----------
const ContentWrap = ({ children }) => {
  const m = useMobile();
  return (
    <div style={{ background: surfacePage, minHeight: '100vh' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: m ? '20px 14px 40px' : '28px 32px' }}>
        {children}
      </div>
    </div>
  );
};

const Badge = ({ label, color }) => {
  const m = useMobile();
  return (
    <span style={{
      fontSize: m ? 12 : 11, fontWeight: 600,
      padding: '3px 8px',
      borderRadius: 4,
      background: color + '18',
      color: color,
      border: `1px solid ${color}40`,
      whiteSpace: 'nowrap'
    }}>{label}</span>
  );
};

const SectionTitle = ({ title, intro }) => {
  const m = useMobile();
  return (
    <div style={{ marginBottom: m ? 14 : 18 }}>
      <h2 style={{ fontSize: m ? 17 : 18, fontWeight: 600, color: textPrimary, lineHeight: 1.3 }}>{title}</h2>
      {intro && <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.6, marginTop: 6, maxWidth: 820 }}>{intro}</p>}
    </div>
  );
};

const ChallengeCard = ({ icon, title, description, source, color }) => {
  const m = useMobile();
  return (
    <div style={{
      background: surfaceCard,
      border: `1px solid ${borderColor}`,
      borderRadius: 10,
      padding: m ? '16px 16px' : '20px 24px',
      borderLeft: `4px solid ${color}`
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: m ? 20 : 22, lineHeight: 1.2 }}>{icon}</span>
        <h3 style={{ fontSize: m ? 15 : 16, fontWeight: 600, color: textPrimary, lineHeight: 1.35 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.65 }}>{description}</p>
      {source && (
        <div style={{ marginTop: 10, fontSize: 12, color: textMuted, lineHeight: 1.5 }}>
          Source: {source}
        </div>
      )}
    </div>
  );
};

const StatCard = ({ value, label, color }) => {
  const m = useMobile();
  return (
    <div style={{
      background: surfaceCard, border: `1px solid ${borderColor}`, borderRadius: 8,
      padding: m ? '12px 12px' : '14px 16px', borderTop: `3px solid ${color}`
    }}>
      <div style={{ fontSize: m ? 21 : 24, fontWeight: 700, color: color, lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 12, color: textSecondary, marginTop: 6, lineHeight: 1.45 }}>{label}</div>
    </div>
  );
};

const StackCard = ({ name, category, categoryColor, note }) => (
  <div style={{
    background: surfaceCard,
    border: `1px solid ${borderColor}`,
    borderRadius: 8,
    padding: '14px 16px',
    borderTop: `3px solid ${categoryColor}`
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: textPrimary }}>{name}</span>
      <Badge label={category} color={categoryColor} />
    </div>
    <p style={{ fontSize: 13, color: textSecondary, lineHeight: 1.55, margin: 0 }}>{note}</p>
  </div>
);

const StackSection = ({ label }) => (
  <div style={{
    gridColumn: '1 / -1',
    fontSize: useMobile() ? 12 : 11, fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: textMuted,
    paddingBottom: 6, borderBottom: `1px solid ${borderColor}`,
    marginTop: 8
  }}>{label}</div>
);

const StageBox = ({ s, useCaseImpacts, fullWidth }) => {
  const isEmpty = s.useCases.length === 0;
  return (
    <div style={{
      minWidth: fullWidth ? 0 : 160, maxWidth: fullWidth ? 'none' : 190, width: fullWidth ? '100%' : 'auto',
      borderRadius: 8,
      border: `1px solid ${isEmpty ? borderColor : accentNavy + '40'}`,
      overflow: 'hidden',
      opacity: isEmpty ? 0.45 : 1,
      background: surfaceCard
    }}>
      <div style={{
        background: isEmpty ? surfaceSubtle : accentNavy,
        color: isEmpty ? textMuted : '#fff',
        fontSize: fullWidth ? 12 : 11, fontWeight: 700, letterSpacing: '0.06em',
        textTransform: 'uppercase', padding: '7px 10px'
      }}>
        {s.stage}
      </div>
      <div style={{
        padding: '8px 10px', display: 'flex', flexDirection: fullWidth ? 'row' : 'column',
        flexWrap: fullWidth ? 'wrap' : 'nowrap', gap: 6, minHeight: fullWidth ? 36 : 48
      }}>
        {s.useCases.map(uc => {
          const impact = useCaseImpacts[uc] || 'Medium';
          return (
            <span key={uc} style={{
              fontSize: fullWidth ? 12 : 11, fontWeight: 500,
              padding: '3px 8px', borderRadius: 4,
              background: impactColors[impact] + '18',
              color: impactColors[impact],
              border: `1px solid ${impactColors[impact]}35`
            }}>{uc}</span>
          );
        })}
      </div>
    </div>
  );
};

const ValueChainViz = ({ stages, useCaseImpacts, companyName }) => {
  const m = useMobile();
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: 14, fontWeight: 600, color: textPrimary, marginBottom: 4 }}>
        Value Chain Coverage
      </h3>
      <p style={{ fontSize: 12, color: textMuted, marginBottom: 12 }}>
        Where use cases sit in {companyName}'s value delivery chain
      </p>
      {m ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          {stages.map((s, i) => (
            <React.Fragment key={s.stage}>
              <StageBox s={s} useCaseImpacts={useCaseImpacts} fullWidth />
              {i < stages.length - 1 && (
                <div style={{ textAlign: 'center', fontSize: 12, color: textDisabled, lineHeight: '18px' }}>▼</div>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minWidth: 'max-content', paddingBottom: 8 }}>
            {stages.map((s, i) => (
              <React.Fragment key={s.stage}>
                <StageBox s={s} useCaseImpacts={useCaseImpacts} />
                {i < stages.length - 1 && (
                  <div style={{
                    alignSelf: 'center', fontSize: 16,
                    color: borderColor, padding: '0 6px', flexShrink: 0
                  }}>▶</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: 14, marginTop: 10, fontSize: m ? 12 : 11, color: textMuted, alignItems: 'center', flexWrap: 'wrap' }}>
        <span>Impact:</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: impactColors['High'], display: 'inline-block' }} />
          High
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: impactColors['Medium'], display: 'inline-block' }} />
          Medium
        </span>
        <span style={{ marginLeft: m ? 0 : 8, opacity: 0.7 }}>Faded stages have no mapped use cases</span>
      </div>
    </div>
  );
};

const UseCaseCard = ({ uc, expanded, setExpanded }) => {
  const m = useMobile();
  const isOpen = expanded === uc.id;
  return (
    <div style={{
      background: surfaceCard,
      border: `1px solid ${borderColor}`,
      borderRadius: 10,
      overflow: 'hidden'
    }}>
      <div style={{ height: 4, background: impactColors[uc.impact] }} />
      <div style={{ padding: m ? '16px 16px' : '18px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 20, lineHeight: 1.2 }}>{uc.icon}</span>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: textPrimary, lineHeight: 1.35 }}>{uc.title}</h3>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Badge label={`Impact: ${uc.impact}`} color={impactColors[uc.impact]} />
            <Badge label={`Effort: ${uc.effort}`} color={effortColors[uc.effort]} />
            {uc.agentic && <Badge label="Agentic" color={accentNavy} />}
          </div>
        </div>
        <p style={{ fontSize: m ? 14 : 13, color: textSecondary, marginTop: 10, lineHeight: 1.6 }}>
          {uc.problem}
        </p>
        <div style={{
          marginTop: 12, padding: '10px 12px',
          background: surfaceSubtle, borderRadius: 6,
          fontSize: m ? 13 : 12, color: accentNavy, lineHeight: 1.55
        }}>
          <strong>xVector:</strong> {uc.capability}
        </div>
        {uc.ttv && (
          <div style={{ marginTop: 8, fontSize: 12, color: textMuted }}>
            Est. time-to-value: {uc.ttv}
          </div>
        )}
        <div style={{ marginTop: 6 }}>
          <button
            onClick={() => setExpanded(isOpen ? null : uc.id)}
            aria-expanded={isOpen}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, color: accentNavy, fontWeight: 600,
              padding: '10px 0', minHeight: 40,
              display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit'
            }}
          >
            {isOpen ? '▲ Less detail' : '▼ More detail'}
          </button>
          {isOpen && (
            <div style={{
              marginTop: 2, padding: '12px 14px',
              background: surfaceSubtle, borderRadius: 6,
              fontSize: 13, color: textSecondary, lineHeight: 1.65
            }}>
              <div>
                <strong>Integrations:</strong> {uc.integrationReqs}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PhaseHeader = ({ label, sublabel, color }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 12,
    marginBottom: 16, paddingBottom: 10,
    borderBottom: `2px solid ${color}`
  }}>
    <div style={{
      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
      background: color + '18', border: `2px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 13, fontWeight: 700, color: color
    }}>{label}</div>
    <div style={{ fontSize: 14, fontWeight: 600, color: textPrimary }}>{sublabel}</div>
  </div>
);

const RoadmapItem = ({ icon, title, description, tag, color }) => (
  <div style={{
    background: surfaceCard, border: `1px solid ${borderColor}`,
    borderRadius: 8, padding: '14px 16px',
    borderLeft: `3px solid ${color}`
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: textPrimary }}>{title}</span>
      {tag && <Badge label={tag} color={color} />}
    </div>
    <p style={{ fontSize: 13, color: textSecondary, lineHeight: 1.6, margin: 0 }}>{description}</p>
  </div>
);

const grid2 = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(420px, 100%), 1fr))', gap: 16 };
const grid2n = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(380px, 100%), 1fr))', gap: 12 };
const grid3 = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))', gap: 12 };
const gridStatsMobile = { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 };

// ---------- Tabs ----------
const IndustryTab = () => (
  <ContentWrap>
    <SectionTitle
      title="Pressures on every US cancer center"
      intro="Four forces shape oncology providers' 2027 plans. Each one runs through structured data spread across clinical, pharmacy, payer and finance systems."
    />
    <div style={grid2}>
      {industryChallenges.map(c => <ChallengeCard key={c.title} {...c} />)}
    </div>
    <div style={{ height: 32 }} />
    <SectionTitle
      title="What peer cancer centers are doing with AI"
      intro="Peers are concentrating on clinical and research AI. The operational side of the cancer business is still uncontested."
    />
    <div style={grid2}>
      {competitorMoves.map(c => <ChallengeCard key={c.title} {...c} />)}
    </div>
  </ContentWrap>
);

const ContextTab = () => {
  const m = useMobile();
  return (
    <ContentWrap>
      <SectionTitle
        title="City of Hope at a glance"
        intro="City of Hope is growing fast and spending faster. Its biggest pressures are structured-data problems that cross system boundaries."
      />
      <div style={m ? gridStatsMobile : grid3}>
        {companyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>
      <div style={{ marginTop: 8, fontSize: 12, color: textMuted, lineHeight: 1.5 }}>
        Sources: CHFFA Staff Report, Res. 470 (Apr 2026); Form 990 filings via ProPublica; CancerNetwork (Aug 2026).
      </div>
      <div style={{ height: 32 }} />
      <SectionTitle title="Company-specific challenges" />
      <div style={grid2}>
        {companyChallenges.map(c => <ChallengeCard key={c.title} {...c} />)}
      </div>
      <div style={{ height: 32 }} />
      <SectionTitle
        title="Where City of Hope's AI program stands"
        intro="The clinical AI engine is built. The next step is taking AI into the operating side of the business, in governed production."
      />
      <div style={grid2}>
        {aiProgram.map(c => <ChallengeCard key={c.title} {...c} />)}
      </div>
    </ContentWrap>
  );
};

const StackTab = () => (
  <ContentWrap>
    <SectionTitle
      title="City of Hope's data and AI stack"
      intro="Data lives in Epic, Salesforce, Blackbaud, Snowflake and an enterprise warehouse, and is analyzed in four BI tools. Each card notes where xVector adds to what is already in place. Stack evidence comes from City of Hope job postings (2025 to 2026) and public announcements."
    />
    <div style={grid3}>
      {stackGroups.map(g => (
        <React.Fragment key={g.label}>
          <StackSection label={g.label} />
          {g.items.map(it => (
            <StackCard key={it.name} name={it.name} note={it.note} category={g.label} categoryColor={stackCategoryColors[g.label]} />
          ))}
        </React.Fragment>
      ))}
    </div>
  </ContentWrap>
);

const UseCasesTab = () => {
  const [expanded, setExpanded] = React.useState(null);
  return (
    <ContentWrap>
      <ValueChainViz stages={valueChainMap} useCaseImpacts={useCaseImpacts} companyName={companyName} />
      <p style={{ fontSize: 12, color: textMuted, marginTop: -16, marginBottom: 24, lineHeight: 1.55 }}>
        Diagnosis &amp; Care Planning is faded on purpose: HopeLLM, Epic clinical decision support and ambient documentation own that stage. xVector complements it rather than competing in it.
      </p>
      <SectionTitle
        title="Ten use cases, ordered by City of Hope priority"
        intro="Each use case cleared an xVector fit test: structured data across several systems, a prediction, forecast, anomaly or what-if at the core, write-back to where people work, and an audit trail. Six are agentic: an AI agent triages, routes or writes back, and a person approves."
      />
      <div style={grid2}>
        {useCases.map(uc => <UseCaseCard key={uc.id} uc={uc} expanded={expanded} setExpanded={setExpanded} />)}
      </div>
    </ContentWrap>
  );
};

const RoadmapTab = () => (
  <ContentWrap>
    <SectionTitle
      title="What success looks like over 12 to 24 months"
      intro="Start where data is already accessible and value is fast to prove, then extend the same governed platform to the larger operational bets."
    />
    <PhaseHeader label="01" sublabel="Quick Wins: 0 to 3 months" color={accentForest} />
    <div style={{ ...grid2n, marginBottom: 32 }}>
      {quickWins.map(u => (
        <RoadmapItem key={u.id} icon={u.icon} title={u.title} description={roadmapCopy[u.id]} tag={`${u.impact} impact`} color={accentForest} />
      ))}
    </div>
    <PhaseHeader label="02" sublabel="Strategic Bets: 3 to 18 months" color={accentNavy} />
    <div style={{ ...grid2n, marginBottom: 32 }}>
      {strategicBets.map(u => (
        <RoadmapItem key={u.id} icon={u.icon} title={u.title} description={roadmapCopy[u.id]} tag={`${u.impact} impact · ${u.effort} effort`} color={accentNavy} />
      ))}
    </div>
    <div style={{
      padding: '20px 20px', background: accentNavy + '0D',
      border: `1px solid ${accentNavy}30`, borderRadius: 10
    }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: textPrimary, marginBottom: 8 }}>
        The Long-Term Picture
      </h3>
      <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.7, margin: 0 }}>
        {longTermNarrative}
      </p>
    </div>
  </ContentWrap>
);

// ---------- App ----------
const tabs = [
  { id: 'industry', label: 'Industry Landscape' },
  { id: 'context',  label: 'City of Hope Context' },
  { id: 'stack',    label: 'Data & AI Stack' },
  { id: 'usecases', label: `Use Cases (${useCases.length})` },
  { id: 'roadmap',  label: 'Vision & Roadmap' }
];

const PREPARED_FOR = 'City of Hope';
const PREPARED_DATE = 'November 5, 2026';

const App = () => {
  const isMobile = useIsMobileViewport();
  const [activeTab, setActiveTab] = React.useState('industry');
  const m = isMobile;
  const selectTab = (id) => {
    setActiveTab(id);
    window.scrollTo(0, 0);
  };
  return (
    <MobileCtx.Provider value={isMobile}>
      <div>
        <header style={{
          background: sponsorPrimary,
          color: '#fff',
          padding: m ? '16px 16px 14px' : '20px 32px',
          display: 'flex',
          flexDirection: m ? 'column' : 'row',
          alignItems: m ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: m ? 8 : 12
        }}>
          <div>
            <div style={{ fontSize: m ? 11 : 13, opacity: 0.75, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              xVector Labs
            </div>
            <h1 style={{ fontSize: m ? 20 : 22, fontWeight: 600, marginTop: 4, lineHeight: 1.25 }}>
              City of Hope Agentic AI Strategy
            </h1>
            <div style={{ fontSize: m ? 12 : 13, opacity: 0.75, marginTop: 4 }}>
              A roadmap for City of Hope's AI-ready data platform
            </div>
          </div>
          <div style={{ textAlign: m ? 'left' : 'right', fontSize: m ? 12 : 13, opacity: 0.8 }}>
            {m ? `Prepared for: ${PREPARED_FOR} · ${PREPARED_DATE}` : <React.Fragment>Prepared for: {PREPARED_FOR}<br />{PREPARED_DATE}</React.Fragment>}
          </div>
        </header>
        <nav style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: '#fff',
          borderBottom: `2px solid ${borderColor}`,
          display: 'flex',
          flexWrap: m ? 'wrap' : 'nowrap',
          padding: m ? '0 8px' : '0 32px',
          overflowX: m ? 'visible' : 'auto',
          boxShadow: '0 1px 3px rgba(17,24,39,0.06)'
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => selectTab(t.id)}
              aria-current={activeTab === t.id ? 'page' : undefined}
              style={{
                padding: m ? '11px 9px' : '14px 20px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: m ? 13 : 14,
                fontWeight: activeTab === t.id ? 600 : 400,
                color: activeTab === t.id ? sponsorPrimary : (m ? textMuted : textDisabled),
                borderBottom: activeTab === t.id ? `2px solid ${sponsorPrimary}` : '2px solid transparent',
                marginBottom: -2,
                whiteSpace: 'nowrap',
                fontFamily: 'inherit'
              }}
            >{t.label}</button>
          ))}
        </nav>
        {activeTab === 'industry' && <IndustryTab />}
        {activeTab === 'context' && <ContextTab />}
        {activeTab === 'stack' && <StackTab />}
        {activeTab === 'usecases' && <UseCasesTab />}
        {activeTab === 'roadmap' && <RoadmapTab />}
      </div>
    </MobileCtx.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
