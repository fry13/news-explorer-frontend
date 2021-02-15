import React from 'react';
import CardList from '../CardList/CardList.js';
import './SavedCards.css';

function SavedCards({toggleNotFound, isLoggedIn}) {
    return (
        <div className="saved-cards">
            <CardList toggleNotFound={toggleNotFound} 
                        isLoggedIn={isLoggedIn} />
        </div>
    );
}

export default SavedCards;