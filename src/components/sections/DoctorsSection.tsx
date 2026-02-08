import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Rahul Sharma",
    qualifications: "BDS, MDS - Orthodontist",
    specialization: "Orthodontics & Dentofacial Orthopedics",
    bio: "Dr. Rahul Sharma is a highly skilled orthodontist with over 10 years of experience in creating beautiful smiles through braces and aligners. Passionate about patient care and continuous learning.",
  },
  {
    image: doctor2,
    name: "Dr. Priya Patel",
    qualifications: "BDS, MDS - Prosthodontist",
    specialization: "Prosthodontics & Implantology",
    bio: "Dr. Priya Patel specializes in dental implants, crowns, bridges, and smile restoration. Known for gentle care and exceptional results in complex prosthetic cases.",
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced Specialists Dedicated to Your Smile
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="border-0 shadow-dental hover-lift overflow-hidden bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">
                  {doctor.qualifications}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {doctor.specialization}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {doctor.bio}
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
