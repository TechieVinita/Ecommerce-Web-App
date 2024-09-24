// About.jsx

import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Welcome to MyShop, where your ultimate shopping experience begins. We are dedicated to providing you with a seamless online shopping journey that combines convenience, quality, and style.</p>
        
        <h2>Our Mission</h2>
        <p>At MyShop, our mission is simple yet ambitious: to empower individuals and communities through accessible, innovative, and inspiring products. We curate a diverse selection of goods that cater to your lifestyle and elevate your everyday experiences.</p>
        
        <h2>Our Vision</h2>
        <p>Driven by passion and guided by integrity, we aim to redefine the way you shop online. Our vision is to become a trusted destination where discerning shoppers discover exceptional products that resonate with their unique tastes and preferences.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Quality Commitment:</strong> We meticulously select products that meet our rigorous quality standards, ensuring every item you purchase is built to last.</li>
          <li><strong>Customer Focus:</strong> Your satisfaction is our priority. We are committed to delivering outstanding customer service and support.</li>
          <li><strong>Secure Transactions:</strong> Shop with confidence knowing your personal information is protected with state-of-the-art encryption and security measures.</li>
          <li><strong>Innovative Shopping Experience:</strong> Explore a thoughtfully curated collection that spans fashion, electronics, home essentials, and more.</li>
          <li><strong>Community Engagement:</strong> We believe in giving back. A portion of every purchase contributes to initiatives that make a positive impact in our communities.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
