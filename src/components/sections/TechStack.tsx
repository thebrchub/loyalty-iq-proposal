import { motion } from 'framer-motion';
import { Layers, Server, Globe2, Shield, Bot, Mail, FileJson, type LucideIcon } from 'lucide-react';

interface TechItem {
  name: string;
  reason: string;
  logo?: string;
  icon?: LucideIcon;
  color?: string;
}

interface TechCategory {
  title: string;
  icon: LucideIcon;
  tech: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend Application",
    icon: Globe2,
    tech: [
      {
        name: "React 19 & Vite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        reason: "Opted for a client-side SPA (Single Page App) since SEO isn't required for an authenticated dashboard. Concurrent rendering ensures the UI remains unblocked during heavy data loads."
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        reason: "Strict static typing eliminates entire classes of runtime errors. This is non-negotiable when dealing with the complex state management of financial-adjacent loyalty data."
      },
      {
        name: "Tailwind CSS v4",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        reason: "Utility-first compiler guarantees zero dead CSS, drastically reducing the bundle size while enforcing a strict design system without global style fragmentation."
      }
    ]
  },
  {
    title: "Backend & Database",
    icon: Server,
    tech: [
      {
        name: "Python Environment",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        reason: "The absolute industry standard for AI orchestration and data extraction. Python serves as both our high-speed API gateway and the engine for the background scraping workers."
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        reason: "Chosen over NoSQL because loyalty data (User → Airline → Points → Expiry) requires strict relational integrity and ACID compliance to prevent balance corruption."
      },
      {
        name: "Redis Caching Layer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        reason: "Acts as an ultra-fast intermediary memory store to cache dashboard data, severely reducing database load and preventing rate-limiting from third-party APIs."
      }
    ]
  },
  {
    title: "Integrations & AI Pipeline",
    icon: Layers,
    tech: [
      {
        name: "Google OAuth 2.0",
        icon: Mail,
        color: "text-red-500",
        reason: "Zero-trust architecture. We only request short-lived, readonly scopes. User passwords never touch our servers, completely mitigating credential liability."
      },
      {
        name: "Python AI & Scraping Pipeline",
        icon: Bot,
        color: "text-indigo-600",
        reason: "Utilizes Python's elite data libraries alongside strict JSON Schema function-calling to force LLMs to parse highly variable PDFs into predictable, standardized data payloads."
      },
      {
        name: "Headless Data Extraction",
        icon: FileJson,
        color: "text-emerald-600",
        reason: "Automated ingestion pipeline that buffers monthly bank statements into memory, sanitizes PII (Personally Identifiable Information), and passes pure text vectors to the AI."
      }
    ]
  },
  {
    title: "Infrastructure & Security",
    icon: Shield,
    tech: [
      {
        name: "Docker Containerization",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        reason: "Ensures absolute 1:1 environment parity across local development, staging, and production. Eliminates 'works on my machine' configuration drift."
      },
      {
        name: "AWS / VPS Compute",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        reason: "Scalable cloud compute designed to handle the heavy CPU requirements of simultaneous Python AI data extraction queues during end-of-month processing spikes."
      },
      {
        name: "GitHub Actions CI/CD",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        reason: "Automated continuous integration pipeline that runs strict checking, linting, and unit tests before any code is allowed to hit the production server."
      }
    ]
  }
];

export function TechStack() {
  return (
    <section className="space-y-8" id="tech-stack">
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Technology Stack</h2>
          <p className="text-slate-500 mt-2">Architectural decisions driving the platform's scalability and security.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {techCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 bg-slate-50 text-slate-700 rounded-xl border border-slate-200">
                  <CategoryIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-col gap-6 flex-grow">
                {category.tech.map((item, i) => {

                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 p-2">
                        {item.logo ? (
                          <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                        ) : (
                          ItemIcon && <ItemIcon className={`w-full h-full ${item.color || 'text-slate-700'}`} />
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.reason}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}