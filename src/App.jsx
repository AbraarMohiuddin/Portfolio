import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import ContactForm from "./Components/Contact/Contact";
import WorkExperience from "./Components/Experience/WorkExperience";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default App;
