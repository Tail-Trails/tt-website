import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    dog: "with Buddy, Golden Retriever",
    quote: "TailTrails has completely changed our walking routine! We've discovered so many new trails in our area that are perfect for older dogs like Buddy.",
    rating: 5,
  },
  {
    name: "James K.",
    dog: "with Luna, Border Collie",
    quote: "Love the labeling feature! I can easily find off-leash areas and routes with water access. Luna approves!",
    rating: 5,
  },
  {
    name: "Emily R.",
    dog: "with Max & Charlie",
    quote: "Finally, an app that understands what dog owners need. The community is amazing, and I've made so many walking buddies.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium font-body mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Loved by Dog Owners Everywhere
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            See what our community of happy walkers has to say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-background border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground font-body leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-body">{testimonial.dog}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
