import { motion } from 'framer-motion';
import { Download, Calendar, IndianRupee, Clock } from 'lucide-react';
import { proposalData } from '../../data/proposalData';
import { pdf } from "@react-pdf/renderer";
import ProposalPDF from "../../Proposalpdf";

const handleDownloadProposal = async () => {
  try {
    const blob = await pdf(<ProposalPDF />).toBlob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "LoyaltyIQ-Technical-Proposal.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
};

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-200 bg-white">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70"></div>
      
      {/* UPDATE THIS LINE BELOW: Changed max-w-5xl to max-w-7xl and added md:px-12 */}
    <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 z-10">
        
        
        {/* NEW: Official Branding Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-16 pb-6 border-b border-slate-100 gap-6"
        >
          {/* Prepared By Section */}
          <div className="flex items-center gap-4">
            {/* Ensure your logo.png is placed in the public/ folder */}
            <img src="/logo.png" alt="BRC HUB LLP Logo" className="h-10 w-auto object-contain" />
            <div className="hidden sm:block border-l border-slate-200 pl-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prepared By</div>
              <div className="text-sm font-bold text-slate-900">BRC HUB LLP</div>
            </div>
          </div>
          
          {/* Prepared For Section */}
          <div className="sm:text-right">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prepared For</div>
            <div className="text-sm font-bold text-slate-900">Mr. {proposalData.clientName}</div>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-800">
            Technical Proposal & Scope Document
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            {proposalData.projectName}
          </h1>
          
          <div className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            A comprehensive engineering roadmap and commercial breakdown for the <span className="font-semibold text-slate-900">{proposalData.purpose}</span>.
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Investment Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500 mb-2">
              <IndianRupee className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">Estimated Investment</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">
              ₹{proposalData.totalCost.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Duration Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500 mb-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">Estimated Duration</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {proposalData.estimatedDuration}
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-center">
            <button
  onClick={handleDownloadProposal}
  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
>
              <Download className="w-4 h-4" />
              Download Technical Proposal
            </button>
            <div className="text-center mt-3 text-xs text-slate-400 flex items-center justify-center gap-1">
              <Calendar className="w-3 h-3" />
              Last updated: {proposalData.lastUpdated}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}