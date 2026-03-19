import { Heart } from 'lucide-react';
import { siTiktok, siFacebook, siInstagram } from 'simple-icons';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                <img src="/tailtrails-logo.png" alt="TailTrails Logo" className="w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-text-primary">TailTrails</span>
            </div>
            <p className="text-text-secondary max-w-xs">
              The Strava for Dog Lovers. Making every walk an adventure since 2026.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-muted">Navigation</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#features" className="text-text-secondary hover:text-brand transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-text-secondary hover:text-brand transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-muted">Connect</h4>
              <div className="flex gap-4">
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
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">© 2026 TailTrails. All rights reserved.</p>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-brand fill-brand" />
            <span>for dog lovers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
