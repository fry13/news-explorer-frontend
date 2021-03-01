import React from 'react';
import './CardList.css';
import Card from '../Card/Card.js';
import { useLocation } from "react-router-dom";
import { ROUTES_MAP } from '../../utils/routesMap';

function CardList({ isLoggedIn }) {
    const location = useLocation();
    const isSavedCardsOpen = (location.pathname === ROUTES_MAP.SAVED_NEWS);

    return (
            <ul className="news-list">
                <Card isLoggedIn={isLoggedIn} isItSavedCardsPage={isSavedCardsOpen}/>
                <Card isLoggedIn={isLoggedIn} isItSavedCardsPage={isSavedCardsOpen}/>
                <Card isLoggedIn={isLoggedIn} isItSavedCardsPage={isSavedCardsOpen}/>
                {isSavedCardsOpen && 
                <>
                <Card isLoggedIn={isLoggedIn} isItSavedCardsPage={isSavedCardsOpen}/>
                <Card isLoggedIn={isLoggedIn} isItSavedCardsPage={isSavedCardsOpen}/>
                </>
                }
            </ul>
    );
}

export default CardList;