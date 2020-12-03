import React from "react";
import m from '../../App.module.css';
import s from './settings.module.css';
import top from './../../1.png';

const Settings = () => {
    return (
        <div className={m["app-wrapper-content"]}>
            <div>
                <img className={m.top}
                     src={top}/>
            </div>
            <div>
                <div>Settings</div>
            </div>
        </div>
    )
};

export default Settings;