import React from "react";

import Bottom_data from "../Components/Bottom_data";
import SelectLang from "../Components/SelectLang";
import Bottom_Footer from "./Bottom_Footer";

const Bottom = ()=>{
    return(
        <footer className="showcase-bottom">
        <div>
            <p>
                질문이 있으신가요?
                <span>
                    문의 전화: <a>080-001-9587</a>
                </span>
            </p>
            <div className="footer-ul-div">
                <Bottom_data/>
            </div>
            <div className="footer-language">
                <SelectLang class="language select-xl" name="language"/>
            </div>
            <Bottom_Footer/>
        </div>
    </footer>
    );
};

export default Bottom;