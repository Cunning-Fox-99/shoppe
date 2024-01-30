import React, { useState } from 'react';
import './custom-checkbox.scss'; // Подключаем файл со стилями

interface CustomCheckboxProps {
    label: string;
    onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedValue = !isChecked;
        setIsChecked(newCheckedValue);
        onChange(newCheckedValue);
    };

    return (
        <label className={isChecked ? "custom-checkbox active" : "custom-checkbox"}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            {label}
        </label>
    );
};

export default CustomCheckbox;