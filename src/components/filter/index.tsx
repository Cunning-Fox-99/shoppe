import React from 'react';
import './filter.scss'
import search from '../header/search.svg'
import CustomSelect from "../custom-select";
import RangeSlider from "../range-slider";
import CustomToggle from "../custom-toggle";

export default function Filter() {

    return <div className="filter">

        <label className="filter__search">
            <input className='input' placeholder='Search...' type="text"/>
            <img src={search} alt=""/>
        </label>

        <div className="filter__select">
            <CustomSelect items={[{name: 'Men'}, {name: 'Women'}, {name: 'Kids'}]} defaultV='Shop by'/>
        </div>

        <div className="filter__select">
            <CustomSelect items={[{name: 'Low price'}, {name: 'Max price'}, {name: 'Popular'}]} defaultV='Sort by'/>
        </div>

        <div className="filter__range">
            <RangeSlider min={0} max={1000} step={1} onChange={(values: any) => console.log(values)}/>
        </div>

        <div className="filter__toggle">
            <span>On sale</span>
            <CustomToggle/>
        </div>

        <div className="filter__toggle">
            <span>In stock</span>
            <CustomToggle/>
        </div>

    </div>
}