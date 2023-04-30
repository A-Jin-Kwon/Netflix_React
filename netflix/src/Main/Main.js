import React from "react";
import './Main.css';

import Header from "./Header";
import Middle from "./Middle";
import FAQ from "./FAQ";
import Bottom from "./Bottom";

const Main = ()=>{
    return(
        <>
            <Header/>
            <Middle/>
            <div className="middle-border"/>
            <FAQ/>
            <div className="middle-border"></div>
            <Bottom/>
        </>
    );
};

export default Main;