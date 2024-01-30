import React from "react";
import CustomSelect from "../../components/custom-select";
import './contact.scss'

export default function Contact() {
    return (
        <div className="contact container container--small">
            <h1>Contact Us</h1>
            <span className="contact__subtitle">Say Hello send us your thoughts about our products or share your ideas with our Team!</span>

            <form className="contact__form">

                <label className="contact__input">
                    <input type="text" placeholder="First name" className="input"/>
                </label>

                <label className="contact__input">
                    <input type="text" placeholder="Last name" className="input"/>
                </label>

                <label className="contact__input">
                    <input type="text" placeholder="Email" className="input"/>
                </label>

                <div className="contact__input">
                    <CustomSelect noBorder={true} items={[{name: 'Default'}, {name: 'Technical questions'}]} defaultV={'Subject'} />
                </div>

                <div className="contact__input">
                    <textarea placeholder="Message" className="input"/>
                </div>

                <button type="submit" className="contact__button button-white">Send</button>
            </form>
        </div>
    );
}