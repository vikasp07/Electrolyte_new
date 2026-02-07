import React from "react";

const AboutOverview = () => {
  return (
    <section className="about-overview-section">
      <div className="container">

        <div className="about-description">
          <p>
            Electrolyte Solutions is a Mumbai-based ISO 9001:2015 certified electronics repair and refurbishment company specializing in advanced L3/L4 PCB-level repair. We support OEMs and service partners by extending product life, reducing RMA costs, and improving after-sales reliability through deep technical expertise in embedded systems, power electronics, and component-level repair.
          </p>
        </div>

        <h3 className="capabilities-title">Our Capabilities</h3>

        <div className="capabilities-grid-modern">
          <div className="capability-card-modern">
            <div className="capability-icon">
              <i className="ri-award-line"></i>
            </div>
            <h4>ISO 9001:2015 Certified</h4>
            <p>
              Structured quality management system with documented processes,
              traceability, and continuous improvement.
            </p>
          </div>

          <div className="capability-card-modern">
            <div className="capability-icon">
              <i className="ri-cpu-line"></i>
            </div>
            <h4>Component-Level Repair</h4>
            <p>
              BGA, QFN, fine-pitch IC replacement, and micro-soldering capabilities
            </p>
          </div>

          <div className="capability-card-modern">
            <div className="capability-icon">
              <i className="ri-code-box-line"></i>
            </div>
            <h4>Embedded Systems</h4>
            <p>
              Firmware flashing, validation, and functional testing for microcontroller-based products
            </p>
          </div>

          <div className="capability-card-modern">
            <div className="capability-icon">
              <i className="ri-shield-check-line"></i>
            </div>
            <h4>Quality & Traceability</h4>
            <p>
              Complete documentation, repair history tracking, and batch-level reporting
            </p>
          </div>

          <div className="capability-card-modern capability-card-wide">
            <div className="capability-icon">
              <i className="ri-medal-line"></i>
            </div>
            <h4>ZED Bronze Certified (MSME Sustainable ZED Scheme)</h4>
            <p>
              Certified under the Ministry of Micro, Small & Medium Enterprises (Government of India) Sustainable ZED Certification Scheme, recognizing compliance with Zero Defect–Zero Effect principles, sustainable manufacturing practices, and quality-focused operations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;