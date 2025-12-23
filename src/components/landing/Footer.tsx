import logo from "@/assets/tailtrails-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="TailTrails" className="h-8 w-auto" />
            <span className="font-display text-lg font-semibold text-foreground">
              TailTrails
            </span>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-6 text-sm font-body">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            {/* <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a> */}
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-body">
            © 2026 TailTrails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
