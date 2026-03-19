import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, ShieldCheck, Users } from 'lucide-react';

const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "IMG_2721.PNG",
    "IMG_2722.PNG",
    "IMG_2724.PNG",
    "IMG_2725.PNG"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-zinc-900 rounded-[3rem] border-[8px] border-bg-variant shadow-2xl overflow-hidden z-20">
        {/* Screen Content */}
        <div className="relative w-full h-full bg-bg-primary overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Overlays */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-12 md:-right-20 z-30 bg-bg-primary/80 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[180px] border border-border-subtle/60"
      >
        <div className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center">
          <ShieldCheck className="text-accent-secondary w-6 h-6" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Status</p>
          <p className="text-sm font-bold text-text-primary">Added to 'Sunset Loop'</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 -left-12 md:-left-24 z-30 bg-bg-primary/80 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[180px] border border-border-subtle/60"
      >
        <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center">
          <Users className="text-accent-primary w-6 h-6" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">New Collectibles</p>
          <p className="text-sm font-bold text-text-primary">+3 this week</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -right-8 md:-right-16 z-30 bg-bg-primary/80 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[180px] border border-border-subtle/60"
      >
        <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
        <div className="text-left">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Live Walk</p>
          <p className="text-sm font-bold text-text-primary">4.2km <span className="text-text-secondary font-normal text-xs">Tracked</span></p>
        </div>
      </motion.div>

      {/* Background Circle Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-border-subtle/30 rounded-full -z-10" />
    </div>
  );
};

export default PhoneMockup;
