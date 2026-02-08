import { Stethoscope, Monitor, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Stethoscope,
    title: "Expert Specialists",
    description:
      "Our team consists of highly qualified orthodontists and prosthodontists with years of experience.",
  },
  {
    icon: Monitor,
    title: "Advanced Technology",
    description:
      "We use state-of-the-art equipment and latest techniques for precise and effective treatments.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Your comfort and satisfaction are our priority. We provide personalized treatment plans.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description:
      "Thousands of happy patients with beautiful, healthy smiles. Check our reviews and results!",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose SmileCare?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of exceptional dental care with our team of dedicated professionals
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-background border-0 shadow-dental hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-dental flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
