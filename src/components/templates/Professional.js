import React from "react";
import "../../styles/proffesional.css";

function ProfessionalTemplate({ formData, isFresher }) {
  return (
    <div className="template-professional">
      <div className="resume-container">
        
        {/* Header Section */}
        <div className="resume-header">
          {formData.personalInfo.image && (
            <div className="profile-image">
              <img src={formData.personalInfo.image} alt="Profile" />
            </div>
          )}
          <h1 className="name">{formData.personalInfo?.fullName || "Full Name"}</h1>
          <p className="title">{formData.personalInfo?.title || "Professional Title"}</p>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          {formData.personalInfo?.phone && <p>📞 {formData.personalInfo.phone}</p>}
          {formData.personalInfo?.email && <p>✉️ <a href={`mailto:${formData.personalInfo.email}`} className="link">{formData.personalInfo.email}</a></p>}
          {formData.personalInfo?.linkedIn && <p>🔗 <a href={formData.personalInfo.linkedIn} className="link">LinkedIn</a></p>}
          {formData.personalInfo?.github && <p>🔗 <a href={formData.personalInfo.github} className="link">GitHub</a></p>}
        </div>

        <div className="resume-content">
          {/* Left Section - Education & Skills */}
          <div className="left-section">
            
            {/* Education */}
            {formData.education?.length > 0 && (
              <div className="section">
                <h2>Education</h2>
                {formData.education.map((edu, index) => (
                  <div key={index} className="edu-item">
                    <p><strong>{edu.degree}</strong> - {edu.institution} ({edu.yearOfPassing})</p>
                  </div>
                ))}
              </div>
            )}

            {/* Core Skills */}
            {formData.skills?.length > 0 && (
              <div className="section">
                <h2>Core Skills</h2>
                <ul className="skills-list">
                  {formData.skills.map((skill, index) => (
                    <li key={index}>{skill.skillName}</li>
                  ))}
                </ul>
              </div>
            )}
             {/* Languages */}
            {formData.languages.length > 0 && (
        <>
          <h2>Languages</h2>
          <ul>
            {formData.languages.map((language, index) => (
              <li key={index}>{language.language}</li>
            ))}
          </ul>
        </>
            )}

          {/* Achievements Section */}
{formData.achievements.length > 0 && (
  <>
    <h2>Achievements</h2>
    {formData.achievements.map((entry, index) => (
      <div key={index}>
        <p><strong>{entry.achievementTitle}</strong></p>
        <p>Type: {entry.achievementType}</p>
        <p>Platform / Organization: {entry.platform}</p>
        <p>Year: {entry.achievementYear}</p>
      </div>
    ))}
  </>
)}

          </div>

          {/* Right Section - Summary & Experience */}
          <div className="right-section">
            
            {/* Career Objective / Summary */}
            {formData.careerObjective && (
              <div className="section">
                <h2>Summary</h2>
                <p>{formData.careerObjective}</p>
              </div>
            )}

            {/* Work Experience */}
            {!isFresher && formData.workExperience?.length > 0 && (
              <div className="section">
                <h2>Professional Experience</h2>
                {formData.workExperience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h3 className="job-title">{exp.jobTitle} - {exp.company}</h3>
                    <p>{exp.duration.from} {exp.isCurrent ? "- Present" : `- ${exp.duration.to}`}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects*/}
        {formData.projects?.length > 0 && (
          <div className="section">
            <h2>Projects</h2>
            {formData.projects.map((project, index) => (
              <div key={index} className="project-item">
                <p><strong>{project.projectTitle}</strong></p>
                <p>{project.description}</p>
                <p>Technologies: {project.technologies}</p>
                {project.link && <p>Link: <a href={project.link}>{project.link}</a></p>}
              </div>
            ))}
          </div>
        )}


          </div>
          
        </div>

        

       

      </div>
    </div>
  );
}

export default ProfessionalTemplate;
