// styles
import './CustomSelect.css';

export default function CustomSelect() {
  return (
    <div className="product-sort">
      <h2>Sort by:</h2>
      <select id="sort" name="sort">
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
