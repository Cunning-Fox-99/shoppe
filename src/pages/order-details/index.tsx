import React from "react";
import './order.scss'

export default function OrderDetails() {

    return <div className="order container">
        <div className="order__column">
            <h5>Order Details</h5>
            <div className="order__inner-wrapper">
                <div className="order__info-item">
                    <span>ORDER NUMBER</span>
                    <p>1879605573994</p>
                </div>
                <div className="order__info-item">
                    <span>DELIVERY OPTIONS</span>
                    <p>Standard delivery</p>
                </div>
                <div className="order__info-item">
                    <span>EMAIL</span>
                    <p>Vitathemes@gmail.com</p>
                </div>
                <div className="order__info-item">
                    <span>DELIVERY ADDRESS</span>
                    <p>Kristian holst 34 old street W1F 7NU london United Kingdom</p>
                </div>
                <div className="order__info-item">
                    <span>PAYMENT METHOD</span>
                    <p>Mastercard*************7865</p>
                </div>
                <div className="order__info-item">
                    <span>CONTACT NUMBER</span>
                    <p>+44 8749790988</p>
                </div>
                <div className="order__info-item">
                    <span>ORDER DATE</span>
                    <p>October 8,2020</p>
                </div>
            </div>

        </div>
        <div className="order__column">
            <h5>Order summary</h5>

            <div className="order__block">

                <div className="order__block-item">
                    <span className="black">PRODUCT</span>
                    <span className="black">TOTAL</span>
                </div>
                <div className="order__block-item">
                    <div className="order__block-inner">
                        <span>Lira Earrings </span>
                        <span>$ 65</span>
                    </div>

                    <div className="order__block-inner">
                        <span>Ollie Earrings</span>
                        <span>$ 10</span>
                    </div>

                    <div className="order__block-inner">
                        <span>Kaede Hair Pin</span>
                        <span>$ 10</span>
                    </div>

                </div>
                <div className="order__block-item">
                    <span className="black">SUBTOTAL</span>
                    <span>$ 85</span>
                </div>
                <div className="order__block-item">
                    <span className="black">SHIPPING</span>
                    <span>Free shipping</span>
                </div>
                <div className="order__block-item">
                    <span className="black"><b>TOTAL</b></span>
                    <span className="black"><b>$ 85</b></span>
                </div>

            </div>
        </div>
    </div>
}