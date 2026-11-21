import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroMp4 from '../assets/hero video/hero.mp4';
import heroWebm from '../assets/hero video/hero.webm';
import heroPoster from '../assets/hero video/hero-poster.webp';

const MutedIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11 5 6 9H2v6h4l5 4V5Z M22 9l-6 6 M16 9l6 6" />
  </svg>
);

const SoundIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11 5 6 9H2v6h4l5 4V5Z M15.5 8.5a5 5 0 0 1 0 7 M19 5a10 10 0 0 1 0 14" />
  </svg>
);

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    // The reel autoplays muted on loop. React doesn't reliably set the `muted`
    // attribute, and browsers (iOS Safari especially) block autoplay without it.
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  const soundButton = (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
      className="group flex flex-row md:flex-col items-center gap-3 focus:outline-none"
    >
      <span className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/25 backdrop-blur-md shadow-xl backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_40px_rgba(255,42,42,0.55)] group-focus-visible:ring-2 group-focus-visible:ring-white">
        {isMuted ? <MutedIcon /> : <SoundIcon />}
      </span>
      <span className="text-white text-[10px] md:text-[11px] tracking-[0.25em] uppercase opacity-85 group-hover:opacity-100 transition-opacity">
        {isMuted ? 'Unmute Reel' : 'Mute Sound'}
      </span>
    </button>
  );

  return (
    <section
      id="home"
      className="relative w-full h-[100svh] min-h-[620px] overflow-hidden bg-[#c80000]"
    >
      {/* Video: full screen on mobile; right side on desktop, fading into the red on its left edge */}
      <div className="absolute inset-x-0 top-16 h-[48svh] [mask-image:linear-gradient(to_bottom,black_72%,transparent)] md:inset-y-0 md:top-0 md:left-auto md:right-0 md:h-full md:w-[64%] z-0 md:[mask-image:linear-gradient(to_right,transparent_0%,black_28%)]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          className="w-full h-full object-cover object-[58%_30%] md:object-[60%_center]"
        >
          <source src={heroWebm} type="video/webm" />
          <source src={heroMp4} type="video/mp4" />
        </video>
      </div>

      {/* Readability: strong at the bottom on mobile, soft on the left on desktop */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-black/30 md:via-transparent md:to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end md:items-center pb-10 md:pb-0">
        <div className="max-w-xl">
          <h1
            data-aos="fade-up"
            className="text-white text-[2.4rem] leading-[1.05] sm:text-6xl xl:text-7xl tracking-tight mb-4 md:mb-6"
          >
            Hi, I’m a
            <span className="block font-light">Full Stack Developer</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white/90 text-[15px] md:text-base lg:text-lg mb-7 md:mb-9 max-w-lg leading-relaxed"
          >
            I build fast, scalable web applications with React, Next.js, Node.js and Tailwind CSS,
            with a focus on performance, clean code and great user experience.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 text-sm md:text-base font-medium rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm md:text-base font-medium rounded-full border border-white text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Sound toggle (mobile) */}
          <div className="mt-6 md:hidden">{soundButton}</div>
        </div>
      </div>

      {/* Sound toggle (desktop): right side, like the reference */}
      <div data-aos="zoom-in" data-aos-delay="500" className="hidden md:block absolute z-30 right-10 top-1/2 -translate-y-1/2">
        {soundButton}
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
