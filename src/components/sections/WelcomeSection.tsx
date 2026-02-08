import { Check } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const features = [
  "Expert Orthodontists & Prosthodontists",
  "Advanced Technology & Equipment",
  "Painless & Comfortable Treatments",
  "Personalized Care Plans",
];

const WelcomeSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Welcome To
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
              SmileCare Dental Clinic
            </h2>
            <p className="text-lg text-primary font-medium mb-4">
              Expert Orthodontic & Prosthodontic Care in Bangalore
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are a state-of-the-art dental clinic specializing in orthodontics and prosthodontics. 
              Our experienced team of doctors provides personalized, gentle, and advanced dental care 
              for patients of all ages. With cutting-edge technology and a patient-first approach, 
              we're committed to creating beautiful, healthy smiles that last a lifetime.
            </p>
            
            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-dental flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-dental-elevated">
              <img
                src={clinicInterior}
                alt="SmileCare Dental Clinic Interior"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 gradient-dental rounded-2xl opacity-20 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
