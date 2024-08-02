import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Owner from './components/Owner'
import SmoothScroll from "smooth-scroll";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Owner />
      <Contact />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
