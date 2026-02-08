import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "🦷",
    title: "Orthodontics & Braces",
    description:
      "Straighten your teeth with traditional braces or modern clear aligners for a perfect smile.",
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    description:
      "Permanent solution for missing teeth using advanced implant technology.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, bonding, and smile makeover treatments.",
  },
  {
    icon: "🏥",
    title: "Root Canal Treatment",
    description:
      "Painless root canal therapy using modern techniques and equipment.",
  },
  {
    icon: "💎",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter, more confident smile.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    description:
      "Gentle and caring dental care for children in a comfortable environment.",
  },
  {
    icon: "🩺",
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, fillings, and preventive care for the whole family.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Dental Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Dental Care Under One Roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-dental hover-lift group bg-card overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium text-primary group/btn"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
