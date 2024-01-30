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
    link?: string,
    mr?: number,
    atr?: string
}

export default function Card({img, title, price, mr, atr}:CardPros) {

    return <div className="card" style={mr ? {marginRight: mr + 'px'} : {}}>
        <div className="card__hover">
            <div className="card__icons">
                <Link to={'/'}>
                    <img src={cart} alt=""/>
                </Link>
                <Link to={'/shop/1'}>
                    <img src={watch} alt=""/>
                </Link>
                <Link to={'/'}>
                    <img src={favorite} alt=""/>
                </Link>
            </div>
        </div>
        <Link className="card__image" to="/">
            {atr && <span className={"card__atr"}>{atr}</span>}
            <img src={img} alt=""/>
        </Link>
        <h5>
            <Link to={'/shop/1'}>{title}</Link>
        </h5>
        <span>{price}</span>
    </div>
}