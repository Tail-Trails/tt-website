import { motion } from 'motion/react';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand/5 -z-10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/10 blur-[80px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 text-text-primary">
              Ready to Start Your <br />
              <span className="text-brand">Walking Journey?</span>
            </h2>
            <p className="text-text-primary/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join thousands of dog owners who are making every walk count. It's free to get started!
            </p>
            
            <a href="/waitlist" className="bg-brand hover:bg-brand-light text-bg-primary px-12 py-6 rounded-2xl font-extrabold text-xl transition-all transform hover:scale-105 active:scale-95 mb-6 inline-flex items-center justify-center">
              Join Waitlist
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
