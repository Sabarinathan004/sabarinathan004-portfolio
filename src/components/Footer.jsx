import React from 'react';
import { motion } from 'framer-motion';

const EMAIL = 'sabarisiinora046@gmail.com';
const PHONE = '+918072322302';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'SaaS & Multi-Tenant', href: '#expertise' },
      { label: 'E-Commerce Platforms', href: '#expertise' },
      { label: 'GST Billing Software', href: '#expertise' },
      { label: 'AI-Powered Apps', href: '#expertise' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Expertise', href: '#expertise' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: EMAIL, href: `mailto:${EMAIL}`, wrap: true },
    ],
  },
];

/** Short red rule used before headings, like a brand mark */
const RedDash = ({ className = '' }) => (
  <span aria-hidden="true" className={`inline-block w-7 h-[3px] rounded-full bg-[#ff2a2a] ${className}`} />
);

/** Tapered brush stroke */
const BrushStroke = ({ className = '' }) => (
  <svg aria-hidden="true" viewBox="0 0 200 12" preserveAspectRatio="none" className={className}>
    <path d="M2 7 C50 2 150 1 198 5 C150 10 60 11 2 7 Z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b0b0b] text-[#d4d4d4] w-full overflow-hidden">
      {/* Red finish: soft diagonal swooshes */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -top-2 -left-10 w-[70%] md:w-[45%] h-24 md:h-32 text-white/[0.04]"
      >
        <path d="M0 150 C220 90 520 30 800 0 L800 22 C540 55 260 110 0 160 Z" fill="currentColor" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 bottom-20 w-[85%] md:w-[42%] h-32 md:h-44 text-[#ff2a2a]/20"
      >
        <path d="M0 196 C260 150 560 70 800 0 L800 46 C560 110 280 175 30 200 Z" fill="currentColor" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20">
        {/* Top: brand + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_2fr] gap-12 lg:gap-0">
          <div className="lg:pr-12 lg:border-r lg:border-white/10">
            <a href="#home" className="inline-block text-2xl font-black tracking-tight text-white">
              Sabarinathan <span className="text-[#ff2a2a]">V</span>
            </a>

            <h3 className="mt-8 text-3xl md:text-4xl font-black uppercase leading-[1.05] tracking-tight text-white">
              Fast web apps.
              <br />
              Built to scale.
            </h3>
            <BrushStroke className="mt-4 w-40 h-3 text-[#ff2a2a]" />

            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
              Full stack developer building modern, high-performance websites and web apps for businesses
              and startups. Available worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:pl-14">
            {COLUMNS.map((col) => (
              <div key={col.title} className={col.title === 'Connect' ? 'col-span-2 sm:col-span-1' : ''}>
                <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-white">
                  <RedDash />
                  {col.title}
                </h4>
                <ul className="mt-6 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`text-[15px] text-white/70 hover:text-white transition-colors ${link.wrap ? 'break-all' : ''}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="pt-14 md:pt-16 pb-6 select-none"
        >
          <h2 className="text-center lowercase text-[#f4f4f4] leading-[0.85] tracking-[-0.05em] text-[12.5vw] xl:text-[11.5rem]">
            sabarinathan <span className="text-[#ff2a2a]">v</span>
          </h2>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-[#0b0b0b] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-white/60">
          <p>© {year} Sabarinathan V. All rights reserved.</p>
          <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">+91 80723 22302</a>
          <p className="flex items-center gap-3 text-white">
            <RedDash />
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
