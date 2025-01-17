import React from 'react';
// styles
import './Item.css';
// tools
import { Link } from 'react-router-dom';
export default function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          src={props.image}
          alt=""
        />
      </Link>
      <h3>{props.name}</h3>
      <div className="prices">
        <div className="new-price">${props.new_price}</div>
        <div className="old-price">${props.old_price}</div>
      </div>
    </div>
  );
}
// написать функционал для перелистывания страницы наверх
