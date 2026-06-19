import { motion } from 'framer-motion';
import { CalendarClock, CheckCircle2, ShieldAlert } from 'lucide-react';
import { proposalData } from '../../data/proposalData';

export function Timeline() {
  return (
    <section className="space-y-8" id="timeline">
      <div className="border-b border-slate-200 pb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Project Roadmap</h2>
          <p className="text-slate-500 mt-2">Accelerated 6-week execution plan + 2-week buffer.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-medium border border-emerald-100 shadow-sm">
          <CalendarClock className="w-5 h-5" />
          {proposalData.estimatedDuration} Delivery
        </div>
      </div>

      <div className="relative">
        {}
        <div className="absolute top-2 bottom-0 left-[13px] w-0.5 bg-slate-200" />

        <div className="space-y-8">
          {proposalData.timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-12"
            >
              {}
              <div className="absolute left-0 top-1.5 w-7 h-7 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center z-10 shadow-sm">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2 block">
                  {item.week}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}

          {}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: proposalData.timeline.length * 0.15 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 top-1.5 w-7 h-7 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center z-10 shadow-sm">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
            </div>

            <div className="bg-amber-50/40 p-6 rounded-xl border border-amber-200 shadow-sm">
              <span className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-2 block">
                Week 7-8 (Buffer)
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategic Contingency & Approvals</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A strict 2-week buffer reserved exclusively for unforeseen external blockers. This accounts for:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  Google OAuth strict scope verification and compliance delays.
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  Unexpected structural changes in third-party airline/bank portals requiring AI parser recalibration.
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  Extended edge-case debugging during live data ingestion testing.
                </li>
              </ul>
            </div>
          </motion.div>
          
          {}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative pl-12 pt-4"
          >
            <div className="absolute left-0 top-5 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center z-10 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <div className="text-lg font-bold text-slate-900">Investor Prototype Ready</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}