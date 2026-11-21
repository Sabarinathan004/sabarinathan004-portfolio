import React from 'react';
import { motion } from 'framer-motion';
import togzaImg from '../assets/project/togza.webp';
import winqImg from '../assets/project/winq-vision.webp';
import metrocraftImg from '../assets/project/metrocraft.webp';
import bookingImg from '../assets/project/booking.webp';
import mkImg from '../assets/project/mk-lifestyles.webp';

const Projects = () => {
  const projects = [
    {
      title: 'TOGZA',
      subtitle: 'E-Commerce Store with Custom Tee Studio',
      description: 'A full e-commerce store for an Indian oversized T-shirt brand. Shoppers can browse collections, buy combos, and design their own tee by uploading artwork for the front, back or both sides. Businesses can send bulk-order enquiries.',
      image: togzaImg,
      links: [{ label: 'Live Site', href: 'https://togza.vercel.app' }],
      features: [
        'Product catalog with collections, combos and quick add to cart',
        'Custom Tee Studio: upload your design and choose print placement',
        'Bulk and company order enquiries',
        'Offer pricing, discounts and mobile-first design',
      ],
      techStack: ['React', 'Tailwind CSS', 'Supabase', 'Vercel'],
    },
    {
      title: 'Winq Vision',
      subtitle: 'Creative Agency Website',
      description: 'A bold, dark-themed website for a creative agency that makes brand reels, Meta ad funnels and 3D web experiences. Built to grab attention in the first few seconds and turn visitors into enquiries.',
      image: winqImg,
      links: [{ label: 'Live Site', href: 'https://winq-vision-v2.vercel.app' }],
      features: [
        'Cinematic hero with showreel and brand ident',
        'Filterable work gallery with campaign results',
        'Services, process and client sections',
        'Fully responsive with smooth animations',
      ],
      techStack: ['Next.js', 'React', 'Vercel'],
    },
    {
      title: 'MetroCraft Group',
      subtitle: 'Corporate Infrastructure Website',
      description: 'A corporate website for an infrastructure, engineering and real estate group, with a premium dark design presenting business verticals, featured projects, key numbers and sustainability work.',
      image: metrocraftImg,
      links: [{ label: 'Live Site', href: 'https://metro-craft-black-theme.vercel.app' }],
      features: [
        'Business verticals and featured projects showcase',
        'Tenders, investor relations and vendor registration pages',
        'Premium dark theme with gold accents and bold typography',
        'Responsive, multi-page navigation with mega menus',
      ],
      techStack: ['Next.js', 'React', 'Vercel'],
    },
    {
      title: 'Traveling.com',
      subtitle: 'Hotel & Travel Booking Website',
      description: 'A travel booking website for stays across Tamil Nadu and South India, with destination search, date and guest selection, and hotel listings with prices.',
      image: bookingImg,
      links: [{ label: 'Live Site', href: 'https://booking-website-main.vercel.app' }],
      features: [
        'Search by destination, dates and guests',
        'Stays and car rental sections',
        'Destination carousel with hotel cards and pricing',
        'Sign up and sign in flow',
      ],
      techStack: ['Angular', 'TypeScript', 'Vercel'],
    },
    {
      title: 'MK Lifestyles',
      subtitle: 'Electronics Showroom Website',
      description: 'A product showcase website for an electronics showroom, presenting air conditioners, refrigerators and washing machines with offers and warranty highlights.',
      image: mkImg,
      links: [{ label: 'Live Site', href: 'https://mk-life-styles.vercel.app' }],
      features: [
        'Hero product slider with offers',
        'Category pages for AC, refrigerators and washing machines',
        'Warranty, rating and discount highlights',
        'Contact and social links',
      ],
      techStack: ['Angular', 'TypeScript', 'Vercel'],
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-gray-50 py-10 md:py-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-red-400">Projects</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base md:text-lg leading-relaxed">
            A selection of live websites and applications I've designed, built and deployed.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative"
            >
              {/* Project Card */}
              <div className={`relative bg-white rounded-[2.5rem] p-5 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-500 flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-[55%] relative rounded-[1.5rem] overflow-hidden shadow-lg bg-gray-100 aspect-video group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-[#ff2a2a]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Tech badge is baked into the image screenshots */}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#ff2a2a] text-lg tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-[#ff2a2a] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg group-hover:border-gray-300 group-hover:bg-white group-hover:text-gray-900 hover:!text-[#ff2a2a] transition-all cursor-default shadow-sm hover:shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                          i === 0
                            ? 'bg-gray-900 text-white hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.3)]'
                            : 'border border-gray-300 text-gray-900 hover:border-[#ff2a2a] hover:text-[#ff2a2a]'
                        }`}
                      >
                        {link.label}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H8M17 7v9" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
