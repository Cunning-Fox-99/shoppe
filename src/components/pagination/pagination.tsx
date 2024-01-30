import React, {useState} from 'react';
import './pagination.scss'
export default function Pagination() {

    const [active, setActive] = useState(1)
    
    return <div className="pagination">
        {[1, 2, 3, 4].map((item, index) => {
            return <div key={index} className={active === item ? "pagination__item active" : "pagination__item"} onClick={() => setActive(item)}>{item}</div>
        })}
        <div className="pagination__item">{'>'}</div>
    </div>
}