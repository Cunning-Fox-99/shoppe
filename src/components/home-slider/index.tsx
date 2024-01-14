import React, {useState} from "react";
import {Link} from "react-router-dom";
import sliderImg from './image.jpg'
import './slider.scss'

export default function HomeSlider() {

    const [active, setActive] = useState<any>(0)

    return <div className="slider container">
        {active === 0 && <div className="slider__item active">
            <div className="slider__item-wrapper">
                <h5>Gold big hoops </h5>
                <span>$ 68,00</span>
                <Link className="button-white" to="/">View Product</Link>
            </div>

            <img src={sliderImg} alt=""/>
        </div>}

        {active === 1 &&<div className="slider__item">
            <div className="slider__item-wrapper">
                <h5>Gold big hoops </h5>
                <span>$ 58,00</span>
                <Link className="button-white" to="/">View Product</Link>
            </div>
            <img src={sliderImg} alt=""/>
        </div>}

        {active === 2 &&<div className="slider__item">
            <div className="slider__item-wrapper">
                <h5>Gold big hoops </h5>
                <span>$ 78,00</span>
                <Link className="button-white" to="/">View Product</Link>
            </div>
            <img src={sliderImg} alt=""/>
        </div>}

    {active === 3 &&<div className="slider__item">
            <div className="slider__item-wrapper">
                <h5>Gold big hoops </h5>
                <span>$ 108,00</span>
                <Link className="button-white" to="/">View Product</Link>
            </div>
            <img src={sliderImg} alt=""/>
        </div>}

        {active === 4 &&<div className="slider__item">
            <div className="slider__item-wrapper">
                <h5>Gold big hoops </h5>
                <span>$ 28,00</span>
                <Link className="button-white" to="/">View Product</Link>
            </div>
            <img src={sliderImg} alt=""/>
        </div>}

       <div className="slider__toggle">
            <div className={active === 0 ? "slider__toggle-item active" : "slider__toggle-item"}  onClick={() => setActive(0)}/>
            <div className={active === 1 ? "slider__toggle-item active" : "slider__toggle-item"}  onClick={() => setActive(1)}/>
            <div className={active === 2 ? "slider__toggle-item active" : "slider__toggle-item"}  onClick={() => setActive(2)}/>
            <div className={active === 3 ? "slider__toggle-item active" : "slider__toggle-item"}  onClick={() => setActive(3)}/>
            <div className={active === 4 ? "slider__toggle-item active" : "slider__toggle-item"}  onClick={() => setActive(4)}/>
        </div>
    </div>
}