import React from 'react';
import Form from './Form';
import chat from '../assets/chatbubble.svg';
import call from '../assets/phone.svg';
import mosque from '../assets/mosque.svg';
import './Contact.css';

const ContactCard = ({ image, alt, text }) => (
  <div className="card-one"> {/* Updated class name to kebab-case */}
    <img className="image" src={image} alt={alt} />
    <div className="card-text">{text}</div> {/* Updated class name */}
  </div>
);

const Contact = () => {
  const contactCards = [
    { image: chat, alt: 'chatbubble', text: 'Join Our Groupchat' },
    { image: call, alt: 'phone', text: 'Give Us a Call' },
    { image: mosque, alt: 'mosque', text: 'Find Us' },
  ];

  return (
    <div className="contact-container"> {/* Updated class name */}
      <div className="rowOne">
        <div className="chip">Contact Us</div>
        <h1 className="header">
          <span className="highlight">Let's start</span> a <br />
          Conversation
        </h1>
      </div>
      <div className="rowTwo">
        <div className="card-container-one"> {/* Updated class name */}
          {contactCards.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
        <div className="card-container-two"> {/* Updated class name */}
          <Form />
          <div className="card-two"></div> {/* Updated class name */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
