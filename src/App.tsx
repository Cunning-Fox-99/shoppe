import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Header from "./components/header";
import './ui-kit.scss'
import './misk.scss'
import Footer from "./components/footer";

function App() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
}

export default App;
