import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import './AppHeader.css';

function AppHeader({ onMenuClick, isMenuOpened, LoggedIn, isLoggedIn, isFontDark, onAuthClick, closeMenuOnclick }) {    
    return (
        <div className={isFontDark ? "app-header__container app-header__container_dark": "app-header__container"}>
            <header className={isMenuOpened ? "app-header app-header_background" : "app-header"}>
                <p className="app-header__logo" onClick={LoggedIn}>
                    NewsExplorer
                </p>
                <div className={isMenuOpened ? "app-header__menu app-header__menu_opened" : "app-header__menu"}>
                    <Navigation isLoggedIn={isLoggedIn} isMenuOpened={isMenuOpened} isFontDark={isFontDark} onAuth={onAuthClick} closeMenu={closeMenuOnclick}/>
                </div>
                { isMenuOpened ? 
                    <button className="app-header__close-button" onClick={onMenuClick}></button>
                    : 
                    <button className={isFontDark ? "app-header__open-button app-header__open-button_dark" : "app-header__open-button"} onClick={onMenuClick}></button>
                }
            </header>
            <div className={isMenuOpened ? "app-header__overlay" : "app-header__overlay app-header__overlay_invisible"}></div>
        </div>
    );
}

export default AppHeader;