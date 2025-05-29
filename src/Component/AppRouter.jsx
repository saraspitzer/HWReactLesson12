import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Products from './Products';
import MyOrder from './MyOrder';
import ProductInfo from './ProductInfo';
import { MyProvider } from '../context';
import Login from './LogIn';

const AppRouter = ({ store,cartProducts, setCartProducts, sum, setSum, products,setProducts }) => {
  return (
    <MyProvider value={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar setCartProducts={setCartProducts} />}>
        <Route path="/" element={<Home />}/>
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Cart" element={<Cart  setSum={setSum} setCartProducts={setCartProducts} cartProducts={cartProducts} sum={sum} />} />
        <Route path="Products" element={<Products  products={products} setProducts={setProducts} cartProducts={cartProducts} setCartProducts={setCartProducts} sum={sum} setSum={setSum}/>} />
        <Route path="MyOrder" element={<MyOrder setCartProducts={setCartProducts} setSum={setSum} cartProducts={cartProducts} sum={sum}/>} />
        <Route path="productInfo/:id" element={<ProductInfo products={products} />} />
        <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </MyProvider>
  );
};

export default AppRouter;