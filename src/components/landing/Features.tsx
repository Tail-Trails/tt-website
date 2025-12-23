import { MapPin, Share2, Bookmark, Tag, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Record Every Walk",
    description: "Track your routes with GPS precision. See distance, duration, and the path you explored with your furry friend.",
  },
  {
    icon: Share2,
    title: "Share Your Adventures",
    description: "Post your favorite walks and let other dog owners discover amazing routes in their neighborhood.",
  },
  {
    icon: Bookmark,
    title: "Save & Redo",
    description: "Found a perfect trail? Save it for later and easily navigate back to your dog's favorite spots.",
  },
  {
    icon: Tag,
    title: "Smart Labels",
    description: "Tag walks with helpful info like 'good for older dogs', 'off-leash friendly', or 'water access'.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Connect with local dog walkers, share tips, and discover hidden gems in your area.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your walking stats over time and celebrate milestones with your four-legged companion.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium font-body mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Everything You Need for Happy Walks
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Designed with dog lovers in mind, TailTrails makes every walk memorable and shareable.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
