import React from 'react';

import '../styles/WhyOurResumeBuilder.css'; // Create a CSS file for this section's styling

function WhyOurResumeBuilder() {
  return (
    <section className="why-our-resume-builder">
      <h2 className="section-heading">Why Our Resume Builder is the Smart Choice</h2>
      <p className="intro-text">
        In today’s fast-paced job market, creating a resume that stands out isn’t just about style—it’s about crafting a tool
        that speaks directly to both recruiters and hiring algorithms. Our resume builder is designed with real job seekers 
        in mind, providing the perfect balance of <strong>professional appeal</strong> and <strong>functionality</strong>. 
        Whether you’re taking your first step into the professional world or aiming for the top, we make it easy, stress-free, 
        and completely free.
      </p>
      <div className="features">
        <div className="feature">
          <h3>✅ ATS-Optimized Layouts</h3>
          <p>
            Say goodbye to the fear of being rejected by Applicant Tracking Systems (ATS). Our layouts are optimized to sail 
            smoothly through automated filters and get your resume noticed by recruiters.
          </p>
        </div>
        <div className="feature">
          <h3>🎨 Sleek, Professional Templates</h3>
          <p>
            Make a lasting first impression with modern, polished designs that grab attention. From minimalist to creative, 
            we’ve got styles to fit any career path.
          </p>
        </div>
        <div className="feature">
          <h3>✏️ Effortless Customization</h3>
          <p>
            Need to tweak your resume for a specific role? No problem. Our builder makes it quick and simple to customize 
            your CV to suit any job or industry.
          </p>
        </div>
        <div className="feature">
          <h3>📥 Free and Easy Downloads</h3>
          <p>
            Once your CV is ready, download it instantly as a professional PDF—all for free, with no hidden charges or hassle.
          </p>
        </div>
        <div className="feature">
          <h3>📱 Accessible Anywhere</h3>
          <p>
            Build, edit, and refine your resume on any device, anytime. Our responsive platform ensures a seamless experience 
            whether you’re using a laptop, tablet, or phone.
          </p>
        </div>
        <div className="feature">
          <h3>💡 Designed by Job Seekers, for Job Seekers</h3>
          <p>
            We’ve walked in your shoes. That’s why every feature of our tool is crafted to deliver real-world results. 
            We know what works because we’ve been there.
          </p>
        </div>
      </div>
    </section>
  );
}



export default WhyOurResumeBuilder;