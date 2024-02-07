import React, {useEffect} from "react";
import './account.scss';
import {useNavigate} from "react-router-dom";
import Tabs from "../../components/tabs/tabs";
import Dashboard from "../../components/dashboard/dashboard";
import Table from "../../components/table/table";
import Address from "../../components/adresses/address";
import AccountForm from "./account-form";


export default function Account() {
    const navigate = useNavigate();
    const navList = ['Dashboard', 'Orders', 'Downloads', 'Adresses', 'Account details', 'Logout']
    const tabItems = [<Dashboard/>,
        <Table topItems={['ORDER NUMBER', 'DATE', 'STATUS', 'TOTAL', 'ACTIONS']}
               items={[['7643980998990', 'October 8,2021', 'Delivered', '$ 105', 'View Order'], ['943980998990', 'October 8,2021', 'Processing', '$ 100', 'View Order'], ['879980998990', 'October 8,2020', 'Delivered', '$ 65', 'View Order']]}/>,
        <Table topItems={['ORDER NUMBER', 'DATE', 'STATUS', 'TOTAL', 'ACTIONS']}
               items={[['7643980998990', 'October 8,2021', 'Delivered', '$ 105', 'View Order'], ['943980998990', 'October 8,2021', 'Processing', '$ 100', 'View Order'], ['879980998990', 'October 8,2020', 'Delivered', '$ 65', 'View Order']]}/>,
        <Address/>,
        <AccountForm/>,
        <Dashboard/>]

    useEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate('/account/login')
        }
    }, [navigate])


    return <div className="account container">
        <h1>My account</h1>

        <Tabs modifier={'account'} items={tabItems} navList={navList}/>
    </div>
}