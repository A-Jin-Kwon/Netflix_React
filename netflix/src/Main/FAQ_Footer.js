import React from "react";

function FAQ_Footer(){
    return(
        <div class="faq-footer">
            <p class="p-small">
                <span>시청할 준비가 되셨나요?</span>
                <span>멤버십을 등록하거나 재시작하려면</span>
                <span>이메일 주소를 입력하세요.</span>
            </p>
            <div>
                <input class="text-xl" type="text" placeholder="이메일 주소"/>
                <a href="#" class="btn btn-xl start-btn">시작하기</a>
            </div>
        </div>
    );
}

export default FAQ_Footer;