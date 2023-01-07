import React from "react";

function Select ({props, value, onChange}) {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option value=''>Выберите</option>
            {props.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
        </select>
    )
}

export default Select; 