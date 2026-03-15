import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Join the <span className="italic text-gold">Inner Circle</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground mb-8">
            Weekly tips, product finds, and real talk about thriving in midlife—straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 font-body text-sm bg-card border border-border rounded-sm focus:outline-none focus:border-gold transition-colors text-foreground placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="px-8 py-3 gold-gradient text-navy font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>

          <p className="font-body text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
