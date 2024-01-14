import React from "react";
import {Link} from "react-router-dom";
import footerSubmit from './submit.svg'
import SocialList from "../social-list";
import './footer.scss'
export default function Footer() {

    return <div className="footer container">
        <div className="footer__column">
            <div className="footer__links">
                <Link to={'/contact'}>CONTACT</Link>
                <Link to={'/'}>TERMS OF SERVICES</Link>
                <Link to={'/'}>SHIPPING AND RETURNS</Link>
            </div>
            <div className="footer__copyright">
                © 2021 Shelly. <Link to='/'>Terms of use</Link> and <Link to='/'>privacy policy.</Link>
            </div>
        </div>

        <div className="footer__column footer__column--2">
            <div className="footer__form">
                <label className="footer__input">
                    <input className="input" placeholder='Give an email, get the newsletter.' type="text"/>
                </label>
                <button className="footer__submit">
                    <img src={footerSubmit} alt=""/>
                </button>
            </div>

            <SocialList />
        </div>
    </div>
}