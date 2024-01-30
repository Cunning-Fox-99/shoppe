import React from "react";
import BlogFilter from "../../components/blog-filter/blog-filter";
import './blog.scss'
import card1 from './card-1.jpg'
import card2 from './card-2.jpg'
import card3 from './card-3.jpg'
import card4 from './card-4.jpg'
import BlogCard from "../../components/blog-card/blog-card"
import Pagination from "../../components/pagination/pagination";

export default function Blog() {

    const cards = [
        { img: card1, title: 'Top Trends From Spring', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ', date: 'Fashion - October 8, 2020'},
        { img: card2, title: 'Top Trends From Spring', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ', date: 'Fashion - October 8, 2020'},
        { img: card3, title: 'Top Trends From Spring', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ', date: 'Fashion - October 8, 2020'},
        { img: card4, title: 'Top Trends From Spring', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ', date: 'Fashion - October 8, 2020'},
    ]

    return (
        <div className="blog container">

            <div className="blog__column">
                <h1>Blog</h1>
                <BlogFilter />
            </div>
            <div className="blog__column">
                {cards.map((item, index) => {
                    return <BlogCard key={index} item={item} />
                })}
                <Pagination />
            </div>


        </div>
    );
}