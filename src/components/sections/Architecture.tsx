import { User, Mail, Server, Database, LayoutDashboard, Bot, ArrowRight, ArrowDown, Users, Upload, FileText, CheckCircle2 } from 'lucide-react';

// Reusable node component for the flowcharts
const FlowNode = ({ icon: Icon, title, subtitle, color = "indigo" }: { icon: any, title: string, subtitle?: string, color?: "indigo" | "emerald" | "slate" }) => {
  const colorMap = {
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    slate: "bg-slate-50 border-slate-200 text-slate-700"
  };

  return (
    <div className={`relative flex flex-col items-center justify-center p-4 min-w-[140px] text-center rounded-xl border-2 ${colorMap[color]} shadow-sm bg-white z-10`}>
      <Icon className="w-6 h-6 mb-2 opacity-80" />
      <span className="font-semibold text-sm whitespace-nowrap text-slate-900">{title}</span>
      {subtitle && <span className="text-xs text-slate-500 mt-1">{subtitle}</span>}
    </div>
  );
};

export function Architecture() {
  return (
    <section className="space-y-12" id="architecture">
      <div className="border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">System Architecture</h2>
        <p className="text-slate-500 mt-2">High-level data flow and processing pipelines for the MVP.</p>
      </div>

      {/* Primary Flow */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-8">Primary User Workflow</h3>
        
        {/* Visual Flowchart - Left untouched to preserve alignment */}
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between min-w-[800px] gap-4">
            <FlowNode icon={User} title="User" color="slate" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Mail} title="Gmail OAuth" color="indigo" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Server} title="Backend Services" subtitle="Node.js" color="slate" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Database} title="Database" subtitle="PostgreSQL" color="emerald" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={LayoutDashboard} title="Dashboard" color="indigo" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Bot} title="AI Assistant" color="indigo" />
          </div>
        </div>

        {/* NEW: CTO-Level Technical Details Grid */}
        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Auth & Ingestion
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>How:</strong> Google OAuth 2.0 utilizing strict <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-pink-600">gmail.readonly</code> scopes. Data is synced via background cron jobs.<br/><br/>
              <strong>Why:</strong> Ensures compliance and zero-trust security. We never store user email passwords, only short-lived access tokens.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Processing Layer
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>How:</strong> Node.js event-driven architecture handling asynchronous API calls to parsing engines.<br/><br/>
              <strong>Why:</strong> Node's non-blocking I/O is perfectly suited for handling multiple concurrent external network requests (Gmail API + OpenAI/Gemini) without bottlenecking the server.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Data Persistence
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>How:</strong> Relational PostgreSQL database mapping Users to dynamic Reward Entities.<br/><br/>
              {/* FIXED LINE BELOW */}
              <strong>Why:</strong> Loyalty programs are highly structured but relational (User &rarr; Airline &rarr; Points &rarr; Expiry). NoSQL would lead to data fragmentation; Postgres ensures ACID compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Flow */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Operations Data Pipeline</h3>
        <p className="text-sm text-slate-500 mb-8">Monthly batch processing architecture for unstructured reward statements.</p>
        
        {/* Visual Flowchart - Left untouched */}
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between min-w-[800px] gap-4">
            <FlowNode icon={Users} title="Ops Team" color="slate" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={FileText} title="Raw Statements" subtitle="PDF / CSV" color="slate" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Upload} title="Admin Portal" subtitle="Multipart Upload" color="indigo" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Bot} title="AI Extraction" subtitle="LLM Schema Mapping" color="indigo" />
            <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
            <ArrowDown className="w-5 h-5 text-slate-300 md:hidden" />
            
            <FlowNode icon={Database} title="Normalized Data" subtitle="DB Upsert" color="emerald" />
          </div>
        </div>

        {/* NEW: CTO-Level Technical Details Grid */}
        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              AI Extraction & Structuring
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>How:</strong> Utilizing LLMs (Gemini/OpenAI) with strict JSON Schema Function Calling to parse varied PDF statement layouts into a predictable `Reward` object.<br/><br/>
              <strong>Why:</strong> Traditional OCR and regex scrapers break the moment an airline changes their PDF font or layout. LLMs contextualize the document, creating a resilient, self-healing extraction pipeline.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Idempotent Database Updates
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>How:</strong> Processed statements utilize SQL `UPSERT` (Insert on Conflict Update) logic based on statement dates and user IDs.<br/><br/>
              <strong>Why:</strong> Prevents duplicate points from being credited if an operations team member accidentally uploads the same monthly statement twice, ensuring dashboard accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}