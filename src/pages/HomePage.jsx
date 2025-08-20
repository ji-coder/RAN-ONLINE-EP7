import HeroSection from '../components/Home/HeroSection'
import NewsEvents from '../components/Home/NewsEvents'
import React, { useEffect } from 'react';
import ServerInformation from '../components/Home/ServerInformation';


function HomePage() {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); // Empty dependency array means this runs only on mount

    return (
        <div>
            <HeroSection />
    
            <NewsEvents /> 
            <ServerInformation />
        </div>
    );
}

export default HomePage;
