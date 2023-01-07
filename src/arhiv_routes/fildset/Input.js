import React from "react";
//import classes from './Button.module.css';

function Input ({children, ...props}) {
    return (
        <label>{children} <input type='text'{...props} placeholder={children} /></label>
    )
}

export default Input;