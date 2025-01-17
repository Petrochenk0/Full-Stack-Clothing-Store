import React from 'react';
// styles
import './DescriptionBox.css';
export default function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="navigator">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews (534)</div>
      </div>
      <div className="description">
        <p>
          Our store offers a wide range of fashionable clothing for all ages and styles. We take
          pride in the high quality of our products and excellent customer service. You will find
          everything you need to create a stylish and comfortable look. Visit our store and refresh
          your wardrobe today!
        </p>
        <p>
          We constantly update our range to offer you the latest fashion trends. Our friendly staff
          is always ready to help you find the perfect clothing. We aim to create a pleasant
          shopping atmosphere to make your visit enjoyable and satisfying.
        </p>
      </div>
    </div>
  );
}
