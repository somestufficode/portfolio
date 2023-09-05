import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-details">
          <div className="desc-container">
          <p className="get-in-touch">If you'd like to get in touch, feel free to reach out through the following channels:</p>
          </div>
            <p className="email">Email: <a href="mailto:vincentminicozzi00@gmail.com">vincentminicozzi00@gmail.com</a></p>
            <a id="linkedin-link"href="https://www.linkedin.com/in/minicozzi" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a id="github-link"href="https://github.com/vinicozzi" target="_blank" rel="noopener noreferrer">Github</a>
            {/* <li>AngelList: <a href="https://angel.co/vincent-minicozzi" target="_blank" rel="noopener noreferrer">angel.co/yourusername</a></li> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
