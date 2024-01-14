import React from "react";
import {Link} from "react-router-dom";
import logo from './logo.svg'
import search from './search.svg'
import account from './account.svg'
import cart from './cart.svg'
import './header.scss'

export default function Header() {
    return <div className="header container">
        <div className="header__column">
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
        </div>
        <div className="header__column header__column--2">
            <nav className="header__nav">
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/about-us'}>Our story</Link>
            </nav>
            <div className="header__icons">
                <div className="header__icon">
                    <img src={search} alt=""/>
                </div>
                <div className="header__icon">
                    <img src={cart} alt=""/>
                </div>
                <Link className="header__icon" to={'/account'}>
                    <img src={account} alt=""/>
                </Link>
            </div>
        </div>

    </div>
}