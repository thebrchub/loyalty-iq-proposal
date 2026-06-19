import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Server, Layout, Database, Mail, ShieldCheck, PenTool, Terminal, AlertTriangle, Layers } from 'lucide-react';
import { proposalData } from '../../data/proposalData';

const complexityConfig = {
  Low: "bg-blue-50 text-blue-700 border-blue-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  High: "bg-rose-50 text-rose-700 border-rose-200"
};

const getModuleIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('design') || t.includes('ui')) return <PenTool className="w-5 h-5" />;
  if (t.includes('frontend')) return <Layout className="w-5 h-5" />;
  if (t.includes('backend')) return <Server className="w-5 h-5" />;
  if (t.includes('gmail') || t.includes('data')) return <Database className="w-5 h-5" />;
  if (t.includes('qa')) return <ShieldCheck className="w-5 h-5" />;
  if (t.includes('planning')) return <Layers className="w-5 h-5" />;
  return <Mail className="w-5 h-5" />;
};

export function CostBreakdown() {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const toggleModule = (id: string) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section className="space-y-8" id="cost-breakdown">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Commercial Breakdown & Scope</h2>
          <p className="text-slate-500 mt-2">Transparent pricing justified by deep technical deliverables.</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Estimated Total</div>
          <div className="text-4xl font-extrabold text-emerald-600">₹{proposalData.totalCost.toLocaleString('en-IN')}</div>
          <div className="mt-2 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium">
            <PenTool className="w-4 h-4" />
            <span>₹5,70,000 if client provides UI/UX designs</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {proposalData.modules.map((module, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={module.id} 
            className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {}
            <button 
              onClick={() => toggleModule(module.id)}
              className="w-full text-left px-6 py-5 flex flex-col md:flex-row md:items-center justify-between bg-white hover:bg-slate-50 transition-colors gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg shrink-0">
                  {getModuleIcon(module.title)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{module.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 pl-14 md:pl-0">
                <span className={`hidden lg:block px-3 py-1 rounded-full text-xs font-semibold border ${complexityConfig[module.complexity as keyof typeof complexityConfig]}`}>
                  {module.complexity} Complexity
                </span>
                <span className="text-xl font-bold text-slate-900">
                  ₹{module.cost.toLocaleString('en-IN')}
                </span>
                <motion.div animate={{ rotate: openModule === module.id ? 180 : 0 }}>
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </div>
            </button>

            {}
            <AnimatePresence>
              {openModule === module.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="border-t border-slate-100 bg-slate-50/50"
                >
                  <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Engineering Deliverables
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {module.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                        <Terminal className="w-4 h-4 text-slate-600" />
                        Technology & Architecture
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.technicalNotes.map((note, i) => (
                          <span key={i} className="px-2.5 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs rounded-md font-medium shadow-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {}
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                      
                      <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-900 uppercase tracking-wider mb-4">
                        <AlertTriangle className="w-4 h-4 text-indigo-600" />
                        Why this requires expert engineering
                      </h4>
                      
                      <div className="space-y-4">
                        {module.whyThisCost.map((reason, i) => (
                          <p key={i} className="text-sm text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-100">
                            {reason}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Module Value Allocation</span>
                        <span className="font-bold text-indigo-700">₹{module.cost.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}