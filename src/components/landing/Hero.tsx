import { motion } from 'motion/react';
import { Zap, Facebook, Instagram } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import { siFacebook, siInstagram, siTiktok } from 'simple-icons';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-full mb-8 border border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-secondary">Simple and effective dog walking</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-[1.05] text-text-primary">
              Every walk <br />
              becomes <br />
              <span className="text-accent-secondary italic">an adventure.</span>
            </h1>

            <p className="text-text-primary/70 text-lg md:text-xl max-w-xl mb-12 font-medium leading-relaxed">
              Record your dog walks, discover new routes, and connect with fellow dog owners. Track every tail wag, share your favorite trails, and build a community of happy pups.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <a href="/waitlist" className="w-full sm:w-auto bg-brand hover:bg-brand-light text-bg-primary px-10 py-5 rounded-2xl font-extrabold text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Join Waitlist
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-6">
              <a href="https://www.tiktok.com/@packlifeinportugal" className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-secondary hover:bg-brand hover:text-bg-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d={siTiktok.path} fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.facebook.com/packlifeinportugal" className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-secondary hover:bg-brand hover:text-bg-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d={siFacebook.path} fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.instagram.com/packlifeinportugal" className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-secondary hover:bg-brand hover:text-bg-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d={siInstagram.path} fill="currentColor" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
