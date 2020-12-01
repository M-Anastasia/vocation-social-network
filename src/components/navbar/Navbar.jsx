import React from "react";
import s from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href='/profile' className={s["nav-button"]}>Profile</a>
            </div>
            <div>
                <a href='/messages' className={s["nav-button"]}>Messages</a>
            </div>
            <div>
                <a href='/news' className={s["nav-button"]}>News</a>
            </div>
            <div>
                <a href='/music' className={s["nav-button"]}>Music</a>
            </div>
            <div>
                <a href='/settings' className={s["nav-button"]}>Settings</a>
            </div>
        </nav>
    )
};

export default Navbar;