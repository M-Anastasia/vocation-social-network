import React from "react";
import s from './posts.module.css';
import Post from './post/Post'
import './../../../styles/btn.scss';
import Button from "../../templates/Button";
import Textarea from "../../templates/Textarea";

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s["personal-information_title"]}>
                My posts
            </div>
            <Textarea className={s.post_text} text='Your news ...'/>
            <Button clsName='alpha' title='Send'/>
            <div className={s.posts}>
                <Post msg={"My first post"}/>
                <Post msg={"My second post"}/>
            </div>
        </div>
    )
};

export default Posts;