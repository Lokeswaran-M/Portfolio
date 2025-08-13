import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 px-8 bg-purple-200/50 text-center"
    >
      <h2 className="text-2xl font-semibold mb-12 hover:text-pink-400 transition-colors duration-300">
        Contact Me
      </h2>
      <p className="font-semibold">
        "Feel free to reach out to me for collaborations, job opportunities, or just a friendly chat!"
      </p>
      <ul className="list-none mt-8 mb-12 space-y-2">
        <li className="text-lg"> 
          <strong>Email:</strong> logeshlogeshking@gmail.com
        </li>
        <li className="text-lg">
          <strong>Phone:</strong> +91 6381226046
        </li>
        <li className="text-lg">
          <strong>Address:</strong> Chennai, Tamil Nadu, India
        </li>
      </ul>
      <div className="mt-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=logeshlogeshking@gmail.com&su=Job Inquiry&body=Hello, I’d like to discuss a job opportunity!"
          className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md mx-2 hover:bg-gray-700 transition-colors duration-300"
        >
          Hire Me
        </a>
        <a
          href="#"
          className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md mx-2 hover:bg-gray-700 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
