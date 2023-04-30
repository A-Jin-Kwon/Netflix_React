import React, {useState} from "react";

function Accordion_Wrap(props){
    const [showAnswer, setShowAnswer] = useState(false); // 답변표시 false로 초기화

    const clickHandler = ()=>{
        setShowAnswer(!showAnswer); // 답변표시 토글
    };

    return(
        <>
            <div className="faq-q" onClick={clickHandler}>
                {props.question}
                <div className="arrow-wrap">
                    {showAnswer ? <div className="arrow-top">x</div> : <div className="arrow-down">+</div>}
                </div>
            </div>
            
            {showAnswer && <div className="faq-a">{props.answer}</div>}
        </>
    );
}

export default Accordion_Wrap;