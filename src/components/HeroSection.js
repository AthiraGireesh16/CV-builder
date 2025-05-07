import React from 'react';
import '../styles/HeroSection.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function HeroSection() {
  const navigate = useNavigate(); // Initialize navigation

  const handleGetStarted = () => {
    navigate('/form'); // Navigate to the EnhancedFormPage when "Get Started" is clicked
  };

  return (
    <div>
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1 style={{ color: 'white' }}>Build Your Dream Resume</h1>
          <p style={{ color: 'white' }}>Create professional resumes effortlessly using our templates.</p>
          <button className="cta-button fade-in-delay-3" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
