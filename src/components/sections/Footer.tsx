export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-32 border-t border-slate-200 bg-white py-12">
      {}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-slate-900 text-lg">BRC HUB LLP</h4>
          <p className="text-slate-500 text-sm mt-1">Confidential Technical Proposal • All rights reserved.</p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          title="Back to top"
        >
          {}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}