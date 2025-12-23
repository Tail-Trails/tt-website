import { Download, Play, Share2, Heart } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Sign Up",
    description: "Create your free account in seconds. Add your dog's profile and you're ready to go.",
  },
  {
    icon: Play,
    step: "02",
    title: "Start Recording",
    description: "Hit record when you head out. The app tracks your route, distance, and time automatically.",
  },
  {
    icon: Share2,
    step: "03",
    title: "Share & Tag",
    description: "Add photos, labels, and notes. Share with the community or keep it for yourself.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Discover & Connect",
    description: "Explore routes shared by others. Find dog-friendly spots and make walking buddies.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium font-body mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Start Your Adventure in Minutes
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Getting started with TailTrails is as easy as going for a walk.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-card border border-border/50 hover:shadow-elevated transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-soft">
                  <span className="text-sm font-bold text-primary-foreground font-body">{step.step}</span>
                </div>
                
                <div className="ml-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
