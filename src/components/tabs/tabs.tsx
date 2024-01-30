import React, {useState} from "react";
import './tabs.scss'

interface TabsProps {
    items: any,
    navList: any,
    modifier?: string
}

export default function Tabs({items, navList, modifier}:TabsProps) {

    const [active, setActive] = useState(0)

    return <div className={modifier ? `tabs tabs--${modifier}` :"tabs"}>

        <div className="tabs__nav">
            {navList.map((nav:any, i:any) => {
                return <div key={i} className={active === i? 'tabs__nav-item active' : 'tabs__nav-item'} onClick={() => setActive(i)}>
                    {nav}
                </div>
            })}
        </div>

        {items.map((item:any, index:any) => {
            return <div key={index} className={active === index? 'tabs__content active' : 'tabs__content'}>
                {item}
            </div>
        })}

    </div>
}