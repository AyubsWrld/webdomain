import React , { useState } from 'react';
import Landing from './components/Landing.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';

import './App.css';

function App() {

  const [selectedButton, setSelectedButton] = useState("About Us");
  const handleNavbarSelection = (buttonName) => {
      setSelectedButton(buttonName);
  };
  return (
    <>
      <Header />
      <Landing />
      <Navbar selectedButton={selectedButton} onButtonSelect={handleNavbarSelection} />
      { selectedButton === "About Us" && <p>
        <AboutUs />
      </p>}
    </>
  );
}

export default App;

