import React from 'react';
//  styles
import './ProductDisplay.css';
//  assets
import Star from '../../assets/star_icon.png';
import DullStar from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
export default function ProductDisplay(props) {
  const { addToCart } = React.useContext(ShopContext);
  const { product } = props;
  return (
    <div className="product-display">
      <div className="left-block">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="image">
          <img className="main-image" src={product.image} alt="" />
        </div>
      </div>
      <div className="right-block">
        <h1>{product.name}</h1>
        <div className="stars">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={DullStar} alt="" />
          <p>(534)</p>
        </div>
        <div className="prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="">
          Represents a jacket item of clothing. This class provides information and functionality
          related to jackets. It includes details such as material, size, and color, as well as
          methods for maintenance and care.
        </div>
        <div className="size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="">
          ADD TO CART
        </button>
        <p className="right-category">
          <span className="">Categroy: </span> Women, T-Shirt, Crop Top
        </p>
        <p className="right-category">
          <span className="">Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
}
