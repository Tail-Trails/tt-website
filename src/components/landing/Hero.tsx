import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Share2, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-sm font-medium font-body">The Strava for Dog Lovers</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-1 text-balance">
            Every Walk Becomes an{" "}
            <span className="text-primary">Adventure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body animate-fade-up opacity-0 stagger-2 text-balance">
            Record your dog walks, discover new routes, and connect with fellow dog owners. 
            Track every tail wag, share your favorite trails, and build a community of happy pups.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="xl" asChild>
              <a href="http://tailtrails-webapp.jms.rocks/" target="_blank" rel="noopener noreferrer">
                Start Walking Free
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up opacity-0 stagger-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground">GPS Tracking</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft">
              <Share2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground">Share Routes</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground">Dog-Friendly Labels</span>
            </div>
          </div>
        </div>

        {/* Hero image/illustration area (now renders lazy-loading video preview) */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-fade-up opacity-0 stagger-5">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-card p-2">
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-cream-dark to-cream overflow-hidden flex items-center justify-center">
              {/* Video preview container */}
              <VideoPreview />
            </div>
          </div>
          
          {/* Floating stats */}
          <div className="absolute -left-4 top-1/3 bg-card rounded-xl p-4 shadow-elevated animate-float hidden lg:block">
            <div className="text-2xl font-display font-bold text-primary">2.5k</div>
            <div className="text-sm text-muted-foreground font-body">Active Walkers</div>
          </div>
          
          <div className="absolute -right-4 top-1/2 bg-card rounded-xl p-4 shadow-elevated animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
            <div className="text-2xl font-display font-bold text-primary">15k+</div>
            <div className="text-sm text-muted-foreground font-body">Routes Shared</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Simple inline video preview component. Uses IntersectionObserver to lazy-load
// the source only when the element is visible. Uses /hero.mp4 in the public folder.
function VideoPreview() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || loaded || !ref.current) return;
    const v = ref.current;

    // Create sources dynamically to prevent early download
    const webmSrc = "/hero.webm"; // optional: if you generate a webm
    const mp4Src = "/hero.mp4";

    // prefer webm if available (browser will pick compatible source)
    if (webmSrc) {
      const s1 = document.createElement("source");
      s1.src = webmSrc;
      s1.type = "video/webm";
      v.appendChild(s1);
    }
    const s2 = document.createElement("source");
    s2.src = mp4Src;
    s2.type = "video/mp4";
    v.appendChild(s2);

    setLoaded(true);
    v.load();
    v.play().catch(() => {
      // autoplay may be blocked; that's fine
    });
  }, [visible, loaded]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <video
      ref={ref}
      poster="/hero-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      onClick={toggle}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      aria-label="App preview"
    />
  );
}
