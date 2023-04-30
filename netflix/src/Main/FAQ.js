import React from "react";

import Accordion from "../Components/Accordion";
import FAQ_Footer from "./FAQ_Footer";

const FAQ = ()=>{
    return(
        <>
            <div className="showcase-faq">
                <h1>자주 묻는 질문</h1>
                <div className="faq-questions accordion_wrap">
                    <Accordion/>
                </div>
                <FAQ_Footer/>
            </div>
        </>
    );
};

export default FAQ;