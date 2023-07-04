import React, { useEffect } from 'react';
import Hero from './Hero';
import Cta from './Cta';
import Poster from './Poster';
import Solution from './Solution';
import Review from './Review';
import Benefits from './Benefits';
import Services from './Services';
import Partners from './Partners';
import Faqs from './Faqs';
import Links from './Links';
import Chatbot from './Chatbot';
// AOS Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false, // Whether animation should only happen once on scroll
        mirror: false, // Whether elements should animate out while scrolling past them
      });
  }, []);

    return (
        <>
            <Hero />
            <Cta />
            <Solution />
            <Review />
            <Benefits />
            <Services />
            <Partners />
            <Faqs />
            <Poster />
            <Links />
            <Chatbot />
        </>
    )

}

export default MainPage;
