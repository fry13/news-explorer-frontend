import React from 'react';
import './SavedCardsHeader.css';

function SavedCardsHeader() {
    return (
            <div className="saved-cards-header">
                <h1 className="saved-cards-header__title">
                    Сохранённые статьи
                </h1>
                <p className="saved-cards-header__quantity">
                    Грета, у вас 5 сохранённых статей
                </p>
                <p className="saved-cards-header__key-words">
                    По ключевым словам: <b>Природа</b>, <b>Тайга</b> и <b>2-м другим</b>
                </p>
            </div> 
    );
}

export default SavedCardsHeader;