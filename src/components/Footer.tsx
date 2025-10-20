import logo from "@/assets/logo.png";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="BlueEdge Designs" className="h-10 sm:h-12 mb-3 sm:mb-4" />
            <p className="text-background/80 leading-relaxed text-sm sm:text-base">
              Your Vision, Our Edge. Transforming ideas into visual stories that inspire connection, trust, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Get In Touch</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-background/80 text-sm sm:text-base">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+27793365471" className="hover:text-primary transition-colors">
                  +27 79 336 5471
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80 text-sm sm:text-base">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:Blueedgedesigns@gmail.com" className="hover:text-primary transition-colors break-all">
                  Blueedgedesigns@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center text-background/60 text-xs sm:text-sm">
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
