import React from 'react'
import ProductSlider from "../../components/product-slider/product-slider";
// import {useParams} from "react-router-dom";
import './product.scss'
import Product from "../../components/product/product";
import Tabs from "../../components/tabs/tabs";
import Card from "../../components/card";
import cardImg1 from "../home/card-1.jpg";
import cardImg2 from "../home/card-2.jpg";
import cardImg3 from "../home/card-3.jpg";
import Properties from "../../components/properties/properties";
import Reviews from "../../components/reviews/reviews";

export default function ProductPage() {

    // const params:any = useParams()
    // console.log(params)
    const cards = [
        {img: cardImg1, title: 'Lira Earrings', price: '$ 20,00'},
        {img: cardImg2, title: 'Hal Earrings', price: '$ 25,00'},
        {img: cardImg3, title: 'Kaede Hair Pin Set Of 3', price: '$ 30,00'}
    ]

    const properties = [
        {prop: 'Weight:', value: '0.3 kg'},
        {prop: 'Dimentions:', value: '15 x 10 x 1 cm'},
        {prop: 'Colours', value: 'Black, Browns, White'},
        {prop: 'Material', value: 'Metal'},
    ]

    const tabItems = [
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
            sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum
            sed.</p>,
        <Properties arr={properties} />,
        <Reviews />

    ]

    return <div className="product container">
        <div className="product__wrapper">
            <ProductSlider/>
            <Product/>
        </div>

        <div className="container">
            <Tabs items={tabItems} navList={['Description', 'Additional information', 'Reviews (1)']}/>
        </div>

        <div className="product__cards">
            <h5>Similar Items</h5>
            <div className="product__cards-wrapper">
                {cards.map((item: any, index: any) => {
                    return <Card key={index} img={item.img} title={item.title} price={item.price}/>
                })}
            </div>
        </div>


    </div>
}