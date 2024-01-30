import React from "react";
import {Link, useLocation} from "react-router-dom";
import logo from './logo.svg'
import search from './search.svg'
import account from './account.svg'
import cart from './cart.svg'
import './header.scss'

export default function Header() {
   let location = useLocation();
   // console.log(location)

    return <div className={location.pathname === '/' ? "header main" : "header"}>
        <div className="header__top container">
            <div className="header__column">
                <Link to={'/'}>
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="header__column header__column--2">
                <nav className="header__nav">
                    <Link className={location.pathname.includes('shop') ? 'active' : ''} to={'/shop'}>Shop</Link>
                    <Link className={location.pathname.includes('blog') ? 'active' : ''} to={'/blog'}>Blog</Link>
                    <Link className={location.pathname.includes('about-us') ? 'active' : ''} to={'/about-us'}>Our story</Link>
                </nav>
                <div className="header__icons">
                    <div className="header__icon">
                        <img src={search} alt=""/>
                    </div>
                    <Link to="/cart" className="header__icon">
                        <img src={cart} alt=""/>
                    </Link>
                    <Link className="header__icon" to={'/account'}>
                        <img src={account} alt=""/>
                    </Link>
                </div>
            </div>
        </div>


    </div>
}