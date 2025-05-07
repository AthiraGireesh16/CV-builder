import React from "react";
import "../../styles/modernTemplate.css";

function ModernTemplate({ formData, isFresher }) {
  return (
    <div className="template-modern">
      <div className="modern-container">
        {/* Left Sidebar */}
        <div className="modern-sidebar">


          {/* Contact Info */}
          <div className="sidebar-section">
            <h3>CONTACT</h3>
            {formData.personalInfo?.phone && <p>📞 {formData.personalInfo.phone}</p>}
            {formData.personalInfo?.email && (
              <p>✉️ <a href={`mailto:${formData.personalInfo.email}`} className="link">{formData.personalInfo.email}</a></p>
            )}
            {formData.personalInfo?.linkedIn && (
              <p>🔗 <a href={formData.personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a></p>
            )}
            {formData.personalInfo?.github && (
              <p>🔗 <a href={formData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a></p>
            )}
          </div>

          {/* Languages */}
          {Array.isArray(formData.languages) && formData.languages.length > 0 && (
            <div className="sidebar-section">
              <h3>LANGUAGES</h3>
              <ul className="languages-list">
                {formData.languages.map((language, index) => (
                  <li key={index}>{language?.language || "Unknown Language"}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {Array.isArray(formData.skills) && formData.skills.length > 0 && (
            <div className="sidebar-section">
              <h3>SKILLS</h3>
              <ul className="skills-list">
                {formData.skills.map((skill, idx) => (
                  <li key={idx}>{skill.skillName}</li>
                ))}
              </ul>
            </div>
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

        {/* Right Content */}
        <div className="modern-content">
          {/* Name and Title */}
          <div className="header-section-modern">
            <h1 className="full-name">{formData.personalInfo?.fullName}</h1>
            {formData.personalInfo?.title && <h2 className="title">{formData.personalInfo?.title}</h2>}
          </div>

          {/* Career Objective Section */}
          {formData.careerObjective && (
            <>
              <h3 className="section-title">CAREER OBJECTIVE</h3>
              <p>{formData.careerObjective}</p>
            </>
          )}

          {/* Work Experience */}
          {!isFresher && Array.isArray(formData.workExperience) && formData.workExperience.length > 0 && (
            <>
              <h3 className="section-title">WORK EXPERIENCE</h3>
              {formData.workExperience.map((exp, idx) => (
                <div key={idx} className="experience-item">
                  <p><strong>{exp.jobTitle}</strong> | {exp.company} | {exp.duration?.from} - {exp.duration?.to || "Present"}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </>
          )}

          {/* Projects Section */}
          {Array.isArray(formData.projects) && formData.projects.length > 0 && (
            <>
              <h3 className="section-title">PROJECTS</h3>
              {formData.projects.map((project, idx) => (
                <div key={idx} className="project-item">
                  <p><strong>{project.projectTitle}</strong></p>
                  <p>{project.description}</p>
                  {project.technologies && <p><strong>Technologies:</strong> {project.technologies}</p>}
                  {project.link && <p><strong>Link:</strong> <a href={project.link} target="_blank">{project.link}</a></p>}
                </div>
              ))}
            </>
          )}

          {/* Education */}
          {Array.isArray(formData.education) && formData.education.length > 0 && (
            <>
              <h3 className="section-title">ACADEMIC BACKGROUND</h3>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <p><strong>{edu.degree}</strong> | {edu.fieldOfStudy} | {edu.institution} ({edu.yearOfPassing})</p>
                </div>
              ))}
            </>
          )}

          
        </div>
      </div>
    </div>
  );
}

export default ModernTemplate;
