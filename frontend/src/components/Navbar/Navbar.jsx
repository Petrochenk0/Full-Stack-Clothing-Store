import React from 'react';

import { ShopContext } from '../../Context/ShopContext';

import './Navbar.css';

import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart_icon.png';

import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [choiceMenu, setChoiceMenu] = React.useState('shop');
  const { getTotalQuantity } = React.useContext(ShopContext);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
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
        {username ? (
          <button className="profile-btn" onClick={() => navigate('/profile')}>
            {username}
          </button>
        ) : (
          <button>
            <Link style={{ textDecoration: 'none', color: '#3b3a3a' }} to="/registry">
              Sign Up
            </Link>
          </button>
        )}
        <Link style={{ textDecoration: 'none' }} to="/cart">
          <img src={Cart} alt="" />
        </Link>
        <div className="navigation-cart-count">{getTotalQuantity()}</div>
      </div>
    </div>
  );
}
