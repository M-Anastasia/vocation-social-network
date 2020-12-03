import React from "react";
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div>
            <NavLink to={props.path} activeClassName={props.activeClassName}
                     className={props.className}>{props.title}</NavLink>
        </div>
    )
};

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavItem path='/profile' activeClassName={s.active} className={s["nav-button"]} title='Profile'/>
            <NavItem path='/dialogs' activeClassName={s.active} className={s["nav-button"]} title='Messages'/>
            <NavItem path='/news' activeClassName={s.active} className={s["nav-button"]} title='News'/>
            <NavItem path='/music' activeClassName={s.active} className={s["nav-button"]} title='Music'/>
            <NavItem path='/settings' activeClassName={s.active} className={s["nav-button"]} title='Settings'/>
        </nav>
    )
};

export default Navbar;