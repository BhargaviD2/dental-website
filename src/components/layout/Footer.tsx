import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Orthodontics & Braces",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Pediatric Dentistry",
  "General Dentistry",
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Our Doctors", href: "#doctors" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-dental-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground fill-current">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9 7 9S6 10 6 12C6 16 7.5 19 9 21C9.5 21.5 10 22 10.5 22C11 22 11.5 21.5 12 20C12.5 21.5 13 22 13.5 22C14 22 14.5 21.5 15 21C16.5 19 18 16 18 12C18 10 17 9 17 9S17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">SmileCare</span>
                <span className="text-xs block text-primary-foreground/70 -mt-1">Dental Clinic</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Your trusted dental care partner for beautiful, healthy smiles. We combine expert care with modern technology for exceptional results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Healthcare Avenue,<br />
                  Near Central Park,<br />
                  Bangalore - 560001
                </span>
              </li>
              <li>
                <a
                  href="tel:+918012345678"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">080 1234 5678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@smilecare.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">info@smilecare.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Mon - Sat: 10AM - 8PM</span>
              </li>
            </ul>
            <Button
              asChild
              className="mt-6 w-full gradient-dental hover:opacity-90"
            >
              <a href="https://www.practo.com" target="_blank" rel="noopener noreferrer">
                Book on Practo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 SmileCare Dental Clinic. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
