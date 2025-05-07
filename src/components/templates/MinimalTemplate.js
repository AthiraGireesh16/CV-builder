import React from "react";
import "../../styles/minimalTemplate.css";

function MinimalTemplate({ formData, isFresher }) {
    return (
        <div className="template-minimal">
            {/* Header Section */}
            <div className="header">
                <h1 className="name">{formData.personalInfo?.fullName || "Full Name"}</h1>
                {formData.personalInfo?.title && <p className="title">{formData.personalInfo.title}</p>}
            </div>
{/*Contact Information */}
            <div className="contact-info">
    {formData.personalInfo?.phone && <p className="info-item">📞 {formData.personalInfo.phone}</p>}
    {formData.personalInfo?.email && (
        <p className="info-item">
            ✉️ <a href={`mailto:${formData.personalInfo.email}`} className="link">{formData.personalInfo.email}</a>
        </p>
    )}
    {formData.personalInfo?.linkedIn && (
        <p className="info-item">
            🔗 <a href={formData.personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        </p>
    )}
    {formData.personalInfo?.github && (
        <p className="info-item">
            🔗 <a href={formData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        </p>
    )}
</div>


            {/* Career Objective Section */}
            {formData.careerObjective && (
                <div className="section">
                    <h2>Career Objective</h2>
                    <p className="section-content">{formData.careerObjective}</p>
                </div>
            )}

            {/* Work Experience Section */}
            {!isFresher && formData.workExperience?.length > 0 && (
                <div className="section">
                    <h2>Work Experience</h2>
                    {formData.workExperience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3 className="job-title">{exp.jobTitle}</h3>
                            <p><strong>Company:</strong> {exp.company}</p>
                            <p><strong>Duration:</strong> {exp.duration?.from || "N/A"} - {exp.duration?.to || "Present"}</p>
                            <p className="job-description">{exp.description || "No description provided"}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Projects Section */}
            {formData.projects?.length > 0 && (
                <div className="section">
                    <h2>Projects</h2>
                    {formData.projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <p><strong>{project.projectTitle}</strong></p>
                            <p>{project.description}</p>
                            {project.technologies && (
                                <p><strong>Technologies:</strong> {project.technologies}</p>
                            )}
                            {project.link && <p><strong>Link:</strong> <a href={project.link}>{project.link}</a></p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Education Section */}
            {formData.education?.length > 0 && (
                <div className="section">
                    <h2>Education</h2>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="edu-item">
                            <p className="edu-degree"><strong>{edu.degree}</strong>, {edu.fieldOfStudy}</p>
                            <p className="edu-detail">{edu.institution} ({edu.yearOfPassing})</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills Section */}
            {formData.skills?.length > 0 && (
                <div className="section">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        {formData.skills.map((skill, index) => (
                            <li key={index}>{skill.skillName}</li>
                        ))}
                    </ul>
                </div>
            )}

{formData.achievements?.length > 0 && (
  <div className="section">
    <h2>Achievements</h2>
    {formData.achievements.map((entry, index) => (
      <div key={index}>
        <p><strong>{entry.achievementTitle}</strong></p>
        <p>Type: {entry.achievementType}</p>
        <p>Platform / Organization: {entry.platform}</p>
        <p>Year: {entry.achievementYear}</p>
      </div>
    ))}
  </div>
)}


            {/* Languages Section */}
            {formData.languages?.length > 0 && (
                <div className="section">
                    <h2>Languages</h2>
                    <ul className="languages-list">
                    {formData.languages.map((language, index) => (
              <li key={index}>{language.language}</li>
            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MinimalTemplate;
