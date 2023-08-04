import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="tourism-site__hero-container">
      <div className="tourism-site__hero-title">
        <h1>Experience the beauty of Rwanda with us</h1>
        <p>Discover the Land of a Thousand Hills</p>
      </div>
      <div className="tourism-site__hero-button_container">
        <button className="tourism-site__hero-button" type="button">
          <div>&lang;</div>
        </button>
        <button className="tourism-site__hero-button" type="button">
          <div>&rang;</div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
