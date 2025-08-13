import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 px-8 text-center"
    >
      <h2 className="text-2xl mb-12 font-semibold hover:text-pink-400 ">My Works</h2>
      <div className="flex flex-wrap justify-center items-start gap-20">
        <div className="bg-blue-100/35 p-6 rounded-lg shadow-lg w-[45%] min-w-[350px] max-w-[500px] text-left transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl mb-2">Frontend Development</h3>
          <p className="text-base text-black font-light mb-4">
            I specialize in building responsive and dynamic user interfaces using{' '}
            <strong>React, React Native, JavaScript, TypeScript, HTML, CSS, Bootstrap, and TailwindCSS</strong>. My projects focus on delivering seamless user experiences with clean and efficient code.
          </p>
          <a
            href="#"
            className="font-bold text-black no-underline hover:text-pink-400"
          >
            View Projects
          </a>
        </div>

        <div className="bg-blue-100/35 p-6 rounded-lg shadow-lg w-[45%] min-w-[350px] max-w-[500px] text-left transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl mb-2">Backend Development</h3>
          <p className="text-base text-black font-light mb-4">
            Proficient in{' '}
            <strong>Node.js, Express.js, MySQL, MongoDB, Swagger, and Thunder Client</strong>, I develop secure, high-performance, and scalable backend solutions. My backend projects ensure smooth API communication and database management.
          </p>
          <a
            href="#"
            className="font-bold text-black no-underline hover:text-pink-400"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
