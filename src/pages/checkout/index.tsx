import React from "react";
import './checkout.scss'
import {Link} from "react-router-dom";
import CustomSelect from "../../components/custom-select";
import CustomCheckbox from "../../components/custom-checkbox";

export default function Checkout() {

    return <div className="checkout container">
        <h2>Checkout</h2>

        <div className="checkout__top">
            <div className="checkout__top-item">
                <span>Returning customer? <Link to='/account/login'>Click here to login</Link></span>
            </div>

            <div className="checkout__top-item">
                <span>Have a coupon? <Link to='#'>Click here to enter your code </Link></span>
            </div>

            <div className="checkout__coupone">
                <span>If you have a coupon code, please apply it below.</span>
                <div className="checkout__coupone-wrapper">
                    <input type="text" className="input" placeholder="Coupon code"/>
                    <button className="button-white">Apply Coupon</button>
                </div>
            </div>
        </div>

        <div className="checkout__columns">

            <div className="checkout__column">
                <h4>Billing Details</h4>

                <div className="checkout__form">
                    <div className="checkout__form-row">
                        <label className="checkout__form-input">
                            <input placeholder="First name*" required={true} type="text" className="input"/>
                        </label>
                        <label className="checkout__form-input">
                            <input placeholder="Last name*" required={true} type="text" className="input"/>
                        </label>
                    </div>

                    <label className="checkout__form-input">
                        <input placeholder="Company name" type="text" className="input"/>
                    </label>

                    <div className="checkout__form-input">
                        <CustomSelect noBorder={true} items={[{name: 'USA'}, {name: 'Ukraine'}, {name: 'Germany'}]}
                                      defaultV={'Country*'}/>
                    </div>

                    <label className="checkout__form-input">
                        <input placeholder="Street Address*" required={true} type="text" className="input"/>
                    </label>

                    <label className="checkout__form-input">
                        <input placeholder="Postcode/ZIP*" required={true} type="text" className="input"/>
                    </label>

                    <label className="checkout__form-input">
                        <input placeholder="Town/City*" required={true} type="text" className="input"/>
                    </label>

                    <label className="checkout__form-input">
                        <input placeholder="Phone*" type="number" className="input"/>
                    </label>

                    <label className="checkout__form-input">
                        <input placeholder="Email" required={true} type="email" className="input"/>
                    </label>
                </div>

                <div className="checkout__checkbox">
                    <CustomCheckbox label={'Create an account?'} onChange={() => console.log('132')}/>
                </div>

                <div className="checkout__checkbox">
                    <CustomCheckbox label={'Ship to a different address??'} onChange={() => console.log('132')}/>
                </div>

                <div className="checkout__notes">
                    <textarea placeholder="Order notes" cols={30} rows={2} className="input"></textarea>
                </div>

            </div>

            <div className="checkout__column">
                <h4>Your Order</h4>

                <div className="checkout__info">

                    <div className="checkout__info-text">
                        <span>PRODUCT</span>
                        <span>TOTAL</span>
                    </div>

                    <div className="checkout__info-items">
                        <div className="checkout__info-item">
                            <span>Lira Earrings </span>
                            <span>$64</span>
                        </div>
                        <div className="checkout__info-item">
                            <span>Ollie Earrings</span>
                            <span>$10</span>
                        </div>
                        <div className="checkout__info-item">
                            <span>Kaede Hair Pin</span>
                            <span>$10</span>
                        </div>
                    </div>

                    <div className="checkout__info-text">
                        <span>SUBTOTAL</span>
                        <span>$85</span>
                    </div>

                    <div className="checkout__info-text">
                        <span>SHIPPING</span>
                        <span>Free shipping</span>
                    </div>

                    <div className="checkout__info-text">
                        <span>TOTAL</span>
                        <span>$85</span>
                    </div>

                    <button className="checkout__button button-white">PLACE ORDER</button>

                </div>
            </div>

        </div>
    </div>
}