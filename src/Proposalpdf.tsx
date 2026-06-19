




import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";




const T = {

  ink: "#0D0D0D",
  inkMid: "#3A3A3A",
  inkLight: "#6B6B6B",
  inkFaint: "#A8A8A8",
  rule: "#E2E2E2",
  ruleLight: "#F0F0F0",
  accent: "#1A3C6E", // deep navy — BRC HUB brand anchor
  accentMid: "#2D5A9E",
  accentLight: "#EAF0FB",
  white: "#FFFFFF",
  pageGutter: 48,
  colGap: 20,
} as const;

const S = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: T.white,
    paddingHorizontal: T.pageGutter,
    paddingTop: 40,
    paddingBottom: 56,
    color: T.ink,
  },

  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: T.rule,
  },
  pageHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerLogoBox: {
    width: 20,
    height: 20,
  },
  headerBrand: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: T.accent,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  headerDoc: {
    fontSize: 7,
    color: T.inkFaint,
    letterSpacing: 0.4,
  },
  pageFooter: {
    position: "absolute",
    bottom: 28,
    left: T.pageGutter,
    right: T.pageGutter,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: T.rule,
  },
  footerText: {
    fontSize: 7,
    color: T.inkFaint,
  },
  footerPage: {
    fontSize: 7,
    color: T.inkFaint,
  },

  sectionLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: T.accentMid,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: T.ink,
    marginBottom: 4,
  },
  sectionRule: {
    borderBottomWidth: 1,
    borderBottomColor: T.accent,
    width: 32,
    marginBottom: 18,
  },

  body: {
    fontSize: 9,
    lineHeight: 1.7,
    color: T.inkMid,
  },
  bodySmall: {
    fontSize: 8,
    lineHeight: 1.6,
    color: T.inkLight,
  },
  strong: {
    fontFamily: "Helvetica-Bold",
    color: T.ink,
  },

  row: {
    flexDirection: "row",
  },
  col: {
    flex: 1,
  },
  spacer8: { marginBottom: 8 },
  spacer12: { marginBottom: 12 },
  spacer16: { marginBottom: 16 },
  spacer24: { marginBottom: 24 },

  pill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    backgroundColor: T.accentLight,
    alignSelf: "flex-start",
  },
  pillText: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: T.accentMid,
    letterSpacing: 0.5,
  },

  kv: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 5,
  },
  kvKey: {
    fontSize: 8,
    color: T.inkLight,
    width: 110,
  },
  kvVal: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: T.ink,
    flex: 1,
  },

  card: {
    borderWidth: 0.5,
    borderColor: T.rule,
    borderRadius: 4,
    padding: 14,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: T.ink,
    marginBottom: 6,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: T.accent,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginBottom: 2,
  },
  tableHeaderText: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: T.white,
    letterSpacing: 0.4,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: T.ruleLight,
  },
  tableRowAlt: {
    backgroundColor: "#F8FAFB",
  },
  tableCell: {
    fontSize: 8.5,
    color: T.inkMid,
  },
  tableCellBold: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: T.ink,
  },

  timelineRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: T.accent,
    marginTop: 2,
    marginRight: 10,
    flexShrink: 0,
  },
  timelineWeek: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: T.accent,
    width: 60,
    flexShrink: 0,
  },
  timelineBody: {
    flex: 1,
    fontSize: 8.5,
    color: T.inkMid,
    lineHeight: 1.5,
  },

  archBox: {
    alignItems: "center",
    marginVertical: 4,
  },
  archNode: {
    borderWidth: 0.75,
    borderColor: T.accent,
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginBottom: 2,
    backgroundColor: T.accentLight,
  },
  archNodeText: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: T.accent,
    textAlign: "center",
  },
  archArrow: {
    fontSize: 9,
    color: T.inkFaint,
    marginBottom: 2,
    textAlign: "center",
  },
});


const todayStr = new Date().toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function PageHeader({ section }: { section: string }) {
  return (
    <View style={S.pageHeader} fixed>
      <View style={S.pageHeaderLeft}>
        <Image style={S.headerLogoBox} src="/logo.png" />
        <Text style={S.headerBrand}>BRC HUB LLP</Text>
      </View>
      <Text style={S.headerDoc}>{section}</Text>
    </View>
  );
}

function PageFooter({ label }: { label: string }) {
  return (
    <View style={S.pageFooter} fixed>
      <Text style={S.footerText}>
        Confidential — LoyaltyIQ Technical Proposal — {label}
      </Text>
      <Text
        style={S.footerPage}
        render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages}`
        }
      />
    </View>
  );
}

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <View style={S.spacer8}>
      <Text style={S.sectionLabel}>{label}</Text>
      <Text style={S.sectionTitle}>{title}</Text>
      <View style={S.sectionRule} />
    </View>
  );
}


function CoverPage() {
  return (
    <Page size="A4" style={{ ...S.page, paddingTop: 0, paddingHorizontal: 0 }}>
      {}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 6,
          bottom: 0,
          backgroundColor: T.accent,
        }}
      />

      {}
      <View style={{ paddingHorizontal: T.pageGutter, paddingTop: 64, flex: 1 }}>
        {}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 64 }}>
          <Image src="/logo.png" style={{ width: 32, height: 32 }} />
          <View>
            <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: T.accent, letterSpacing: 1 }}>
              BRC HUB LLP
            </Text>
            <Text style={{ fontSize: 7, color: T.inkLight, letterSpacing: 0.5 }}>
              Technology & Product Studio
            </Text>
          </View>
        </View>

        {}
        <View style={{ marginBottom: 48 }}>
          <View style={{ ...S.pill, marginBottom: 14 }}>
            <Text style={S.pillText}>Technical Proposal & Commercial Scope</Text>
          </View>
          <Text
            style={{
              fontSize: 34,
              fontFamily: "Helvetica-Bold",
              color: T.ink,
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            LoyaltyIQ
          </Text>
          <Text style={{ fontSize: 13, color: T.inkMid, lineHeight: 1.5, maxWidth: 360 }}>
            AI-Powered Loyalty & Rewards Intelligence Platform
          </Text>
        </View>

        {}
        <View style={{ borderTopWidth: 0.5, borderTopColor: T.rule, marginBottom: 32 }} />

        {}
        <View style={{ flexDirection: "row", gap: 40, marginBottom: 64 }}>
          <View>
            <Text style={{ fontSize: 7, color: T.inkFaint, letterSpacing: 0.6, marginBottom: 4 }}>
              PREPARED FOR
            </Text>
            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: T.ink }}>
              Danesh Chotia
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 7, color: T.inkFaint, letterSpacing: 0.6, marginBottom: 4 }}>
              PREPARED BY
            </Text>
            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: T.ink }}>
              BRC HUB LLP
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 7, color: T.inkFaint, letterSpacing: 0.6, marginBottom: 4 }}>
              DATE
            </Text>
            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: T.ink }}>
              {todayStr}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 7, color: T.inkFaint, letterSpacing: 0.6, marginBottom: 4 }}>
              VERSION
            </Text>
            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: T.ink }}>
              v1.0
            </Text>
          </View>
        </View>

        {}
        <View
          style={{
            backgroundColor: T.accent,
            borderRadius: 6,
            padding: 20,
            flexDirection: "row",
            gap: 40,
          }}
        >
          <View>
            <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.55)", letterSpacing: 0.6, marginBottom: 4 }}>
              TOTAL INVESTMENT
            </Text>
            <Text style={{ fontSize: 22, fontFamily: "Helvetica-Bold", color: T.white }}>
              ₹6,00,000
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.55)", letterSpacing: 0.6, marginBottom: 4 }}>
              ESTIMATED TIMELINE
            </Text>
            <Text style={{ fontSize: 22, fontFamily: "Helvetica-Bold", color: T.white }}>
              8–10 Weeks
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.55)", letterSpacing: 0.6, marginBottom: 4 }}>
              PROJECT TYPE
            </Text>
            <Text style={{ fontSize: 22, fontFamily: "Helvetica-Bold", color: T.white }}>
              Investor Prototype
            </Text>
          </View>
        </View>
      </View>

      {}
      <View style={{ paddingHorizontal: T.pageGutter, paddingBottom: 24, marginTop: "auto" }}>
        <View style={{ borderTopWidth: 0.5, borderTopColor: T.rule, paddingTop: 12 }}>
          <Text style={{ fontSize: 7, color: T.inkFaint }}>
            This document is confidential and intended solely for the named recipient. © {new Date().getFullYear()} BRC HUB LLP. All rights reserved.
          </Text>
        </View>
      </View>
    </Page>
  );
}


function ExecutiveSummaryPage() {
  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Executive Summary" />

      <SectionHeading label="Section 01" title="Executive Summary" />

      <View style={S.spacer8}>
        <Text style={S.body}>
          LoyaltyIQ is an AI-powered loyalty and rewards intelligence platform designed to give consumers a single, unified view of every reward point, mile, and cashback balance they hold across airlines, hotels, banks, and retail programs. Today, the average Indian consumer participates in 4–6 loyalty programs simultaneously, yet has no effective way to track balances, prevent expiries, or maximise redemption value. LoyaltyIQ solves this.
        </Text>
      </View>

      <View style={S.spacer16} />

      {}
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
        {[
          {
            title: "Business Objective",
            body: "Validate the core product hypothesis — that consumers will connect their Gmail accounts and trust an AI-powered platform to surface, organise, and advise on their loyalty portfolio — before committing to a full-scale build.",
          },
          {
            title: "Why a Prototype",
            body: "The prototype phase de-risks investment by proving the Gmail OAuth integration, AI extraction pipeline, and dashboard experience work end-to-end with real data, at a fraction of the cost of a production build.",
          },
          {
            title: "Expected Outcome",
            body: "A fully functional investor-grade prototype demonstrating the complete user journey: from Gmail connection through AI-powered reward discovery to an interactive dashboard and conversational AI assistant.",
          },
        ].map((item) => (
          <View key={item.title} style={{ flex: 1, ...S.card }}>
            <Text style={S.cardTitle}>{item.title}</Text>
            <Text style={S.bodySmall}>{item.body}</Text>
          </View>
        ))}
      </View>

      {}
      <View style={{ backgroundColor: T.accentLight, borderRadius: 4, padding: 16, flexDirection: "row", gap: 0 }}>
        {[
          ["₹6,00,000", "Total Investment"],
          ["8–10 Weeks", "Delivery Timeline"],
          ["8 Modules", "Scope of Work"],
          ["30 Days", "Post-delivery Support"],
        ].map(([val, lbl], i, arr) => (
          <View
            key={lbl}
            style={{
              flex: 1,
              alignItems: "center",
              borderRightWidth: i < arr.length - 1 ? 0.5 : 0,
              borderRightColor: "#C5D9F2",
              paddingHorizontal: 8,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: "Helvetica-Bold", color: T.accent, marginBottom: 3 }}>
              {val}
            </Text>
            <Text style={{ fontSize: 7, color: T.accentMid, textAlign: "center" }}>{lbl}</Text>
          </View>
        ))}
      </View>

      <View style={S.spacer16} />

      <Text style={{ ...S.body, fontFamily: "Helvetica-Bold", marginBottom: 6 }}>
        Who should read this document
      </Text>
      <Text style={S.body}>
        This proposal is structured for three audiences: (1) Founders and product stakeholders who need to understand scope and commercial commitment; (2) Engineering leads who need to assess technical decisions and stack choices; and (3) Investors who need confidence that the product architecture is scalable, defensible, and built to production-grade standards from day one.
      </Text>

      <PageFooter label="Executive Summary" />
    </Page>
  );
}


function ArchitecturePage() {
  const ArchFlow = ({
    nodes,
    title,
  }: {
    nodes: string[];
    title: string;
  }) => (
    <View style={{ flex: 1 }}>
      <Text style={{ ...S.cardTitle, marginBottom: 10 }}>{title}</Text>
      <View style={S.archBox}>
        {nodes.map((node, i) => (
          <View key={i}>
            <View style={S.archNode}>
              <Text style={S.archNodeText}>{node}</Text>
            </View>
            {i < nodes.length - 1 && (
              <Text style={S.archArrow}>↓</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="System Architecture" />
      <SectionHeading label="Section 02" title="System Architecture" />

      <Text style={{ ...S.body, marginBottom: 20 }}>
        LoyaltyIQ operates across two parallel workflows. The primary path handles user-initiated Gmail OAuth connections and real-time data processing. The secondary path enables the operations team to manually upload PDF statements for AI extraction — providing a fallback that works even without Gmail access.
      </Text>

      <View style={{ flexDirection: "row", gap: 16 }}>
        <ArchFlow
          title="Primary — User OAuth Flow"
          nodes={[
            "User",
            "Gmail OAuth",
            "Backend Services",
            "AI Extraction",
            "PostgreSQL Database",
            "React Dashboard",
            "AI Assistant",
          ]}
        />
        <View style={{ width: 0.5, backgroundColor: T.rule }} />
        <ArchFlow
          title="Secondary — Manual Upload Flow"
          nodes={[
            "Operations Team",
            "Download Statements",
            "Upload PDFs",
            "AI Extraction Pipeline",
            "PostgreSQL Database",
            "React Dashboard",
          ]}
        />
      </View>

      <View style={S.spacer16} />

      {}
      <View style={{ backgroundColor: "#F8FAFB", borderRadius: 4, padding: 14, borderLeftWidth: 3, borderLeftColor: T.accent }}>
        <Text style={{ ...S.bodySmall, fontFamily: "Helvetica-Bold", color: T.accent, marginBottom: 4 }}>
          Infrastructure Note
        </Text>
        <Text style={S.bodySmall}>
          All services are containerised with Docker for environment parity. Redis caches aggregated metrics, reducing dashboard load latency to under 50ms. The AI extraction layer is stateless and horizontally scalable — each PDF is processed in-memory without disk writes, preserving data privacy.
        </Text>
      </View>

      <PageFooter label="System Architecture" />
    </Page>
  );
}


function TechStackPage() {
  const StackGroup = ({
    title,
    items,
  }: {
    title: string;
    items: { name: string; note: string }[];
  }) => (
    <View style={{ ...S.card, flex: 1 }}>
      <Text style={{ ...S.cardTitle, fontSize: 8, color: T.accentMid, textTransform: "uppercase", letterSpacing: 0.8 }}>
        {title}
      </Text>
      {items.map((item) => (
        <View key={item.name} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 4, borderBottomWidth: 0.5, borderBottomColor: T.ruleLight }}>
          <Text style={{ fontSize: 8.5, fontFamily: "Helvetica-Bold", color: T.ink }}>{item.name}</Text>
          <Text style={{ fontSize: 7.5, color: T.inkLight }}>{item.note}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Technology Stack" />
      <SectionHeading label="Section 03" title="Technology Stack" />

      <Text style={{ ...S.body, marginBottom: 20 }}>
        The stack is selected for developer velocity, scalability, and long-term maintainability. Every choice reflects production-grade standards — the prototype is built the way the production system would be, just with a narrower feature surface.
      </Text>

      <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
        <StackGroup
          title="Frontend"
          items={[
            { name: "React 19", note: "UI framework" },
            { name: "Vite", note: "Build tooling" },
            { name: "TypeScript", note: "Type safety" },
            { name: "Tailwind CSS v4", note: "Styling" },
            { name: "TanStack Query", note: "Server state" },
            { name: "Zustand", note: "Client state" },
          ]}
        />
        <StackGroup
          title="Backend"
          items={[
            { name: "Node.js", note: "Runtime" },
            { name: "NestJS", note: "API framework" },
            { name: "PostgreSQL", note: "Primary DB" },
            { name: "Redis", note: "Cache layer" },
          ]}
        />
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <StackGroup
          title="Integrations"
          items={[
            { name: "Gmail OAuth 2.0", note: "Email access" },
            { name: "Gemini API", note: "AI extraction" },
            { name: "OpenAI GPT-4", note: "AI assistant" },
          ]}
        />
        <StackGroup
          title="Infrastructure"
          items={[
            { name: "Docker", note: "Containerisation" },
            { name: "VPS / AWS EC2", note: "Hosting" },
            { name: "GitHub Actions", note: "CI/CD" },
          ]}
        />
      </View>

      <PageFooter label="Technology Stack" />
    </Page>
  );
}


const modules = [
  {
    id: "01",
    name: "Product Discovery",
    effort: "3 days",
    description:
      "Requirement finalisation, technical architecture review, API contract design, and project planning.",
    deliverables: "Architecture doc, API contracts, project plan",
    components: "Workshops, documentation, wireframe review",
  },
  {
    id: "02",
    name: "UI/UX Design",
    effort: "5 days",
    description:
      "Figma design system, all screen designs, component library, and responsive layouts for web.",
    deliverables: "Figma file, design system, component specs",
    components: "Figma, design tokens, responsive grid",
  },
  {
    id: "03",
    name: "Frontend Development",
    effort: "12 days",
    description:
      "Full React application with 10+ screens, dashboard visualisations, state management, and API integration.",
    deliverables: "Web app, dashboard, onboarding flow, AI chat UI",
    components: "React 19, TypeScript, Tailwind CSS v4, TanStack Query",
  },
  {
    id: "04",
    name: "Backend Development",
    effort: "14 days",
    description:
      "RESTful API, authentication system, database schema, background workers, admin panel, and all business logic.",
    deliverables: "NestJS API, PostgreSQL schema, admin panel, cron jobs",
    components: "NestJS, PostgreSQL, Redis, Docker",
  },
  {
    id: "05",
    name: "Gmail Integration",
    effort: "5 days",
    description:
      "OAuth 2.0 consent flow, Gmail API queries, token management, and secure credential storage.",
    deliverables: "OAuth flow, email scanning service, token store",
    components: "Google OAuth 2.0, Gmail API v1",
  },
  {
    id: "06",
    name: "Loyalty Data Processing",
    effort: "6 days",
    description:
      "AI pipeline for PDF extraction, data normalisation, UPSERT logic, and reward schema enforcement.",
    deliverables: "Extraction pipeline, normalised data layer, schemas",
    components: "Gemini API, Zod, PostgreSQL UPSERT",
  },
  {
    id: "07",
    name: "AI Assistant",
    effort: "4 days",
    description:
      "Conversational AI with RAG — pulls live user balances as context, streams responses, handles natural language queries.",
    deliverables: "Chat interface, RAG pipeline, streaming API",
    components: "OpenAI GPT-4, RAG, Server-Sent Events",
  },
  {
    id: "08",
    name: "QA & Deployment",
    effort: "4 days",
    description:
      "End-to-end testing, bug triage, Docker containerisation, CI/CD pipeline, and production deployment.",
    deliverables: "Test report, Docker images, deployed application",
    components: "Playwright, GitHub Actions, Docker, AWS EC2",
  },
];

function ScopeOfWorkPage() {
  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Scope of Work" />
      <SectionHeading label="Section 04" title="Detailed Scope of Work" />

      {modules.map((mod) => (
        <View key={mod.id} style={{ ...S.card, marginBottom: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: T.accentMid }}>
                {mod.id}
              </Text>
              <Text style={S.cardTitle}>{mod.name}</Text>
            </View>
            <View style={{ ...S.pill }}>
              <Text style={S.pillText}>{mod.effort}</Text>
            </View>
          </View>
          <Text style={{ ...S.bodySmall, marginBottom: 6 }}>{mod.description}</Text>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 7, color: T.inkFaint, letterSpacing: 0.5, marginBottom: 2 }}>DELIVERABLES</Text>
              <Text style={S.bodySmall}>{mod.deliverables}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 7, color: T.inkFaint, letterSpacing: 0.5, marginBottom: 2 }}>COMPONENTS</Text>
              <Text style={S.bodySmall}>{mod.components}</Text>
            </View>
          </View>
        </View>
      ))}

      <PageFooter label="Scope of Work" />
    </Page>
  );
}


const pricing = [
  { module: "Product Discovery", description: "Requirements, architecture, planning", cost: "₹35,000" },
  { module: "UI/UX Design", description: "Figma design system & all screens", cost: "₹30,000" },
  { module: "Frontend Development", description: "React application, 10+ screens", cost: "₹1,50,000" },
  { module: "Backend Development", description: "NestJS API, DB, workers, admin", cost: "₹1,75,000" },
  { module: "Gmail Integration", description: "OAuth 2.0 + Gmail API pipeline", cost: "₹75,000" },
  { module: "Loyalty Data Processing", description: "AI extraction + data normalisation", cost: "₹50,000" },
  { module: "AI Assistant", description: "RAG pipeline + conversational chat", cost: "₹40,000" },
  { module: "QA & Deployment", description: "Testing, CI/CD, production deploy", cost: "₹45,000" },
];

function CommercialPage() {
  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Commercial Breakdown" />
      <SectionHeading label="Section 05" title="Commercial Breakdown" />

      <Text style={{ ...S.body, marginBottom: 16 }}>
        The following table details the cost allocation across all eight modules. Each line item is independently deliverable and trackable against the project milestone schedule.
      </Text>

      {}
      <View style={S.tableHeader}>
        <Text style={{ ...S.tableHeaderText, flex: 2 }}>Module</Text>
        <Text style={{ ...S.tableHeaderText, flex: 3 }}>Description</Text>
        <Text style={{ ...S.tableHeaderText, flex: 1, textAlign: "right" }}>Investment</Text>
      </View>

      {pricing.map((row, i) => (
        <View key={row.module} style={{ ...S.tableRow, ...(i % 2 === 1 ? S.tableRowAlt : {}) }}>
          <Text style={{ ...S.tableCellBold, flex: 2 }}>{row.module}</Text>
          <Text style={{ ...S.tableCell, flex: 3 }}>{row.description}</Text>
          <Text style={{ ...S.tableCellBold, flex: 1, textAlign: "right" }}>{row.cost}</Text>
        </View>
      ))}

      {}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: T.accent,
          borderRadius: 3,
          marginTop: 4,
        }}
      >
        <Text style={{ ...S.tableHeaderText, flex: 2 }}>Total Investment</Text>
        <Text style={{ ...S.tableHeaderText, flex: 3 }}></Text>
        <Text style={{ ...S.tableHeaderText, flex: 1, textAlign: "right", fontSize: 11 }}>₹6,00,000</Text>
      </View>

      <View style={S.spacer16} />

      <View style={{ backgroundColor: T.accentLight, borderRadius: 4, padding: 14 }}>
        <Text style={{ fontSize: 8.5, fontFamily: "Helvetica-Bold", color: T.accent, marginBottom: 4 }}>
          Payment Schedule
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {[
            ["50%", "₹3,00,000", "On contract signing"],
            ["30%", "₹1,80,000", "Mid-project milestone"],
            ["20%", "₹1,20,000", "On final delivery"],
          ].map(([pct, amt, lbl]) => (
            <View key={lbl} style={{ flex: 1, backgroundColor: T.white, borderRadius: 4, padding: 10, alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontFamily: "Helvetica-Bold", color: T.accent }}>{pct}</Text>
              <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: T.ink, marginTop: 2 }}>{amt}</Text>
              <Text style={{ fontSize: 7, color: T.inkLight, textAlign: "center", marginTop: 3 }}>{lbl}</Text>
            </View>
          ))}
        </View>
      </View>

      <PageFooter label="Commercial Breakdown" />
    </Page>
  );
}


function CostJustificationPage() {
  const JustBlock = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <View style={{ marginBottom: 14 }}>
      <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: T.ink, marginBottom: 5 }}>
        {title}
      </Text>
      {items.map((item, i) => (
        <View key={i} style={{ flexDirection: "row", gap: 8, marginBottom: 3 }}>
          <Text style={{ fontSize: 8, color: T.accentMid }}>—</Text>
          <Text style={S.bodySmall}>{item}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Cost Justification" />
      <SectionHeading label="Section 06" title="Why This Investment" />

      <Text style={{ ...S.body, marginBottom: 18 }}>
        Each line item reflects real engineering hours against well-defined deliverables. The justifications below are provided specifically for technical reviewers — CTOs, engineering leads, and senior architects — who will scrutinise the rationale behind each allocation.
      </Text>

      <View style={{ flexDirection: "row", gap: 14 }}>
        <View style={{ flex: 1 }}>
          <JustBlock
            title="Frontend — ₹1,50,000"
            items={[
              "10+ responsive screens across onboarding, dashboard, and AI chat",
              "Custom chart components for points visualisation and expiry tracking",
              "TanStack Query integration with optimistic updates and cache invalidation",
              "Zustand store architecture for complex cross-component state",
              "Real-time streaming UI for the AI assistant (Server-Sent Events)",
              "Skeleton loading states, error boundaries, and accessibility compliance",
            ]}
          />
          <JustBlock
            title="Backend — ₹1,75,000"
            items={[
              "NestJS modular architecture with guards, interceptors, and pipes",
              "PostgreSQL schema with normalised reward data model and migrations",
              "Redis cache layer with TTL-based invalidation strategy",
              "Background worker service for asynchronous Gmail scanning",
              "Admin panel for operations team: manual upload and processing",
              "Comprehensive REST API with OpenAPI documentation",
            ]}
          />
        </View>
        <View style={{ flex: 1 }}>
          <JustBlock
            title="Gmail Integration — ₹75,000"
            items={[
              "Google OAuth 2.0 consent flow with readonly scope enforcement",
              "Secure token storage with AES-256 encryption in PostgreSQL",
              "Gmail API v1 query construction with targeted search operators",
              "Attachment extraction, MIME type handling, and PDF buffering",
              "Refresh token rotation and session management",
            ]}
          />
          <JustBlock
            title="AI Processing — ₹90,000"
            items={[
              "Gemini API integration with structured JSON function calling",
              "Custom reward schema design and Zod validation enforcement",
              "RAG pipeline: user balance retrieval + LLM context injection",
              "Streaming response delivery via Server-Sent Events",
              "Prompt engineering for reward categorisation accuracy",
              "Fallback and retry logic for API reliability",
            ]}
          />
        </View>
      </View>

      <PageFooter label="Cost Justification" />
    </Page>
  );
}


function TimelinePage() {
  const timeline = [
    { week: "Week 1", phase: "Discovery & Planning", detail: "Requirements finalisation, technical architecture sign-off, API contract design, and project kick-off." },
    { week: "Week 2", phase: "UI/UX Design", detail: "Figma design system creation, all screen designs, component specifications, and design review with stakeholders." },
    { week: "Weeks 3–4", phase: "Frontend Development", detail: "React application scaffolding, all screen implementation, dashboard components, state management, and component library." },
    { week: "Weeks 5–6", phase: "Backend Development", detail: "NestJS API, PostgreSQL schema, authentication, background workers, Redis integration, and admin panel." },
    { week: "Week 7", phase: "Integrations", detail: "Gmail OAuth flow, AI extraction pipeline, RAG pipeline, AI assistant streaming, and end-to-end data flow testing." },
    { week: "Week 8", phase: "QA & Deployment", detail: "Full regression testing, bug triage, Docker containerisation, CI/CD setup, and production deployment to AWS." },
  ];

  const deliverables = [
    "Functional web application (production URL)",
    "Admin panel for operations team",
    "Reward intelligence dashboard",
    "Conversational AI assistant",
    "Technical documentation",
    "Deployment & handover guide",
  ];

  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Timeline & Deliverables" />
      <SectionHeading label="Section 07" title="Timeline & Deliverables" />

      <Text style={{ ...S.body, marginBottom: 16 }}>
        The 8-week delivery plan is structured to front-load discovery and design decisions, minimising costly rework during development. Integration and AI work begins in Week 7 once the application shell is stable.
      </Text>

      {}
      {timeline.map((item) => (
        <View key={item.week} style={S.timelineRow}>
          <View style={S.timelineDot} />
          <Text style={S.timelineWeek}>{item.week}</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 8.5, fontFamily: "Helvetica-Bold", color: T.ink, marginBottom: 2 }}>
              {item.phase}
            </Text>
            <Text style={S.timelineBody}>{item.detail}</Text>
          </View>
        </View>
      ))}

      <View style={S.spacer16} />

      {}
      <View style={{ backgroundColor: "#F8FAFB", borderRadius: 4, padding: 14 }}>
        <Text style={{ ...S.cardTitle, marginBottom: 10 }}>Final Deliverables</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {deliverables.map((d) => (
            <View key={d} style={{ flexDirection: "row", alignItems: "center", gap: 6, width: "48%" }}>
              <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.accent }} />
              <Text style={{ fontSize: 8.5, color: T.inkMid }}>{d}</Text>
            </View>
          ))}
        </View>
      </View>

      <PageFooter label="Timeline & Deliverables" />
    </Page>
  );
}


function CommercialTermsPage() {
  return (
    <Page size="A4" style={S.page}>
      <PageHeader section="Commercial Terms" />
      <SectionHeading label="Section 08" title="Commercial Terms" />

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        {[
          {
            title: "Payment Terms",
            items: [
              "50% advance on contract signing — ₹3,00,000",
              "30% at mid-project milestone (post-backend completion) — ₹1,80,000",
              "20% on final delivery and deployment — ₹1,20,000",
            ],
          },
          {
            title: "Proposal Validity",
            items: [
              "This proposal is valid for 30 days from the date of issue.",
              "Pricing is subject to revision after the validity period.",
              "Scope changes post-signing require a separate change request.",
            ],
          },
        ].map((section) => (
          <View key={section.title} style={{ flex: 1, ...S.card }}>
            <Text style={S.cardTitle}>{section.title}</Text>
            {section.items.map((item, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 6, marginBottom: 5 }}>
                <Text style={{ fontSize: 8, color: T.accentMid, marginTop: 1 }}>•</Text>
                <Text style={S.bodySmall}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        {[
          {
            title: "Post-Delivery Support",
            items: [
              "30 days of bug support included at no additional charge.",
              "Covers defects in delivered functionality only.",
              "Excludes new features, scope changes, or third-party API issues.",
            ],
          },
          {
            title: "Change Requests",
            items: [
              "Any work outside the agreed scope will be handled as a separate engagement.",
              "Change requests will be quoted individually before execution.",
              "BRC HUB reserves the right to adjust timeline for approved changes.",
            ],
          },
        ].map((section) => (
          <View key={section.title} style={{ flex: 1, ...S.card }}>
            <Text style={S.cardTitle}>{section.title}</Text>
            {section.items.map((item, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 6, marginBottom: 5 }}>
                <Text style={{ fontSize: 8, color: T.accentMid, marginTop: 1 }}>•</Text>
                <Text style={S.bodySmall}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {}
      <View style={{ borderWidth: 0.5, borderColor: T.rule, borderRadius: 4, padding: 20, marginTop: 8 }}>
        <Text style={{ ...S.cardTitle, marginBottom: 16 }}>Acceptance & Sign-Off</Text>
        <View style={{ flexDirection: "row", gap: 40 }}>
          <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: T.ink, marginBottom: 6, height: 28 }} />
            <Text style={{ fontSize: 7.5, color: T.inkLight }}>Client Signature</Text>
            <Text style={{ fontSize: 7.5, color: T.inkLight }}>Danesh Chotia</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: T.ink, marginBottom: 6, height: 28 }} />
            <Text style={{ fontSize: 7.5, color: T.inkLight }}>Authorised Signatory</Text>
            <Text style={{ fontSize: 7.5, color: T.inkLight }}>BRC HUB LLP</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: T.ink, marginBottom: 6, height: 28 }} />
            <Text style={{ fontSize: 7.5, color: T.inkLight }}>Date</Text>
          </View>
        </View>
      </View>

      {}
      <View style={{ marginTop: 24, alignItems: "center" }}>
        <Text style={{ fontSize: 8, color: T.inkFaint, textAlign: "center" }}>
          BRC HUB LLP — Technology & Product Studio — Bengaluru, India
        </Text>
        <Text style={{ fontSize: 8, color: T.inkFaint, textAlign: "center", marginTop: 3 }}>
          © {new Date().getFullYear()} BRC HUB LLP. All rights reserved.
        </Text>
      </View>

      <PageFooter label="Commercial Terms" />
    </Page>
  );
}


function LoyaltyIQProposal() {
  return (
    <Document
      title="LoyaltyIQ — Technical Proposal"
      author="BRC HUB LLP"
      subject="Technical Proposal & Commercial Scope"
      creator="BRC HUB LLP"
    >
      <CoverPage />
      <ExecutiveSummaryPage />
      <ArchitecturePage />
      <TechStackPage />
      <ScopeOfWorkPage />
      <CommercialPage />
      <CostJustificationPage />
      <TimelinePage />
      <CommercialTermsPage />
    </Document>
  );
}




export function DownloadProposalButton() {
  return (
    <PDFDownloadLink
      document={<LoyaltyIQProposal />}
      fileName={`LoyaltyIQ_Proposal_BRC_HUB_${new Date().toISOString().slice(0, 10)}.pdf`}
    >
      {({ loading, error }) => (
        <button
          disabled={loading}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            background: loading ? "#6B7280" : "#1A3C6E",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.15s",
          }}
        >
          {loading ? "Generating PDF..." : error ? "Error — retry" : "↓ Download Technical Proposal"}
        </button>
      )}
    </PDFDownloadLink>
  );
}

export default LoyaltyIQProposal;
