import React from 'react';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Tools from './components/Tools';
// import CustomCursor from './components/CustomCursor';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <CustomCursor /> */}
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Tools/>
      <Contact />
      <Footer />
    </div>
  );
}
export default App;