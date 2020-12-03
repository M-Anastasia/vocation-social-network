import React from "react";
import m from './App.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from "./components/profile/Profile";
import Messages from "./components/messages/Messages";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

const App = () => {
    return (
        <BrowserRouter>
            <div className={m["app-wrapper"]}>
                <Header/>
                <Navbar/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Messages}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
