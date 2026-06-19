import {  Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ProposalPDF } from '../pdf/Proposalpdf';
import { proposalData } from '../../data/proposalData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-32 border-t border-slate-200 bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-slate-900 text-lg">BRC Studios LLP</h4>
          <p className="text-slate-500 text-sm mt-1">Confidential Technical Proposal • All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <PDFDownloadLink 
            document={<ProposalPDF />} 
            fileName={`${proposalData.projectName}_Technical_Proposal.pdf`}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors text-sm shadow-sm"
          >
            {({ loading }) => (
              <>
                <Download className="w-4 h-4" />
                {loading ? 'Generating PDF...' : 'Download Official PDF'}
              </>
            )}
          </PDFDownloadLink>

          <button 
            onClick={scrollToTop}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            title="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}