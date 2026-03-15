import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import productsImage from "@/assets/products-hero.jpg";

const products = [
  {
    name: "Magnesium Glycinate",
    category: "Sleep & Calm",
    description: "The #1 supplement every perimenopausal woman needs. Better sleep, less anxiety.",
    price: "$24.99",
    tag: "Top Pick",
  },
  {
    name: "Ashwagandha Complex",
    category: "Stress & Energy",
    description: "Adaptogenic support for those days when you have 6 meetings and zero patience.",
    price: "$19.99",
    tag: "Staff Favorite",
  },
  {
    name: "Omega-3 Fish Oil",
    category: "Brain Health",
    description: "Combat brain fog and support cognitive function. Your boardroom presentations will thank you.",
    price: "$29.99",
    tag: "Essential",
  },
  {
    name: "Vitamin D3 + K2",
    category: "Bone & Mood",
    description: "Critical for bone health during perimenopause and a natural mood booster.",
    price: "$18.99",
    tag: "Must-Have",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-3">Curated for You</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Midlife Must-Haves
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground">
            Every product is personally tested and recommended. As an Amazon affiliate, we may earn
            from qualifying purchases—at no extra cost to you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <motion.a
              key={product.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-sm border border-border hover:border-gold/30 overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={productsImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-widest font-body font-semibold gold-gradient text-navy rounded-sm">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                  {product.category}
                </p>
                <h3 className="font-display text-base text-foreground mb-2">{product.name}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-foreground">{product.price}</span>
                  <span className="text-gold group-hover:translate-x-1 transition-transform">
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
