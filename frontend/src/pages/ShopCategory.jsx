import React from 'react';
// components
import Item from '../components/Item/Item';
// data
import { ShopContext } from '../Context/ShopContext';
// styles
import './CSS/ShopCategory.css';
// images
import Dropdown from '../assets/dropdown_icon.png';

export default function ShopCategory(props) {
  const { AllProduct } = React.useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = React.useState([]);
  const [sortBy, setSortBy] = React.useState('');
  function filterAndSortProducts(category, sortBy) {
    // Фильтруем товары по категории
    const filteredProducts = AllProduct.filter((product) => product.category === category);

    // Сортируем отфильтрованные товары в соответствии с выбранным критерием
    if (sortBy === 'price') {
      filteredProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (sortBy === 'popularity') {
      filteredProducts.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'rating') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    return filteredProducts;
  }
  React.useEffect(() => {
    const category = props.category;
    const filteredAndSortedProducts = filterAndSortProducts(category, sortBy);
    setSortedProducts(filteredAndSortedProducts);
  }, [props.category, sortBy]);
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="shop-category">
      <img className="banner" src={props.banner} alt="" />
      <div className="product-sort">
        <h2>Sort by:</h2>
        <select id="sort" name="sort" onChange={handleChange}>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="category-of-sorted-indexes">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
      </div>
      <div className="sort-category-products">
        {sortedProducts.map((item, index) => {
          // or AllProduct
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
      <div className="loadmore">Explore more</div>
    </div>
  );
}
