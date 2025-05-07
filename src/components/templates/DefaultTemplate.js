import React from "react";
import "../../styles/defaultTemplate.css"; 

function DefaultTemplate({ formData, isFresher }) {
  return (
    <div className="template-default">
      {/* Header Section */}
      <div className="header-section">
        {/* Check if an image is provided */}
        {formData.personalInfo.image && (
          <div className="profile-image">
            <img src={formData.personalInfo.image} alt="Profile" />
          </div>
        )}
        <h1 className="full-name">{formData.personalInfo.fullName}</h1>
        {formData.personalInfo.title && <h2 className="title">{formData.personalInfo.title}</h2>}
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        {formData.personalInfo.phone && (
          <p><strong>Phone:</strong> {formData.personalInfo.countryCode} {formData.personalInfo.phone}</p>
        )}
        {formData.personalInfo.email && (
          <p><strong>Email:</strong> {formData.personalInfo.email}</p>
        )}
        {formData.personalInfo.linkedIn && (
          <p><strong>LinkedIn:</strong> {formData.personalInfo.linkedIn}</p>
        )}
        {formData.personalInfo.github && (
          <p><strong>GitHub:</strong> {formData.personalInfo.github}</p>
        )}
      </div>

      {/* Career Objective */}
      {formData.careerObjective && (
        <>
          <h2>Career Objective</h2>
          <p>{formData.careerObjective}</p>
        </>
      )}

      {/* Education */}
      {formData.education.length > 0 && (
        <>
          <h2>Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <p><strong>{edu.degree}</strong> in {edu.fieldOfStudy} from {edu.institution}</p>
              <p>Year of Passing: {edu.yearOfPassing}, CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </>
      )}

{/* Work Experience */}
{!isFresher && formData.workExperience?.length > 0 && (
  <>
    <h2>Work Experience</h2>
    {formData.workExperience.map((exp, index) => (
      <div key={index}>
        <h3>{exp.jobTitle}</h3>
        <p><strong>Company:</strong> {exp.company}</p>
        <p><strong>Duration:</strong> {exp.duration.from} {exp.isCurrent ? "- Present" : `- ${exp.duration.to}`}</p>
        <p>{exp.description}</p>
      </div>
    ))}
  </>
)}


      {/* Skills */}
      {formData.skills.length > 0 && (
        <>
          <h2>Skills</h2>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill.skillName}</li>
            ))}
          </ul>
        </>
      )}

      {/* Projects */}
      {formData.projects.length > 0 && (
        <>
          <h2>Projects</h2>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <p><strong>{project.projectTitle}</strong></p>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
              {project.link && <p>Link: {project.link}</p>}
            </div>
          ))}
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
    </div>
  );
}

export default DefaultTemplate;
