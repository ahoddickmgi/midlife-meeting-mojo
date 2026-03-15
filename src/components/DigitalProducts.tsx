import { motion } from "framer-motion";
import { Download, FileText, BookOpen } from "lucide-react";

const digitalProducts = [
  {
    icon: FileText,
    title: "The Perimenopause Playbook",
    description: "A comprehensive guide to understanding your symptoms, tracking changes, and finding what works.",
    price: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Meeting Survival Kit",
    description: "Templates, scripts, and strategies for thriving in corporate environments during midlife transitions.",
    price: "Coming Soon",
  },
  {
    icon: Download,
    title: "Supplement Starter Guide",
    description: "Cut through the noise. Know exactly what to take, when, and why—backed by research.",
    price: "Coming Soon",
  },
];

const DigitalProducts = () => {
  return (
    <section id="digital" className="py-24 navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(35 45% 65%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-3">Digital Downloads</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
            Tools That <span className="italic text-gold">Work as Hard</span> as You Do
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-cream/70">
            Guides, templates, and resources designed specifically for corporate women in midlife.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {digitalProducts.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-8 rounded-sm border border-cream/10 bg-cream/5 hover:border-gold/30 transition-colors text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center border border-gold/30 group-hover:bg-gold/10 transition-colors">
                <product.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg text-cream mb-3">{product.title}</h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed mb-5">
                {product.description}
              </p>
              <span className="inline-block px-5 py-2 text-xs font-body uppercase tracking-widest text-gold border border-gold/30 rounded-sm">
                {product.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProducts;
