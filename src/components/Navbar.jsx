import React, { useEffect, useState } from 'react';

const NAV_LINKS = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Contact'];
const RESUME_URL = 'https://drive.google.com/drive/folders/1-2NCKFzCs41FypumOScQ5YDw_TefleHN';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled
            ? 'bg-black/60 backdrop-blur-xl py-3 border-b border-white/10'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={close} className="text-2xl font-black tracking-tight text-white">
          Sabarinathan <span className={`transition-colors duration-500 ${isOpen || !isScrolled ? 'text-black' : 'text-[#ff2a2a]'}`}>V</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group text-sm tracking-wide text-white/75 hover:text-white transition-colors duration-300"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2.5 rounded-full text-sm text-white bg-white/10 border border-white/25 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,42,42,0.45)]"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-white focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#ff2a2a] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[100svh] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 pt-4 pb-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={close}
              className="text-white text-2xl py-4 border-b border-white/15 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-8">
            <a
              href="#contact"
              onClick={close}
              className="w-full text-center px-6 py-3.5 rounded-full bg-white text-[#ff2a2a] shadow-xl hover:bg-black hover:text-white transition-colors"
            >
              Hire Me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3.5 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#ff2a2a] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
