import React from "react";

import Middle_Show from "../Components/Middle_Show";

const Middle = ()=>{
    return(
        <div className="showcase-middle">
            <Middle_Show idx="0"/>
            <Middle_Show idx="1"/>
            <Middle_Show idx="2"/>
            <Middle_Show idx="3"/>
        </div>
    );
};

export default Middle;