import React from "react";
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('login')
        navigate('/account')
        window.location.reload()
    }

    return <div className="dashboard">
        Hello Vitatheme (not Vitatheme? <span onClick={logout}>Log out </span>) <br/>
        From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and
        edit your password and account details.
    </div>
}