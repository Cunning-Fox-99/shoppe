import React from "react";

export default function AccountForm() {
    
    return <div className="account__form account__form--cabinet">

        <h4>Account details</h4>

        <div className="account__form-inputs">

            <label className="account__input">
                <input placeholder="First name" type="text" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Last name" type="text" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Display name" type="text" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Email" type="email" className="input"/>
            </label>

        </div>

        <h5>Password Change</h5>

        <div className="account__form-inputs">

            <label className="account__input">
                <input placeholder="Current password" type="password" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="New password" type="password" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Confirm password" type="password" className="input"/>
            </label>

        </div>

        <button className="account__form-button button-white">SAVE CHANGES</button>

    </div>
}