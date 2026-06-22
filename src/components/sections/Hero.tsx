import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Calendar, IndianRupee, Clock, Eye, X } from 'lucide-react';
import { proposalData } from '../../data/proposalData';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ProposalPDF } from '../pdf/Proposalpdf';

export function Hero() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <section className="relative pt-8 pb-12 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70"></div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-5 lg:mb-6 pb-6 border-b border-slate-100 gap-6"
          >
            <div className="flex items-center gap-4">
  <a href="https://www.brchub.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
    <img src="/logo.png" alt="BRC HUB LLP Logo" className="h-10 w-auto object-contain" />
    <div className="hidden sm:block border-l border-slate-200 pl-4">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prepared By</div>
      <div className="text-sm font-bold text-slate-900">BRC HUB LLP</div>
    </div>
  </a>
</div>
            
            <div className="sm:text-right">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prepared For</div>
              <div className="text-sm font-bold text-slate-900">Mr. {proposalData.clientName}</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            
            <div className="flex flex-col gap-10">
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
                
                <div className="text-xl text-slate-600 max-w-xl leading-relaxed">
                  A comprehensive engineering roadmap and commercial breakdown for the <span className="font-semibold text-slate-900">{proposalData.purpose}</span>.
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-1.5">
                    <IndianRupee className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium">Estimated Investment</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    ₹{proposalData.totalCost.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-1.5">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium">Estimated Duration</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {proposalData.estimatedDuration}
                  </div>
                </div>

                <div className="sm:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <button
                      onClick={() => setShowPreview(true)}
                      className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>

                    <PDFDownloadLink 
                      document={<ProposalPDF />} 
                      fileName={`${proposalData.projectName}_Technical_Proposal.pdf`}
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                      {({ loading }) => (
                        <>
                          <Download className="w-4 h-4" />
                          {loading ? 'Wait...' : 'Download'}
                        </>
                      )}
                    </PDFDownloadLink>
                  </div>
                  <div className="text-center mt-4 text-xs text-slate-400 flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Last updated: {proposalData.lastUpdated}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto flex flex-col items-end"
            >
              <img 
                src="/hero.png" 
                alt="Platform Dashboard Interface" 
                className="w-full h-auto object-contain"
              />
              <div className="text-[10px] text-slate-400 mt-2 italic font-medium pr-2">
                * Mockup generated with AI
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {showPreview && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-6xl h-full flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-lg">Official Quotation Preview</h3>
                <button 
                  onClick={() => setShowPreview(false)} 
                  className="p-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
              <div className="flex-grow">
                <PDFViewer width="100%" height="100%" className="border-none">
                  <ProposalPDF />
                </PDFViewer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}