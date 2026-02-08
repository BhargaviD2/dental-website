import { Phone, Clock, MapPin } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-dental-navy text-primary-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 lg:gap-12">
          <a 
            href="tel:+918012345678" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>080 1234 5678</span>
          </a>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
          </div>
          
          <a 
            href="https://maps.google.com/?q=SmileCare+Dental+Clinic+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <MapPin className="h-4 w-4" />
            <span>123 Healthcare Avenue, Bangalore</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
