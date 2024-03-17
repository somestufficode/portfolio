import React from 'react';
import './Contact.css';
import mail from '../../mail.png';
import github from '../../github.png';
import linkedin from '../../linkedin.png';
import resumeIcon from '../../resumeIcon.png'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-details">
          <div className="desc-container">
            <p className="get-in-touch">If you'd like to get in touch or connect, feel free to reach out through the following channels (resume included last):</p>
          </div>
          <div className="icon-links">
          <a id="linkedin-link" href="https://www.linkedin.com/in/minicozzi" target="_blank" rel="noopener noreferrer">
            <img className="linkedin-icon" src={linkedin} alt="LinkedIn" />
          </a>
          <a id="github-link" href="https://github.com/vinicozzi" target="_blank" rel="noopener noreferrer">
            <img className="github-icon" src={github} alt="GitHub" />
          </a>
            <a href="mailto:vincentminicozzi00@gmail.com">
              {/* vincentminicozzi00@gmail.com */}
              <img className="mail-icon" src={mail} alt="Email" />
            </a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQTZ2WhHCVNKijDJ26s7q4bvGJ9c7J9Pc9IUCMcpOO8jRDLNBL5r-mf0i8uFIdIRsRuT-hn9qwWLFMl/pub" target="_blank" rel="noopener noreferrer">
              <img className="resume-icon" src={resumeIcon} alt="Resume" />
          </a>
          {/* <li>AngelList: <a href="https://angel.co/vincent-minicozzi" target="_blank" rel="noopener noreferrer">angel.co/yourusername</a></li> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
