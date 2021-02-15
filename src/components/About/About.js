import React from 'react';
import me from '../../images/me.jpg';
import './About.css';

function About() {
    return (
        <div className="about">
            <img className="about__picture" src={me} alt="Фото автора" />
            <div className="about__container">
                <h1 className="about__title">
                    Об авторе
                </h1>
                <p className="about__text">
                    Это моя дипломная работа выполненная в рамках обучения на курсе Яндекс.Практикума. 
                    В этом текстовом блоке с описанием автора проекта следует указать, что зовут меня Алексей, 
                    и что за время обучения веб-разработке я научился делаться всякие крутые штуки, например: <br></br><br></br>
                    - верстать всякие прикольные штуковины, примеры которых можно посмотреть у меня в github, с которым, кстати, я теперь умею работать<br></br><br></br>
                    - программировать всякое на JavaScript. Можете понажимать на всякие кнопочки на этой страничке, оно всё работает (ну или скоро обязательно будет!)<br></br><br></br>
                    - пользоваться React. Роуты, стэйты, хуки, вот это вот всё.<br></br><br></br>
                    - делать бэкенд на Node.js. Умею делать REST api на express и взаимодействовать с mongoDB через mongoose
                </p>
            </div>
        </div>
    );
}

export default About;