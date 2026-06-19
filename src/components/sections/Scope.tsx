import { Shield, Code2, PaintBucket, AlertCircle } from 'lucide-react';

export function Scope() {
  return (
    <section className="space-y-8" id="scope">
      <div className="border-b border-slate-200 pb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Engineering Standards</h2>
          <p className="text-slate-500 mt-2">The execution methodology separating enterprise software from fragile prototypes.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl shadow-indigo-900/5 border border-slate-200 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
          <Shield className="w-64 h-64" />
        </div>

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-indigo-600" />
            The BRC HUB LLP Execution Standard
          </h3>
          <p className="text-slate-600 mb-8 text-sm leading-relaxed">
            Building a prototype for investors requires more than just functional code. It requires security, scalability, and an interface that builds immediate trust. We do not build fragile scripts; we build enterprise-grade foundations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
              <PaintBucket className="w-5 h-5 text-indigo-600 mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Systems over Screens</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We don't just draw mockups. We engineer a complete React design system. This ensures that when the product scales post-funding, new features can be added in days, not weeks, without UI fragmentation.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-emerald-100 transition-colors">
              <Code2 className="w-5 h-5 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Production Architecture</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI-generated scripts cannot handle strict Gmail OAuth quotas, rate-limiting, or database race conditions. We implement strict, fault-tolerant Node.js backends designed to handle real-world edge cases.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-amber-100 transition-colors">
              <AlertCircle className="w-5 h-5 text-amber-600 mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Investor-Grade Reliability</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A prototype crashing during a pitch costs millions in lost funding. Our QA pipeline, unit testing, and Docker containerization guarantee that the platform performs flawlessly under pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}