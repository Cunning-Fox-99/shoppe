import React from 'react';
import CustomSelect from "../custom-select";

interface AddressFormProps {
    click: () => void
}
export default function AddressForm({click}:AddressFormProps) {

    const handleSubmit = (e:any) => {
        e.preventDefault();
        click();
    }

    return <form onSubmit={handleSubmit} className="address__form">

        <div className="address__form-row">
            <label className="address__form-input">
                <input placeholder="First name*" required={true} type="text" className="input"/>
            </label>
            <label className="address__form-input">
                <input placeholder="Last name*" required={true} type="text" className="input"/>
            </label>
        </div>

        <label className="address__form-input">
            <input placeholder="Company name" type="text" className="input"/>
        </label>

        <div className="address__form-input">
            <CustomSelect noBorder={true} items={[{name: 'USA'}, {name: 'Ukraine'}, {name: 'Germany'}]}
                          defaultV={'Country*'}/>
        </div>

        <label className="address__form-input">
            <input placeholder="Street Address*" required={true} type="text" className="input"/>
        </label>

        <label className="address__form-input">
            <input placeholder="Postcode/ZIP*" required={true} type="text" className="input"/>
        </label>

        <label className="address__form-input">
            <input placeholder="Town/City*" required={true} type="text" className="input"/>
        </label>

        <label className="address__form-input">
            <input placeholder="Phone*" type="number" className="input"/>
        </label>

        <label className="address__form-input">
            <input placeholder="Email" required={true} type="email" className="input"/>
        </label>

        <button type={'submit'} className="address__form-button button-white">Save address</button>
    </form>
}