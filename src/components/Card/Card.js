import React, {useCallback} from 'react';
import './Card.css';
import newsphoto from '../../images/image_01.jpg';

function Card({ isLoggedIn, isItSavedNewsPage }) {
    const [isSaved, setSaved] = React.useState(false);

    const toggleSaveCard = useCallback(() => {
        setSaved(!isSaved);
    }, [isSaved]);
    return (
        <li><figure className="card">
            { 
                isItSavedNewsPage ?
                <button type="button" className="card__delete-button"></button>
                    :
                <button type="button" onClick={toggleSaveCard} className={
                    isLoggedIn ? 
                    (isSaved ? "card__save-button card__save-button_loggedin card__save-button_blue" : "card__save-button card__save-button_loggedin") 
                    : "card__save-button"
                } 
                disabled={isLoggedIn ? false : true}></button>
            }
            <p className={isItSavedNewsPage ? "card__key-word card__key-word_visible" : "card__key-word"}>Природа</p>
            <img className="card__photo" src={newsphoto} alt="Прикреплённое изображение"></img>
            <figcaption className="card__caption">
                <p className="card__date">21 декабря, 2021</p>
                <h2 className="card__title">Лесные огоньки: история одной фотографии</h2>
                <p className="card__abstract">Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного 
из местных чудес природы.
                </p>
                <p className="card__source">Лента.ру</p>
            </figcaption>
        </figure>
        </li>
    );
}

export default Card;

