"use client"
import React, { useState } from 'react';

import './Toggle.scss';

type Props = {
    values: string[],
    getValue: any
}

export default function Toggle({values, getValue}: Props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (event: any) => {
        setIsChecked(event.target.checked);
        getValue(event.target.checked ? values[1] : values[0])
    };

    return (
        <label className='switch_toggle'>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
            <span className='slider round'>&nbsp;</span>
        </label>
    );
}
