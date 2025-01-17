import React from 'react';
// components
import Item from '../Item/Item';
// styles
import './RelatedProducts.css';
// data
import Data from '../../assets/data';
export default function RelatedProducts() {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {Data.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}
