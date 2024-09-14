import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Events.css';
import './FundraiserCarousel.css';
import Fundraiser from './FundraiserCard.jsx';

const FundraiserCarousel = ({ fundraisers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerSlide >= fundraisers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? fundraisers.length - itemsPerSlide : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-content"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
        >
          {fundraisers.map((fundraiser, index) => (
            <div key={index} className="carousel-item">
              <Fundraiser {...fundraiser} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-button">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="carousel-button">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default function Events() {
  const fundraisers = [
    {
      title: "Education Fund for School ",
      description: "Raises allocated funds to support education through scholarships and the improvement of school infrastructure.",
      image: "/path/to/education-image.jpg",
      goal: 183000
    },
    {
      title: "Education Fund for School ",
      description: "Raises allocated funds to support education through scholarships and the improvement of school infrastructure.",
      image: "/path/to/education-image.jpg",
      goal: 183000
    },
    {
      title: "Education Fund for School ",
      description: "Raises allocated funds to support education through scholarships and the improvement of school infrastructure.",
      image: "/path/to/education-image.jpg",
      goal: 183000
    },
    {
      title: "Education Fund for School ",
      description: "Raises allocated funds to support education through scholarships and the improvement of school infrastructure.",
      image: "/path/to/education-image.jpg",
      goal: 183000
    },
    {
      title: "Education Fund for School ",
      description: "Raises allocated funds to support education through scholarships and the improvement of school infrastructure.",
      image: "/path/to/education-image.jpg",
      goal: 183000
    },
    {
      title: "Education Fund for School ",
      description: "Raises allocated funds to support education through scholarships and the improvement of school infrastructure.",
      image: "/path/to/education-image.jpg",
      goal: 183000
    },
  ];

  return (
    <div className='eventContainer'>
      <div className='RowOne'> 
        <div className="chip">Events</div>
        <h1 className="header">Programs and Initiatives</h1>
      </div>
      <div className='RowTwo'> 
        <FundraiserCarousel fundraisers={fundraisers} />
      </div>
    </div>
  );
}
