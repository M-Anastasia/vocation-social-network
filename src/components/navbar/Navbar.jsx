import React from "react";
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' activeClassName={s.active} className={s["nav-button"]}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' activeClassName={s.active} className={s["nav-button"]}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={s.active} className={s["nav-button"]}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={s.active} className={s["nav-button"]}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={s.active} className={s["nav-button"]}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;