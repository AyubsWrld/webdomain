import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='inner-container'>
          
          <div className='column-one'>
            <h3>CONTACT</h3>
            <p>Phone: (780)-000-0000</p>
            <p>Email: info@sahabamosque.ca</p>
            <p>Address:</p>
            <p>9216 105 Ave NW, Edmonton, AB, T5H 0J5</p>
          </div>

          <div className='column-two'>
            <h3>SERVICES</h3>
            <p>About Us</p>
            <p>Wedding Services</p>
            <p>FAQ</p>
            <p>Events</p>
          </div>

          <div className='column-three'>
            <div className="icon-row">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="rectangle"></div>
          </div>

        </div>
      </div>
    </>
  )
}
