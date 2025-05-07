const TemplatePreview = ({ formData, template }) => {
    return (
      <div className={`template-${template}`}>
        {/* Render personal info */}
        <h1>{formData.personalInfo.fullName}</h1>
        <p>Email: {formData.personalInfo.email}</p>
        <p>Phone: {formData.personalInfo.countryCode} {formData.personalInfo.phone}</p>
  
        {/* Render other sections */}
        <h2>Career Objective</h2>
        <p>{formData.careerObjective}</p>
        
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree} from {edu.institution}</p>
            <p>Year: {edu.yearOfPassing}, CGPA: {edu.cgpa}</p>
          </div>
        ))}
  
        {/* Repeat for work experience, skills, projects, etc. */}
      </div>
    );
  };
  

  export default TemplatePreview;