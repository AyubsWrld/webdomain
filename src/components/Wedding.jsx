import React from 'react';
import './Wedding.css';

export default function Wedding() {
  return (
    <div className='wedding-container'>
      <div className='RowOne'>
        <div className="chip">Wedding Services</div>
        <h1 className="header">Book us for Your <br/><span className='highlight'>Special Day</span></h1>
      </div>
      <div className='RowTwo'>
        <div className='info-section'>
          <h2>We look forward to hosting you!</h2>
          <h3>Please Note:</h3>
          <ul>
            <li>A minimum of one week notice prior to event booking is recommended.</li>
            <li>Wedding decor will not be provided.</li>
            <li>We ask guests to follow Islamic Guidelines when holding events at our community spaces.</li>
            <li>Location: Sahaba start from - $400 / Alfaruq start from $3000</li>
          </ul>
        </div>
        <form className='booking-form'>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className='form-group'>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className='form-group'>
              <label htmlFor="date">Expected Event Date</label>
              <input type="date" id="date" name="date" required />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="time">Event Start Time</label>
              <input type="time" id="time" name="time" required />
            </div>
            <div className='form-group'>
              <label htmlFor="guests">Number of Guests</label>
              <input type="number" id="guests" name="guests" required />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor="location">Rental Location</label>
            <input type="text" id="location" name="location" required />
          </div>
          <div className='form-group'>
            <label htmlFor="info">Additional Information</label>
            <textarea id="info" name="info" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
