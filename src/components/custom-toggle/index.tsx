import React, {useState} from "react";
import './custom-toggle.scss'
export default function CustomToggle() {

    const [checked, setChecked] = useState(false)

    return <div onClick={() => setChecked(prevState => !prevState)} className={checked ? "custom-toggle active" : "custom-toggle"} />
}