import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Globe, 
  Mail, 
  LayoutDashboard, 
  Bot, 
  XCircle, 
  AlertCircle,
  Info
} from 'lucide-react';

// Updated data structure to support optional tooltips on specific items
type DeliverableItem = string | { text: string; tooltip: string };

const inScopeItems: { title: string; icon: any; color: string; bgColor: string; borderColor: string; items: DeliverableItem[] }[] = [
  {
    title: "Interactive Web Application",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    items: [
      "Fully Functional React + Vite Application.",
      "Rendered in a pixel-perfect phone frame in the browser.",
      {
        text: "Demo Payment Gateway Integration.",
        tooltip: "A simulated checkout flow (Test Mode) allowing investors to experience the 'premium upgrade' path using test credit cards."
      },
      "Accessible instantly via URL for investor pitches."
    ]
  },
  {
    title: "Gmail Data Extraction Engine",
    icon: Mail,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    items: [
      "Secure Google OAuth 2.0 Integration (Read-Only).",
      "90-day lookback window for historical statements.",
      "Automated PDF & SMS extraction via Python."
    ]
  },
  {
    title: "Core User Interfaces",
    icon: LayoutDashboard,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    items: [
      "Polished Onboarding Flow (Under 60s interaction).",
      "Loyalty Dashboard (INR wealth, expiry alerts, bill due chips).",
      {
        text: "Dynamic Card Recommendation View.",
        tooltip: "The AI actively analyzes flight/hotel rates and compares them against the user's available backend reward data to dynamically recommend the best card to use."
      }
    ]
  },
  {
    title: "AI Chat Box Integration",
    icon: Bot,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-100",
    items: [
      "Natural language assistant for loyalty queries.",
      "Context-aware responses based on extracted Gmail data.",
      "Strict data normalization via OpenAI/Gemini."
    ]
  }
];

const outOfScopeItems = [
  "Native Android & iOS Apps (App Store / Play Store listing).",
  "Live Portal Scrapers (Direct logins to bank/airline portals).",
  "Full reward optimizer with transaction-level analysis.",
  "Live, production payment processing for real transactions.",
  "Production-scale backend infrastructure for mass public use."
];

export function Deliverables() {
  return (
    <section className="space-y-12 mt-20" id="deliverables">
      
      <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Scope & Deliverables</h2>
          <p className="text-slate-600 mt-3 text-lg leading-relaxed">
            A clear breakdown of exactly what is included in the ₹6,00,000 Investor Prototype. We have strategically scoped this to maximize boardroom impact while aggressively reducing your initial cost.
          </p>
        </div>
      </div>

      {/* Strategic Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 flex gap-4">
          <div className="shrink-0 mt-1">
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Web App, Not Native</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Per client request to reduce cost and accelerate delivery, this is a responsive Web Application. It does <strong>not</strong> include native iOS/Android builds for the Play Store. Investors simply click a URL to view the live app on their phones.
            </p>
          </div>
        </div>

        <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 flex gap-4">
          <div className="shrink-0 mt-1">
            <Mail className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Gmail Parsing Architecture</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              As established from the project's inception, we are relying exclusively on secure Gmail parsing (statements & emails) to populate the dashboard. Live, direct scrapers for individual bank and airline portals are excluded from this prototype phase.
            </p>
          </div>
        </div>
      </div>

      {/* In-Scope Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inScopeItems.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3.5 rounded-2xl border ${group.bgColor} ${group.borderColor}`}>
                  <Icon className={`w-6 h-6 ${group.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
              </div>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${group.color}`} />
                    
                    {typeof item === 'string' ? (
                      <span className="text-slate-700 text-sm leading-relaxed font-medium">{item}</span>
                    ) : (
                      <div className="relative group flex items-center gap-1.5 cursor-help">
                        <span className="text-slate-700 text-sm leading-relaxed font-medium border-b border-dashed border-slate-300">
                          {item.text}
                        </span>
                        <Info className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                        
                        {/* Tooltip Hover Box */}
                        <div className="absolute bottom-full left-0 md:left-1/2 md:-translate-x-1/2 mb-3 w-64 p-3 bg-slate-900 text-white text-xs leading-relaxed rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl pointer-events-none">
                          {item.tooltip}
                          <div className="absolute -bottom-1 left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45" />
                        </div>
                      </div>
                    )}

                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Explicitly Out of Scope */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-slate-500" />
          <h3 className="text-xl font-bold text-slate-900">Intentionally Excluded from Prototype</h3>
        </div>
        <p className="text-sm text-slate-600 mb-6 max-w-3xl">
          The following features will be built in the Phase 1 MVP post-funding, but are explicitly removed from this initial 6-week build to protect your budget and timeline.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {outOfScopeItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <span className="text-slate-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}