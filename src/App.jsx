import { Routes, Route } from 'react-router-dom';
import Header from './components/HomePage/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import ZaraProducts from './pages/ZaraProducts';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/zaraproducts" element={<ZaraProducts />} />
      </Routes>
    </>
  );
}