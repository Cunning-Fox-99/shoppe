import React from "react";
import HomeSlider from "../../components/home-slider";
import {Link} from 'react-router-dom'
import cardImg1 from './card-1.jpg'
import cardImg2 from './card-2.jpg'
import cardImg3 from './card-3.jpg'
import cardImg4 from './card-4.jpg'
import cardImg5 from './card-5.jpg'
import cardImg6 from './card-6.jpg'
import Card from "../../components/card";

export default function Home() {

    const cards = [
        {img: cardImg1, title: 'Lira Earrings', price: '$ 20,00'},
        {img: cardImg2, title: 'Hal Earrings', price: '$ 25,00'},
        {img: cardImg3, title: 'Kaede Hair Pin Set Of 3', price: '$ 30,00'},
        {img: cardImg4, title: 'Hair Pin Set of 3', price: '$ 30,00'},
        {img: cardImg5, title: 'Plaine Necklace', price: '$ 19,00'},
        {img: cardImg6, title: 'Yuki Hair Pin Set of 3', price: '$ 29,00'}
    ]

    return <>
        <HomeSlider />

        <div className="block-title container">
            <h2>Shop The Latest</h2>
            <Link to={'/products'}>View All</Link>
        </div>

        <div className="cards-wrapper container">
            {cards.map((item:any, index:any) => {
                return <Card key={index} img={item.img} title={item.title} price={item.price} />
            })}
        </div>
    </>
}