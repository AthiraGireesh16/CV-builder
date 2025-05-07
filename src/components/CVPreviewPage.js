import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DefaultTemplate from './templates/DefaultTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import ProfessionalTemplate from './templates/Professional'
import html2pdf from "html2pdf.js";
import jsPDF from 'jspdf';
import '../styles/templateStyles.css';

function CVPreviewPage() {
  const location = useLocation();
  const { formData, isFresher } = location.state || { formData: {}, isFresher: false };

  const [selectedTemplate, setSelectedTemplate] = useState("default");

  const handleDownload = () => {
    const section = document.querySelector(".section-1");
  
    // Store current styles
    const originalStyles = {
      boxShadow: section.style.boxShadow,
      border: section.style.border,
      backgroundColor: section.style.backgroundColor,
      padding: section.style.padding,
      bodyBg: document.body.style.backgroundColor,
    };
  
    // Clean up visuals for export
    section.style.boxShadow = "none";
    section.style.border = "none";
    section.style.backgroundColor = "#FFFFFF";
    section.style.padding = "0";
    document.body.style.backgroundColor = "#FFFFFF";
  
    // Hide extra elements
    const hiddenElems = document.querySelectorAll(".no-print");
    hiddenElems.forEach(elem => (elem.style.display = "none"));
  
    // Wait for images to load
    const images = section.querySelectorAll("img");
    const imagePromises = Array.from(images).map(img =>
      new Promise(resolve => {
        if (img.complete) resolve();
        else img.onload = img.onerror = resolve;
      })
    );
  
    Promise.all(imagePromises).then(() => {
      const opt = {
        margin: [0, 0, 0, 0],
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#FFFFFF" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all"] },
      };
  
      html2pdf().set(opt).from(section).save().then(() => {
        // Restore original styles
        hiddenElems.forEach(elem => (elem.style.display = "block"));
        section.style.boxShadow = originalStyles.boxShadow;
        section.style.border = originalStyles.border;
        section.style.backgroundColor = originalStyles.backgroundColor;
        section.style.padding = originalStyles.padding;
        document.body.style.backgroundColor = originalStyles.bodyBg;
      });
    });
  };
  




  

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate formData={formData} isFresher={isFresher} />;
      case "minimal":
        return <MinimalTemplate formData={formData} isFresher={isFresher} />;
        case "professional":
          return <ProfessionalTemplate formData={formData} isFresher={isFresher} />
      case "default":
      default:
        return <DefaultTemplate formData={formData} isFresher={isFresher} />;
    }
  };

  return (
    <div className="cv-preview-container">

      {/* Main CV Area */}
      <div className="section-1" id="cv-content">
  <div className="template-container">
    {renderTemplate()}
  </div>
</div>

{/* Place the button after section-1 */}
<button className="download-button no-print" onClick={handleDownload}>
  Download PDF
</button>

        

      {/* Template Selector */}
      <div className="section-2 no-print">
        <h2 className="section-title">Select a Template</h2>
        <div className="template-cards">
          <div
            className={`template-card ${selectedTemplate === "default" ? "selected" : ""}`}
            onClick={() => setSelectedTemplate("default")}
          >
            <img src="/default.png" alt="Default Template" className="template-image" />
            <p>Default Template</p>
          </div>
          <div
            className={`template-card ${selectedTemplate === "modern" ? "selected" : ""}`}
            onClick={() => setSelectedTemplate("modern")}
          >
            <img src="/modern.png" alt="Modern Template" className="template-image"  />
            <p>Modern Template</p>
          </div>
          <div
            className={`template-card ${selectedTemplate === "minimal" ? "selected" : ""}`}
            onClick={() => setSelectedTemplate("minimal")}
          >
           <img src="/minimal.png" alt="Minimal Template" className="template-image" />
            
            <p>Minimal Template</p>
          </div>
          <div
            className={`template-card ${selectedTemplate === "professional" ? "selected" : ""}`}
            onClick={() => setSelectedTemplate("professional")}
          >
            <img src="/professional.png" alt="Professional Template" className="template-image"  />
            <p>Modern Template</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default CVPreviewPage;
