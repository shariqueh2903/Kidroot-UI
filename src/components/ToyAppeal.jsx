import React from 'react';
import '../Styles/ToyAppeal.css';
import { FaCubes, FaPuzzlePiece } from 'react-icons/fa';
import groupImg from '../assets/group.png';         // front image
import bgImg from '../assets/circle.png';  // background image (new)

const ToyAppeal = () => {
  return (
    <section className="toy-appeal">
      <div className="toy-image-container">
        <img src={bgImg} alt="Background" className="bg-image" />
        <img src={groupImg} alt="Girl with Toy" className="front-image" />
      </div>

      <div className="toy-content">
        <h2>The Unique Appeal Of Toy Time<br />Toys & Games</h2>

        <div className="feature">
          <div className="icon"><FaCubes /></div>
          <div>
            <h3>Exclusive Toy Collections</h3>
            <p>Enim diam vulputate ut pharetra. Adipiscing elit pellentesque habitant morbi tristique.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon"><FaPuzzlePiece /></div>
          <div>
            <h3>Extensive Toy Assortment</h3>
            <p>Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Sed viverra ipsum nunc aliquet bibendum enim.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyAppeal;
