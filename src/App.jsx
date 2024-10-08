import React, { useState, useRef } from 'react';
import Landing from './components/Landing.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Events from './components/Events.jsx';
import calligraphy from './assets/pattern.png' ; 
import Wedding from './components/Wedding.jsx' ; 
import Footer from './components/Footer.jsx' ; 
import './App.css';


function App() {
  const [selectedButton, setSelectedButton] = useState("About Us");
  const aboutUsRef = useRef(null);

  const handleNavbarSelection = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === "About Us" && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Add the overlay here */}
      <div className="background-overlay"></div>
      //<Header />
      <Landing />
      <Navbar selectedButton={selectedButton} onButtonSelect={handleNavbarSelection} />
      <AboutUs />
      <Contact />
      <Events/>
      <Wedding />

      <Footer /> 
    </div>
  );
}

export default App;

// Reactive Version
//import React, { useState, useRef } from 'react';
//import Landing from './components/Landing.jsx';
//import Header from './components/Header.jsx';
//import Navbar from './components/Navbar.jsx';
//import AboutUs from './components/AboutUs.jsx';
//import Contact from './components/Contact.jsx';
//import Events from './components/Events.jsx';
//import calligraphy from './assets/Calligraphy.png' ; 
//
//import './App.css';
//
//function App() {
//  const [selectedButton, setSelectedButton] = useState("About Us");
//  const aboutUsRef = useRef(null);
//
//  const handleNavbarSelection = (buttonName) => {
//    setSelectedButton(buttonName);
//    if (buttonName === "About Us" && aboutUsRef.current) {
//      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
//    }
//  };
//
//  return (
//    <>
//      <Header />
//      <Landing />
//      <Navbar selectedButton={selectedButton} onButtonSelect={handleNavbarSelection} />
//
//      { selectedButton === "About Us" && (
//        <div ref={aboutUsRef}>
//          <AboutUs />
//        </div>
//      )}
//
//      { selectedButton === "Contact" && (
//          <Contact />
//      )}
//
//      { selectedButton === "Events" && (
//          <Events/>
//      )}
//    </>
//  );
//}
//
//export default App;
