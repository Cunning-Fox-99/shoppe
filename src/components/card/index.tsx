import React from 'react';
import {Link} from "react-router-dom";
import './card.scss'
import cart from './cart.svg';
import favorite from './favorite.svg';
import watch from './watch.svg';

interface CardPros {
    img: any,
    title: string,
    price: string,
    link?: string
}

export default function Card({img, title, price}:CardPros) {

    return <div className="card">
        <div className="card__hover">
            <div className="card__icons">
                <Link to={'/'}>
                    <img src={cart} alt=""/>
                </Link>
                <Link to={'/'}>
                    <img src={watch} alt=""/>
                </Link>
                <Link to={'/'}>
                    <img src={favorite} alt=""/>
                </Link>
            </div>
        </div>
        <Link to="/">
            <img src={img} alt=""/>
        </Link>
        <h5>{title}</h5>
        <span>{price}</span>
    </div>
}