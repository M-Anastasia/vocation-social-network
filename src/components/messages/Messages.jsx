import React from "react";
import m from '../../App.module.css';
import s from './messages.module.css';
import Button from "../templates/Button";
import Textarea from "./../templates/Textarea";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} className={s.dialogs_item}>{props.name}</NavLink>
    )
};

const Dialog = (props) => {
    return (
        <div className={props.className}>{props.message}</div>
    )
};

const Messages = () => {
    return (
        <div className={m['app-wrapper-content']}>
            <div className={s.filling}>
                <div className={s.dialogs}>
                    <Dialogs id='1' name='Dialog 1'/>
                    <Dialogs id='2' name='Dialog 2'/>
                    <Dialogs id='3' name='Dialog 3'/>
                    <Dialogs id='4' name='Dialog 4'/>
                    <Dialogs id='5' name='Dialog 5'/>
                </div>
                <div className={s.dialog}>
                    <Dialog className={s.dialog_item} message='Msg1'/>
                    <Dialog className={s.dialog_item} message='Msg2'/>
                    <Dialog className={s.dialog_item} message='Msg3'/>
                </div>
                <div></div>
                <div className={s.message}>
                    <Textarea className={s.message_text} text='Enter msg ...'/>
                    <Button clsName='beta' title='Send'/>
                </div>
            </div>
        </div>
    )
};

export default Messages;