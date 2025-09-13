import React, { useEffect, useState } from 'react';
import ProjectImageSL from "../assets/SL.jpg";
import ProjectImageSLB from "../assets/SLB.jpg";
import ProjectImageTPV from "../assets/TPV.jpg";
import ProjectImageMosque from "../assets/Mosque.jpg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
  }, []);

  // Project data with both Android and iOS links
  const projects = [
    {
      id: 4,
      title: "TPV App",
      description: "Point of sale (POS) application for businesses to manage transactions, inventory, and customer data.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tpv_app&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/tpv-app/id6752292667", 
      imageUrl: ProjectImageTPV,
      technologies: ["React Native", "JavaScript", "Node.js", "Payment Gateway Integration"]
    },
    {
      id: 1,
      title: "Smart Laundry Customer",
      description: "A convenient laundry service app for customers to schedule pickups, track orders, and make payments.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
      imageUrl: ProjectImageSL,
      technologies: ["React Native", "Firebase", "Redux", "REST API"]
    },
    {
      id: 2,
      title: "Smart Laundry Business",
      description: "Management app for laundry business owners to manage orders, employees, and business analytics.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
      imageUrl: ProjectImageSLB,
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"]
    },
    {
      id: 3,
      title: "Mosque App",
      description: "An application for mosque management, prayer times, Islamic calendar, and community announcements.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mosque_app&pcampaignid=web_share",
      appStoreUrl: null, // No iOS version available
      imageUrl: ProjectImageMosque,
      technologies: ["React Native", "Firebase", "Google Maps API", "Prayer Times API"]
    },
  ];

  return (
    
    <section id="projects" className="relative py-16 px-4 md:px-8 text-center  mx-auto">
<div className="absolute inset-0 -z-10 overflow-hidden bg-white">
  {/* Subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
  
  {/* Floating elements */}
  <div className="absolute top-20 left-20 w-40 h-40 border border-indigo-200/50 rounded-lg rotate-12 animate-float-slow"></div>
  <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-200/50 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
  <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-blue-200/50 rounded-lg rotate-45 animate-float-slow" style={{animationDelay: '4s'}}></div>
  
  {/* Subtle dot pattern */}
  <div className="absolute inset-0 opacity-30" style={{
    backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  }}></div>
</div>

<style jsx>{`
  @keyframes float-slow {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  .animate-float-slow {
    animation: float-slow 15s ease-in-out infinite;
  }
`}</style>
 <section id="projects" className="relative py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-bold mb-16 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Mobile Applications</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative group">
              <div className="overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 space-x-2">
                  <a 
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path>
                      <path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path>
                      <path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
                    </svg>
                    Android
                  </a>
                  {project.appStoreUrl && (
                    <a 
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium bg-gray-800 hover:bg-black py-2 px-4 rounded-full transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                          <g transform="scale(5.33333,5.33333)">
                            <path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path>
                          </g>
                        </g>
                      </svg>
                      iOS
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                  <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                    <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path>
                    <path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path>
                    <path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
                  </svg>
                  Android
                </span>
                {project.appStoreUrl && (
                  <span className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
                      <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path>
                        </g>
                      </g>
                    </svg>
                    iOS
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  <span>Play Store</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                {project.appStoreUrl && (
                  <a 
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-800 hover:text-black font-medium transition-colors"
                  >
                    <span>App Store</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`mt-16 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">More About My Development Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-50/80 to-pink-50/80 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Frontend Development</h4>
            </div>
            <p className="text-gray-600 mb-4">
              I specialize in building responsive and dynamic user interfaces with a focus on performance and accessibility.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React Native</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">JavaScript</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">TypeScript</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">HTML5</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">CSS3</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Bootstrap</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Tailwind CSS</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50/80 to-pink-50/80 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Backend Development</h4>
            </div>
            <p className="text-gray-600 mb-4">
              I build secure, scalable server-side solutions with robust API design and efficient database management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Node.js</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Express.js</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MySQL</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MongoDB</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Firebase</span>
              <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
</section>
      {/* Add the animation keyframes to your global CSS or use a style tag */}
      <style js>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
};

export default Projects;






// import React, { useEffect, useState } from 'react';
// import ProjectImageSL from "../assets/SL.jpg";
// import ProjectImageSLB from "../assets/SLB.jpg";
// import ProjectImageTPV from "../assets/TPV.jpg";
// import ProjectImageMosque from "../assets/Mosque.jpg";

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     // Trigger animations when component mounts
//     setIsVisible(true);
//   }, []);

//   // Project data with both Android and iOS links
//   const projects = [
//     {
//       id: 4,
//       title: "TPV App",
//       description: "Point of sale (POS) application for businesses to manage transactions, inventory, and customer data.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.tpv_app&pcampaignid=web_share",
//       appStoreUrl: null, // No iOS version available
//       imageUrl: ProjectImageTPV,
//       technologies: ["React Native", "JavaScript", "Node.js", "Payment Gateway Integration"]
//     },
//     {
//       id: 1,
//       title: "Smart Laundry Customer",
//       description: "A convenient laundry service app for customers to schedule pickups, track orders, and make payments.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&pcampaignid=web_share",
//       appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
//       imageUrl: ProjectImageSL,
//       technologies: ["React Native", "Firebase", "Redux", "REST API"]
//     },
//     {
//       id: 2,
//       title: "Smart Laundry Business",
//       description: "Management app for laundry business owners to manage orders, employees, and business analytics.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&pcampaignid=web_share",
//       appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
//       imageUrl: ProjectImageSLB,
//       technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"]
//     },
//     {
//       id: 3,
//       title: "Mosque App",
//       description: "An application for mosque management, prayer times, Islamic calendar, and community announcements.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.mosque_app&pcampaignid=web_share",
//       appStoreUrl: null, // No iOS version available
//       imageUrl: ProjectImageMosque,
//       technologies: ["React Native", "Firebase", "Google Maps API", "Prayer Times API"]
//     },
//   ];

//   return (
//     <section id="projects" className="relative py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
//       {/* Animated Background */}

// {/* <div className="absolute inset-0 -z-10  bg-white">

//   <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>

//   <div className="absolute top-20 left-20 w-40 h-40 border border-indigo-200/50 rounded-lg rotate-12 animate-float-slow"></div>
//   <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-200/50 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
//   <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-blue-200/50 rounded-lg rotate-45 animate-float-slow" style={{animationDelay: '4s'}}></div>
  

//   <div className="absolute inset-0 opacity-30" style={{
//     backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
//     backgroundSize: '20px 20px'
//   }}></div>
// </div> */}


// <div className="absolute inset-0 -z-10 overflow-hidden opacity-80">
//   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
//   <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/40 to-transparent"></div>
//   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-100/40 to-transparent"></div>
  
//   {/* Geometric pattern */}
//   <div className="absolute inset-0 opacity-10" style={{
//     backgroundImage: `linear-gradient(30deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
//                       linear-gradient(150deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
//                       linear-gradient(30deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
//                       linear-gradient(150deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
//                       linear-gradient(60deg, #ec489977 25%, transparent 25.5%, transparent 75%, #ec489977 75%, #ec489977),
//                       linear-gradient(60deg, #ec489977 25%, transparent 25.5%, transparent 75%, #ec489977 75%, #ec489977)`,
//     backgroundSize: '80px 140px',
//     backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
//   }}></div>
// </div>



// <style jsx>{`
//   @keyframes float-slow {
//     0%, 100% { transform: translateY(0) rotate(0); }
//     50% { transform: translateY(-20px) rotate(5deg); }
//   }
//   .animate-float-slow {
//     animation: float-slow 15s ease-in-out infinite;
//   }
// `}</style>

//       <h2 className={`text-3xl md:text-4xl font-bold mb-16 transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
//       }`}>
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Mobile Applications</span>
//       </h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <div 
//             key={project.id}
//             className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//             }`}
//             style={{ transitionDelay: `${index * 150}ms` }}
//           >
//             <div className="relative group">
//               <div className="overflow-hidden">
//                 <img 
//                   src={project.imageUrl} 
//                   alt={project.title}
//                   className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 space-x-2">
//                   <a 
//                     href={project.playStoreUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full transition-colors flex items-center"
//                   >
//                     <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
//                       <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path>
//                       <path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path>
//                       <path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
//                     </svg>
//                     Android
//                   </a>
//                   {project.appStoreUrl && (
//                     <a 
//                       href={project.appStoreUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white text-sm font-medium bg-gray-800 hover:bg-black py-2 px-4 rounded-full transition-colors flex items-center"
//                     >
//                       <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
//                         <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
//                           <g transform="scale(5.33333,5.33333)">
//                             <path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path>
//                           </g>
//                         </g>
//                       </svg>
//                       iOS
//                     </a>
//                   )}
//                 </div>
//               </div>
              
//               <div className=" top-4 right-4 flex space-x-2">
//                 <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
//                   <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
//                     <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path>
//                     <path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path>
//                     <path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
//                   </svg>
//                   Android
//                 </span>
//                 {project.appStoreUrl && (
//                   <span className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
//                     <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
//                       <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
//                         <g transform="scale(5.33333,5.33333)">
//                           <path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path>
//                         </g>
//                       </g>
//                     </svg>
//                     iOS
//                   </span>
//                 )}
//               </div>
//             </div>
            
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
              
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.technologies.map((tech, i) => (
//                   <span 
//                     key={i}
//                     className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
              
//               <div className="flex justify-center space-x-4">
//                 <a 
//                   href={project.playStoreUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
//                 >
//                   <span>Play Store</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 {project.appStoreUrl && (
//                   <a 
//                     href={project.appStoreUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-gray-800 hover:text-black font-medium transition-colors"
//                   >
//                     <span>App Store</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className={`mt-16 transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`}>
//         <h3 className="text-2xl font-semibold text-gray-800 mb-6">More About My Development Skills</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-gradient-to-br from-indigo-50/80 to-pink-50/80 backdrop-blur-sm p-6 rounded-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">Frontend Development</h4>
//             </div>
//             <p className="text-gray-600 mb-4">
//               I specialize in building responsive and dynamic user interfaces with a focus on performance and accessibility.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React Native</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">JavaScript</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">TypeScript</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">HTML5</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">CSS3</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Bootstrap</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Tailwind CSS</span>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-br from-indigo-50/80 to-pink-50/80 backdrop-blur-sm p-6 rounded-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">Backend Development</h4>
//             </div>
//             <p className="text-gray-600 mb-4">
//               I build secure, scalable server-side solutions with robust API design and efficient database management.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Node.js</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Express.js</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MySQL</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MongoDB</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Firebase</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">REST APIs</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add the animation keyframes to your global CSS or use a style tag */}
//       <style js>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .animation-delay-6000 {
//           animation-delay: 6s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;















// import React, { useEffect, useState } from 'react';
// import ProjectImageSL from "../assets/SL.jpg";
// import ProjectImageSLB from "../assets/SLB.jpg";
// import ProjectImageTPV from "../assets/TPV.jpg";
// import ProjectImageMosque from "../assets/Mosque.jpg";
// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     // Trigger animations when component mounts
//     setIsVisible(true);
//   }, []);

//   // Project data with both Android and iOS links
//   const projects = [
//         {
//       id: 4,
//       title: "TPV App",
//       description: "Point of sale (POS) application for businesses to manage transactions, inventory, and customer data.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.tpv_app&pcampaignid=web_share",
//       appStoreUrl: null, // No iOS version available
//       imageUrl: ProjectImageTPV,
//       technologies: ["React Native", "JavaScript", "Node.js", "Payment Gateway Integration"]
//     },
//     {
//       id: 1,
//       title: "Smart Laundry Customer",
//       description: "A convenient laundry service app for customers to schedule pickups, track orders, and make payments.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&pcampaignid=web_share",
//       appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
//       imageUrl: ProjectImageSL,
//       technologies: ["React Native", "Firebase", "Redux", "REST API"]
//     },
//     {
//       id: 2,
//       title: "Smart Laundry Business",
//       description: "Management app for laundry business owners to manage orders, employees, and business analytics.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&pcampaignid=web_share",
//       appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
//          imageUrl: ProjectImageSLB,
//       technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"]
//     },
//     {
//       id: 3,
//       title: "Mosque App",
//       description: "An application for mosque management, prayer times, Islamic calendar, and community announcements.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.mosque_app&pcampaignid=web_share",
//       appStoreUrl: null, // No iOS version available
//       imageUrl: ProjectImageMosque,
//       technologies: ["React Native", "Firebase", "Google Maps API", "Prayer Times API"]
//     },

//   ];

//   return (
//     <section id="projects" className="py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
//       <h2 className={`text-3xl md:text-4xl font-bold mb-16 transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
//       }`}>
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Mobile Applications</span>
//       </h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <div 
//             key={project.id}
//             className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//             }`}
//             style={{ transitionDelay: `${index * 150}ms` }}
//           >
//             <div className="relative group">
//               <div className="overflow-hidden">
//                 <img 
//                   src={project.imageUrl} 
//                   alt={project.title}
//                   className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 space-x-2">
//                   <a 
//                     href={project.playStoreUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full transition-colors flex items-center"
//                   >
//  <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
// <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path><path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path><path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
// </svg>
//                     Android
//                   </a>
//                   {project.appStoreUrl && (
//                     <a 
//                       href={project.appStoreUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white text-sm font-medium bg-gray-800 hover:bg-black py-2 px-4 rounded-full transition-colors flex items-center"
//                     >
//        <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
// <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" 
// ><g transform="scale(5.33333,5.33333)"><path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path></g></g>
// </svg>
//                   iOS
//                     </a>
//                   )}
//                 </div>
//               </div>
              
//               <div className="absolute top-4 right-4 flex space-x-2">
//                 <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
// <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
// <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path><path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path><path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
// </svg>
//                   Android
//                 </span>
//                 {project.appStoreUrl && (
//                   <span className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
//                     {/* <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M17.05 12.04C17.03 9.53 19.18 8.1 19.25 8.04C17.99 6.12 16.02 5.9 15.33 5.9C14.6 5.9 13.42 6.49 12.73 6.49C12 6.49 10.94 5.93 10.3 5.93C8.64 5.93 6.73 7.39 6.73 10.31C6.73 11.24 6.91 12.19 7.27 13.12C7.76 14.33 9.12 17.16 10.68 17.08C11.31 17.08 11.88 16.75 12.57 16.75C13.23 16.75 13.75 17.08 14.45 17.08C16.04 17.08 17.22 14.5 17.68 13.29C15.99 12.47 17.05 12.04 17.05 12.04ZM14.73 4.9C15.38 4.07 15.83 2.93 15.7 1.9C14.78 1.96 13.63 2.53 12.97 3.36C12.37 4.12 11.82 5.28 11.97 6.29C12.99 6.37 14.08 5.76 14.73 4.9Z"/>
//                     </svg> */}
// <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
// <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" 
// ><g transform="scale(5.33333,5.33333)"><path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path></g></g>
// </svg>
//                     iOS
//                   </span>
//                 )}
//               </div>
//             </div>
            
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
              
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.technologies.map((tech, i) => (
//                   <span 
//                     key={i}
//                     className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
              
//               <div className="flex justify-center space-x-4">
//                 <a 
//                   href={project.playStoreUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
//                 >
//                   <span>Play Store</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 {project.appStoreUrl && (
//                   <a 
//                     href={project.appStoreUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-gray-800 hover:text-black font-medium transition-colors"
//                   >
//                     <span>App Store</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className={`mt-16 transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`}>
//         <h3 className="text-2xl font-semibold text-gray-800 mb-6">More About My Development Skills</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-6 rounded-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">Frontend Development</h4>
//             </div>
//             <p className="text-gray-600 mb-4">
//               I specialize in building responsive and dynamic user interfaces with a focus on performance and accessibility.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React Native</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">JavaScript</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">TypeScript</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">HTML5</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">CSS3</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Bootstrap</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Tailwind CSS</span>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-6 rounded-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">Backend Development</h4>
//             </div>
//             <p className="text-gray-600 mb-4">
//               I build secure, scalable server-side solutions with robust API design and efficient database management.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Node.js</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Express.js</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MySQL</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MongoDB</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Firebase</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">REST APIs</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// import React, { useEffect, useState } from 'react';

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     // Trigger animations when component mounts
//     setIsVisible(true);
//   }, []);

//   // Project data
//   const projects = [
//     {
//       id: 1,
//       title: "Smart Laundry Customer",
//       description: "A convenient laundry service app for customers to schedule pickups, track orders, and make payments.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&pcampaignid=web_share",
//       imageUrl: "https://play-lh.googleusercontent.com/6UgEjgioPdTcyQ7rGx3pVbEgSCCJXq_5j-0Xa6IfLfVtQkU5VU7-4LcL1k1pzL9zL7Q=w480-h960-rw",
//       technologies: ["React Native", "Firebase", "Redux", "Stripe API"]
//     },
//     {
//       id: 2,
//       title: "Smart Laundry Business",
//       description: "Management app for laundry business owners to manage orders, employees, and business analytics.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&pcampaignid=web_share",
//       imageUrl: "https://play-lh.googleusercontent.com/6UgEjgioPdTcyQ7rGx3pVbEgSCCJXq_5j-0Xa6IfLfVtQkU5VU7-4LcL1k1pzL9zL7Q=w480-h960-rw",
//       technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"]
//     },
//     {
//       id: 3,
//       title: "Mosque App",
//       description: "An application for mosque management, prayer times, Islamic calendar, and community announcements.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.mosque_app&pcampaignid=web_share",
//       imageUrl: "https://play-lh.googleusercontent.com/6UgEjgioPdTcyQ7rGx3pVbEgSCCJXq_5j-0Xa6IfLfVtQkU5VU7-4LcL1k1pzL9zL7Q=w480-h960-rw",
//       technologies: ["Flutter", "Firebase", "Google Maps API", "Prayer Times API"]
//     },
//     {
//       id: 4,
//       title: "TPV App",
//       description: "Point of sale (POS) application for businesses to manage transactions, inventory, and customer data.",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.tpv_app&pcampaignid=web_share",
//       imageUrl: "https://play-lh.googleusercontent.com/6UgEjgioPdTcyQ7rGx3pVbEgSCCJXq_5j-0Xa6IfLfVtQkU5VU7-4LcL1k1pzL9zL7Q=w480-h960-rw",
//       technologies: ["React Native", "SQLite", "Node.js", "Payment Gateway Integration"]
//     }
//   ];

//   return (
//     <section id="projects" className="py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
//       <h2 className={`text-3xl md:text-4xl font-bold mb-16 transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
//       }`}>
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Play Store Projects</span>
//       </h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <div 
//             key={project.id}
//             className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//             }`}
//             style={{ transitionDelay: `${index * 150}ms` }}
//           >
//             <div className="relative group">
//               <div className="overflow-hidden">
//                 <img 
//                   src={project.imageUrl} 
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                   <a 
//                     href={project.playStoreUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full transition-colors"
//                   >
//                     View on Play Store
//                   </a>
//                 </div>
//               </div>
              
//               <div className="absolute top-4 right-4">
//                 <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
//                   Android
//                 </span>
//                 <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
//                   IOS
//                 </span>
//               </div>
//             </div>
            
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
              
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.technologies.map((tech, i) => (
//                   <span 
//                     key={i}
//                     className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
              
//               <a 
//                 href={project.playStoreUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
//               >
//                 <span>Get the app</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className={`mt-16 transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`}>
//         <h3 className="text-2xl font-semibold text-gray-800 mb-6">More About My Development Skills</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-6 rounded-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">Frontend Development</h4>
//             </div>
//             <p className="text-gray-600 mb-4">
//               I specialize in building responsive and dynamic user interfaces with a focus on performance and accessibility.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">React Native</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">TypeScript</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Tailwind CSS</span>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-6 rounded-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">Backend Development</h4>
//             </div>
//             <p className="text-gray-600 mb-4">
//               I build secure, scalable server-side solutions with robust API design and efficient database management.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Node.js</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Express.js</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">MySQL</span>
//               <span className="bg-white text-indigo-800 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">Firebase</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// import React, { useEffect } from 'react';

// const Projects = () => {
//   useEffect(() => {
//     // Simple animation on page load
//     const animateElements = () => {
//       const sectionTitle = document.querySelector('.section-title');
//       const projectCards = document.querySelectorAll('.project-card');
      
//       if (sectionTitle) {
//         sectionTitle.style.transform = 'translateY(0)';
//         sectionTitle.style.opacity = '1';
//       }
      
//       if (projectCards) {
//         projectCards.forEach((card, index) => {
//           setTimeout(() => {
//             card.style.transform = 'translateY(0)';
//             card.style.opacity = '1';
//           }, 300 + index * 200);
//         });
//       }
//     };

//     animateElements();
//   }, []);

//   return (
//     <section id="projects" className="py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold mb-16 section-title transition-all duration-700 ease-out opacity-0 transform -translate-y-8">
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Projects</span>
//       </h2>
      
//       <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
//         {/* Frontend Development Card */}
//         <div className="project-card transition-all duration-700 ease-out opacity-0 transform translate-y-12 gradient-border p-1 rounded-xl w-full md:w-[45%] min-w-[350px]">
//           <div className="card-hover bg-white p-6 md:p-8 rounded-xl shadow-lg h-full flex flex-col">
//             <div className="flex items-center mb-6">
//               <div className="icon-wrapper">
//     <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10c-.01-1.1-.91-2-2-2m-2.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7-2c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm2.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.5-5.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
//     </svg>
//               </div>
//               <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Frontend Development</h3>
//             </div>
            
//             <p className="text-gray-600 mb-6 flex-grow">
//               I specialize in building responsive and dynamic user interfaces with a focus on performance and accessibility. My frontend work combines aesthetic design with technical excellence.
//             </p>
            
//             <div className="mb-6 text-left">
//               <span className="tech-tag">React</span>
//               <span className="tech-tag">React Native</span>
//               <span className="tech-tag">TypeScript</span>
//               <span className="tech-tag">JavaScript</span>
//               <span className="tech-tag">HTML5</span>
//               <span className="tech-tag">CSS3</span>
//               <span className="tech-tag">Bootstrap</span>
//               <span className="tech-tag">TailwindCSS</span>
//             </div>
            
//             <div className="text-left mt-auto">
//               <a href="#" className="project-link">
//                 <span>View Projects</span>
//                 <i className="fas fa-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Backend Development Card */}
//         <div className="project-card transition-all duration-700 ease-out opacity-0 transform translate-y-12 gradient-border p-1 rounded-xl w-full md:w-[45%] min-w-[350px]">
//           <div className="card-hover bg-white p-6 md:p-8 rounded-xl shadow-lg h-full flex flex-col">
//             <div className="flex items-center mb-6">
//               <div className="icon-wrapper">
//                         <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//                         </svg>              </div>
//               <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Backend Development</h3>
//             </div>
            
//             <p className="text-gray-600 mb-6 flex-grow">
//               I build secure, scalable server-side solutions with robust API design and efficient database management. My backend architecture ensures reliability and high performance.
//             </p>
            
//             <div className="mb-6 text-left">
//               <span className="tech-tag">Node.js</span>
//               <span className="tech-tag">Express.js</span>
//               <span className="tech-tag">MySQL</span>
//               <span className="tech-tag">MongoDB</span>
//               <span className="tech-tag">REST APIs</span>
//               <span className="tech-tag">Swagger</span>
//               <span className="tech-tag">JWT Auth</span>
//               <span className="tech-tag">Redis</span>
//             </div>
            
//             <div className="text-left mt-auto">
//               <a href="#" className="project-link">
//                 <span>Explore More</span>
//                 <i className="fas fa-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
//         #projects {
//           font-family: 'Poppins', sans-serif;
//         }
        
//         .card-hover {
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }
        
//         .card-hover:hover {
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//         }
        
//         .tech-tag {
//           display: inline-block;
//           background: rgba(99, 102, 241, 0.1);
//           color: #4f46e5;
//           padding: 4px 12px;
//           border-radius: 20px;
//           margin: 4px 4px 4px 0;
//           font-size: 0.75rem;
//           font-weight: 500;
//         }
        
//         .gradient-border {
//           position: relative;
//           background: white;
//           border-radius: 12px;
//         }
        
//         .gradient-border::after {
//           content: '';
//           position: absolute;
//           top: -2px;
//           left: -2px;
//           right: -2px;
//           bottom: -2px;
//           background: linear-gradient(45deg, #ec4899, #8b5cf6);
//           border-radius: 14px;
//           z-index: -1;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }
        
//         .gradient-border:hover::after {
//           opacity: 1;
//         }
        
//         .section-title {
//           position: relative;
//           display: inline-block;
//         }
        
//         .section-title::after {
//           content: '';
//           position: absolute;
//           width: 60px;
//           height: 4px;
//           background: linear-gradient(90deg, #ec4899, #8b5cf6);
//           bottom: -12px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-radius: 2px;
//         }
        
//         .project-link {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           font-weight: 600;
//           color: #4f46e5;
//           overflow: hidden;
//         }
        
//         .project-link::before {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background: currentColor;
//           transform: translateX(-100%);
//           transition: transform 0.3s ease;
//         }
        
//         .project-link:hover::before {
//           transform: translateX(0);
//         }
        
//         .icon-wrapper {
//           display: inline-flex;
//           justify-content: center;
//           align-items: center;
//           width: 40px;
//           height: 40px;
//           background: rgba(99, 102, 241, 0.1);
//           border-radius: 50%;
//           margin-right: 12px;
//         }
        
//         @media (max-width: 768px) {
//           .project-card {
//             width: 100% !important;
//             min-width: unset !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;