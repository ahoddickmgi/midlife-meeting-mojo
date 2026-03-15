import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="navy-gradient py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Midlife & Meetings" className="h-20 mb-6" />

          <div className="flex items-center gap-6 mb-8">
            <a href="#shop" className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
              Shop
            </a>
            <a href="#blog" className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
              Blog
            </a>
            <a href="#digital" className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
              Digital Products
            </a>
            <a href="#about" className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-5 mb-8">
            <a
              href="https://instagram.com/midlifeandmeetings"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/40 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://tiktok.com/@midlifeandmeetings"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/40 transition-colors"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.82a8.18 8.18 0 004.76 1.52V6.89a4.84 4.84 0 01-1-.2z" />
              </svg>
            </a>
          </div>

          <div className="w-16 h-px bg-cream/10 mb-6" />

          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Midlife & Meetings. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-cream/30 mt-2">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
