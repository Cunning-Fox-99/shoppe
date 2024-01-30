import React from 'react';
import './properties.scss'

interface Interface {
    arr: object[]
}
export default function Properties({arr}:Interface) {

    return <div className="properties">
        {arr.map((item:any, index) => {
            return <div key={index} className='properties__item'>{item.prop}: <span>{item.value}</span></div>
        })}
    </div>
}