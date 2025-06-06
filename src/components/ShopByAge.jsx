import React from 'react';
import '../Styles/ShopByAge.css';

import age0 from '../assets/paint.png';
import age1 from '../assets/paint.png';
import age3 from '../assets/paint.png';
import age5 from '../assets/paint.png';

import e from '../assets/e.png'; // Left image
import f from '../assets/f.png'; // Right image

const ShopByAge = () => {
  const ageGroups = [
    { img: age0, text: '0 - 12\nmonths' },
    { img: age1, text: '1 - 2\nyears' },
    { img: age3, text: '3+\nyears' },
    { img: age5, text: '5+\nyears' },
  ];

  return (
    <section className="shop-by-age-wrapper">
      <img src={e} alt="left decoration" className="left-img" />

      <div className="shop-by-age">
        <h2>Shop By Age</h2>
        <div className="age-categories">
          {ageGroups.map((age, index) => (
            <div
              key={index}
              className="age-card"
              style={{ backgroundImage: `url(${age.img})` }}
            >
              <span>{age.text}</span>
            </div>
          ))}
        </div>
      </div>

      <img src={f} alt="right decoration" className="right-img" />
    </section>
  );
};

export default ShopByAge;
