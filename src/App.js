import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useEffect } from "react";


import ReactGA from 'react-ga'
const TRACKING_ID = "UA-222620354-1"
ReactGA.initialize(TRACKING_ID)



function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />


      <SocialLinks />

    </>
  );
}

export default App;
