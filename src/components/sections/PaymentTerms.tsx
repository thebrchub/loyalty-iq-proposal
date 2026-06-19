import { motion } from 'framer-motion';
import { CreditCard, Server, Cpu, Wrench } from 'lucide-react';
import { proposalData } from '../../data/proposalData';

export function PaymentTerms() {
  return (
    <section className="space-y-16" id="payment-terms">
      
      {}
      <div>
        <div className="border-b border-slate-200 pb-6 mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Payment Milestones</h2>
          <p className="text-slate-500 mt-2">Transparent, delivery-based payment schedule tied directly to project progress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {proposalData.paymentMilestones?.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mt-2">
                  {milestone.phase}
                </div>
                
                {}
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                    {}
                    <path 
                      className="text-slate-100" 
                      strokeWidth="3.5" 
                      stroke="currentColor" 
                      fill="none" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                    />
                    {}
                    <path 
                      className="text-indigo-500 transition-all duration-1000 ease-out" 
                      strokeDasharray={`${milestone.percentage}, 100`} 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                      stroke="currentColor" 
                      fill="none" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                    />
                  </svg>
                  <span className="absolute text-[11px] font-bold text-slate-700">
                    {milestone.percentage}%
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  ₹{milestone.amount.toLocaleString('en-IN')}
                </div>
              </div>
              
              <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-inner relative overflow-hidden">
        {}
        <div className="absolute -top-24 -right-24 opacity-[0.03] pointer-events-none rotate-12">
          <CreditCard className="w-96 h-96 text-slate-900" />
        </div>

        <div className="relative z-10">
          <div className="mb-10 max-w-2xl">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-3">
              Operational & Infrastructure Costs
            </h3>
            <p className="text-slate-500 text-base leading-relaxed">
              Clear definitions of ongoing responsibilities and external billing requirements outside the core prototype development fee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {}
            <div className="bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-shadow p-8 rounded-3xl group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Monthly Maintenance</h4>
                  <div className="text-emerald-600 font-bold text-sm tracking-wide">₹21,000 / month</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers ongoing engineering oversight, active server monitoring, and critical data pipeline upkeep during the prototype testing period.
              </p>
            </div>

            {}
            <div className="bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow p-8 rounded-3xl group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-amber-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Cloud Infrastructure</h4>
                  <div className="text-amber-600 font-bold text-sm tracking-wide uppercase">Client Account</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                AWS/VPS compute costs for running the Node.js APIs, PostgreSQL databases, and Python microservices will be borne directly via the client's cloud account.
              </p>
            </div>

            {}
            <div className="bg-white border border-rose-100 shadow-sm hover:shadow-md transition-shadow p-8 rounded-3xl group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-rose-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">AI API Tokens</h4>
                  <div className="text-rose-600 font-bold text-sm tracking-wide uppercase">Client Account</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                All OpenAI/Gemini API calls required for the Natural Language Assistant and Python PDF extraction will run through the client's own API keys and billing.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}