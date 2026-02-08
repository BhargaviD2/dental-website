import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
    treatment: "Orthodontic Treatment",
  },
  {
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop",
    treatment: "Dental Implants",
  },
  {
    before: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1570406878002-c0e10ec06e93?w=400&h=300&fit=crop",
    treatment: "Teeth Whitening",
  },
  {
    before: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1601903272630-a12e41b2851b?w=400&h=300&fit=crop",
    treatment: "Smile Makeover",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smile Transformations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the Difference We Make
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-dental hover-lift"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Before Image */}
                <img
                  src={item.before}
                  alt={`${item.treatment} - Before`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* After Image */}
                <img
                  src={item.after}
                  alt={`${item.treatment} - After`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Before/After Labels */}
                <div className="absolute top-3 left-3 bg-foreground/80 text-background px-2 py-1 rounded text-xs font-medium group-hover:opacity-0 transition-opacity">
                  Before
                </div>
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  After
                </div>
              </div>
              
              {/* Treatment Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4">
                <p className="text-primary-foreground font-medium text-sm">
                  {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="text-center mt-10">
          <Button size="lg" className="gradient-dental hover:opacity-90">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
