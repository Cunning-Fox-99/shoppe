import React from 'react'
import Filter from "../../components/filter";
import './shop.scss'
import cardImg1 from "../home/card-1.jpg";
import cardImg2 from "../home/card-2.jpg";
import cardImg3 from "../home/card-3.jpg";
import cardImg4 from "../home/card-4.jpg";
import cardImg5 from "../home/card-5.jpg";
import cardImg6 from "../home/card-6.jpg";
import Card from "../../components/card";

export default function Shop() {

    const cards = [
        {img: cardImg1, atr: '-21%', title: 'Lira Earrings', price: '$ 20,00'},
        {img: cardImg2, title: 'Hal Earrings', price: '$ 25,00'},
        {img: cardImg3, title: 'Kaede Hair Pin Set Of 3', price: '$ 30,00'},
        {img: cardImg4, title: 'Hair Pin Set of 3', price: '$ 30,00'},
        {img: cardImg5, atr: 'Sold out', title: 'Plaine Necklace', price: '$ 19,00'},
        {img: cardImg6, title: 'Yuki Hair Pin Set of 3', price: '$ 29,00'}
    ]

    return (
        <div className="shop container">
            <h2 className="shop__title">Shop The Latest</h2>

            <div className="shop__wrapper">

                <Filter />

                <div className="shop__items">
                    {cards.map((item:any, index:any) => {
                        return <Card atr={item.atr} mr={24} key={index} img={item.img} title={item.title} price={item.price} />
                    })}
                </div>

            </div>
        </div>
    )
}