import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, ServerCog, CheckCircle2, 
  Mail, Key, Search, FileText, Database, 
  LayoutDashboard, BrainCircuit, Sparkles,
  BarChart3, CreditCard, Plane, Minimize2, Maximize2
} from 'lucide-react';

// The 8-Step Journey (Updated with Python microservices)
const journeySteps = [
  {
    id: "step-1",
    icon: Mail,
    title: "Connect Gmail",
    userView: "The user clicks 'Connect Gmail' on the onboarding screen. They are seamlessly redirected to Google's official, secure consent portal.",
    systemView: "Our Node.js API gateway initiates a secure OAuth 2.0 flow. We construct the authorization URL requesting strictly 'gmail.readonly' access scopes."
  },
  {
    id: "step-2",
    icon: Key,
    title: "Permission Approval",
    userView: "The user reviews the requested permissions, approves access, and is instantly redirected back to the platform.",
    systemView: "Node.js receives the Google auth code, securely exchanges it for a short-lived access token, and encrypts it at rest in PostgreSQL."
  },
  {
    id: "step-3",
    icon: Search,
    title: "Email Discovery",
    userView: "A sleek scanning animation appears with a progress indicator, letting the user know their historical statements are being located.",
    systemView: "A dedicated Python worker script connects to the Gmail API using highly targeted search operators (e.g., 'subject:statement has:attachment') to isolate reward emails."
  },
  {
    id: "step-4",
    icon: FileText,
    title: "Reward Extraction",
    userView: "A live feed displays recognized brands as they are found (e.g., 'HDFC Statement Found', 'Emirates Skywards Detected').",
    systemView: "A Python-based scraping engine buffers the encrypted PDFs and emails directly into secure memory. PII is immediately stripped before parsing."
  },
  {
    id: "step-5",
    icon: Database,
    title: "Data Normalization",
    userView: "The user sees a 'Processing Data...' status as their fragmented statements are converted into readable loyalty points.",
    systemView: "Python orchestration scripts pass the sanitized text to the LLM. Using strict JSON Schema Function Calling, it normalizes unstructured text into standardized JSON payloads."
  },
  {
    id: "step-6",
    icon: LayoutDashboard,
    title: "Dashboard Generation",
    userView: "The UI flashes, and the dashboard instantly populates with beautiful charts showing total points, values, and brand categories.",
    systemView: "The Python service UPSERTs the structured data into PostgreSQL. The React application fetches the metrics via a RESTful API, cached by Redis for instant load times."
  },
  {
    id: "step-7",
    icon: BrainCircuit,
    title: "AI Analysis",
    userView: "Personalized alerts slide into view (e.g., 'Warning: 5,000 Amex points expiring in 14 days').",
    systemView: "An asynchronous Python job runs predictive models against the extracted expiry dates and historical earning velocity, flagging critical user actions."
  },
  {
    id: "step-8",
    icon: Sparkles,
    title: "Recommendations Ready",
    userView: "Full access is granted. The user can now open the AI Chat and ask, 'Do I have enough points for a flight to Tokyo?'",
    systemView: "The context-aware RAG (Retrieval-Augmented Generation) pipeline is primed. Python vectors the database entries, making them ready to accept natural language queries."
  }
];

export function UserJourney() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Smart Persistence: Load saved preference on mount
  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem('brc_journey_collapsed');
    if (savedState === 'true') {
      setIsCollapsed(true);
    }
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const newState = !prev;
      localStorage.setItem('brc_journey_collapsed', String(newState));
      return newState;
    });
  };

  // Prevent hydration mismatches by not rendering the conditional parts until mounted
  if (!isMounted) return null;

  return (
    <section className="space-y-8" id="user-journey">
      {/* Header Area with dynamic Toggle Button */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">System Journey Map</h2>
          <p className="text-slate-500 mt-3 text-lg">Scroll to follow the data flow from the user's screen down to the database.</p>
        </div>
        
        <div className="flex shrink-0">
          {isCollapsed ? (
            <button
              onClick={toggleCollapse}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-xl transition-colors border border-indigo-200 shadow-sm whitespace-nowrap"
            >
              <Maximize2 className="w-4 h-4" />
              Expand Journey Map
            </button>
          ) : (
            <button
              onClick={toggleCollapse}
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-600 font-semibold rounded-xl transition-colors border border-slate-200 shadow-sm whitespace-nowrap"
            >
              <Minimize2 className="w-4 h-4" />
              Collapse Map
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-slate-50 rounded-3xl shadow-inner border border-slate-200 relative pt-16 pb-24">
              
              {/* Vertical Timeline Container */}
              <div className="relative px-6 md:px-12 max-w-6xl mx-auto">
                <div className="absolute top-[28px] bottom-[28px] left-[52px] md:left-1/2 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full" />
                
                <div className="space-y-16">
                  {journeySteps.map((step) => {
                    const StepIcon = step.icon;

                    return (
                      <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group"
                      >
                        {/* The Central Node */}
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 top-0 md:top-auto">
                          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center border-4 border-slate-50 shadow-lg shadow-indigo-500/30">
                            <StepIcon className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Left Card: Frontend */}
                        <div className="w-full md:w-[45%] pl-20 md:pl-0 pt-2 md:pt-0 mb-6 md:mb-0">
                          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
                            <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-slate-200 translate-x-full" />
                            
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                <Smartphone className="w-5 h-5" />
                              </div>
                            </div>
                            <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">The User Sees</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {step.userView}
                            </p>
                          </div>
                        </div>

                        {/* Right Card: Backend */}
                        <div className="w-full md:w-[45%] pl-20 md:pl-0">
                          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg relative flex flex-col h-full">
                            <div className="hidden md:block absolute top-1/2 left-0 w-8 h-0.5 bg-slate-200 -translate-x-full" />

                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-bold text-white text-lg">System Process</h3>
                              <div className="p-2 bg-slate-800 text-emerald-400 border border-slate-700 rounded-lg">
                                <ServerCog className="w-5 h-5" />
                              </div>
                            </div>
                            <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">The System Does</h4>
                            <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                              {step.systemView}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* FINAL SUCCESS STATE */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center w-full pt-12"
                  >
                    <div className="w-full bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row gap-10 items-center shadow-xl z-20">
                      <div className="w-full md:w-1/2 space-y-6">
                        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 text-emerald-600 rounded-2xl mb-2">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-slate-900">Platform Synchronized</h3>
                        <p className="text-slate-600">The entire architecture flow has successfully resolved. Data is secure, extracted by the Python microservices, and visually rendered.</p>
                      </div>

                      <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                          <div className="font-bold text-slate-900">User Overview</div>
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                          </div>
                        </div>
                        <div className="flex gap-4 mb-4">
                          <div className="flex-1 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                            <BarChart3 className="w-5 h-5 text-indigo-500 mb-2" />
                            <div className="text-xl font-bold text-slate-900">142k</div>
                          </div>
                          <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                            <Plane className="w-5 h-5 text-emerald-500 mb-2" />
                            <div className="text-xl font-bold text-slate-900">2</div>
                          </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-slate-500" />
                            <div className="text-sm font-bold text-slate-900">Amex Platinum</div>
                          </div>
                          <div className="font-bold text-slate-900 text-sm">85,000 pts</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}