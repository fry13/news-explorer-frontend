import React from 'react';
import './SearchError.css';
import notFoundIcon from '../../images/not-found_v1.png';

function SearchError() {
    return (
        <div className="search-err">
            <img src={notFoundIcon} alt="Произошла ошибка" className="search-err__img"></img>
            <p className="search-err__description">
                Произошла ошибка.
            </p>
        </div>
    );
}

export default SearchError;