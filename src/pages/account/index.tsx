import React, {useEffect} from "react";
import './account.scss';
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/tabs/tabs";
import Dashboard from "../../components/dashboard/dashboard";


export default function Account() {
    const navigate = useNavigate();
    const navList = ['Dashboard', 'Orders', 'Downloads', 'Adresses', 'Account details', 'Logout']
    const tabItems = [<Dashboard />]

    useEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate('/account/login')
        }
    }, [navigate])


    return <div className="account container">
        <h1>My account</h1>

        <Tabs modifier={'account'} items={tabItems} navList={navList} />
    </div>
}