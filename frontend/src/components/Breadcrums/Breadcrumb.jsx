// library
import React from 'react';
// styles
import './Breadcrumb.css';
// assets
import Arrow from '../../assets/breadcrum_arrow.png';

export default function Breadcrumb(props) {
  const { product } = props; // === const product = props.product
  return (
    <div className="breadcrumb">
      HOME
      <img src={Arrow} alt="" />
      SHOP
      <img src={Arrow} alt="" />
      {product.category}
      <img src={Arrow} alt="" />
      {product.name}
    </div>
  );
}
