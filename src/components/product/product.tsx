import React, {useState} from 'react';
import SocialList from "../social-list";
import star from './star.svg'

export default function Product() {

    const [quantity, setQuantity] = useState<any>(1)

    const changeQuantity = (number:any) => {
        if (quantity === 1 && number < 0) {
           setQuantity(1)
        } else {
            setQuantity(number + quantity)
        }
    }

    return <div className="product__item">

        <div className="product__item-top">
            <h5>Lira Earnings</h5>
            <span>$ 20,00</span>
        </div>

        <div className="product__body">

            <div className="product__review">
                <div className="product__review-stars">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <span>1 customer review</span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                consequat sed eu felis. </p>

        </div>

        <div className="product__buttons">

            <div className="product__quantity">
                <span className="product__quantity-button" onClick={() => changeQuantity(-1)}>-</span>
                <span>{quantity}</span>
                <span className="product__quantity-button" onClick={() => changeQuantity(1)}>+</span>
            </div>

            <button className="product__button button">ADD TO CART</button>

        </div>

        <div className="product__icons">

            <button className="product__icon">
                <img src="https://img.icons8.com/ios-glyphs/20/like.png" alt=""/>
            </button>

            <SocialList width={20} />
        </div>

        <div className="product__footer">
            <div className="product__footer-item">SKU: <span>12</span></div>
            <div className="product__footer-item">Categories: <span>Fashion, Style</span></div>
        </div>

    </div>
}