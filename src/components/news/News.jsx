import React from "react";
import m from '../../App.module.css';
import s from './news.modul.css';
import top from './../../1.png';

const News = () => {
    return (
        <div className={m["app-wrapper-content"]}>
            <div>
                <img className={m.top}
                     src={top}/>
            </div>
            <div>
                <div>News</div>
            </div>
        </div>
    )
};

export default News;