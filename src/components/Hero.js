import React from "react";
import profileImage from "../assets/My Pic1.png";

const Hero = () => {
  return (
    <div className="relative flex min-h-[85vh] w-full overflow-hidden bg-white">


{/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
  {[
    `
<div>Hello World</div>
<p>Frontend Rocks!</p>`,

    `
body { margin:0; }
h1 { color:red; }`,

    `
const sum = (a,b) => a+b;
console.log(sum(2,3));`,

    `
function App(){
  return <h1>Hi!</h1>;
}`,

    `
const http = require("http");
http.createServer((req,res)=>res.end("Hi")).listen(3000);`
  ].map((snippet, i) => {
    const randomTop = Math.random() * 100;   // anywhere vertically
    const randomLeft = Math.random() * 50;   // limit to left half (0%–50%)
    const randomRotate = Math.random() * 30 - 15;

    return (
      <pre
        key={i}
        style={{
          position: "absolute",
          top: `${randomTop}%`,
          left: `${randomLeft}%`,
          transform: `rotate(${randomRotate}deg)`,
          fontSize: `2.5rem`,
          fontWeight: "bold",
          color: "rgba(0,0,0,0.1)",
          fontFamily: "monospace",
          whiteSpace: "pre",
          lineHeight: "1.2",
        }}
      >
        {snippet}
      </pre>
    );
  })}
</div> */}



      {/* Left Side - Designer */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#fff6f0]/80 p-8 text-gray-800 md:p-12 relative z-10">
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="text-5xl font-bold">
            Frontend<span className="text-red-600"> ❤</span>
          </h1>
          <p className="text-lg leading-relaxed">
            Experienced Frontend Developer specializing in React, React Native,
            and modern JavaScript frameworks to build responsive and interactive user interfaces.
          </p>
        </div>
      </div>

      {/* Center Image */}
      <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 w-[100vw] max-w-4xl pr-12">
        <img
          src={profileImage}
          alt="Profile"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Right Side - Coder */}
<div className="flex flex-1 flex-col items-center justify-center
  bg-[linear-gradient(to_right,#f0f8ff0d,#f0f8ffcc,#dbefff)]
  backdrop-blur-md border border-white/30 shadow-lg
  p-8 text-gray-800 md:p-12 relative z-10 rounded-2xl">
<div className="w-full max-w-md text-center  flex items-center justify-center opacity-85 z-0">
  <div>
    <h1 className="text-5xl font-bold">&lt;Backend&gt;</h1>
    <p className="text-lg leading-relaxed">
      Skilled Backend Developer working with Node.js, Express.js, and databases
      like MySQL and MongoDB to create secure, scalable server-side applications.
    </p>
  </div>
</div>


  {/* Your normal foreground content */}
  <div className="relative z-10">
    {/* Foreground elements go here */}
  </div>
</div>
    </div>
  );
};

export default Hero;
























// import React from "react";
// import profileImage from "../assets/My Pic1.png";

// const Hero = () => {
//   return (
//     <div className="relative flex min-h-[85vh] w-full overflow-hidden bg-white">
//       {/* Left Side - Designer */}
//       <div className="flex flex-1 flex-col items-center justify-center bg-[#fff6f0] p-8 text-gray-800 md:p-12">
//         <div className="w-full max-w-md space-y-6 text-center">
//           <h1 className="text-5xl font-bold">
//             Frontend<span className="text-red-600"> ❤</span>
//           </h1>
//   <p className="text-lg leading-relaxed">
//     Experienced Frontend Developer specializing in React, React Native,
//     and modern JavaScript frameworks to build responsive and interactive user interfaces.
//   </p>
//         </div>
//       </div>

//       {/* Center Image */}
//       {/* Center Image at bottom */}
//       <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 w-[100vw] max-w-4xl pr-9">
//         <img
//           src={profileImage}
//           alt="Profile"
//           className="h-full w-full object-contain"
//           loading="lazy"
//         />
//       </div>

//       {/* Right Side - Coder */}
//       <div className="flex flex-1 flex-col items-center justify-center bg-[#f0f8ff] p-8 text-gray-800 md:p-12">
//         <div className="w-full max-w-md space-y-6 text-center">
//           <h1 className="text-5xl font-bold">&lt;Backend&gt;</h1>
//      <p className="text-lg leading-relaxed">
//     Skilled Backend Developer working with Node.js, Express.js, and databases
//     like MySQL and MongoDB to create secure, scalable server-side applications.
//   </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
