import React from "react";
import s from './post.module.css';

const Post = (props) => {
    return (
                <div className={s.post}>
                    <button className={s.small_img_btn}></button>
                    <p className={s.post_msg}> {props.msg} </p>
                </div>
    )
};

export default Post;