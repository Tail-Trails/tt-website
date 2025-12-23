import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 text-balance">
            Ready to Start Your <span className="text-primary">Walking Journey</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body mb-10 max-w-2xl mx-auto">
            Join thousands of dog owners who are making every walk count. 
            It's free to get started!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="http://tailtrails-webapp.jms.rocks/signup" target="_blank" rel="noopener noreferrer">
                Get Started Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground font-body">
            No credit card required • Free forever for basic features
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
