import React from "react";
import m from '../../App.module.css';
import s from './music.midul.css';
import top from './../../1.png';

const Music = () => {
    return (
        <div className={m["app-wrapper-content"]}>
            <div>
                <img className={m.top}
                     src={top}/>
            </div>
            <div>
                <div>Music</div>
            </div>
        </div>
    )
};

export default Music;