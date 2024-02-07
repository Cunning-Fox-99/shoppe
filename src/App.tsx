import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Header from "./components/header";
import './ui-kit.scss'
import './misk.scss'
import Footer from "./components/footer";
import Shop from "./pages/shop";
import ProductPage from "./pages/product";
import Blog from "./pages/blog";
import Article from "./pages/article";
import Contact from "./pages/contact";
import Account from "./pages/account";
import AccountLogin from "./pages/account/account-login";
import AboutUs from "./pages/about-us";
import OrderDetails from "./pages/order-details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductPage />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Article />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/account" element={<Account />} />
            <Route path="/account/*" element={<AccountLogin />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />

        </Routes>
        <Footer />
    </BrowserRouter>
}

export default App;
