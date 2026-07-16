import React from 'react';
import { FiTool, FiGlobe, FiDatabase, FiCloud, FiCreditCard, FiGitBranch, FiMail } from 'react-icons/fi';
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
import cloudflare from '../assets/Cloudflare-logo.png';
import cloudpe from '../assets/cloudpe-logo.png';
import razorpay from '../assets/Razorpay-logo.png';

const Tools = () => {
  const toolCategories = [
    {
      title: "Development & IDEs",
      icon: FiTool,
      span: "lg:col-span-2 lg:row-span-2",
      tools: [
        { name: "VS Code", icon: "vscode", bg: "bg-blue-100" },
        { name: "Xcode", icon: "xcode", bg: "bg-sky-100" },
        { name: "Android Studio", icon: "android", bg: "bg-green-100" },
        { name: "Expo", icon: "expo", bg: "bg-gray-100" },
        { name: "React Native CLI", icon: "react", bg: "bg-cyan-100" },
        { name: "Terminal / CLI", icon: "terminal", bg: "bg-gray-100" }
      ]
    },
    {
      title: "Backend & API",
      icon: FiGlobe,
      span: "lg:col-span-1",
      tools: [
        { name: "Node.js", icon: "nodejs", bg: "bg-green-100" },
        { name: "Redux", icon: "redux", bg: "bg-purple-100" },
        { name: "Swagger", icon: "swagger", bg: "bg-green-100" },
        { name: "Thunder Client", icon: "thunder", bg: "bg-purple-100" },
        { name: "REST APIs", icon: "api", bg: "bg-sky-100" }
      ]
    },
    {
      title: "Database & Server",
      icon: FiDatabase,
      span: "lg:col-span-1",
      tools: [
        { name: "Navicat Premium", icon: "navicat", bg: "bg-amber-100" },
        { name: "XAMPP", icon: "xampp", bg: "bg-orange-100" },
        { name: "Docker", icon: "docker", bg: "bg-sky-100" },
        { name: "FileZilla", icon: "filezilla", bg: "bg-red-100" },
        { name: "cPanel", icon: "cpanel", bg: "bg-orange-100" }
      ]
    },
    {
      title: "Cloud & Hosting",
      icon: FiCloud,
      span: "lg:col-span-1",
      tools: [
        { name: "Firebase Console", icon: "firebase", bg: "bg-amber-100" },
        { name: "Google Play Console", icon: "playconsole", bg: "bg-blue-100" },
        { name: "Google Cloud Platform", icon: "Cloud", bg: "bg-green-100" },
        { name: "App Store Connect", icon: "apple", bg: "bg-gray-100" },
        { name: "Cloudflare", icon: "cloudflare", bg: "bg-orange-100" },
        { name: "cloudPe", icon: "cloudpe", bg: "bg-indigo-100" }
      ]
    },
    {
      title: "Payment Gateway",
      icon: FiCreditCard,
      span: "lg:col-span-1",
      tools: [
        { name: "Razorpay", icon: "razorpay", bg: "bg-blue-100" }
      ]
    },
    {
      title: "Version Control",
      icon: FiGitBranch,
      span: "lg:col-span-1",
      tools: [
        { name: "Git", icon: "git", bg: "bg-orange-100" },
        { name: "GitHub", icon: "github", bg: "bg-gray-100" }
      ]
    },
    {
      title: "Other Services",
      icon: FiMail,
      span: "lg:col-span-1",
      tools: [
        { name: "EmailJS", icon: "emailjs", bg: "bg-orange-100" }
      ]
    }
  ];

  // Helper to get the image source directly
  const getIconSrc = (iconName) => {
    const sources = {
      vscode, xcode, android, expo, react, nodejs, redux, swagger, thunder,
      navicat, xampp, docker, filezilla, cpanel, firebase, playconsole,
      Cloud, apple, git, github, emailjs, terminal, api, cloudflare,
      cloudpe, razorpay
    };
    return sources[iconName] || null;
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Dev Toolkit</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            The tools and services I rely on to build, deploy, and maintain exceptional digital products.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {toolCategories.map((cat, idx) => {
            const isLarge = cat.span.includes("col-span-2");
            const colCount = isLarge ? 3 : 2;
            const IconComponent = cat.icon;

            // Dynamic sizes based on card size
            const iconContainerSize = isLarge ? "w-16 h-16" : "w-12 h-12";
            const iconImgSize = isLarge ? "w-8 h-8" : "w-7 h-7";
            const textSize = isLarge ? "text-sm" : "text-xs";
            const cellMinHeight = isLarge ? "min-h-[110px]" : "min-h-[80px]";

            return (
              <div
                key={idx}
                className={`${cat.span} bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <IconComponent className="text-3xl text-slate-600" />
                  <h3 className="text-xl font-semibold text-slate-700">{cat.title}</h3>
                </div>

                <div
                  className={`flex-1 grid gap-3`}
                  style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}
                >
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors ${cellMinHeight}`}
                    >
                      <div
                        className={`${iconContainerSize} ${tool.bg} rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md`}
                      >
                        <img
                          src={getIconSrc(tool.icon)}
                          className={iconImgSize}
                          alt={tool.name}
                        />
                      </div>
                      <span
                        className={`${textSize} font-medium text-slate-600 mt-1.5 text-center leading-tight w-full truncate`}
                        title={tool.name}
                      >
                        {tool.name}
                      </span>
                    </div>
                  ))}
                  {/* Fill empty cells to maintain grid alignment */}
                  {Array.from({ length: colCount - (cat.tools.length % colCount || colCount) }).map((_, i) => (
                    <div key={`placeholder-${i}`} className="invisible" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;