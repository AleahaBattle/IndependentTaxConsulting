import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Owner from './components/Owner'
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Owner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
