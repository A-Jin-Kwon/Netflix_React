import React from "react";

import SelectLang from "../Components/SelectLang";

const Header = ()=>{
    return(
        <header className="showcase">
            <div className="showcase-top">
                <div className="showcase-top-left">
                    <img onclick="location.href='main.html'" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix"/>
                </div>
                <div className="showcase-top-right">
                    <SelectLang class="language select-xl" name="language"/>
                    <a href="./login.html" className="btn">로그인</a>
                </div>
            </div>
            <div className="showcase-content">
                <h1>영화와 시리즈를 무제한으로.</h1>
                <p className="p-large">
                    다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
                </p>
                <p className="p-small">
                    시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                </p>
                <div>
                    <input className="text-xl" type="text" placeholder="이메일 주소"/>
                    <a href="#" className="btn btn-xl start-btn">시작하기</a>
                </div>
            </div>
        </header>
    );
};

export default Header;