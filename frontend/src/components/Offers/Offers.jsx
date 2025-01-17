import React from 'react';
import './Offers.css';

import Exclusive from '../../assets/exclusive_image.png';

export default function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>OBLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={Exclusive} alt="" />
      </div>
    </div>
  );
}
