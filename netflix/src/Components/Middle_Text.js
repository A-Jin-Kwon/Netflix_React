import React from "react";

function Middle_Text(props){
    return(
        <div className="middle-text">
            <h1>{props.h1}</h1>
            <p className="middle-p">{props.p}</p>
        </div>
    );
};

export default Middle_Text;