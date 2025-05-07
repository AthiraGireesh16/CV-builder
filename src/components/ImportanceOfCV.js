import React from 'react';
import useInView from '../hooks/useInView'; // adjust path
import '../styles/ImportanceOfCV.css';

function ImportanceOfCV() {
  const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: section3Ref, inView: section3InView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: section4Ref, inView: section4InView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="importance-of-cv">
      {/* Grid Layout for Sections */}
      <div className="grid-layout">
        {/* Section 1 */}
        <div ref={section1Ref} className={`content-container ${section1InView ? 'fade-in' : ''}`}>
        <h2 className="section-heading" style={{color:'black'}}>What is a CV and How is it Different From a Resume?</h2>
        <div className="two-column-layout">
          <div className="column image-column">
            <img
              src="https://www.resumehelp.com/wp-content/uploads/2024/02/CV-vs-Resume-hero-illustration.png"
              alt="CV vs Resume Illustration"
              className="responsive-image"
            />
          </div>
          <div className="column text-column">
            <p>
              A CV (Curriculum Vitae) is a detailed document highlighting your academic background, research, work history,
              skills, and accomplishments. It’s commonly used in academic, medical, and research fields.
            </p>
            <p>
              In contrast, a resume is a concise summary focused on specific job-related experience. While both are tools to
              showcase your qualifications, their use and content vary depending on your career path and region.
            </p>
          </div>
        </div>
      </div>

        {/* Section 2 */}
        <div ref={section2Ref} className={`content-container ${section1InView ? 'fade-in' : ''}`}>
        <h2 className="section-heading" style={{color:'black'}}>Why Your CV Matters in Job Hunting</h2>
        <div className="two-column-layout">
          <div className="column image-column">
            <img
              src="https://growinc.net/wp-content/uploads/2025/04/How-to-Make-Sure-Your-CV-Stands-Out-scaled.jpg"
              alt="CV vs Resume Illustration"
              className="responsive-image"
            />
          </div>
          <div className="column text-column">
            <ul>
            <li> First impression – Your CV is the recruiter’s first look at you.</li>

            <li>Highlights skills – It showcases your experience and strengths.</li>

            <li>Shows professionalism – A clean CV reflects attention to detail.</li>
            <li>Boosts relevance – Tailored CVs pass filters and grab attention.</li>

            <li>Builds your brand – Tells your unique career story.</li>

            <li>Leads to interviews – A great CV gets you shortlisted.</li>

</ul>
          </div>
        </div>
      </div>

        {/* Section 3 */}
        <div ref={section3Ref} className={`content-container ${section1InView ? 'fade-in' : ''}`}>
        <h2 className="section-heading" style={{color:'black'}}>How Recruiters Evaluate Candidates Based on Their CV</h2>
        <div className="two-column-layout">
          <div className="column image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVfSsYqKAJWxteiGbKShivBLsY0h2zwqmpg&s"
              alt="CV vs Resume Illustration"
              className="responsive-image"
            />
          </div>
          <div className="column text-column">
          <ul>
            <li> Use bullet points for readability</li>
            <li> Quantify your achievements </li>
            <li> Tailor your CV to each role</li>
          </ul>
          </div>
        </div>
      </div>

        {/* Section 4 */}
        <div ref={section4Ref} className={`content-container ${section1InView ? 'fade-in' : ''}`}>
        <h2 className="section-heading" style={{color:'black'}}>Common CV Mistakes and How to Avoid Them</h2>
        <div className="two-column-layout">
          <div className="column image-column">
            <img
              src="https://www.careeraddict.com/uploads/article/58727/illustration-cv-mistakes.jpg"
              alt="CV vs Resume Illustration"
              className="responsive-image"
            />
          </div>
          <div className="column text-column">
          <ul>
            <li> Spelling or grammatical errors</li>
            <li> Generic, unfocused content</li>
            <li>Poor layout or inconsistent styling</li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ImportanceOfCV;
