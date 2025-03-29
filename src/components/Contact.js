import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        "Feel free to reach out to me for collaborations, job opportunities, or just a friendly chat!"
      </p>
      <ul className="contact-info">
        <li><strong>Email:</strong> logeshlogeshking@gmail.com</li>
        <li><strong>Phone:</strong> +91 6381226046</li>
        <li><strong>Address:</strong> Chennai, Tamil Nadu, India</li>
      </ul>
      <div className="contact-buttons">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=logeshlogeshking@gmail.com&su=Job Inquiry&body=Hello, I’d like to discuss a job opportunity!" className="btn">Hire Me</a>
        <a href="#" className="btn">Download CV</a>
      </div>
    </section>
  );
};

export default Contact;