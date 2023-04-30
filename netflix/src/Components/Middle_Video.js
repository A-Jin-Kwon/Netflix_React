import React from "react";

function Middle_Video(props){
    return(
        <div className="middle-video">
            <img src={props.src} alt="video"/>
        </div>
    );
};

export default Middle_Video;