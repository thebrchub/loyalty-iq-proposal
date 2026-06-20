import { motion } from 'framer-motion';
import { Target, Plane, Building2, CreditCard, Cpu, ShieldCheck, Zap, Database, Lock, BrainCircuit } from 'lucide-react';
import { proposalData } from '../../data/proposalData';

export function ExecutiveSummary() {
  return (
    <section className="space-y-10" id="executive-summary">
      <div className="border-b border-slate-200 pb-8">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Executive Summary</h2>
        <p className="text-slate-500 mt-3 text-lg">Core platform objectives, value proposition, and engineering strategy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl relative h-full flex flex-col">
            
            <div className="relative z-10 flex-grow">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Platform Overview</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {proposalData.projectName} helps users track, understand, and optimize loyalty rewards by combining <span className="text-indigo-600 font-semibold">scheduled portal synchronization</span>, <span className="text-rose-600 font-semibold">Gmail & PDF extraction</span>, data normalization, and <span className="text-sky-600 font-semibold">AI-powered insights</span> into a single unified dashboard.
              </p>

              <div className="space-y-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Supported Data Domains</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                    <CreditCard className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-bold text-slate-700">Banks</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                    <Plane className="w-5 h-5 text-sky-500" />
                    <span className="text-sm font-bold text-slate-700">Airlines</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                    <Building2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-bold text-slate-700">Hotels</span>
                  </div>
                </div>
              </div>

              {}
              <div className="mt-12 pt-10 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">System Capabilities</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 bg-indigo-50 rounded-xl shrink-0 border border-indigo-100">
                      <Database className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h5 className="text-slate-900 font-bold mb-1">Automated Normalization</h5>
                      <p className="text-sm text-slate-500 leading-relaxed">Converts fragmented web data and statements into a unified JSON schema.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 bg-emerald-50 rounded-xl shrink-0 border border-emerald-100">
                      <Lock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h5 className="text-slate-900 font-bold mb-1">Zero-Trust Processing</h5>
                      <p className="text-sm text-slate-500 leading-relaxed">Read-only API access ensures user credentials and sensitive emails remain secure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 bg-sky-50 rounded-xl shrink-0 border border-sky-100">
                      <BrainCircuit className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h5 className="text-slate-900 font-bold mb-1">Predictive Intelligence</h5>
                      <p className="text-sm text-slate-500 leading-relaxed">AI continually parses extracted data to forecast point expirations and analyze rates.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
          
          {}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-emerald-600" />
              Strategic Objectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {proposalData.objectives.map((obj, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group flex flex-col"
                >
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {obj.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {obj.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Core Engineering Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <Cpu className="w-7 h-7 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-lg">Scalable Architecture</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Built on a robust Node.js & React 19 stack, ensuring the codebase transitions cleanly to massive production scale.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Zap className="w-7 h-7 text-amber-500" />
                <h4 className="font-bold text-slate-900 text-lg">AI-Native Pipeline</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leverages strict API function calling to guarantee unstructured data from web screens and PDFs is parsed accurately.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
                <h4 className="font-bold text-slate-900 text-lg">Bank-Grade Security</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Strict OAuth 2.0 implementation for Gmail synchronization, paired with encrypted at-rest database storage.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}