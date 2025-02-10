import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../pages/Cart';
import { ShopContext } from '../Context/ShopContext';

const mockContextValue = {
  AllProduct: [
    { id: 1, name: 'Product 1', new_price: 100, image: 'product_1.png' },
    { id: 2, name: 'Product 2', new_price: 200, image: 'product_2.png' },
  ],
  cartItems: { 1: 2, 2: 1 },
  deleteFromCart: jest.fn(),
  getTotalPrice: jest.fn(() => 400),
};

test('renders Cart component', () => {
  render(
    <ShopContext.Provider value={mockContextValue}>
      <Cart />
    </ShopContext.Provider>,
  );
  const linkElement = screen.getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});
