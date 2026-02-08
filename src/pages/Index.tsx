import TopInfoBar from "@/components/layout/TopInfoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import HeroCarousel from "@/components/sections/HeroCarousel";
import WelcomeSection from "@/components/sections/WelcomeSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Statistics from "@/components/sections/Statistics";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationContact from "@/components/sections/LocationContact";
import CTABanner from "@/components/sections/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopInfoBar />
      <Header />
      
      <main className="flex-1">
        <HeroCarousel />
        <WelcomeSection />
        <WhyChooseUs />
        <Statistics />
        <ServicesSection />
        <DoctorsSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationContact />
        <CTABanner />
      </main>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
