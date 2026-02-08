import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-16 lg:py-20 gradient-dental">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Book your appointment today and take the first step towards a healthier, more confident smile!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg"
          >
            <a href="https://www.practo.com" target="_blank" rel="noopener noreferrer">
              Book on Practo
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg"
          >
            <a href="tel:+918012345678">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
