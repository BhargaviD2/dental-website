import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const services = [
  { name: "Orthodontics & Braces", href: "#services" },
  { name: "Dental Implants", href: "#services" },
  { name: "Cosmetic Dentistry", href: "#services" },
  { name: "Root Canal Treatment", href: "#services" },
  { name: "Teeth Whitening", href: "#services" },
  { name: "Pediatric Dentistry", href: "#services" },
  { name: "General Dentistry", href: "#services" },
];

const aboutItems = [
  { name: "Our Clinic", href: "#about" },
  { name: "Meet Our Doctors", href: "#doctors" },
];

const galleryItems = [
  { name: "Before & After", href: "#gallery" },
  { name: "Clinic Photos", href: "#gallery" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-all duration-300",
        isScrolled ? "shadow-header py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-dental flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground fill-current">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9 7 9S6 10 6 12C6 16 7.5 19 9 21C9.5 21.5 10 22 10.5 22C11 22 11.5 21.5 12 20C12.5 21.5 13 22 13.5 22C14 22 14.5 21.5 15 21C16.5 19 18 16 18 12C18 10 17 9 17 9S17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">SmileCare</span>
              <span className="text-xs block text-muted-foreground -mt-1">Dental Clinic</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    {aboutItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2">
                    {services.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink
                          href={service.href}
                          className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                        >
                          {service.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    {galleryItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Patient Reviews
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Book Appointment Button */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:flex gradient-dental hover:opacity-90 transition-opacity"
            >
              <a href="https://www.practo.com" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  <a
                    href="#"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  
                  <div className="py-2 border-b">
                    <div className="flex items-center justify-between text-lg font-medium mb-2">
                      About Us
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 space-y-2">
                      {aboutItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="py-2 border-b">
                    <div className="flex items-center justify-between text-lg font-medium mb-2">
                      Services
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#gallery"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </a>

                  <a
                    href="#testimonials"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Patient Reviews
                  </a>

                  <a
                    href="#contact"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>

                  <Button
                    asChild
                    className="mt-4 gradient-dental hover:opacity-90"
                  >
                    <a href="https://www.practo.com" target="_blank" rel="noopener noreferrer">
                      Book Appointment
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
