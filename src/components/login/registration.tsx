import React from "react";
import CustomCheckbox from "../custom-checkbox";
import {useNavigate} from "react-router-dom";

export default function Registration() {

    const navigate = useNavigate()

    const login = () => {
        localStorage.setItem('login', 'true')
        navigate('/account')
    }

    return <form onSubmit={login} className="account__form">

        <div className="account__form-inputs">

            <label className="account__input">
                <input placeholder="Username" type="text" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Email" type="email" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Password" type="password" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Confirm password" type="password" className="input"/>
            </label>
        </div>

        <CustomCheckbox label={'Accept with terms of services'} onChange={(val) => console.log(val)}/>

        <button type="submit" className="account__button button-white">Create account</button>
    </form>
}