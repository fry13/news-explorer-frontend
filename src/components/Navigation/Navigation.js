import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import exit from '../../images/logout.png';
import exitDark from '../../images/logout-dark.png';
import { useLocation } from "react-router-dom";
import './Navigation.css';



function Navigation({ isLoggedIn, isMenuOpened, isFontDark, onAuth, closeMenu }) {
    const location = useLocation();
    const handleAuthClick = useCallback(() => {
        closeMenu();
        onAuth();
      }, [closeMenu, onAuth]);

    return (
            <nav className={isMenuOpened ? "nav-list nav-list_vertical" : "nav-list"}>
                <NavLink className={!isFontDark && !(location.pathname === ROUTES_MAP.MAIN) ? "nav-list__item nav-list__item_light-theme" : "nav-list__item"}
                    exact to={ROUTES_MAP.MAIN} 
                    activeClassName="nav-list__item_active"
                    onClick={closeMenu}
                >
                    Главная                        
                </NavLink>
                {
                    isLoggedIn && 
                    <NavLink className={!isFontDark && !(location.pathname === ROUTES_MAP.SAVED_NEWS) ? "nav-list__item nav-list__item_light-theme" : "nav-list__item"}
                                        activeClassName="nav-list__item_active" 
                                        exact to={ROUTES_MAP.SAVED_NEWS}
                                        onClick={closeMenu}
                    >
                        Сохранённые статьи
                    </NavLink>  
                }
                {
                isLoggedIn ?
                    <button className={isFontDark ? "nav-list__exit-button nav-list__exit-button_dark" : "nav-list__exit-button"} onClick={closeMenu}>
                        name
                        <img className="nav-list__exit-icon" src={isFontDark && !isMenuOpened ? exitDark : exit} alt="Выйти"></img>
                    </button>
                    :
                    <button className="nav-list__auth-button" onClick={handleAuthClick}>
                        Авторизоваться
                    </button>
                }
            </nav> 
    );
}

export default Navigation;