import React from "react";
import s from './profile.module.css';
import m from '../../App.module.css';
import Posts from './posts/Posts';
import avatar from './../../avatar.png';

const Profile = () => {
    return (
        <div className={m["app-wrapper-content"]}>
            <div>
                <img className={s.hat}
                     src='https://rendering.ru/media/catalog/product/cache/f1902fe734325d9088b4c1a61712c9d5/i/t/itrees-palms-03.jpg'/>
            </div>
            <div className={s["personal-information"]}>
                <img className={s.avatar}
                     src={avatar}/>
                <div>
                    <p className={s["personal-information_name"]}>NasMas</p>
                    <p className={s["personal-information_desc"]}>Date of Birth: 4 March</p>
                    <p className={s["personal-information_desc"]}>City: Samara</p>
                    <p className={s["personal-information_desc"]}>Education: SSAU'17</p>
                    <p className={s["personal-information_desc"]}>Web Site: https://github.com/M-Anastasia</p>
                </div>
            </div>
            <Posts/>
        </div>
    )
};

export default Profile;