import React from 'react';
import '../Styles/CategorySection.css';

import squeaky from '../assets/squeaky.png';
import melody from '../assets/melody.png';
import travel from '../assets/image1.png';
import wooden from '../assets/teddy.png';
import pull from '../assets/image1.png';

function CategorySection() {
  return (
    <section className="category-section">
      <h2>Shop By Category</h2>
      <div className="category-list">
        {[
          { img: squeaky, label: "Squeaky Toys" },
          { img: melody, label: "Melody Mates" },
          { img: travel, label: "Travel Treasures" },
          { img: wooden, label: "Wooden Wonders" },
          { img: pull, label: "Pull Toys" }
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
  <div className="highlight-card">
    <img src="/assets/baby.png" alt="Design" className="card-bg" />
    <h4>Wood toys for your kids</h4>
    <p>Get 20% off on your first purchase</p>
    <button>Shop now</button>
  </div>

  <div className="highlight-card">
    <img src="/assets/baby.png" alt="Design" className="card-bg" />
    <h4>Early black Friday specials</h4>
    <p>Big discount 50% off on all order</p>
    <button>Shop now</button>
  </div>

  <div className="highlight-card">
    <img src="/assets/baby.png" alt="Design" className="card-bg" />
    <h4>The best thing for kids</h4>
    <p>Special offer gift voucher</p>
    <button>Shop now</button>
  </div>
</div>
</section>
 );
};

export default CategorySection;
