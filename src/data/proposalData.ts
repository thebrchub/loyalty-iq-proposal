import type { ProposalConfig } from '../types';

export const proposalData: ProposalConfig = {
  clientName: "Danesh Chotia",
  projectName: "LoyaltyIQ",
  purpose: "Investor Prototype Development",
  lastUpdated: new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' }),
  estimatedDuration: "6 Weeks",
  totalCost: 600000, 
  objectives: [
    { title: "Demonstrate Working Product", description: "Build a highly functional, interactive platform for stakeholders to experience directly." },
    { title: "Validate Product Concept", description: "Prove that reward aggregation solves a real user pain point through live data synchronization." },
    { title: "Provide Real Reward Visibility", description: "Combine live portal scraping with Gmail and PDF extraction to display actual, comprehensive loyalty balances." },
    { title: "Enable AI Insights", description: "Implement an intelligence engine to dynamically analyze rates, query rewards, and predict expiries." }
  ],

  userJourney: [
    {
      id: "step-1",
      phase: "Phase 01",
      title: "Secure Onboarding & Auth",
      frontendExp: "The user creates an account and clicks 'Connect Gmail'. They are presented with Google's official, secure consent screen.",
      backendProc: "Node.js initiates a secure OAuth 2.0 flow. We exchange the auth code for a short-lived access token, encrypting it in PostgreSQL via a hardware-security-module logic."
    },
    {
      id: "step-2",
      phase: "Phase 02",
      title: "Initial Data Synchronization",
      frontendExp: "The dashboard displays a skeleton-loading state with a dynamic progress bar while historical reward statements are located.",
      backendProc: "A Python background worker triggers the Gmail API, utilizing targeted search queries (e.g., 'subject:statement AND has:attachment') to isolate reward emails without reading personal threads."
    },
    {
      id: "step-3",
      phase: "Phase 03",
      title: "AI Extraction Pipeline",
      frontendExp: "A live feed shows airlines and banks being recognized (e.g., 'Delta Skymiles Detected', 'Amex Statement Found').",
      backendProc: "Python workers buffer PDFs in memory. Text vectors are extracted and passed to the Gemini/OpenAI API using strict JSON function calling to enforce our normalized Reward Schema."
    },
    {
      id: "step-4",
      phase: "Phase 04",
      title: "Dashboard Rendering",
      frontendExp: "The UI instantly populates with beautiful charts showing total points, upcoming expirations, and categorized brand loyalty.",
      backendProc: "The Python-processed JSON is validated and UPSERTed into PostgreSQL. The React application fetches the metrics via a Node.js RESTful endpoint, heavily cached by Redis for speed."
    },
    {
      id: "step-5",
      phase: "Phase 05",
      title: "Natural Language Interaction",
      frontendExp: "The user opens the AI Assistant chat and asks, 'Do I have enough points for a flight to Tokyo?'",
      backendProc: "The Python-based AI engine utilizes RAG (Retrieval-Augmented Generation). It pulls the user's specific balances from the DB, injects them into the LLM context, and streams the response."
    }
  ],
  
  modules: [
    {
      id: "mod-1",
      title: "Product Discovery & Technical Planning",
      description: "Requirements gathering and foundational architecture mapping.",
      cost: 35000,
      complexity: "Medium",
      technicalNotes: ["Database ERD design", "API Contract planning", "Workflow mapping"],
      deliverables: [
        { name: "Requirements gathering", included: true },
        { name: "Architecture & Database design", included: true },
        { name: "Technical documentation", included: true }
      ],
      whyThisCost: [
        "Ensures absolute clarity on the technical path forward before any code is written.",
        "Prevents technical debt by ensuring the Node/Python microservice bridge is architected for zero-latency communication."
      ]
    },
    {
      id: "mod-2",
      title: "UI/UX Design (Optional)",
      description: "Complete visual design system and user interface layouts.",
      cost: 30000,
      complexity: "Medium",
      technicalNotes: ["Design handoff", "Responsive layouts"],
      deliverables: [
        { name: "Wireframes & Dashboard design", included: true },
        { name: "Onboarding & AI assistant screens", included: true }
      ],
      whyThisCost: [
        "This module is optional. If your team provides the designs, this cost will be deducted.",
        "We build a dynamic design system (Figma to Code), not just flat images, enabling rapid development."
      ]
    },
    {
      id: "mod-3",
      title: "Frontend Application Development",
      description: "The core React 19 web application and interactive user interfaces.",
      cost: 150000,
      complexity: "High",
      technicalNotes: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4"],
      deliverables: [
        { name: "Authentication & Onboarding flows", included: true },
        { name: "Reward Dashboard & Overview", included: true },
        { name: "AI Assistant Interface & Settings", included: true },
        { name: "Responsive Design & API Integration Layer", included: true }
      ],
      whyThisCost: [
        "Involves building complex, state-driven interfaces for the dashboard.",
        "Ensures a snappy, single-page application feel that matches top-tier SaaS products like Ola or Stripe."
      ]
    },
    {
      id: "mod-4",
      title: "Backend Platform Development",
      description: "Secure, scalable backend infrastructure and business logic.",
      cost: 175000,
      complexity: "High",
      technicalNotes: ["Node.js Gateway", "Python Worker Services", "PostgreSQL"],
      deliverables: [
        { name: "User Management & Authentication APIs", included: true },
        { name: "Database Architecture & Data Processing", included: true },
        { name: "Python Worker Orchestration", included: true },
        { name: "Admin Panel APIs & Business Logic", included: true }
      ],
      whyThisCost: [
        "Dual-engine architecture. Node.js handles real-time traffic while Python handles background data processing.",
        "Requires highly secure data handling and idempotent database transaction logic."
      ]
    },
    {
      id: "mod-5",
      title: "Gmail Integration & Python Extraction",
      description: "The authentication and synchronization layer for user emails.",
      cost: 75000,
      complexity: "High",
      technicalNotes: ["Google OAuth 2.0", "Python Gmail API Client"],
      deliverables: [
        { name: "Gmail Authentication flow", included: true },
        { name: "Email Synchronization Service", included: true },
        { name: "Python Reward Email Detection Pipeline", included: true }
      ],
      whyThisCost: [
        "Requires navigating strict Google API quotas and security protocols.",
        "Involves building robust Python parsing pipelines using Playwright/BeautifulSoup to detect and extract data."
      ]
    },
    {
      id: "mod-6",
      title: "Loyalty Data Normalization System",
      description: "Ingestion and normalization of raw reward data.",
      cost: 50000,
      complexity: "High",
      technicalNotes: ["Python Data Structuring", "Pandas", "Storage Architecture"],
      deliverables: [
        { name: "Monthly PDF Ingestion", included: true },
        { name: "Python AI Extraction Workflow", included: true },
        { name: "Reward Normalization & Structuring", included: true }
      ],
      whyThisCost: [
        "Normalizing fragmented data from 100+ different bank/airline formats into a single schema is an extreme engineering challenge."
      ]
    },
    {
      id: "mod-7",
      title: "AI Assistant & Reward Intelligence",
      description: "Natural language processing for user queries and insights.",
      cost: 40000,
      complexity: "Medium",
      technicalNotes: ["Python LLM orchestration", "Gemini / OpenAI"],
      deliverables: [
        { name: "Reward Queries & Context Aware Chat", included: true },
        { name: "Expiry Insights", included: true },
        { name: "Recommendation Generation", included: true }
      ],
      whyThisCost: [
        "Requires sophisticated Python-based prompt engineering and RAG to ensure AI doesn't hallucinate reward balances."
      ]
    },
    {
      id: "mod-8",
      title: "QA, Security & Deployment",
      description: "Ensuring the platform is secure, monitored, and production-ready.",
      cost: 45000,
      complexity: "Medium",
      technicalNotes: ["Docker", "Nginx", "SSL Configuration", "Monitoring"],
      deliverables: [
        { name: "Functional Testing & Bug Fixes", included: true },
        { name: "Production Deployment (Dockerized)", included: true }
      ],
      whyThisCost: [
        "Crucial for ensuring zero downtime during investor pitches.",
        "Secures all API endpoints with SSL and proper Dockerized container orchestration."
      ]
    }
  ],
  timeline: [
    {
      week: "Week 1",
      title: "Discovery, Architecture & UI/UX",
      description: "Requirements finalized, database schemas mapped, and interface designs completed. Dual Node/Python environment setup."
    },
    {
      week: "Week 2-3",
      title: "Core Platform Development",
      description: "Frontend React application built concurrently with Node.js APIs and Python background worker skeletons."
    },
    {
      week: "Week 4",
      title: "Data Pipelines & Gmail Integration",
      description: "OAuth integration, Gmail sync, and the Python-based secure PDF/statement parsing engines constructed."
    },
    {
      week: "Week 5",
      title: "AI Intelligence Engine",
      description: "Integration of Python AI services for reward extraction, normalization, and contextual chat functionality."
    },
    {
      week: "Week 6",
      title: "QA, Security & Deployment",
      description: "End-to-end system testing, bug resolution, secure Dockerized deployment, and final handover."
    }
  ],

  // NEW: 5-Step Payment Milestones calculated for the ₹6L total
  paymentMilestones: [
    { phase: "Advance Payment", percentage: 25, amount: 150000, description: "Upon SOW signing, before development begins. Covers project setup and architecture kickoff." },
    { phase: "Milestone 1", percentage: 25, amount: 150000, description: "Upon completion and client approval of all UI/UX screen designs and architecture sign-off." },
    { phase: "Milestone 2", percentage: 25, amount: 150000, description: "Upon delivery of core web app with Gmail OAuth integration and Loyalty Dashboard functional." },
    { phase: "Milestone 3", percentage: 15, amount: 90000, description: "Upon completion of Python extraction pipelines and AI Assistant integration." },
    { phase: "Final Release", percentage: 10, amount: 60000, description: "Upon final QA sign-off, deployment to live URL, and client acceptance." }
  ],

  // NEW: Operational Costs clearly defining his responsibilities
  operationalCosts: [
    { title: "Monthly Maintenance & Monitoring", cost: "₹21,000 / month", description: "Required during the active prototype period to cover BRC HUB's ongoing engineering oversight, server monitoring, and data pipeline upkeep." },
    { title: "Server Infrastructure", cost: "Billed to Client", description: "AWS/VPS compute costs for running the Node.js APIs, PostgreSQL, and Python workers will be borne directly by the client via their own cloud account." },
    { title: "AI API Token Usage", cost: "Billed to Client", description: "All OpenAI/Gemini API calls required for the AI Assistant and PDF data extraction will run through the client's own API keys and billing account." }
  ],
faqs: [
    {
      question: "Why use both Node.js and Python?",
      answer: "Node.js is superior for handling real-time user traffic and API requests with zero latency. Python is the industry leader for AI, data scraping, and PDF parsing. Combining them creates a high-performance, enterprise-grade architecture."
    },
    {
      question: "Why use both live web scrapers and Gmail/PDF parsing?",
      answer: "Combining both methods provides the most accurate and comprehensive data. Dedicated Python web scrapers pull live point balances directly from bank and airline portals, while Gmail and PDF parsing extracts historical data, transaction details, and credit card profiles to give a complete picture of the user's loyalty wealth."
    },
    {
      question: "Can this architecture be scaled for a full public release?",
      answer: "Yes. The entire infrastructure—including the Node.js gateway, Python scraping workers, and PostgreSQL schema—is built to production standards and will serve as a robust, scalable foundation."
    },
    {
      question: "How exactly is AI utilized in this platform?",
      answer: "We use Large Language Models via Python orchestration for two tasks: parsing complex, unstructured statement PDFs into structured JSON and powering the natural language query interface."
    },
    {
      question: "What are the next steps after the prototype is delivered?",
      answer: "BRC HUB LLP can transition into a dedicated engineering retainer to scale the infrastructure, build native mobile iOS and Android apps, and integrate additional bank and airline networks."
    }
  ]
};