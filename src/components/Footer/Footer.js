import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import gitlogo from '../../images/github.png';
import twlogo from '../../images/tw.png';
import { CONSTANTS } from '../../utils/constants';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2021 Powered by News API</p>
            <div className="footer__links">
                <nav className="footer__links-list">
                    <NavLink className="footer__links-list-link" to={ROUTES_MAP.MAIN}>
                        Главная
                    </NavLink>
                    <a className="footer__links-list-link" href={CONSTANTS.PRAKTIKUM}>
                        Яндекс.Практикум
                    </a>
                </nav>
                <ul className="footer__ex-links">
                    <li className="footer__ex-link"><a href={CONSTANTS.GITHUB}>
                        <img src={gitlogo} alt="Ссылка на GitHub" />
                    </a></li>
                    <li className="footer__ex-link"><a href={CONSTANTS.TWITTER}>
                        <img src={twlogo} alt="Ссылка на Twitter" />
                    </a></li>
                </ul>
            </div>
        </footer>

    );
}

export default Footer;