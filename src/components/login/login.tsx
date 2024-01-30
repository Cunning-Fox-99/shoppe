import React from "react";
import CustomCheckbox from "../custom-checkbox";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const login = () => {
        localStorage.setItem('login', 'true')
        navigate('/account')
    }

    return <form onSubmit={login} className="account__form">

        <div className="account__form-inputs">
            <label className="account__input">
                <input placeholder="Email" type="email" className="input"/>
            </label>

            <label className="account__input">
                <input placeholder="Password" type="password" className="input"/>
            </label>
        </div>

        <CustomCheckbox label={'Remember me'} onChange={(val) => console.log(val)}/>

        <button type="submit" className="account__button button-white">Sign in</button>
        <Link to='/remember-password'>Have you forgotten your password?</Link>
    </form>
}