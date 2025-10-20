import logo from "@/assets/logo.png";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="BlueEdge Designs" className="h-12 mb-4" />
            <p className="text-background/80 leading-relaxed">
              Your Vision, Our Edge. Transforming ideas into visual stories that inspire connection, trust, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+27793365471" className="hover:text-primary transition-colors">
                  +27 79 336 5471
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:Blueedgedesigns@gmail.com" className="hover:text-primary transition-colors">
                  Blueedgedesigns@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} BlueEdge Designs. All rights reserved.</p>
          <p className="mt-2">
            Built by{" "}
            <a 
              href="https://architeqwebagency.pages.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors font-semibold"
            >
              Architeq Web Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
