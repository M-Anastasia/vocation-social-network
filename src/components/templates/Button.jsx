import React from "react";
import './../../styles/btn.scss';

const Button = (props) => {

    let clsName = 'btn btn--' + props.clsName;

    return (
        <div>
            <button className={clsName}>
                <span>{props.title}</span>
            </button>
        </div>
    )
};

export default Button;