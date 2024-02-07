import React, {useState} from "react";
import './cart.scss'
import image1 from './image-1.jpg'
import image2 from './image-2.jpg'
import image3 from './image-3.jpg'
import Quantity from "../../components/quantity/quantity";
import CustomSelect from "../../components/custom-select";
import {Link} from "react-router-dom";

export default function Cart() {

    return <div className="cart container">

        <h2>Shopping Cart</h2>

        <div className="cart__columns">
            <div className="cart__column">
                <div className="cart__items">
                    <div className="cart__item">
                        <div className="cart__delete-item">&#10007;</div>
                        <div className="cart__item-image">
                            <img src={image1} alt=""/>
                        </div>
                        <div className="cart__item-info">
                            <h5>Lira Earrings</h5>
                            <p>Black / Medium</p>
                            <span>$ 20,00</span>
                        </div>
                        <div className="cart__quantity">
                            <Quantity/>
                        </div>
                    </div>

                    <div className="cart__item">
                        <div className="cart__delete-item">&#10007;</div>
                        <div className="cart__item-image">
                            <img src={image2} alt=""/>
                        </div>
                        <div className="cart__item-info">
                            <h5>Ollie Earrings</h5>
                            <p>Black / Medium</p>
                            <span>$ 20,00</span>
                        </div>
                        <div className="cart__quantity">
                            <Quantity/>
                        </div>
                    </div>

                    <div className="cart__item">
                        <div className="cart__delete-item">&#10007;</div>
                        <div className="cart__item-image">
                            <img src={image3} alt=""/>
                        </div>
                        <div className="cart__item-info">
                            <h5>Kaede Hair Pin</h5>
                            <p>Black / Medium</p>
                            <span>$ 20,00</span>
                        </div>
                        <div className="cart__quantity">
                            <Quantity/>
                        </div>
                    </div>
                </div>
                <div className="cart__refresh">
                    <button className="button">UPDATE CART</button>
                </div>

                <div className="cart__sale">
                    <label className="cart__input">
                        <input placeholder="Coupon code" type="text" className="input"/>
                    </label>
                    <button className="button-white">APPLY COUPON</button>
                </div>
            </div>

            <div className="cart__column">
                <h3>Cart totals</h3>

                <div className="cart__inner-wrapper">
                    <div className="cart__info">
                        <span className="cart__info-left">SUBTOTAL</span>
                        <span className="cart__info-right">$ 65,00</span>
                    </div>

                    <div className="cart__info">
                        <span className="cart__info-left">SHIPPING</span>
                        <span className="cart__info-right">Shipping costs will be calculated once you have provided address.</span>
                    </div>

                    <div className="cart__info">
                        <span className="cart__info-left"/>
                        <div className="cart__info-right">
                            <div className="cart__form">
                                <h6>Calculate Shipping</h6>
                                <div className="cart__select">
                                    <CustomSelect items={[{name: 'USA'}, {name: 'Germany'}, {name: 'UK'}]}
                                                  defaultV={'Select Country'}/>
                                </div>
                                <div className="cart__select">
                                    <CustomSelect items={[{name: 'USA'}, {name: 'Germany'}, {name: 'UK'}]}
                                                  defaultV={'CITY'}/>
                                </div>
                                <div className="cart__select">
                                    <CustomSelect items={[{name: 'USA'}, {name: 'Germany'}, {name: 'UK'}]}
                                                  defaultV={'POST CODE / ZIP'}/>
                                </div>

                                <button className="cart__info-button button">UPDATE TOTALS</button>
                            </div>
                        </div>

                    </div>

                    <div className="cart__info">
                        <span className="cart__info-left">TOTAL</span>
                        <span className="cart__info-right">$ 87,00</span>
                    </div>

                    <Link to='/cart/checkout' className="cart__button button-white">PROCEED TO CHECKOUT</Link>

                </div>
            </div>
        </div>


    </div>
}