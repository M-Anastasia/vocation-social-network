import React from "react";
import m from '../../App.module.css';
import s from './messages.mudule.css';
import top from './../../1.png';

const Messages = () => {
    return (
        <div className={m['app-wrapper-content']}>
            <div>
                <img className={m.top}
                     src={top}/>
            </div>
            <div className={s.content}>
                <div>Dialogs</div>
                <div>Dialog</div>
            </div>
        </div>
    )
};

export default Messages;