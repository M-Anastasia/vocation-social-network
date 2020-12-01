import React from "react";
import s from './header.module.css';
import logo from '../../logo.png';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src={logo}/>
        </header>
    )
};

export default Header;