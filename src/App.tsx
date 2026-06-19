import { Hero } from './components/sections/Hero';
import { ExecutiveSummary } from './components/sections/ExecutiveSummary';
import { Architecture } from './components/sections/Architecture';
import { UserJourney } from './components/sections/UserJourney'; // <-- Import here
import { TechStack } from './components/sections/TechStack';
import { Scope } from './components/sections/Scope';
import { CostBreakdown } from './components/sections/CostBreakdown';
import { Timeline } from './components/sections/Timeline';
import { Deliverables } from './components/sections/Deliverables';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { PaymentTerms } from './components/sections/PaymentTerms';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Hero />
      
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 space-y-32">
        <ExecutiveSummary />
        <Architecture />
        <UserJourney /> {/* <-- Add it right here */}
        <TechStack />
        <Scope />
        <CostBreakdown />
        <PaymentTerms />
        <Timeline />
        <Deliverables />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;