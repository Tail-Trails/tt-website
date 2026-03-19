import { UserPlus, Play, Image, Search } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Sign Up",
      desc: "Create your free account in seconds. Add your dog's profile and you're ready to go.",
      icon: UserPlus
    },
    {
      num: "02",
      title: "Start Recording",
      desc: "Hit record when you head out. The app tracks your route, distance, and time automatically.",
      icon: Play
    },
    {
      num: "03",
      title: "Share & Tag",
      desc: "Add photos, labels, and notes. Share with the community or keep it for yourself.",
      icon: Image
    },
    {
      num: "04",
      title: "Discover & Connect",
      desc: "Explore routes shared by others. Find dog-friendly spots and make walking buddies.",
      icon: Search
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden scroll-mt-18">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-text-primary">Start Your Adventure in Minutes</h2>
          <p className="text-text-secondary font-medium">Getting started with TailTrails is as easy as going for a walk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="mb-6 flex items-end gap-4">
                <span className="text-6xl font-display font-black text-white/10 group-hover:text-brand/30 transition-colors duration-500 leading-none">
                  {step.num}
                </span>
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-1 border-accent-secondary/20">
                  <step.icon className="text-brand w-6 h-6" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-text-primary">{step.title}</h4>
              <p className="text-text-primary/70 leading-relaxed">{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
