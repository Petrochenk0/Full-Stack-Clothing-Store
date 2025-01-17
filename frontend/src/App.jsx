// Components
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
// Tools
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Images
import MensBanner from './assets/banner_mens.png';
import WomensBanner from './assets/banner_women.png';
import KidsBanner from './assets/banner_kids.png';
function App() {
  return (
    <>
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
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
