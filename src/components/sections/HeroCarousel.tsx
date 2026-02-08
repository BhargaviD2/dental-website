import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroClinic from "@/assets/hero-clinic.jpg";
import heroSmile from "@/assets/hero-smile.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import heroEquipment from "@/assets/hero-equipment.jpg";

const slides = [
  {
    image: heroClinic,
    heading: "Your Smile, Our Passion",
    subtext: "Expert Orthodontic & Prosthodontic Care",
    cta: { text: "Schedule Your Visit", href: "https://www.practo.com" },
  },
  {
    image: heroSmile,
    heading: "Advanced Dental Solutions",
    subtext: "State-of-the-Art Technology & Personalized Care",
    cta: { text: "Explore Our Services", href: "#services" },
  },
  {
    image: heroFamily,
    heading: "Caring for Your Entire Family",
    subtext: "Gentle Dentistry for All Ages",
    cta: { text: "Meet Our Team", href: "#doctors" },
  },
  {
    image: heroEquipment,
    heading: "Transforming Smiles, Changing Lives",
    subtext: "Expert Orthodontic & Prosthodontic Specialists",
    cta: { text: "View Before & After", href: "#gallery" },
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 gradient-hero-overlay" />
          
          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.heading}
              </h1>
              <p
                className={`text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 transition-all duration-700 delay-300 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.subtext}
              </p>
              <Button
                asChild
                size="lg"
                className={`bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg transition-all duration-700 delay-400 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href={slide.cta.href}
                  target={slide.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={slide.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {slide.cta.text}
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
