import React from 'react';
import {Link} from 'react-router-dom'
interface BlogCardProps {
    item: {
        img: any,
        title: string,
        date: string,
        description: string
    }
}

export default function BlogCard({item}:BlogCardProps) {

    return <div className="blog__card">
        
        <div className="blog__card-image">
            <img src={item.img} alt=""/>
        </div>

        <div className="blog__card-content">
            <span className="blog__card-date">{item.date}</span>
            <h5 className="blog__card-title">{item.title}</h5>
            <p>{item.description}</p>
            <Link to="/blog/1">Read more</Link>
        </div>


    </div>
}