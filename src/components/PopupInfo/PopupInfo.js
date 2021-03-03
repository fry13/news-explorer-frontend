import './PopupInfo.css';

function PopupInfo(props) {

    return (
        <div className={`popup ${props.isOpen && `popup_opened`}`} onClick={props.onOverlayAndEscClick} >
            <div className="popup__container" >
                <button className="popup__close-button" onClick={props.onClose} type="button"></button>
                <h2 className="popup__title">
                    {props.title}
                </h2>
                <button className="popup__alt-option-button" type="button" onClick={props.onLogin}>{props.button}</button>
            </div>
        </div>
    );
}

export default PopupInfo;