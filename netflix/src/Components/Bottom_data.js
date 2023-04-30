import React from "react";

import Bottom_li from "./Bottom_li";

function Bottom_data(){
    const list = [
        {
            reference: "https://help.netflix.com/support/412",
            title: "자주 묻는 질문"
        },
        {
            reference: "https://media.netflix.com/",
            title: "미디어 센터"
        },
        {
            reference: "https://www.netflix.com/watch",
            title: "넷플릭스 지원 디바이스"
        },
        {
            reference: "https://www.netflix.com/kr/#",
            title: "쿠키 설정"
        },
        {
            reference: "https://fast.com/",
            title: "속도 테스트"
        },
        {
            reference: "https://help.netflix.com/",
            title: "고객 센터"
        },
        {
            reference: "http://ir.netflix.com/",
            title: "투자 정보(IR)"
        },
        {
            reference: "https://help.netflix.com/legal/termsofuse",
            title: "이용 약관"
        },
        {
            reference: "https://help.netflix.com/legal/corpinfo",
            title: "회사 정보"
        },
        {
            reference: "https://help.netflix.com/legal/notices",
            title: "법적 고지"
        },
        {
            reference: "https://www.netflix.com/youraccount",
            title: "계정"
        },
        {
            reference: "https://jobs.netflix.com/job",
            title: "입사 정보"
        },
        {
            reference: "https://help.netflix.com/legal/privacy",
            title: "개인정보 처리방침"
        },
        {
            reference: "https://help.netflix.com/contactus",
            title: "문의하기"
        },
        {
            reference: "https://www.netflix.com/kr/browse/genre/839338",
            title: "오직 넷플릭스에서"
        }
    ]

    const dataList = list.map((data) => <Bottom_li reference={data.reference} title={data.title}/>);

    return(
        <ul>
            {dataList}
        </ul>
    );
};

export default Bottom_data;