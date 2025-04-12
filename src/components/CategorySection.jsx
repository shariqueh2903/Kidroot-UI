import React from 'react';
import '../Styles/CategorySection.css';

import squeaky from '../assets/teddy.png';
import melody from '../assets/image1.png';
import travel from '../assets/image1.png';
import wooden from '../assets/teddy.png';
import pull from '../assets/image1.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';


function CategorySection() {
  return (
    <section className="category-section">
      <h2>Shop By Category</h2>
      <div className="category-list">
        {[
          { img: squeaky, label: "Girls Fasion" },
          { img: melody, label: "Boys Fasion" },
          { img: travel, label: "Trending" },
          { img: wooden, label: "Kids Casuals" },
          { img: pull, label: "Traditionals" }
        ].map((item, index) => (
          <div className="category-item" key={index}>
            <div className="category-circle">
              <img src={item.img} alt={item.label} />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="highlight-cards">
  <div className="highlight-card" style={{ backgroundImage: `url(${c1})` }}>
    <div className="highlight-text">
      <h4>Girls Fasion Store</h4>
      <p>Get 20% off on your first purchase</p>
      <button>Shop now</button>
    </div>
  </div>

  <div className="highlight-card" style={{ backgroundImage: `url(${c2})` }}>
    <div className="highlight-text">
      <h4>Early black Friday specials</h4>
      <p>Big discount 50% off on all order</p>
      <button>Shop now</button>
    </div>
  </div>

  <div className="highlight-card" style={{ backgroundImage: `url(${c3})` }}>
    <div className="highlight-text">
      <h4>The best thing for kids</h4>
      <p>Special offer gift voucher</p>
      <button>Shop now</button>
    </div>
  </div>
</div>

</section>
 );
};

export default CategorySection;
