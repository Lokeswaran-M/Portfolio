import React from 'react';

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
    // {
    //   title: "💻 Frontend Technologies",
    //   tools: [
    //     { name: "JavaScript", icon: "javascript", color: "yellow" },
    //     { name: "TypeScript", icon: "typescript", color: "blue" },
    //     { name: "HTML5", icon: "html5", color: "orange" },
    //     { name: "CSS3", icon: "css3", color: "blue" },
    //     { name: "Bootstrap", icon: "bootstrap", color: "purple" },
    //     { name: "Tailwind CSS", icon: "tailwind", color: "blue" }
    //   ]
    // },
    {
      title: "🗄️ Database & Server Management",
      tools: [
        { name: "Navicat", icon: "database", color: "blue" },
        { name: "XAMPP", icon: "server", color: "orange" },
        { name: "Docker", icon: "docker", color: "blue" },
        { name: "FileZilla", icon: "ftp", color: "orange" },
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
        { name: "EmailJS", icon: "email", color: "blue" }
      ]
    }
  ];

  // Icon mapping
  const getIcon = (iconName) => {
    switch (iconName) {
      case "vscode":
        return <i className="fas fa-code text-blue-500"></i>;
      case "xcode":
        return <i className="fab fa-apple text-gray-800"></i>;
      case "android":
        return <i className="fab fa-android text-green-500"></i>;
      case "expo":
        return <i className="fas fa-mobile-alt text-purple-500"></i>;
      case "react":
        return <i className="fab fa-react text-blue-400"></i>;
      case "nodejs":
        return <i className="fab fa-node-js text-green-600"></i>;
      case "redux":
        return <i className="fas fa-code-branch text-purple-600"></i>;
      case "swagger":
        return <i className="fas fa-book text-green-500"></i>;
      case "thunder":
        return <i className="fas fa-bolt text-blue-500"></i>;
      case "database":
        return <i className="fas fa-database text-blue-500"></i>;
      case "server":
        return <i className="fas fa-server text-orange-500"></i>;
      case "docker":
        return <i className="fab fa-docker text-blue-500"></i>;
      case "ftp":
        return <i className="fas fa-file-upload text-orange-500"></i>;
      case "cpanel":
        return <i className="fas fa-cog text-orange-500"></i>;
      case "firebase":
        return <i className="fas fa-fire text-orange-500"></i>;
      case "google":
        return <i className="fab fa-google text-green-500"></i>;
      case "apple":
        return <i className="fab fa-apple text-gray-600"></i>;
      case "git":
        return <i className="fab fa-git-alt text-orange-500"></i>;
      case "github":
        return <i className="fab fa-github text-gray-800"></i>;
      case "email":
        return <i className="fas fa-envelope text-blue-500"></i>;
      case "terminal":
        return <i className="fas fa-terminal text-gray-600"></i>;
      case "api":
        return <i className="fas fa-network-wired text-green-500"></i>;
      case "javascript":
        return <i className="fab fa-js-square text-yellow-500"></i>;
      case "typescript":
        return <i className="fas fa-code text-blue-500"></i>;
      case "html5":
        return <i className="fab fa-html5 text-orange-500"></i>;
      case "css3":
        return <i className="fab fa-css3-alt text-blue-500"></i>;
      case "bootstrap":
        return <i className="fab fa-bootstrap text-purple-500"></i>;
      case "tailwind":
        return <i className="fas fa-palette text-blue-400"></i>;
      default:
        return <i className="fas fa-tools"></i>;
    }
  };

  // Color classes mapping
  const getColorClass = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "green":
        return "bg-green-100 text-green-800 border-green-200";
      case "purple":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "orange":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "gray":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "yellow":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="tools" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Development Tools</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">{category.title.split(' ')[0]}</span>
              <span>{category.title.split(' ').slice(1).join(' ')}</span>
            </h3>
            
            <div className="space-y-3">
              {category.tools.map((tool, toolIndex) => (
                <div 
                  key={toolIndex}
                  className={`flex items-center p-3 rounded-lg border ${getColorClass(tool.color)} transition-transform duration-200 hover:scale-105`}
                >
                  <div className="text-lg mr-3">
                    {getIcon(tool.icon)}
                  </div>
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-center mb-6">My Development Stack</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3 text-blue-700">Frontend & Mobile</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">React</span>
              <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">React Native</span>
                            <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">JavaScript</span>
              <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">TypeScript</span>
              <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">HTML5</span>
              <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">CSS3</span>
                            <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Tailwind CSS</span>
              <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">Bootstrap</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3 text-green-700">Backend & APIs</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Node.js</span>
              <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Express</span>
              <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">MySQL</span>
              <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">MongoDB</span>
              <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">Firebase</span>
              <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">REST APIs</span>
            </div>
          </div>
        </div>
      </div> */}


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