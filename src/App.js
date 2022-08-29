import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills/>
      <Contact/>


      <SocialLinks />

    </>
  );
}

export default App;
