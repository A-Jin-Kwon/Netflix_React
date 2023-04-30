import React from "react";

const SelectLang = (props)=>{
    return(
        <select className={props.class} name={props.name}>
            <option value="korean" selected>한국어</option>
            <option value="english">영어</option>
        </select>
    );
};

export default SelectLang;