import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + a small pause (0.5s)
    // before the shutter goes up smoothly.
    // Lift the shutter once the page has loaded, but keep the fill animation
    // visible for at least 1.8s and never block for more than 3.5s.
    const start = Date.now();
    let minTimer;
    const finish = () => {
      const wait = Math.max(0, 1800 - (Date.now() - start));
      minTimer = setTimeout(() => setIsLoading(false), wait);
    };
    const maxTimer = setTimeout(() => setIsLoading(false), 3500);

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener('load', finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y:"-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center"
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease:"easeOut" }}
            className="relative whitespace-nowrap text-[10vw] sm:text-6xl md:text-8xl font-black tracking-tighter"
          >
            {/* Background text (empty state) */}
            <div className="text-red-900/30">
              Sabarinathan <span className="text-red-900/30">V</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease:"easeInOut", delay: 0.2 }}
            >
              Sabarinathan <span className="text-black">V</span>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
