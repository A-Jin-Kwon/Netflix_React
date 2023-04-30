import React from "react";

const Bottom_li = (props)=>{
    return(
        <li>
            <a href={props.reference}>{props.title}</a>
        </li>
    );
}

export default Bottom_li;