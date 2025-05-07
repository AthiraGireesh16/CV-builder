import React from 'react';
import HeroSection from './HeroSection';
import ImportanceOfCV from './ImportanceOfCV';
import '../styles/LandingPage.css';
import About from './About';
import WhyOurResumeBuilder from './WhyOurResumeBuilder';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="landing-page" id=''>
      <HeroSection />
      <About />
      <ImportanceOfCV />
      <WhyOurResumeBuilder />
      <Footer />
    </div>
  );
}

export default LandingPage;
