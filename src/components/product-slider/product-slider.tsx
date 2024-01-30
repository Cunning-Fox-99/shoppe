import React, {useState} from 'react';
import './product-slider.scss'
import  image from './img.jpg'

export default function ProductSlider() {

    const [selected, setSelected] = useState(0)

    const items = [
        {image},
        {image},
        {image},
        {image},
    ]

    return <div className="product-slider">
        <div className="product-slider__items">
            {items.map((item, index) => {
                return <div className="product-slider__item" key={index} onClick={() => setSelected(index)}>
                    <img src={item.image} alt="" />
                </div>
            })}
        </div>

        <div className="product-slider__wrapper">
            <div className="product-slider__selected">
                <img src={image} alt=""/>
            </div>

            <div className="product-slider__toggle-wrapper">
                {items.map((item, index) => {
                    return <div key={index} style={{width: `${100 / items.length}%`}} className={selected === index ? "product-slider__toggle active" : "product-slider__toggle"}></div>
                })}
            </div>
        </div>
    </div>
}