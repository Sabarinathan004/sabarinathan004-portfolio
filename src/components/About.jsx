import React, { useState } from 'react';
import stackImage from '../assets/about/image.webp';
import reactImage from '../assets/about/react.svg';
import nextImage from '../assets/about/nextjs.svg';
import nodeImage from '../assets/about/nodejs.svg';
import mongoImage from '../assets/about/mongodb.svg';
import dotnetImage from '../assets/about/dotnet.svg';
import csharpImage from '../assets/about/csharp.svg';
import postgresImage from '../assets/about/postgresql.svg';
import fastapiImage from '../assets/about/fastapi.svg';
import mssqlImage from '../assets/about/mssql.svg';
import mysqlImage from '../assets/about/mysql.svg';
import vectorImage from '../assets/about/vectordb.svg';

import vectorLogo from '../assets/about/vectordb-light.svg';

/**
 * Tech icon style:
 *   'logos' → the real logo of each language / database on a white tile
 *   'tiles' → the black lettered tiles that match the site's red & black theme
 */
const ICON_STYLE = 'logos';

// Real logos come from Devicon (MIT-licensed icon set, served by the jsDelivr CDN).
const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const TECH = [
  { name: 'React', label: 'React', tile: reactImage, logo: devicon('react') },
  { name: 'Next.js', label: 'Next.js', tile: nextImage, logo: devicon('nextjs') },
  { name: 'Node.js', label: 'Node.js', tile: nodeImage, logo: devicon('nodejs') },
  { name: 'MongoDB', label: 'MongoDB', tile: mongoImage, logo: devicon('mongodb') },
  { name: '.NET Core', label: '.NET Core', tile: dotnetImage, logo: devicon('dotnetcore') },
  { name: 'C#', label: 'C#', tile: csharpImage, logo: devicon('csharp') },
  { name: 'PostgreSQL', label: 'PostgreSQL', tile: postgresImage, logo: devicon('postgresql') },
  { name: 'FastAPI (Python)', label: 'FastAPI', tile: fastapiImage, logo: devicon('fastapi') },
  { name: 'Microsoft SQL Server', label: 'SQL Server', tile: mssqlImage, logo: devicon('microsoftsqlserver') },
  { name: 'MySQL', label: 'MySQL', tile: mysqlImage, logo: devicon('mysql') },
  { name: 'Vector Databases', label: 'Vector DB', tile: vectorImage, logo: vectorLogo },
];

/** One tech icon: real logo with its name on a white tile, or the lettered tile. */
const TechIcon = ({ tech, delay }) => {
  const [logoFailed, setLogoFailed] = useState(false);

  if (ICON_STYLE === 'tiles' || logoFailed) {
    return (
      <img
        data-aos="zoom-in"
        data-aos-delay={delay}
        src={tech.tile}
        alt={tech.name}
        title={tech.name}
        loading="lazy"
        className="w-full aspect-square object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
      />
    );
  }

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      title={tech.name}
      className="w-full aspect-square rounded-2xl bg-white flex flex-col items-center justify-center gap-1 md:gap-1.5 p-1.5 md:p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={tech.logo}
        alt=""
        loading="lazy"
        onError={() => setLogoFailed(true)}
        className="h-[52%] w-auto max-w-[80%] object-contain"
      />
      <span className="text-[10px] md:text-[11px] font-bold leading-none text-gray-900 whitespace-nowrap">
        {tech.label}
      </span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-16 pb-28 md:pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Sabarinathan V" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl text-black mb-4">Hello!</h2>
          <p className="text-lg mb-12 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black ml-1 tracking-wide uppercase">Sabarinathan <span className="text-white">V</span></span>, a passionate full-stack developer dedicated to crafting clean, functional, and highly scalable web applications.
          </p>

          {/* Tech logos */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mt-8 max-w-[680px]">
            {TECH.map((tech, i) => (
              <div key={tech.name} className="animate-float">
                <TechIcon tech={tech} delay={300 + i * 100} />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
