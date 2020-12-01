import React from "react";
import s from './posts.module.css';
import Post from './post/Post'
import './../../../styles/btn.scss';

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s["personal-information_title"]}>
                My posts
            </div>
            <div>
                <textarea className={s.post_text} placeholder='Your news ...'></textarea>
            </div>
            <div>
                <button className='btn btn--alpha'><span>Send</span></button>
            </div>
            <div className={s.posts}>
                <Post msg={"My first post"}/>
                <Post msg={"My second post"}/>
            </div>
        </div>
    )
};

export default Posts;