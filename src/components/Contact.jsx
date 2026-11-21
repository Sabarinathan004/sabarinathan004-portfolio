import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EMAIL = 'sabarisiinora046@gmail.com';
const PHONE = '+918072322302';
const PHONE_LABEL = '+91 80723 22302';

const inputClass =
  'w-full rounded-xl bg-white/10 border border-white/25 px-4 py-3.5 text-[15px] text-white placeholder-white/55 outline-none transition-all duration-200 focus:bg-white/15 focus:border-white focus:ring-2 focus:ring-white/30';

const Field = ({ label, htmlFor, children, optional }) => (
  <label htmlFor={htmlFor} className="flex flex-col gap-2">
    <span className="text-[11px] uppercase tracking-[0.18em] text-white/80">
      {label} {optional && <span className="normal-case tracking-normal text-white/55">(optional)</span>}
    </span>
    {children}
  </label>
);

const ContactItem = ({ icon, label, value, href }) => (
  <a href={href} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#ff2a2a]/60">
    <span className="w-11 h-11 shrink-0 rounded-xl bg-[#ff2a2a] text-white flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d={icon} /></svg>
    </span>
    <span className="min-w-0">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-white/50">{label}</span>
      <span className="block text-white text-[15px] truncate group-hover:text-[#ff2a2a] transition-colors">{value}</span>
    </span>
  </a>
);

const Contact = () => {
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    permission: false
  });

  const [status, setStatus] = useState({ type: 'idle', message: '' });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the painful page-refresh crash

    if (!formData.permission) {
      setStatus({ type: 'error', message: 'Please tick the permission box so I can reply to you.' });
      return;
    }

    setStatus({ type: 'sending', message: 'Sending…' });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method:"POST",
        headers: {"Content-Type":"application/json",
          Accept:"application/json",
        },
        body: JSON.stringify({
          access_key: "42024f66-5b2c-4efc-b8cc-4404c89a415b", 
          subject: `New portfolio enquiry from ${formData.firstName} ${formData.lastName}`,
          from_name: 'Sabarinathan V Portfolio',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', message: `Thanks ${formData.firstName}! Your message is on its way. I'll get back to you soon.` });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', permission: false });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ type: 'error', message: 'Could not send your message. Please try again later, or email me directly.' });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] border-t border-white/5 py-16 md:py-24 overflow-hidden">
      {/* soft red glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#ff2a2a]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
        {/* Left: intro + details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 mb-5">
            <span className="w-7 h-[3px] rounded-full bg-[#ff2a2a]" />
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-5">
            Let’s build something <span className="text-[#ff2a2a]">great.</span>
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-md mb-8">
            Have a project, a product idea or a business that needs software? Tell me a little about it and I’ll get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-3 max-w-md">
            <ContactItem label="Email" value={EMAIL} href={`mailto:${EMAIL}`} icon="M4 6h16v12H4z M4 7l8 6 8-6" />
            <ContactItem label="Phone" value={PHONE_LABEL} href={`tel:${PHONE}`} icon="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            <ContactItem label="Location" value="India · Available worldwide" href="#contact" icon="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </div>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[1.75rem] bg-[#ff2a2a] p-6 sm:p-8 md:p-10 shadow-[0_30px_80px_rgba(255,42,42,0.18)]"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5" noValidate={false}>
            <Field label="First name" htmlFor="firstName">
              <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" required autoComplete="given-name" className={inputClass} />
            </Field>
            <Field label="Last name" htmlFor="lastName">
              <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" required autoComplete="family-name" className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="email">
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required autoComplete="email" className={inputClass} />
            </Field>
            <Field label="Phone" htmlFor="phone" optional>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" pattern="[+0-9 ()-]{7,20}" title="Please enter a valid phone number, e.g. +91 98765 43210" maxLength="20" autoComplete="tel" className={inputClass} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Your message" htmlFor="message">
                <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project: what you need, your timeline and budget." required rows={5} className={`${inputClass} resize-none leading-relaxed`} />
              </Field>
            </div>

            <label htmlFor="permission" className="sm:col-span-2 flex items-start gap-3 text-sm text-white/90 cursor-pointer select-none">
              <input type="checkbox" id="permission" checked={formData.permission} onChange={handleChange} className="mt-0.5 w-5 h-5 shrink-0 accent-white cursor-pointer" />
              <span className="leading-snug">I give permission to contact me at this email address.</span>
            </label>

            <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
              <p role="status" aria-live="polite" className={`text-sm leading-snug min-h-[1.25rem] ${status.type === 'error' ? 'text-black' : 'text-white'}`}>
                {status.message}
              </p>
              <button
                type="submit"
                disabled={status.type === 'sending'}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white text-[#ff2a2a] px-8 py-3.5 font-medium shadow-lg transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-60 disabled:cursor-wait"
              >
                {status.type === 'sending' ? 'Sending…' : 'Send message'}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;