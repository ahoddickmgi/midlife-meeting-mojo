import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blogImage from "@/assets/blog-hero.jpg";

const posts = [
  {
    title: "The 5 Supplements I Take Every Single Day",
    excerpt: "After years of trial and error, these are the non-negotiables that got me through perimenopause while running a team of 20.",
    category: "Supplements",
    date: "Coming Soon",
  },
  {
    title: "Brain Fog in the Boardroom: A Survival Guide",
    excerpt: "Practical strategies for when your brain decides to take a vacation mid-presentation.",
    category: "Corporate Life",
    date: "Coming Soon",
  },
  {
    title: "Perimenopause 101: What No One Told Us",
    excerpt: "Everything you wish your doctor had explained about what happens to your body after 40.",
    category: "Wellness",
    date: "Coming Soon",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-3">From the Blog</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Real Talk, <span className="italic">Real Solutions</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-5 bg-muted">
                <img
                  src={blogImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                {post.category} · {post.date}
              </p>
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-body uppercase tracking-widest text-gold group-hover:gap-2 transition-all">
                Read More <ArrowRight size={12} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
