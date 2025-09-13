import React from 'react';
import vscode from '../assets/vscode-original.svg';
import xcode from '../assets/xcode-original.svg';
import android from '../assets/android-original.svg';
import expo from '../assets/expo-original.svg';
import react from '../assets/react-original.svg';
import nodejs from '../assets/nodejs-original.svg';
import redux from '../assets/redux-original.svg';
import swagger from '../assets/swagger-original.svg';
import thunder from '../assets/Thunder-Client.png';
import navicat from '../assets/navicat.svg';
import xampp from '../assets/xampp.png';
import docker from '../assets/docker-original.svg';
import filezilla from '../assets/filezilla-plain.svg';
import cpanel from '../assets/cpanel-original.svg';
import firebase from '../assets/firebase-plain.svg';
import google from '../assets/google-original.svg';
import apple from '../assets/apple-original.svg';
import git from '../assets/git-original.svg';
import github from '../assets/github-original.svg';
import emailjs from '../assets/emailjs.png';
import terminal from '../assets/bash-original.svg';
import api from '../assets/API.png';


const Tools = () => {
  // Tools data organized by category
  const toolCategories = [
    {
      title: "🛠️ Development & IDEs",
      tools: [
        { name: "Visual Studio Code", icon: "vscode", color: "blue" },
        { name: "Xcode", icon: "xcode", color: "blue" },
        { name: "Android Studio", icon: "android", color: "green" },
        { name: "Expo", icon: "expo", color: "purple" },
        { name: "React Native CLI", icon: "react", color: "blue" },
        { name: "CLI", icon: "terminal", color: "gray" }
      ]
    },
    {
      title: "🌐 Backend & API Tools",
      tools: [
        { name: "Node.js", icon: "nodejs", color: "green" },
        { name: "Redux", icon: "redux", color: "purple" },
        { name: "Swagger", icon: "swagger", color: "green" },
        { name: "Thunder Client", icon: "thunder", color: "blue" },
        { name: "REST APIs", icon: "api", color: "green" }
      ]
    },
    {
      title: "🗄️ Database & Server Management",
      tools: [
        { name: "Navicat", icon: "navicat", color: "blue" },
        { name: "XAMPP", icon: "xampp", color: "orange" },
        { name: "Docker", icon: "docker", color: "blue" },
        { name: "FileZilla", icon: "filezilla", color: "orange" },
        { name: "cPanel", icon: "cpanel", color: "orange" }
      ]
    },
    {
      title: "☁️ Cloud & Hosting Platforms",
      tools: [
        { name: "Firebase Console", icon: "firebase", color: "orange" },
        { name: "Google Play Console", icon: "google", color: "green" },
        { name: "App Store Connect", icon: "apple", color: "gray" }
      ]
    },
    {
      title: "🔧 Version Control & Collaboration",
      tools: [
        { name: "Git", icon: "git", color: "orange" },
        { name: "GitHub", icon: "github", color: "gray" }
      ]
    },
    {
      title: "📩 Other Tools & Services",
      tools: [
        { name: "EmailJS", icon: "emailjs", color: "blue" }
      ]
    }
  ];

  // Original icon mapping
  const getIcon = (iconName) => {
    switch (iconName) {
      case "vscode": 
        return <img src={vscode} className="w-6 h-6" alt="VS Code" />;
      case "xcode": 
        return <img src={xcode} className="w-6 h-6" alt="Xcode" />;
      case "android": 
        return <img src={android} className="w-6 h-6" alt="Android" />;
      case "expo": 
        return <img src={expo} className="w-6 h-6" alt="Expo" />;
      case "react": 
        return <img src={react} className="w-6 h-6" alt="React" />;
      case "nodejs": 
        return <img src={nodejs} className="w-6 h-6" alt="Node.js" />;
      case "redux": 
        return <img src={redux} className="w-6 h-6" alt="Redux" />;
      case "swagger": 
        return <img src={swagger} className="w-6 h-6" alt="Swagger" />;
      case "thunder": 
        return <img src={thunder} className="w-6 h-6 rounded" alt="Thunder Client" />;
      case "navicat": 
        return <img src={navicat} className="w-6 h-6" alt="Navicat" />;
      case "xampp": 
        return <img src={xampp} className="w-6 h-6" alt="XAMPP" />;
      case "docker": 
        return <img src={docker} className="w-6 h-6" alt="Docker" />;
      case "filezilla": 
        return <img src={filezilla} className="w-6 h-6" alt="FileZilla" />;
      case "cpanel": 
        return <img src={cpanel} className="w-6 h-6" alt="cPanel" />;
      case "firebase": 
        return <img src={firebase} className="w-6 h-6" alt="Firebase" />;
      case "google": 
        return <img src={google} className="w-6 h-6" alt="Google" />;
      case "apple": 
        return <img src={apple} className="w-6 h-6" alt="Apple" />;
      case "git": 
        return <img src={git} className="w-6 h-6" alt="Git" />;
      case "github": 
        return <img src={github} className="w-6 h-6" alt="GitHub" />;
      case "emailjs": 
        return <img src={emailjs} className="w-6 h-6" alt="EmailJS" />;
      case "terminal": 
        return <img src={terminal} className="w-6 h-6" alt="Terminal" />;
      case "api": 
        return <img src={api} className="w-6 h-6" alt="API" />;
      default: 
        return <i className="fas fa-tools"></i>;
    }
  };

  // Color classes mapping
  const getColorClass = (color) => {
    switch (color) {
      case "blue": return "bg-blue-100 text-blue-800 border-blue-200";
      case "green": return "bg-green-100 text-green-800 border-green-200";
      case "purple": return "bg-purple-100 text-purple-800 border-purple-200";
      case "orange": return "bg-orange-100 text-orange-800 border-orange-200";
      case "gray": return "bg-gray-100 text-gray-800 border-gray-200";
      case "yellow": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="tools" className="relative py-16 px-4 md:px-8 text-center mx-auto max-w-6xl overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
        <div className="absolute top-20 left-20 w-40 h-40 border border-indigo-200/50 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-200/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-blue-200/50 rounded-lg rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Development Tools</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {toolCategories.map((category, index) => (
          <div key={index} className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">{category.title.split(' ')[0]}</span>
              <span>{category.title.split(' ').slice(1).join(' ')}</span>
            </h3>

            <div className="space-y-3">
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className={`flex items-center p-3 rounded-lg border ${getColorClass(tool.color)} transition-transform duration-200 hover:scale-105`}>
                  <div className="text-lg mr-3 flex items-center justify-center w-6 h-6">
                    {getIcon(tool.icon)}
                  </div>
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Tools;





// import React from 'react';

// const Tools = () => {
//   // Tools data organized by category
//   const toolCategories = [
//     {
//       title: "🛠️ Development & IDEs",
//       tools: [
//         { name: "Visual Studio Code", icon: "vscode", color: "blue" },
//         { name: "Xcode", icon: "xcode", color: "blue" },
//         { name: "Android Studio", icon: "android", color: "green" },
//         { name: "Expo", icon: "expo", color: "purple" },
//         { name: "React Native CLI", icon: "react", color: "blue" },
//         { name: "CLI", icon: "terminal", color: "gray" }
//       ]
//     },
//     {
//       title: "🌐 Backend & API Tools",
//       tools: [
//         { name: "Node.js", icon: "nodejs", color: "green" },
//         { name: "Redux", icon: "redux", color: "purple" },
//         { name: "Swagger", icon: "swagger", color: "green" },
//         { name: "Thunder Client", icon: "thunder", color: "blue" },
//         { name: "REST APIs", icon: "api", color: "green" }
//       ]
//     },
//     {
//       title: "🗄️ Database & Server Management",
//       tools: [
//         { name: "Navicat", icon: "database", color: "blue" },
//         { name: "XAMPP", icon: "server", color: "orange" },
//         { name: "Docker", icon: "docker", color: "blue" },
//         { name: "FileZilla", icon: "ftp", color: "orange" },
//         { name: "cPanel", icon: "cpanel", color: "orange" }
//       ]
//     },
//     {
//       title: "☁️ Cloud & Hosting Platforms",
//       tools: [
//         { name: "Firebase Console", icon: "firebase", color: "orange" },
//         { name: "Google Play Console", icon: "google", color: "green" },
//         { name: "App Store Connect", icon: "apple", color: "gray" }
//       ]
//     },
//     {
//       title: "🔧 Version Control & Collaboration",
//       tools: [
//         { name: "Git", icon: "git", color: "orange" },
//         { name: "GitHub", icon: "github", color: "gray" }
//       ]
//     },
//     {
//       title: "📩 Other Tools & Services",
//       tools: [
//         { name: "EmailJS", icon: "email", color: "blue" }
//       ]
//     }
//   ];

//   // Icon mapping
//   const getIcon = (iconName) => {
//     switch (iconName) {
//       case "vscode": return <i className="fas fa-code text-blue-500"></i>;
//       case "xcode": return <i className="fab fa-apple text-gray-800"></i>;
//       case "android": return <i className="fab fa-android text-green-500"></i>;
//       case "expo": return <i className="fas fa-mobile-alt text-purple-500"></i>;
//       case "react": return <i className="fab fa-react text-blue-400"></i>;
//       case "nodejs": return <i className="fab fa-node-js text-green-600"></i>;
//       case "redux": return <i className="fas fa-code-branch text-purple-600"></i>;
//       case "swagger": return <i className="fas fa-book text-green-500"></i>;
//       case "thunder": return <i className="fas fa-bolt text-blue-500"></i>;
//       case "database": return <i className="fas fa-database text-blue-500"></i>;
//       case "server": return <i className="fas fa-server text-orange-500"></i>;
//       case "docker": return <i className="fab fa-docker text-blue-500"></i>;
//       case "ftp": return <i className="fas fa-file-upload text-orange-500"></i>;
//       case "cpanel": return <i className="fas fa-cog text-orange-500"></i>;
//       case "firebase": return <i className="fas fa-fire text-orange-500"></i>;
//       case "google": return <i className="fab fa-google text-green-500"></i>;
//       case "apple": return <i className="fab fa-apple text-gray-600"></i>;
//       case "git": return <i className="fab fa-git-alt text-orange-500"></i>;
//       case "github": return <i className="fab fa-github text-gray-800"></i>;
//       case "email": return <i className="fas fa-envelope text-blue-500"></i>;
//       case "terminal": return <i className="fas fa-terminal text-gray-600"></i>;
//       case "api": return <i className="fas fa-network-wired text-green-500"></i>;
//       default: return <i className="fas fa-tools"></i>;
//     }
//   };

//   // Color classes mapping
//   const getColorClass = (color) => {
//     switch (color) {
//       case "blue": return "bg-blue-100 text-blue-800 border-blue-200";
//       case "green": return "bg-green-100 text-green-800 border-green-200";
//       case "purple": return "bg-purple-100 text-purple-800 border-purple-200";
//       case "orange": return "bg-orange-100 text-orange-800 border-orange-200";
//       case "gray": return "bg-gray-100 text-gray-800 border-gray-200";
//       case "yellow": return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       default: return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <section id="tools" className="relative py-16 px-4 md:px-8 text-center mx-auto overflow-hidden">

//       {/* Background patterns */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
//         <div className="absolute top-20 left-20 w-40 h-40 border border-indigo-200/50 rounded-lg rotate-12 animate-float"></div>
//         <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-200/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
//         <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-blue-200/50 rounded-lg rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
//         <div className="absolute inset-0 opacity-30" style={{
//           backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
//           backgroundSize: '20px 20px'
//         }}></div>
//       </div>
//          <section id="tools" className="relative py-16 px-4 md:px-8 text-center mx-auto max-w-6xl overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Development Tools</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
//         {toolCategories.map((category, index) => (
//           <div key={index} className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
//             <h3 className="text-xl font-semibold mb-4 flex items-center">
//               <span className="mr-2">{category.title.split(' ')[0]}</span>
//               <span>{category.title.split(' ').slice(1).join(' ')}</span>
//             </h3>

//             <div className="space-y-3">
//               {category.tools.map((tool, toolIndex) => (
//                 <div key={toolIndex} className={`flex items-center p-3 rounded-lg border ${getColorClass(tool.color)} transition-transform duration-200 hover:scale-105`}>
//                   <div className="text-lg mr-3">{getIcon(tool.icon)}</div>
//                   <span className="font-medium">{tool.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
// </section>
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(5deg); }
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Tools;






// import React from 'react';

// const Tools = () => {
//   // Tools data organized by category
//   const toolCategories = [
//     {
//       title: "🛠️ Development & IDEs",
//       tools: [
//         { name: "Visual Studio Code", icon: "vscode", color: "blue" },
//         { name: "Xcode", icon: "xcode", color: "blue" },
//         { name: "Android Studio", icon: "android", color: "green" },
//         { name: "Expo", icon: "expo", color: "purple" },
//         { name: "React Native CLI", icon: "react", color: "blue" },
//         { name: "CLI", icon: "terminal", color: "gray" }
//       ]
//     },
//     {
//       title: "🌐 Backend & API Tools",
//       tools: [
//         { name: "Node.js", icon: "nodejs", color: "green" },
//         { name: "Redux", icon: "redux", color: "purple" },
//         { name: "Swagger", icon: "swagger", color: "green" },
//         { name: "Thunder Client", icon: "thunder", color: "blue" },
//         { name: "REST APIs", icon: "api", color: "green" }
//       ]
//     },
//     // {
//     //   title: "💻 Frontend Technologies",
//     //   tools: [
//     //     { name: "JavaScript", icon: "javascript", color: "yellow" },
//     //     { name: "TypeScript", icon: "typescript", color: "blue" },
//     //     { name: "HTML5", icon: "html5", color: "orange" },
//     //     { name: "CSS3", icon: "css3", color: "blue" },
//     //     { name: "Bootstrap", icon: "bootstrap", color: "purple" },
//     //     { name: "Tailwind CSS", icon: "tailwind", color: "blue" }
//     //   ]
//     // },
//     {
//       title: "🗄️ Database & Server Management",
//       tools: [
//         { name: "Navicat", icon: "database", color: "blue" },
//         { name: "XAMPP", icon: "server", color: "orange" },
//         { name: "Docker", icon: "docker", color: "blue" },
//         { name: "FileZilla", icon: "ftp", color: "orange" },
//         { name: "cPanel", icon: "cpanel", color: "orange" }
//       ]
//     },
//     {
//       title: "☁️ Cloud & Hosting Platforms",
//       tools: [
//         { name: "Firebase Console", icon: "firebase", color: "orange" },
//         { name: "Google Play Console", icon: "google", color: "green" },
//         { name: "App Store Connect", icon: "apple", color: "gray" }
//       ]
//     },
//     {
//       title: "🔧 Version Control & Collaboration",
//       tools: [
//         { name: "Git", icon: "git", color: "orange" },
//         { name: "GitHub", icon: "github", color: "gray" }
//       ]
//     },
//     {
//       title: "📩 Other Tools & Services",
//       tools: [
//         { name: "EmailJS", icon: "email", color: "blue" }
//       ]
//     }
//   ];

//   // Icon mapping
//   const getIcon = (iconName) => {
//     switch (iconName) {
//       case "vscode":
//         return <i className="fas fa-code text-blue-500"></i>;
//       case "xcode":
//         return <i className="fab fa-apple text-gray-800"></i>;
//       case "android":
//         return <i className="fab fa-android text-green-500"></i>;
//       case "expo":
//         return <i className="fas fa-mobile-alt text-purple-500"></i>;
//       case "react":
//         return <i className="fab fa-react text-blue-400"></i>;
//       case "nodejs":
//         return <i className="fab fa-node-js text-green-600"></i>;
//       case "redux":
//         return <i className="fas fa-code-branch text-purple-600"></i>;
//       case "swagger":
//         return <i className="fas fa-book text-green-500"></i>;
//       case "thunder":
//         return <i className="fas fa-bolt text-blue-500"></i>;
//       case "database":
//         return <i className="fas fa-database text-blue-500"></i>;
//       case "server":
//         return <i className="fas fa-server text-orange-500"></i>;
//       case "docker":
//         return <i className="fab fa-docker text-blue-500"></i>;
//       case "ftp":
//         return <i className="fas fa-file-upload text-orange-500"></i>;
//       case "cpanel":
//         return <i className="fas fa-cog text-orange-500"></i>;
//       case "firebase":
//         return <i className="fas fa-fire text-orange-500"></i>;
//       case "google":
//         return <i className="fab fa-google text-green-500"></i>;
//       case "apple":
//         return <i className="fab fa-apple text-gray-600"></i>;
//       case "git":
//         return <i className="fab fa-git-alt text-orange-500"></i>;
//       case "github":
//         return <i className="fab fa-github text-gray-800"></i>;
//       case "email":
//         return <i className="fas fa-envelope text-blue-500"></i>;
//       case "terminal":
//         return <i className="fas fa-terminal text-gray-600"></i>;
//       case "api":
//         return <i className="fas fa-network-wired text-green-500"></i>;
//       case "javascript":
//         return <i className="fab fa-js-square text-yellow-500"></i>;
//       case "typescript":
//         return <i className="fas fa-code text-blue-500"></i>;
//       case "html5":
//         return <i className="fab fa-html5 text-orange-500"></i>;
//       case "css3":
//         return <i className="fab fa-css3-alt text-blue-500"></i>;
//       case "bootstrap":
//         return <i className="fab fa-bootstrap text-purple-500"></i>;
//       case "tailwind":
//         return <i className="fas fa-palette text-blue-400"></i>;
//       default:
//         return <i className="fas fa-tools"></i>;
//     }
//   };

//   // Color classes mapping
//   const getColorClass = (color) => {
//     switch (color) {
//       case "blue":
//         return "bg-blue-100 text-blue-800 border-blue-200";
//       case "green":
//         return "bg-green-100 text-green-800 border-green-200";
//       case "purple":
//         return "bg-purple-100 text-purple-800 border-purple-200";
//       case "orange":
//         return "bg-orange-100 text-orange-800 border-orange-200";
//       case "gray":
//         return "bg-gray-100 text-gray-800 border-gray-200";
//       case "yellow":
//         return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <section id="tools" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Development Tools</span>
//       </h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {toolCategories.map((category, index) => (
//           <div 
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-semibold mb-4 flex items-center">
//               <span className="mr-2">{category.title.split(' ')[0]}</span>
//               <span>{category.title.split(' ').slice(1).join(' ')}</span>
//             </h3>
            
//             <div className="space-y-3">
//               {category.tools.map((tool, toolIndex) => (
//                 <div 
//                   key={toolIndex}
//                   className={`flex items-center p-3 rounded-lg border ${getColorClass(tool.color)} transition-transform duration-200 hover:scale-105`}
//                 >
//                   <div className="text-lg mr-3">
//                     {getIcon(tool.icon)}
//                   </div>
//                   <span className="font-medium">{tool.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Skills Summary */}
//       {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
//         <h3 className="text-2xl font-semibold text-center mb-6">My Development Stack</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="text-lg font-medium mb-3 text-blue-700">Frontend & Mobile</h4>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">React</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">React Native</span>
//                             <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">JavaScript</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">TypeScript</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">HTML5</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">CSS3</span>
//                             <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Tailwind CSS</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Bootstrap</span>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-medium mb-3 text-green-700">Backend & APIs</h4>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Node.js</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Express</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">MySQL</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">MongoDB</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Firebase</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">REST APIs</span>
//             </div>
//           </div>
//         </div>
//       </div> */}


//     </section>
//   );
// };

// export default Tools;












// import React from 'react';

// const Tools = () => {
//   // Tools data organized by category
//   const toolCategories = [
//     {
//       title: "🛠️ Development & IDEs",
//       tools: [
//         { name: "Visual Studio Code", icon: "vscode", color: "blue" },
//         { name: "Xcode", icon: "xcode", color: "blue" },
//         { name: "Android Studio", icon: "android", color: "green" },
//         { name: "Expo", icon: "expo", color: "purple" },
//         { name: "React Native CLI", icon: "react", color: "blue" }
//       ]
//     },
//     {
//       title: "🌐 Backend & API Tools",
//       tools: [
//         { name: "Node.js", icon: "nodejs", color: "green" },
//         { name: "Redux", icon: "redux", color: "purple" },
//         { name: "Swagger", icon: "swagger", color: "green" },
//         { name: "Thunder Client", icon: "thunder", color: "blue" }
//       ]
//     },
//     {
//       title: "🗄️ Database & Server Management",
//       tools: [
//         { name: "Navicat", icon: "database", color: "blue" },
//         { name: "XAMPP", icon: "server", color: "orange" },
//         { name: "Docker", icon: "docker", color: "blue" },
//         { name: "FileZilla", icon: "ftp", color: "orange" },
//         { name: "cPanel", icon: "cpanel", color: "orange" }
//       ]
//     },
//     {
//       title: "☁️ Cloud & Hosting Platforms",
//       tools: [
//         { name: "Firebase Console", icon: "firebase", color: "orange" },
//         { name: "Google Play Console", icon: "google", color: "green" },
//         { name: "App Store Connect", icon: "apple", color: "gray" }
//       ]
//     },
//     {
//       title: "🔧 Version Control & Collaboration",
//       tools: [
//         { name: "Git", icon: "git", color: "orange" },
//         { name: "GitHub", icon: "github", color: "gray" }
//       ]
//     },
//     {
//       title: "📩 Other Tools & Services",
//       tools: [
//         { name: "EmailJS", icon: "email", color: "blue" }
//       ]
//     }
//   ];

//   // Icon mapping
//   const getIcon = (iconName) => {
//     switch (iconName) {
//       case "vscode":
//         return <i className="fas fa-code text-blue-500"></i>;
//       case "xcode":
//         return <i className="fab fa-apple text-gray-800"></i>;
//       case "android":
//         return <i className="fab fa-android text-green-500"></i>;
//       case "expo":
//         return <i className="fas fa-mobile-alt text-purple-500"></i>;
//       case "react":
//         return <i className="fab fa-react text-blue-400"></i>;
//       case "nodejs":
//         return <i className="fab fa-node-js text-green-600"></i>;
//       case "redux":
//         return <i className="fas fa-code-branch text-purple-600"></i>;
//       case "swagger":
//         return <i className="fas fa-book text-green-500"></i>;
//       case "thunder":
//         return <i className="fas fa-bolt text-blue-500"></i>;
//       case "database":
//         return <i className="fas fa-database text-blue-500"></i>;
//       case "server":
//         return <i className="fas fa-server text-orange-500"></i>;
//       case "docker":
//         return <i className="fab fa-docker text-blue-500"></i>;
//       case "ftp":
//         return <i className="fas fa-file-upload text-orange-500"></i>;
//       case "cpanel":
//         return <i className="fas fa-cog text-orange-500"></i>;
//       case "firebase":
//         return <i className="fas fa-fire text-orange-500"></i>;
//       case "google":
//         return <i className="fab fa-google text-green-500"></i>;
//       case "apple":
//         return <i className="fab fa-apple text-gray-600"></i>;
//       case "git":
//         return <i className="fab fa-git-alt text-orange-500"></i>;
//       case "github":
//         return <i className="fab fa-github text-gray-800"></i>;
//       case "email":
//         return <i className="fas fa-envelope text-blue-500"></i>;
//       default:
//         return <i className="fas fa-tools"></i>;
//     }
//   };

//   // Color classes mapping
//   const getColorClass = (color) => {
//     switch (color) {
//       case "blue":
//         return "bg-blue-100 text-blue-800 border-blue-200";
//       case "green":
//         return "bg-green-100 text-green-800 border-green-200";
//       case "purple":
//         return "bg-purple-100 text-purple-800 border-purple-200";
//       case "orange":
//         return "bg-orange-100 text-orange-800 border-orange-200";
//       case "gray":
//         return "bg-gray-100 text-gray-800 border-gray-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <section id="tools" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Development Tools</span>
//       </h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {toolCategories.map((category, index) => (
//           <div 
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-semibold mb-4 flex items-center">
//               <span className="mr-2">{category.title.split(' ')[0]}</span>
//               <span>{category.title.split(' ').slice(1).join(' ')}</span>
//             </h3>
            
//             <div className="space-y-3">
//               {category.tools.map((tool, toolIndex) => (
//                 <div 
//                   key={toolIndex}
//                   className={`flex items-center p-3 rounded-lg border ${getColorClass(tool.color)} transition-transform duration-200 hover:scale-105`}
//                 >
//                   <div className="text-lg mr-3">
//                     {getIcon(tool.icon)}
//                   </div>
//                   <span className="font-medium">{tool.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Skills Summary */}
//       <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
//         <h3 className="text-2xl font-semibold text-center mb-6">My Development Stack</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="text-lg font-medium mb-3 text-blue-700">Frontend & Mobile</h4>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">React</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">React Native</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Expo</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Redux</span>
//               <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Tailwind CSS</span>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-medium mb-3 text-green-700">Backend & Databases</h4>
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Node.js</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Express</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">MySQL</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">MongoDB</span>
//               <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Firebase</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tools;