import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './range-slider.scss'; // Подключаем файл со стилями

interface PriceRangeSliderProps {
    min: number;
    max: number;
    step?: number;
    onChange: (values: [number, number]) => void;
}

const RangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, step = 1, onChange }) => {
    const [values, setValues] = useState<[number, number]>([min, max]);

    const handleSliderChange = (newValues: number | number[]) => {
        const [newValue1, newValue2] = Array.isArray(newValues) ? newValues : [newValues, newValues];
        setValues([newValue1, newValue2]);
        onChange([newValue1, newValue2]);
    };

    return (
        <div className="filter__price">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="range-tumb"
                trackClassName="range-track"
                max={max}
                min={min}
                defaultValue={[min, max]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                onChange={(state) =>handleSliderChange(state)}
                step={step}
            />
            <div className="filter__price-values">
                <span>Price ${values[0]} - ${values[1]}</span>
                <button className="filter__price-button">Filter</button>
            </div>

            <div className="filter__checkbox">

            </div>
        </div>
    );
};

export default RangeSlider;