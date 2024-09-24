// Contact.jsx

import React from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or need assistance? We're here to help. Please reach out to us through one of the following channels:</p>
        
        <div className="contact-info">
          <h2>Email</h2>
          <p><strong>Email:</strong> support@yourshoppingapp.com</p>
          
          <h2>Phone</h2>
          <p><strong>Phone:</strong> +1-800-123-4567</p>
          
          <h2>Address</h2>
          <p><strong>Address:</strong><br/>123 Shopping Street,
<br/>Suite 456,
<br/>Citytown, ST 78901,
<br/>United States</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
