import { motion } from "framer-motion";
import { Briefcase, Heart, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Corporate Life",
    description: "Navigating the boardroom while navigating hot flashes. We see you.",
  },
  {
    icon: Heart,
    title: "Wellness First",
    description: "Supplements, routines, and products that actually make a difference in perimenopause and beyond.",
  },
  {
    icon: Sparkles,
    title: "Real Talk",
    description: "No fluff. Just practical, tested solutions from someone who's living it too.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            We Get It. <span className="italic text-gold">All of It.</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed">
            Midlife & Meetings is the space where corporate ambition meets midlife reality.
            We're here for the brain fog, the 3pm crashes, the hormonal rollercoaster—and
            the products and strategies that genuinely help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center p-8 rounded-sm bg-card border border-border hover:border-gold/30 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-full flex items-center justify-center bg-muted group-hover:bg-gold/10 transition-colors">
                <pillar.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{pillar.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
