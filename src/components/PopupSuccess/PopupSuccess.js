import './PopupSuccess.css';

function PopupSuccess(props) {

    return (
        <div className={`popup ${props.isOpen && `popup_opened`}`} onClick={props.onOverlayAndEscClick} >
            <div className="popup__container" >
                <button className="popup__close-button" onClick={props.onClose} type="button"></button>
                <h2 className="popup__title">
                    Пользователь успешно зарегистрирован!
                </h2>
                <button className="popup__alt-option-button" type="button" onClick={props.onLogin}>Войти</button>
            </div>
        </div>
    );
}

export default PopupSuccess;