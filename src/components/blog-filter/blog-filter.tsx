import React, {useState} from 'react';
import search from "../header/search.svg";

export default function BlogFilter() {

    const [active, setActive] = useState(0)

    return <div className="blog__filter">
        <label className="blog__search">
            <input type="text" placeholder="Search" className="input"/>
            <img src={search} alt="" className="blog__search-icon"/>
        </label>

        <div className="blog__categories">
            <span>Categories</span>

            <ul className="blog__categories-list">
                <li className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>Fashion</li>
                <li className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>Style</li>
                <li className={active === 3 ? 'active' : ''} onClick={() => setActive(3)}>Accessories</li>
                <li className={active === 4 ? 'active' : ''} onClick={() => setActive(4)}>Season</li>
            </ul>
        </div>
    </div>
}