import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-details">
          <p>If you'd like to get in touch, feel free to reach out through the following channels:</p>
          <ul>
            <li>Email: <a href="mailto:vincentminicozzi00@gmail.com">vincentminicozzi00@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/minicozzi" target="_blank" rel="noopener noreferrer">linkedin.com/in/minicozzi</a></li>
            <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
            <li>AngelList: <a href="https://angel.co/yourusername" target="_blank" rel="noopener noreferrer">angel.co/yourusername</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
