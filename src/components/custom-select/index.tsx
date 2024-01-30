import React, {useEffect, useRef, useState} from 'react';
import './custom-select.scss'

interface customSelectProps  {
    items: {name: string}[],
    defaultV: string,
    noBorder?: boolean
}
export default function CustomSelect({items, defaultV, noBorder}:customSelectProps) {
    
    const [selected, setSelected] = useState<any>(defaultV)
    const [active, setActive] = useState(false)

    const componentRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return <div ref={componentRef} className={active ? "custom-select active" : "custom-select"}>
        <div className={noBorder ? "custom-select__top no-border" : "custom-select__top"} onClick={() => setActive(prevState => !prevState)}>
            <span>{selected}</span>
        </div>
        {active && <div className="custom-select__body">
            {items.map((item, index) => {
                return <div className="custom-select__item" key={index} onClick={() => {
                    setSelected(item.name)
                    setActive(false)
                }}>
                    {item.name}
                </div>
            })}
        </div>}
    </div>
}