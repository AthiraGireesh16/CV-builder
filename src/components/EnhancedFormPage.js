import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnhancedFormPage.css';
import TemplatePreview from './TemplatePreview';



function EnhancedFormPage() {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      countryCode: '+91',
      linkedIn: '',
      github: '',
      profilePicture: null,
      dateOfBirth: '',
    },
    careerObjective: '',
    education: [
      { degree: '', institution: '', yearOfPassing: '', cgpa: '' }
    ],
    workExperience: [
      {
        jobTitle: '',
        company: '',
        duration: { from: '', to: '' },
        description: '',
        isCurrent: false  // <-- Add this line
      }
    ],
    skills: [{ skillName: '' }],
    projects: [{ projectTitle: '', description: '', technologies: [], link: '' }],
    achievements: [{ achievementTitle: '', achievementType: '', platform: '', achievementYear: '' }],
    languages: [{ language: '' }],
    declaration: {
      agreed: false,
      text: "I hereby declare that the above information is true to the best of my knowledge."
    },
  });
  

  const [selectedTemplate, setSelectedTemplate] = useState('default');

  const removeEntry = (section, index, subField = null) => {
    if (subField) {
      const updatedField = [...formData[section]];
      updatedField[index][subField].splice(index, 1);
      setFormData({ ...formData, [section]: updatedField });
    } else {
      const updatedSection = [...formData[section]];
      updatedSection.splice(index, 1);
      setFormData({ ...formData, [section]: updatedSection });
    }
  };

  const [isFresher, setIsFresher] = useState(false);

  // Handle input changes
  const handleChange = (e, section, index, subField = null) => {
    const { name, value, type, files } = e.target;
    const updatedFormData = { ...formData };
  
    if (section === 'personalInfo' && name === 'profilePicture') {
      updatedFormData.personalInfo[name] = files[0];
    } else if (subField) {
      const updatedSection = [...formData[section]];
  
      // Handle nested subField like 'duration.from'
      if (subField.includes('.')) {
        const [parentKey, childKey] = subField.split('.');
        updatedSection[index][parentKey] = {
          ...updatedSection[index][parentKey],
          [childKey]: value
        };
      } else {
        updatedSection[index][subField] = value;
      }
  
      updatedFormData[section] = updatedSection;
    } else {
      updatedFormData[section][name] = value;
    }
  
    setFormData(updatedFormData);
  };
  

  // Add new entries (e.g., for repeater functionality)
  const addEntry = (section) => {
    const newEntry =
      section === 'education'
        ? { degree: '',fieldOfStudy:'', institution: '', yearOfPassing: '', cgpa: '' }
        : section === 'workExperience'
        ? { jobTitle: '', company: '', duration: { from: '', to: '' }, description: '' }
        : section === 'projects'
        ? { projectTitle: '', description: '', technologies: [], link: '' }
        : section === 'skills'
        ? { skillName: '' }
        : section === 'achievements' // <-- Added this condition
        ? { achievementTitle: '', achievementType: '', platform: '', achievementYear: '' }
        : { courseName: '', platform: '', completionYear: '' };
    setFormData({ ...formData, [section]: [...formData[section], newEntry] });
  };

  const handleFresherToggle = () => {
    setIsFresher((prevIsFresher) => !prevIsFresher);
  };
  

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/preview', { state: { formData, isFresher } });
  };

  return (
    <div className="advanced-form">
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Info Section */}
        <div className="form-section">
  <h2>Personal Information</h2>

  {/* Full Name */}
  <input
    type="text"
    name="fullName"
    placeholder="Full Name"
    onChange={(e) => handleChange(e, 'personalInfo')}
    required
  />
  <span className="validation-error" id="fullName-error"></span>


    {/* Title Section */}
<label>
  Title <span className="required">*</span>
</label>
<input
  type="text"
  name="title"
  placeholder="Title (e.g., Software Engineer)"
  onChange={(e) => handleChange(e, 'personalInfo')}
  required
/>
<span className="validation-error" id="title-error"></span>









  {/* Email */}
  <input
    type="email"
    name="email"
    placeholder="Email Address"
    onChange={(e) => handleChange(e, 'personalInfo')}
    required
  />
  <span className="validation-error" id="email-error"></span>

  {/* Phone Number */}
  <div style={{ display: 'flex', gap: '10px' }}>
    <select
      name="countryCode"
      onChange={(e) => handleChange(e, 'personalInfo')}
      required
    >
      <option value="+91">+91</option>
      <option value="+1">+1</option>
      <option value="+44">+44</option>
      {/* Add more country codes */}
    </select>
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      onChange={(e) => handleChange(e, 'personalInfo')}
      required
      pattern="\d{10,15}"
      title="Phone number must be between 10 to 15 digits"
    />
  </div>
  <span className="validation-error" id="phone-error"></span>

  {/* LinkedIn */}
  <input
    type="url"
    name="linkedIn"
    placeholder="LinkedIn Profile (e.g., https://linkedin.com/in/username)"
    onChange={(e) => handleChange(e, 'personalInfo')}
    pattern="https?://.+"
    title="Please enter a valid URL starting with https://"
  />
  <span className="validation-error" id="linkedIn-error"></span>

  {/* GitHub / Portfolio */}
  <input
    type="url"
    name="github"
    placeholder="GitHub / Portfolio (e.g., https://github.com/username)"
    onChange={(e) => handleChange(e, 'personalInfo')}
    pattern="https?://.+"
    title="Please enter a valid URL starting with https://"
  />
  <span className="validation-error" id="github-error"></span>

  {/* Profile Picture */}
  <input
    type="file"
    name="profilePicture"
    accept="image/*"
    onChange={(e) => handleChange(e, 'personalInfo')}
  />
  <span className="validation-error" id="profilePicture-error"></span>
</div>

        {/* Career Objective */}
        <div className="form-section">
          <h2>Career Objective / Summary</h2>
          <textarea
            name="careerObjective"
            placeholder="Write a short career objective (max 250 characters)"
            maxLength="1000"
            onChange={(e) => setFormData({ ...formData, careerObjective: e.target.value })}
          />
        </div>

        {/* Education Section */}
        <div className="form-section">
  <h2>Education</h2>
  {formData.education.map((entry, index) => (
    <div key={index} className="entry">
      {/* Select for Degree */}
      <select
        name="degree"
        value={entry.degree}
        onChange={(e) => handleChange(e, 'education', index, 'degree')}
        required
      >
        <option value="">Select Degree</option>
        <option value="High School Diploma">High School Diploma</option>
        <option value="PUC / Plus Two">PUC / Plus Two</option>
        <option value="Diploma">Diploma</option>
        <option value="Bachelor of Arts (BA)">Bachelor of Arts (BA)</option>
        <option value="Bachelor of Science (BSc)">Bachelor of Science (BSc)</option>
        <option value="Bachelor of Commerce (BCom)">Bachelor of Commerce (BCom)</option>
        <option value="Bachelor of Engineering (BE)">Bachelor of Engineering (BE)</option>
        <option value="Bachelor of Technology (BTech)">Bachelor of Technology (BTech)</option>
        <option value="Bachelor of Computer Applications (BCA)">Bachelor of Computer Applications (BCA)</option>
        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
        <option value="Bachelor of Education (BEd)">Bachelor of Education (BEd)</option>
        <option value="Master of Arts (MA)">Master of Arts (MA)</option>
        <option value="Master of Science (MSc)">Master of Science (MSc)</option>
        <option value="Master of Commerce (MCom)">Master of Commerce (MCom)</option>
        <option value="Master of Engineering (ME)">Master of Engineering (ME)</option>
        <option value="Master of Technology (MTech)">Master of Technology (MTech)</option>
        <option value="Master of Computer Applications (MCA)">Master of Computer Applications (MCA)</option>
        <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
        <option value="Master of Education (MEd)">Master of Education (MEd)</option>
        <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
        <option value="Other">Other</option>
      </select>

      {/* Input for Field of Study */}
      <input
        type="text"
        name="fieldOfStudy"
        placeholder="Field of Study"
        value={entry.fieldOfStudy}
        onChange={(e) => handleChange(e, 'education', index, 'fieldOfStudy')}
        pattern="[A-Za-z\s,.()]+"
        title="Field of Study should only contain letters and spaces."
        required
      />

      {/* Input for Institution Name */}
      <input
        type="text"
        name="institution"
        placeholder="Institution Name"
        value={entry.institution}
        onChange={(e) => handleChange(e, 'education', index, 'institution')}
        pattern="[A-Za-z\s,.()]+"
        title="Institution Name should only contain letters and spaces."
        required
      />

      {/* Select for Year of Passing */}
      <select
        name="yearOfPassing"
        value={entry.yearOfPassing}
        onChange={(e) => handleChange(e, 'education', index, 'yearOfPassing')}
        required
      >
        <option value="">Year of Passing</option>
        {Array.from({ length: 25 }, (_, i) => {
          const year = new Date().getFullYear() - i;
          return <option key={year} value={year}>{year}</option>;
        })}
      </select>

      {/* Input for CGPA / Percentage */}
      <input
        type="text"
        name="cgpa"
        placeholder="CGPA / Percentage"
        value={entry.cgpa}
        onChange={(e) => handleChange(e, 'education', index, 'cgpa')}
        pattern="^\d{1,3}(\.\d{1,2})?$"
        title="Enter a valid number with up to two decimal points, e.g., 70.23."
        required        
      />
    </div>
  ))}
  <button type="button" onClick={() => addEntry('education')}>Add Education</button>
</div>



{/* Work Experience */}
{!isFresher && (
  <div className="form-section">
    <h2>Work Experience</h2>
    {formData.workExperience.map((entry, index) => (
      <div key={index} className="entry">
        {/* Job Title */}
        <label>Job Title <span className="required">*</span></label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={entry.jobTitle}
          onChange={(e) => handleChange(e, "workExperience", index, "jobTitle")}
          required
        />

        {/* Company */}
        <label>Company <span className="required">*</span></label>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={entry.company}
          onChange={(e) => handleChange(e, "workExperience", index, "company")}
          required
        />

        {/* Duration */}
        <label>Duration (From - To)</label>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="date"
            name="from"
            value={entry.duration.from || ""}
            onChange={(e) => handleChange(e, 'workExperience', index, 'duration.from')}
            required
          />

          {entry.isCurrent ? (
            <span>Present</span>
          ) : (
            <input
              type="date"
              name="to"
              value={entry.duration.to || ""}
              onChange={(e) => handleChange(e, 'workExperience', index, 'duration.to')}
              required
            />
          )}
        </div>

        {/* Currently Working Checkbox */}
        <div className="currently-working-checkbox">
  <input
    type="checkbox"
    checked={entry.isCurrent || false}
    onChange={(e) =>
      handleChange(
        { target: { value: e.target.checked } },
        'workExperience',
        index,
        'isCurrent'
      )
    }
    id={`current-checkbox-${index}`}
  />
  <label htmlFor={`current-checkbox-${index}`}>Currently working here</label>
</div>


        {/* Roles and Responsibilities */}
        <label>Roles and Responsibilities</label>
        <textarea
          name="description"
          placeholder="Roles and Responsibilities"
          value={entry.description}
          onChange={(e) => handleChange(e, 'workExperience', index, 'description')}
        />

        {/* Remove Button */}
        <button type="button" onClick={() => removeEntry("workExperience", index)}>
          Remove Work Experience
        </button>
      </div>
    ))}

    <button type="button" onClick={() => addEntry("workExperience")}>
      Add Work Experience
    </button>
  </div>
)}




<button type="button" onClick={handleFresherToggle}>
  {isFresher ? "I'm Not a Fresher" : "I'm a Fresher"}
</button>




       {/* Skills Section */}
<div className="form-section">
  <h2>Skills</h2>
  {formData.skills.map((entry, index) => (
    <div key={index} className="entry">
      <input
        type="text"
        name="skillName"
        placeholder="Skill Name (e.g., HTML)"
        value={entry.skillName}
        onChange={(e) => handleChange(e, 'skills', index, 'skillName')}
        pattern="[A-Za-z\s.,()]+"
        title="Skill name should only contain letters and spaces."
        required
      />
      <button type="button" onClick={() => removeEntry('skills', index)}>Remove Skill</button>
    </div>
  ))}
  <button type="button" onClick={() => addEntry('skills')}>Add Skill</button>
</div>

{/* Projects Section */}
<div className="form-section">
  <h2>Projects</h2>
  {formData.projects.map((entry, index) => (
    <div key={index} className="entry">
      {/* Project Title */}
      <input
        type="text"
        name="projectTitle"
        placeholder="Project Title"
        value={entry.projectTitle}
        onChange={(e) => handleChange(e, 'projects', index, 'projectTitle')}
        required
      />

      {/* Project Description */}
      <textarea
        name="description"
        placeholder="Project Description"
        value={entry.description}
        onChange={(e) => handleChange(e, 'projects', index, 'description')}
        required
      ></textarea>

     {/* Technologies Used */}
<textarea
  name="technologies"
  placeholder="Technologies Used (e.g., React, Node.js)"
  value={entry.technologies}
  onChange={(e) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index].technologies = e.target.value; // Store as plain text for now
    setFormData({ ...formData, projects: updatedProjects });
  }}
  required
/>


      {/* Project Link */}
      <input
        type="url"
        name="link"
        placeholder="GitHub or Live Link"
        value={entry.link}
        onChange={(e) => handleChange(e, 'projects', index, 'link')}
        pattern="https?://.+"
        title="Please enter a valid URL starting with https://"
      />

      <button type="button" onClick={() => removeEntry('projects', index)}>Remove Project</button>
    </div>
  ))}
  <button type="button" onClick={() => addEntry('projects')}>Add Project</button>
</div>

{/* Achievements Section */}
<div className="form-section">
  <h2>Achievements</h2>
  {formData.achievements.map((entry, index) => (
    <div key={index} className="entry">
      {/* Achievement Title */}
      <input
        type="text"
        name="achievementTitle"
        placeholder="Achievement Title"
        value={entry.achievementTitle}
        onChange={(e) => handleChange(e, 'achievements', index, 'achievementTitle')}
        required
      />

      {/* Type (Certification, Award, Recognition, etc.) */}
      <select
        name="achievementType"
        value={entry.achievementType}
        onChange={(e) => handleChange(e, 'achievements', index, 'achievementType')}
        required
      >
        <option value="">Select Type</option>
        <option value="Certificate">Certificate</option>
        <option value="Award">Award</option>
        <option value="Recognition">Recognition</option>
        <option value="Other">Other</option>
      </select>

      {/* Platform / Organization */}
      <input
        type="text"
        name="platform"
        placeholder="Platform / Organization"
        value={entry.platform}
        onChange={(e) => handleChange(e, 'achievements', index, 'platform')}
        required
      />

      {/* Year of Achievement */}
      <select
        name="achievementYear"
        value={entry.achievementYear}
        onChange={(e) => handleChange(e, 'achievements', index, 'achievementYear')}
        required
      >
        <option value="">Year of Achievement</option>
        {Array.from({ length: 25 }, (_, i) => {
          const year = new Date().getFullYear() - i;
          return <option key={year} value={year}>{year}</option>;
        })}
      </select>

      <button type="button" onClick={() => removeEntry('achievements', index)}>Remove Achievement</button>
    </div>
  ))}
  <button type="button" onClick={() => addEntry('achievements')}>Add Achievement</button>
</div>


        {/* Languages Section */}
        <div className="form-section">
          <h2>Languages Known</h2>
          {formData.languages.map((entry, index) => (
            <div key={index} className="entry">
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={entry.language}
                onChange={(e) => handleChange(e, 'languages', index, 'language')}
              />
              
              <button type="button" onClick={() => removeEntry('languages', index)}>Remove Language</button>
            </div>
          ))}
          <button type="button" onClick={() => addEntry('languages')}>Add Language</button>
        </div>

        {/* Declaration Section */}
        <div className="form-section">
          <h2>Declaration</h2>
          <input
            type="checkbox"
            name="agreed"
            checked={formData.declaration.agreed}
            onChange={(e) => setFormData({
              ...formData,
              declaration: { ...formData.declaration, agreed: e.target.checked },
            })}
          />
          <label>
            {formData.declaration.text}
          </label>
          <textarea
            name="declarationText"
            value={formData.declaration.text}
            onChange={(e) => setFormData({
              ...formData,
              declaration: { ...formData.declaration, text: e.target.value },
            })}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default EnhancedFormPage;
