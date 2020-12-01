import React from "react";
import s from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s["nav-button"]}>Profile</a>
            </div>
            <div>
                <a className={s["nav-button"]}>Messages</a>
            </div>
            <div>
                <a className={s["nav-button"]}>News</a>
            </div>
            <div>
                <a className={s["nav-button"]}>Music</a>
            </div>
            <div>
                <a className={s["nav-button"]}>Settings</a>
            </div>
        </nav>
    )
};

export default Navbar;