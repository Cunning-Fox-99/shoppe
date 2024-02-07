import React from "react";
import './table.scss'
import {Link} from "react-router-dom";

interface TableProps {
    topItems: string[],
    items: any
}

export default function Table({topItems, items}: TableProps) {

    return <div className="table">
        <div className="table__top">
            {topItems.map((item, index) => {
                return <div className="table__item" key={index}>{item}</div>
            })}
        </div>

        <div className="table__body">
            {items.map((row: any, index: any) => {
                return <div key={index} className="table__row">
                    {row.map((item: any, i: any) => {
                        if (i === 4) {
                            return <Link key={i} className="table__item" to="/order/1">{item}</Link>
                        } else {
                            return <div key={i} className="table__item">
                                {item}
                            </div>
                        }
                    })}
                </div>
            })}
        </div>
    </div>
}