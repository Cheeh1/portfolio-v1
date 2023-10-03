import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/works";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const darkToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} darkToggle={darkToggle} />
        <Header />
        <About />
        <Works />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
