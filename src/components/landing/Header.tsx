import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dog, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg bg-bg-secondary/80' : ''}`}>
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
              <img src="/tailtrails-logo.png" alt="TailTrails Logo" className="w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-text-primary">TailTrails</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-text-muted hover:text-brand transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-text-muted hover:text-brand transition-colors">How It Works</a>
            <a href="/blog" className="text-sm font-medium text-text-muted" onClick={() => setIsMenuOpen(false)}>Blogs</a>
            <a href="/waitlist" className="bg-brand hover:bg-brand-light text-bg-primary px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center">
              Join Waitlist
            </a>
          </div>

          <button className="md:hidden text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-lg font-medium text-text-muted" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-lg font-medium text-text-muted" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="/waitlist" className="bg-brand text-bg-primary w-full py-4 rounded-2xl font-bold inline-flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
