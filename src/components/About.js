import React from 'react';
import '../styles/About.css'; // Create a CSS file for styling

function About() {
  return (
    <section className="about-section" id='about'>
      <h2 className="section-heading" style={{color:'black'}}>About Us</h2>
      <p className="about-text">
        Our mission is simple: empower job seekers with tools that make resume creation effortless, accessible, and impactful.
        In a world where the job market is more competitive than ever, we believe everyone deserves an equal chance to shine.
        That’s why we’ve created a platform where technology meets creativity—helping you craft resumes that stand out and open doors.
      </p>
      <p className="about-text">
        What sets us apart is our commitment to you. From our **ATS-optimized layouts** to our **beautifully designed templates**,
        every feature is created with the real challenges of job seekers in mind. Whether you’re a fresh graduate exploring your
        career or an experienced professional taking the next big step, our resume builder adapts to your needs. And the best part?
        It’s completely free. No hidden fees, no gimmicks—just pure value designed to support your success.
      </p>
      <p className="about-text">
        Join the thousands of users who’ve trusted us to take their job applications to the next level. Together, we’re building
        a community where opportunity is within reach, creativity is celebrated, and careers thrive. Your success is our goal, and
        we’re here to make the journey not only productive but enjoyable.
      </p>
    </section>
  );
}

export default About;
