import React from 'react';
import './NavBar.css';

export default function Navbar({ selectedButton, onButtonSelect }) {
  return (
    <div>
      <div className='button-container'>
        <button
          className={selectedButton === "About Us" ? "selected" : "unselected"}
          onClick={() => onButtonSelect("About Us")}
        >
          About Us
        </button>

        <button
          className={selectedButton === "Seeds of Success" ? "selected" : "unselected"}
          onClick={() => onButtonSelect("Seeds of Success")}
        >
          Seeds of Success
        </button>

        <button
          className={selectedButton === "Donate" ? "selected" : "unselected"}
          onClick={() => onButtonSelect("Donate")}
        >
          Donate
        </button>

        <button
          className={selectedButton === "Events" ? "selected" : "unselected"}
          onClick={() => onButtonSelect("Events")}
        >
          Events
        </button>

        <button
          className={selectedButton === "Contact" ? "selected" : "unselected"}
          onClick={() => onButtonSelect("Contact")}
        >
          Contact
        </button>
      </div>
      <div>
      </div>
    </div>
  );
}
