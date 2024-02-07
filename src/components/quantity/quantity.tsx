import React, {useState} from "react";

export default function Quantity() {
    const [quantity, setQuantity] = useState<any>(1)

    const changeQuantity = (number: any) => {
        if (quantity === 1 && number < 0) {
            setQuantity(1)
        } else {
            setQuantity(number + quantity)
        }
    }
    return <div className="quantity">
        <span className="quantity__button" onClick={() => changeQuantity(-1)}>-</span>
        <span>{quantity}</span>
        <span className="quantity__button" onClick={() => changeQuantity(1)}>+</span>
    </div>
}