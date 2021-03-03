import React, { useCallback } from 'react';
import './SearchForm.css';

function SearchForm({ receiveResults }) {
    const [searchValue, setSearchValue] = React.useState({ value: "" });
    const [isValid, setValid] = React.useState(false);
    const [isErrorDisplayed, setErrorDisplayed] = React.useState(false);

    const checkValidity = useCallback((inputValue) => {
        if (inputValue.validity.valueMissing) {
            setErrorDisplayed(true);
        } 
        else {
            setValid(true);
            setErrorDisplayed(false);
        }
    }, []);

    const handleChange = useCallback((e) => {
        setSearchValue({ value: e.target.value });
        checkValidity(e.target);
    }, [checkValidity]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const today = new Date().toISOString();
        const sevenDaysEarlier = new Date((Date.now() - 7*24*60*60*1000)).toISOString();
        receiveResults(searchValue.value, sevenDaysEarlier, today);
        setSearchValue({ value: "" });
    }, [searchValue, receiveResults]);

    return (
            <div className="search-form">
                <h1 className="search-form__title">Что творится в мире?</h1>
                <p className="search-form__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form className="search-form__search" onSubmit={handleSubmit}>
                    <input className="search-form__input" placeholder="Введите тему новости" type="text" onChange={handleChange} value={searchValue.value} required></input>
                    <button className="search-form__submit" type="submit" disabled={isValid ? false : true}>Искать</button>
                </form>
            </div> 
    );
}

export default SearchForm;