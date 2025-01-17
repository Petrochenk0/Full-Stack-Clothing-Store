import React from 'react';
import Item from '../Item/Item';

import './NewCollections.css';

import NewCollection from '../../assets/new_collections.js';

export default function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr className="hr" />
      <div className="collections-items">
        {NewCollection.map((item, index) => {
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
