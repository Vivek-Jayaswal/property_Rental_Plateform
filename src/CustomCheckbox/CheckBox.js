import { useState } from "react";
import "./checkbox.scss"

const CustomCheckBox = ({ lable, id ,onChange,isChecked}) => {    
    return (
        <div className="checkbox-container">
            <label  className={isChecked ? "checkbox-color" : "uncheckbox-color"} htmlFor={id}>{lable}</label>
            <input type="checkbox" checked={isChecked} id={id} onChange={onChange}  className="checkbox"/>
        </div>
    )
}
export default CustomCheckBox;