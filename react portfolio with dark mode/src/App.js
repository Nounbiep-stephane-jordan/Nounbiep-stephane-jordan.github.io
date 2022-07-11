import React, { createContext, useEffect, useState } from "react";
import Nav from "./components/nav/nav";
import Section1 from "./components/sec/sec";
import "./App.css";
import Service from "./components/service/service";
import Experience from "./components/experience/experience";
import Brand from "./components/brands/brand";
import Projects from "./components/projects/projects";
import Testimonial from "./components/testimonials/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
      <div
        className="App"
        style={
          darkmode ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
      >
        <Nav darkmode={darkmode} setDarkmode={setDarkmode} />
        <Section1 darkmode={darkmode} />
        <Service darkmode={darkmode} />
        <Experience darkmode={darkmode} />
        <Brand darkmode={darkmode} />
        <Projects darkmode={darkmode} />
        <Testimonial darkmode={darkmode} />
        <Contact darkmode={darkmode} />
        <Footer darkmode={darkmode} />
      </div>
    </>
  );
}

export default App;
