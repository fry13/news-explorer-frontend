import React from 'react';
import About from '../About/About.js';
import NotFound from '../NotFound/NotFound.js';
import CardList from '../CardList/CardList.js';
import Preloader from '../Preloader/Preloader.js';
import './Main.css';

function Main ({isResultShown, isPreloaderShown, toggleNotFound, isNotFoundShown, isLoggedIn}) {
    return (
        <main className="main">
            <section className={isResultShown ? "main__results" : "main__results main__results_invisible"}>
                <h1 className="news-list__title">
                    Результаты поиска
                </h1>
                <CardList toggleNotFound={toggleNotFound} isLoggedIn={isLoggedIn}/>
                <button className="news-list__more-button" type="button" onClick={toggleNotFound}>
                    Показать ещё
                </button>
            </section>
            <section className={isPreloaderShown ? "main__preloader" : "main__preloader main__preloader_invisible"}>
                <Preloader />
            </section>
            <section className={isNotFoundShown ? "main__not-found" : "main__not-found main__not-found_invisible"}>
                <NotFound />
            </section>
            <section className="main__about">
                <About />
            </section> 
        </main>
    );
}

export default Main;