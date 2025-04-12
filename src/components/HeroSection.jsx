import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css';

import teddyImg from '../assets/baby.png';
import bunnyImg from '../assets/boy.png';
import yellowImg from '../assets/girl.png';   // 🌼 Yellow Slide
import pistaImg from '../assets/group.png';     // 🥑 Pista Slide
import blueImg from '../assets/image.png';       // 🧊 Blue Slide
import cloudImg from '../assets/cloud.png';   // Cloud Image

const slides = [
  {
    image: teddyImg,
    title: 'Grey Container Title',
    offer: 'This is the first slide',
    price: 'Starting at Rs.750',
    bgColor: '#f0f0f0'
  },
  {
    image: bunnyImg,
    title: 'Pink Container Title',
    offer: 'This is the second slide',
    price: 'Starts from Rs.850',
    bgColor: '#ffe4ec'
  },
  {
    image: yellowImg,
    title: 'Yellow Container Title',
    offer: 'Bright and cheerful!',
    price: 'Starting at Rs.699',
    bgColor: '#FFFACD'
  },
  {
    image: pistaImg,
    title: 'Pista Container Title',
    offer: 'Fresh picks for your kid!',
    price: 'From Rs.799 only',
    bgColor: '#C7F2A4'
  },
  {
    image: blueImg,
    title: 'Blue Container Title',
    offer: 'Cool styles in stock!',
    price: 'Flat Rs.899 onwards',
    bgColor: '#ADD8E6'
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-wrapper">

      <div className="hero-slider-wrapper">
        <div
          className="hero-slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <section
              key={index}
              className="hero"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="hero-content fade-in">
                <p className="offer">{slide.offer}</p>
                <h1>{slide.title}</h1>
                <p className="price">{slide.price}</p>
                <button className="shop-btn">Shop now</button>
              </div>
              <div className="hero-image fade-in">
                <img src={slide.image} alt={slide.title} className="slide-image" />
              </div>
              {/* Add clouds */}
              <div className="clouds cloud-left">
                <img src={cloudImg} alt="cloud" className="cloud-img" />
              </div>
              <div className="clouds cloud-right">
                <img src={cloudImg} alt="cloud" className="cloud-img" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
