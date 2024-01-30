import React from "react";
import {Link, useLocation} from "react-router-dom";
import Login from "../../components/login/login";
import Registration from "../../components/login/registration";

export default function AccountLogin() {

    let location = useLocation();

    return <div className="account account--small container">

        <h1>My account</h1>

        <div className="account__nav">
            <Link to="/account/login" className={location.pathname.includes('login') ? "account__nav-item active" : "account__nav-item"}>Sign in</Link>
            <Link to="/account/registration" className={location.pathname.includes('registration') ? "account__nav-item active" : "account__nav-item"}>Register</Link>
        </div>

        {location.pathname.includes('login') ? <Login /> : <Registration />}

    </div>
}