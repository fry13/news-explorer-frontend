import React from 'react';
import './CardList.css';
import Card from '../Card/Card.js';
import { useLocation } from "react-router-dom";
import { ROUTES_MAP } from '../../utils/routesMap';

function CardList({ isLoggedIn }) {
    const location = useLocation();
    const isSavedNewsOpen = (location.pathname === ROUTES_MAP.SAVED_NEWS);

    return (
            <ul className="news-list">
                <Card isLoggedIn={isLoggedIn} isItSavedNewsPage={isSavedNewsOpen}/>
                <Card isLoggedIn={isLoggedIn} isItSavedNewsPage={isSavedNewsOpen}/>
                <Card isLoggedIn={isLoggedIn} isItSavedNewsPage={isSavedNewsOpen}/>
                {isSavedNewsOpen && 
                <>
                <Card isLoggedIn={isLoggedIn} isItSavedNewsPage={isSavedNewsOpen}/>
                <Card isLoggedIn={isLoggedIn} isItSavedNewsPage={isSavedNewsOpen}/>
                </>
                }
            </ul>
    );
}

export default CardList;