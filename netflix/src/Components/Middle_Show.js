import React from "react";

import Middle_Video from "../Components/Middle_Video";
import Middle_Text from "../Components/Middle_Text";

function Middle_Show(props){
    const list = [
        {
            h1: "TV로 즐기세요.",
            p: "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
        },
        {
            h1: "다양한 디바이스에서 시청하세요.",
            p: "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
        },
        {
            h1: "어린이 전용 프로필을 만들어 보세요.",
            p: "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
            src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf",
        },
        {
            h1: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.",
            p: "광고 없는 멤버십에서만 이용 가능합니다.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
        }
    ]

    return(
        <>
            <div className="middle-border"></div>
            <div className="mid-common">
                {(props.idx % 2 == 0)
                    ?
                    <div className="mid-common">
                        <Middle_Text h1={list[props.idx].h1} p={list[props.idx].p}/>
                        <Middle_Video src={list[props.idx].src}/>
                    </div>
                    :
                    <div className="mid-common">
                        <Middle_Video src={list[props.idx].src}/>
                        <Middle_Text h1={list[props.idx].h1} p={list[props.idx].p}/>
                    </div>
                }
            </div>
        </>
    );
};

export default Middle_Show;