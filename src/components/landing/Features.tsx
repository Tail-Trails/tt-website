import { motion } from 'motion/react';
import { MapPin, Share2, Bookmark, Tag, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Record Every Walk",
      desc: "Track your routes with GPS precision. See distance, duration, and the path you explored with your furry friend.",
      icon: MapPin,
      size: "md:col-span-8",
      color: "bg-brand/20",
      iconColor: "text-brand"
    },
    {
      title: "Share Your Adventures",
      desc: "Post your favorite walks and let other dog owners discover amazing routes in their neighborhood.",
      icon: Share2,
      size: "md:col-span-4",
      color: "bg-brand",
      iconColor: "text-zinc-950"
    },
    {
      title: "Save & Redo",
      desc: "Found a perfect trail? Save it for later and easily navigate back to your dog's favorite spots.",
      icon: Bookmark,
      size: "md:col-span-4",
      color: "bg-brand/20",
      iconColor: "text-brand"
    },
    {
      title: "Smart Labels",
      desc: "Tag walks with helpful info like 'good for older dogs', 'off-leash friendly', or 'water access'.",
      icon: Tag,
      size: "md:col-span-8",
      color: "bg-brand/20",
      iconColor: "text-brand"
    },
    {
      title: "Community Driven",
      desc: "Connect with local dog walkers, share tips, and discover hidden gems in your area.",
      icon: Users,
      size: "md:col-span-6",
      color: "bg-brand/20",
      iconColor: "text-brand"
    },
    {
      title: "Track Progress",
      desc: "Monitor your walking stats over time and celebrate milestones with your four-legged companion.",
      icon: TrendingUp,
      size: "md:col-span-6",
      color: "bg-brand/20",
      iconColor: "text-brand"
    }
  ];

  return (
    <section id="features" className="py-20 bg-bg-primary scroll-mt-18">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-text-primary">Everything You Need for Happy Walks</h2>
          <p className="text-text-secondary font-medium max-w-2xl mx-auto">
            Designed with dog lovers in mind, TailTrails makes every walk memorable and shareable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`${f.size} bento-card flex flex-col justify-between min-h-[300px] ${f.color === 'bg-brand' ? 'bg-brand' : ''}`}
            >
              <div>
                <div className={`w-14 h-14 ${f.color === 'bg-brand' ? 'bg-bg-primary/20' : f.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <f.icon className={`${f.iconColor} w-8 h-8`} />
                </div>
                <h3 className={`text-2xl font-display font-bold mb-4 ${f.color === 'bg-brand' ? 'text-bg-primary' : 'text-text-primary'}`}>{f.title}</h3>
                <p className={`text-lg ${f.color === 'bg-brand' ? 'text-bg-primary/70' : 'text-text-primary/70'}`}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
