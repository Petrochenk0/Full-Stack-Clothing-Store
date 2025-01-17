// library
import React from 'react';
import { createContext } from 'react';
// data for shop
import AllProduct from '../assets/all_product.js';
// create context
export const ShopContext = createContext(null);
// function for cart
const defaultCart = () => {
  // All product = 0 by default
  const cart = {};
  for (let index = 0; index < AllProduct.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : defaultCart();
  });

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    console.log(cartItems);
  };

  const deleteFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = AllProduct.find((product) => product.id === Number(item));
        totalPrice += itemInfo.new_price * cartItems[item]; // quantity * price
      }
    }
    return totalPrice;
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalQuantity += cartItems[item];
      }
    }
    return totalQuantity;
  };

  const contextData = {
    AllProduct,
    cartItems,
    addToCart,
    deleteFromCart,
    getTotalPrice,
    getTotalQuantity,
  }; // Here data and functions for the shop

  return <ShopContext.Provider value={contextData}>{props.children}</ShopContext.Provider>; // children here is where you put your components is stored, can be expanded upon if needed in
};
export default ShopContextProvider;

// Here we get  the data for our shop, which is stored here
