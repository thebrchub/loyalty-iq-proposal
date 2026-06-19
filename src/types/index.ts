export interface Deliverable {
  name: string;
  included: boolean;
}

export interface ModuleConfig {
  id: string;
  title: string;
  description: string;
  cost: number;
  technicalNotes: string[];
  complexity: 'Low' | 'Medium' | 'High';
  deliverables: Deliverable[];
  whyThisCost: string[];
}

export interface TimelineEvent {
  week: string;
  title: string;
  description: string;
}

export interface Objective {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PaymentMilestone {
  phase: string;
  percentage: number;
  amount: number;
  description: string;
}

export interface OperationalCost {
  title: string;
  cost: string;
  description: string;
}




export interface JourneyStep {
  id: string;
  phase: string;
  title: string;
  frontendExp: string;
  backendProc: string;
}

export interface ProposalConfig {
  clientName: string;
  projectName: string;
  purpose: string;
  lastUpdated: string;
  estimatedDuration: string;
  totalCost: number;
  objectives: Objective[];
  userJourney: JourneyStep[]
  paymentMilestones: PaymentMilestone[];
operationalCosts: OperationalCost[];
  modules: ModuleConfig[];
  timeline: TimelineEvent[];
  faqs: FAQItem[];
}