import React, {useState} from "react";
import './address.scss'
import AddressForm from "./address-form";

export default function Address() {

    const [billing, setBilling] = useState(true)
    const [shipping, setShipping] = useState(true)

    return <div className="address">

        <div className="address__column">
            {billing ? <>
                <div className="address__title">Billing address</div>
                <button onClick={() => setBilling(false)} className="address__add">ADD</button>
                <span className="address__text">You have not set up this type of address yet.</span>
            </> : <AddressForm click={() => setBilling(true)}/>}
        </div>

        <div className="address__column">
            {shipping ? <>
                <div className="address__title">Shipping address</div>
                <button onClick={() => setShipping(false)} className="address__add">ADD</button>
                <span className="address__text">You have not set up this type of address yet.</span>
            </> : <AddressForm click={() => setShipping(true)}/>}
        </div>

    </div>
}