import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProducts from "@/components/FeaturedProducts";
import BlogPreview from "@/components/BlogPreview";
import DigitalProducts from "@/components/DigitalProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProducts />
      <BlogPreview />
      <DigitalProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
