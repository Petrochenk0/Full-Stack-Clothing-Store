// library and hooks
import React from 'react';
// context
import { ShopContext } from '../../Context/ShopContext';
//styles
import './Navbar.css';
// png for navbar
import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart_icon.png';
// features
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [choiceMenu, setChoiceMenu] = React.useState('shop');
  const { getTotalQuantity } = React.useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="navigation-menu">
        <li onClick={() => setChoiceMenu('shop')}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            Shop
          </Link>{' '}
          {choiceMenu === 'shop' ? <hr /> : ''}
        </li>
        <li onClick={() => setChoiceMenu('men')}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/mens">
            Men
          </Link>
          {choiceMenu === 'men' ? <hr /> : ''}
        </li>
        <li onClick={() => setChoiceMenu('women')}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/womens">
            Women
          </Link>
          {choiceMenu === 'women' ? <hr /> : ''}
        </li>
        <li onClick={() => setChoiceMenu('kids')}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/kids">
            Kids
          </Link>
          {choiceMenu === 'kids' ? <hr /> : ''}
        </li>
      </ul>
      <div className="navigation-login-cart">
        <button>
          <Link style={{ textDecoration: 'none', color: '#3b3a3a' }} to="/login">
            Login
          </Link>
        </button>
        <Link style={{ textDecoration: 'none' }} to="/cart">
          <img src={Cart} alt="" />
        </Link>
        <div className="navigation-cart-count">{getTotalQuantity()}</div>
      </div>
    </div>
  );
}
