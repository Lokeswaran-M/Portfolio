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
import Cloud from '../assets/Google-Cloud.png';
import playconsole from '../assets/play-console.png';
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
        { name: "Expo", icon: "expo", color: "gray" },
        { name: "React Native CLI", icon: "react", color: "lightblue" },
        { name: "CLI", icon: "terminal", color: "gray" }
      ]
    },
    {
      title: "🌐 Backend & API Tools",
      tools: [
        { name: "Node.js", icon: "nodejs", color: "green" },
        { name: "Redux", icon: "redux", color: "purple" },
        { name: "Swagger", icon: "swagger", color: "green" },
        { name: "Thunder Client", icon: "thunder", color: "purple" },
        { name: "REST APIs", icon: "api", color: "lightblue" }
      ]
    },
    {
      title: "🗄️ Database & Server",
      tools: [
        { name: "Navicat", icon: "navicat", color: "gold" },
        { name: "XAMPP", icon: "xampp", color: "orange" },
        { name: "Docker", icon: "docker", color: "lightblue" },
        { name: "FileZilla", icon: "filezilla", color: "red" },
        { name: "cPanel", icon: "cpanel", color: "orange" }
      ]
    },
    {
      title: "☁️ Cloud & Hosting",
      tools: [
        { name: "Firebase Console", icon: "firebase", color: "orange" },
        { name: "Google Play Console", icon: "playconsole", color: "blue" },
        { name: "Google Cloud", icon: "Cloud", color: "green" },
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
        { name: "EmailJS", icon: "emailjs", color: "orange" }
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
      case "playconsole": 
        return <img src={playconsole} className="w-6 h-6" alt="Google" />;
      case "Cloud": 
        return <img src={Cloud} className="w-6 h-6" alt="Cloud" />;
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
      case "yellow": return "bg-yellow-50 text-yellow-800 border-yellow-200";
      case "lightblue": return "bg-sky-100 text-sky-800 border-sky-200";
      case "gold": return "bg-amber-50 text-amber-800 border-amber-200";
      case "red": return "bg-red-100 text-red-800 border-red-200";

      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="tools" className="relative py-16 px-4 md:px-8 text-center mx-auto max-w-6xl overflow-hidden">


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
