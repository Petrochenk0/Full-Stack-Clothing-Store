import React from 'react';
// Components
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
// Tools
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Images
import MensBanner from './assets/banner_mens.png';
import WomensBanner from './assets/banner_women.png';
import KidsBanner from './assets/banner_kids.png';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={MensBanner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={WomensBanner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={KidsBanner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/registry" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
