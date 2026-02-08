import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import WelcomeSection from '../components/WelcomeSection';
import ChooseUs from '../components/ChooseUs';
import Statistics from '../components/Statistics';
import FeaturedServices from '../components/FeaturedServices';
import MeetOurDoctors from '../components/MeetOurDoctors';
import ReviewsPreview from '../components/ReviewsPreview';
import CTASection from '../components/CTASection';

const Index = () => {
    return (
        <div>
            <HeroCarousel />
            <WelcomeSection />
            <ChooseUs />
            <Statistics />
            <FeaturedServices />
            <MeetOurDoctors />
            <ReviewsPreview />
            <CTASection />
        </div>
    );
};

export default Index;