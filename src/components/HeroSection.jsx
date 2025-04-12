import React, { useEffect, useRef, useState } from 'react';
import '../Styles/HeroSection.css';

import banner1 from '../assets/banner.png';
import banner2 from '../assets/banner1.png';

const banners = [banner1, banner2];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="hero-wrapper">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="left-info">
          <span>📧 info@example.com</span>
          <span>📞 +000-123-456789</span>
        </div>
        <div className="center-info">Welcome to our store</div>
        <div className="right-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-color">Toys</span> TIME
        </div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Shop +</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages +</li>
        </ul>
        <div className="nav-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-shopping-bag"></i>
          <i className="fas fa-user"></i>
          <span className="lang-select">English ▾</span>
        </div>
      </nav>

      {/* Full-width Sliding Banner */}
      <div className="banner-slider">
        <div className="banner-track" ref={sliderRef}>
          {banners.map((banner, index) => (
            <div className="banner-container" key={index}>
              <img src={banner} alt={`Banner ${index + 1}`} className="banner-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
