import React from "react";

const Textarea = (props) => {

    return (
        <div>
            <textarea className={props.className} placeholder={props.text}></textarea>
        </div>
    )
};

export default Textarea;