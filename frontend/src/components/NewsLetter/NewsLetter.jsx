import React from 'react';

import './NewsLetter.css';
export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe on newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
