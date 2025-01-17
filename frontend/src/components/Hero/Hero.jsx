import React from 'react';
import './Hero.css';

import Hand from '../../assets/hand_icon.png';
import Arrow from '../../assets/arrow.png';
import HeroIcon from '../../assets/hero_image.png';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand">
            <p>new</p>
            <img src={Hand} alt="Hand" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="last-collection">
          <div>Latest colections</div>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroIcon} alt="hero" />
      </div>
    </div>
  );
}
