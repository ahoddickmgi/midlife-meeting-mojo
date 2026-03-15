import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center navy-gradient overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(35 45% 65%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <img
            src={logo}
            alt="Midlife & Meetings"
            className="mx-auto mb-10 h-44 md:h-64"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-xl md:text-2xl italic text-gold mb-6"
          >
            For corporate moms navigating midlife.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-cream/70 text-lg md:text-xl mb-4 tracking-wide"
          >
            Brain fog. Boardrooms. Teen chaos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-cream/90 text-lg md:text-xl font-medium mb-12"
          >
            Practical solutions that actually help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#shop"
              className="px-8 py-3 gold-gradient text-navy font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
            >
              Shop Favorites
            </a>
            <a
              href="#blog"
              className="px-8 py-3 border border-gold/40 text-gold font-body text-sm uppercase tracking-widest rounded-sm hover:bg-gold/10 transition-colors"
            >
              Read the Blog
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
