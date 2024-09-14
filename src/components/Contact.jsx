import React from 'react';
import styles from './Contact.css';
import Form from './Form';
import chat from '../assets/chatbubble.svg';
import call from '../assets/phone.svg';
import mosque from '../assets/mosque.svg';

const ContactCard = ({ image, alt, text }) => (
  <div className={styles.cardOne}>
    <img className={styles.image} src={image} alt={alt} />
    <div className={styles.cardText}>{text}</div>
  </div>
);

const Contact = () => {
  const contactCards = [
    { image: chat, alt: 'chatbubble', text: 'Join Our Groupchat' },
    { image: call, alt: 'phone', text: 'Give Us a Call' },
    { image: mosque, alt: 'mosque', text: 'Find Us' },
  ];

  return (
    <div className={styles.contactContainer}>
      <div className={styles.rowOne}>
        <div className={styles.chip}>Contact Us</div>
        <h1 className={styles.header}>
          <span className={styles.highlight}>Let's start</span> a <br />
          Conversation
        </h1>
      </div>
      <div className={styles.rowTwo}>
        <div className={styles.cardContainerOne}>
          {contactCards.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
        <div className={styles.cardContainerTwo}>
          <Form />
          <div className={styles.cardTwo}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
