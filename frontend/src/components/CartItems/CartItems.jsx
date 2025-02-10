// library
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// styles
import './CartItems.css';
// context data
import { ShopContext } from '../../Context/ShopContext';
// assets
import Remove from '../../assets/cart_cross_icon.png';

export default function CartItems() {
  const { AllProduct, deleteFromCart, cartItems, getTotalPrice } = React.useContext(ShopContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        navigate('/login');
        return;
      }

      // Prepare order items
      const orderItems = AllProduct.reduce((items, product) => {
        if (cartItems[product.id] > 0) {
          items.push({
            name: product.name,
            price: product.new_price,
            quantity: cartItems[product.id],
          });
        }
        return items;
      }, []);

      // Send order to backend
      await axios.post(
        'http://localhost:8000/api/users/order',
        {
          items: orderItems,
          total: getTotalPrice(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // Clear cart and redirect to profile
      navigate('/profile');
      window.location.reload(); // To refresh cart
    } catch (error) {
      console.error('Failed to process order 😢', error);
    }
  };

  return (
    <div className="cart-items">
      <div className="main-format">
        <p className="">Products</p>
        <p className="">Title</p>
        <p className="">Price</p>
        <p className="">Quantity</p>
        <p className="">Total</p>
        <p className="">Remove</p>
      </div>
      <hr />
      {AllProduct.map((elementInCart) => {
        if (cartItems[elementInCart.id] > 0) {
          // if the product is in the user's cart we show it to him
          return (
            <div className="" key={elementInCart.id}>
              <div className="cart-items-format main-format">
                <img src={elementInCart.image} alt="" className="product-icon" />
                <p className="">{elementInCart.name}</p>
                <p className="">${elementInCart.new_price}</p>
                <button className="cart-items-quantity">{cartItems[elementInCart.id]}</button>
                <p className="">${elementInCart.new_price * cartItems[elementInCart.id]}</p>
                <img
                  onClick={() => {
                    deleteFromCart(elementInCart.id);
                  }}
                  src={Remove}
                  alt=""
                  className="delete-icon-product"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="down">
        <div className="general-price">
          <h1 className="">Cart Total</h1>
          <div className="">
            <div className="total-items">
              <p className="">Subtotal</p>
              <p className="">${getTotalPrice()}</p>
            </div>
            <hr />
            <div className="total-items">
              <p className="">Shipping Fee</p>
              <p className="">Free</p>
            </div>
            <hr />
            <div className="total-items">
              <h3 className="">Total</h3>
              <p className="">${getTotalPrice()}</p>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have promo code, Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
