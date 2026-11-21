import React from 'react';
import { motion } from 'framer-motion';

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <path d={d} />
  </svg>
);

const SOLUTIONS = [
  {
    title: 'SaaS & Multi-Tenant Platforms',
    text: 'Subscription-ready SaaS products where many businesses share one platform securely, with tenant isolation, role-based access, plans and billing, and per-tenant settings.',
    tags: ['Multi-tenancy', 'Role-based access', 'Subscriptions', '.NET Core / Node.js'],
    icon: 'M12 3 3 7.5l9 4.5 9-4.5L12 3Z M3 12l9 4.5 9-4.5 M3 16.5 12 21l9-4.5',
  },
  {
    title: 'E-Commerce Platforms',
    text: 'Fast online stores with product catalogs, smart search and filters, cart and checkout, Razorpay payments, order management and SEO built in.',
    tags: ['Next.js', 'Razorpay', 'Admin dashboard', 'SEO'],
    icon: 'M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6.2 M9 20h.01 M17 20h.01',
  },
  {
    title: 'GST Billing Software',
    text: 'Billing and invoicing built for Indian businesses: GST-compliant invoices with CGST, SGST and IGST, HSN/SAC codes, stock tracking, customer ledgers and GST reports.',
    tags: ['GST invoices', 'HSN / SAC', 'Inventory', 'Reports'],
    icon: 'M6 3h12v18l-3-2-3 2-3-2-3 2V3Z M9 8h6 M9 12h6 M9 16h3',
  },
  {
    title: 'Admin Dashboards & Business Tools',
    text: 'Custom admin panels, inventory and order management, and internal tools that turn day-to-day operations into simple, clean workflows.',
    tags: ['Dashboards', 'Inventory', 'Orders', 'Reports'],
    icon: 'M4 4h7v7H4z M13 4h7v4h-7z M13 10h7v10h-7z M4 13h7v7H4z',
  },
  {
    title: 'AI-Powered Applications',
    text: 'Chatbots, smart search and document Q&A using LLMs and vector databases, added to new products or plugged into existing ones.',
    tags: ['LLMs', 'Vector DB', 'FastAPI', 'RAG'],
    icon: 'M12 3v4 M12 17v4 M3 12h4 M17 12h4 M6.3 6.3l2.8 2.8 M14.9 14.9l2.8 2.8 M6.3 17.7l2.8-2.8 M14.9 9.1l2.8-2.8',
  },
  {
    title: 'APIs & Integrations',
    text: 'Secure REST APIs with JWT authentication, and integrations with payment gateways, email, SMS and other third-party services.',
    tags: ['REST APIs', 'JWT', 'Payments', 'Third-party APIs'],
    icon: 'M8 8l-4 4 4 4 M16 8l4 4-4 4 M13.5 6l-3 12',
  },
];

const TRUST = [
  {
    title: 'Encrypted data',
    text: 'HTTPS/TLS for every request, encrypted databases and backups, and secrets kept out of code.',
    icon: 'M7 11V8a5 5 0 0 1 10 0v3 M5 11h14v10H5z M12 15v2',
  },
  {
    title: 'Secure login & access',
    text: 'Hashed passwords, JWT sessions, role-based permissions and optional two-factor sign-in.',
    icon: 'M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M5 21a7 7 0 0 1 14 0',
  },
  {
    title: 'Tenant data isolation',
    text: "In SaaS products, each business's data is kept separate, so no customer can ever see another's records.",
    icon: 'M4 4h7v7H4z M13 13h7v7h-7z M13 4h7v7h-7z M4 13h7v7H4z',
  },
  {
    title: 'Privacy first',
    text: 'Only the data you need is collected, nothing is shared or sold, and you own your data and code.',
    icon: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  },
  {
    title: 'Backups & recovery',
    text: 'Automated database backups and a clear restore plan, so your business keeps running.',
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z M4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7 M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5',
  },
  {
    title: 'Secure coding',
    text: 'Input validation, protection against common attacks like SQL injection and XSS, and audit logs for key actions.',
    icon: 'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3Z M9 12l2 2 4-4',
  },
];

const ENGINEERING = [
  {
    title: 'DSA & problem solving',
    text: 'Strong data structures and algorithms behind search, sorting, pricing and billing logic, so features stay fast as data grows.',
    icon: 'M6 3v6 M6 15v6 M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M8.6 10.5 15.4 7 M8.6 13.5l6.8 3.5',
  },
  {
    title: 'Optimized queries',
    text: 'Proper indexes, tuned SQL, query-plan checks and no N+1 queries across PostgreSQL, MS SQL and MySQL.',
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z M4 7v10c0 1.7 3.6 3 8 3 M20 7v4 M17 17l2 2 3-4',
  },
  {
    title: 'Large data, no lag',
    text: 'Server-side pagination, filtering and search, plus virtualized tables, so screens with lakhs of records still load instantly.',
    icon: 'M4 6h16 M4 10h16 M4 14h10 M4 18h7 M18 14v6 M15 17l3 3 3-3',
  },
  {
    title: 'Caching & fast loading',
    text: 'Smart caching, CDN delivery, lazy loading, code splitting and optimized images for quick pages and strong Core Web Vitals.',
    icon: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  },
  {
    title: 'Background processing',
    text: 'Heavy work like reports, invoice PDFs and bulk imports or exports runs in the background without freezing the app.',
    icon: 'M12 8v4l3 2 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  },
  {
    title: 'Scalable architecture',
    text: 'Clean, modular code, well-designed REST APIs and multi-tenant database design that grows with your business.',
    icon: 'M12 2 2 7l10 5 10-5-10-5Z M2 17l10 5 10-5 M2 12l10 5 10-5',
  },
  {
    title: 'Testing & CI/CD',
    text: 'Automated tests and deployment pipelines with Git, GitHub Actions and Docker for safe, repeatable releases.',
    icon: 'M9 12l2 2 4-4 M7 3h10l4 4v10l-4 4H7l-4-4V7l4-4Z',
  },
  {
    title: 'Monitoring & logs',
    text: 'Error tracking, logs and performance monitoring in production, so issues are caught and fixed early.',
    icon: 'M3 12h4l3-8 4 16 3-8h4',
  },
];

const Solutions = () => {
  return (
    <section id="expertise" className="relative w-full bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="inline-block text-xs text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
              What I <span className="text-[#ff2a2a]">Build</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed">
            Complete, secure, production-ready software for businesses, from multi-tenant SaaS to e-commerce and GST billing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-[1.75rem] p-7 md:p-8 transition-all duration-300 hover:border-[#ff2a2a] hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-[#ff2a2a]">
                  <Icon d={item.icon} />
                </span>
                <span className="font-serif italic text-lg text-gray-300 group-hover:text-[#ff2a2a] transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl text-gray-900 tracking-tight mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">{item.text}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust: security & privacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 overflow-hidden rounded-[1.75rem] bg-[#0b0b0b] text-white p-7 md:p-10"
        >
          <svg aria-hidden="true" viewBox="0 0 800 200" preserveAspectRatio="none" className="pointer-events-none absolute right-0 bottom-0 w-[70%] md:w-[45%] h-28 md:h-36 text-[#ff2a2a]/15">
            <path d="M0 196 C260 150 560 70 800 0 L800 46 C560 110 280 175 30 200 Z" fill="currentColor" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            <div>
              <span className="w-12 h-12 rounded-2xl bg-[#ff2a2a] text-white flex items-center justify-center mb-6">
                <Icon d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3Z M9 12l2 2 4-4" />
              </span>
              <h3 className="text-2xl md:text-3xl tracking-tight mb-3">
                Security &amp; privacy,<br /><span className="text-[#ff2a2a]">built in.</span>
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm">
                Your business data and your customers' details are protected from day one, not added as an afterthought.
                I'm happy to sign an NDA before we start.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {TRUST.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-xl border border-white/15 bg-white/5 text-[#ff2a2a] flex items-center justify-center">
                    <Icon d={item.icon} />
                  </span>
                  <div>
                    <h4 className="text-base text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Engineering: performance & scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-5 rounded-[1.75rem] border border-gray-200 bg-gray-50/70 p-7 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">
                <span className="w-7 h-[3px] rounded-full bg-[#ff2a2a]" />
                Engineering
              </span>
              <h3 className="text-2xl md:text-3xl text-gray-900 tracking-tight">
                Fast at any scale.
              </h3>
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              Software that stays quick with thousands of users and lakhs of records, built on solid fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGINEERING.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-gray-200 rounded-2xl p-5 transition-all duration-300 hover:border-[#ff2a2a] hover:-translate-y-0.5"
              >
                <span className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4 transition-colors group-hover:bg-[#ff2a2a]">
                  <Icon d={item.icon} />
                </span>
                <h4 className="text-base text-gray-900 mb-1.5">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
