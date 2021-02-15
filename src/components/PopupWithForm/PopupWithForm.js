import React,  { useCallback } from 'react';
import { CONSTANTS } from '../../utils/constants.js';
import { formValidator } from '../FormValidator/FormValidator.js';
import './PopupWithForm.css';

function PopupWithForm(props) {
    const [isRegister, setIsRegister] = React.useState(false);
    const [isButtonDisabled, setButtonDisabled] = React.useState(true);
    const handleSecondOptionClick = useCallback((e) => {
        setIsRegister(!isRegister);
    }, [isRegister]);

    const [formValues, setFormValues] = React.useState({
        email: "",
        password: "",
        name: ""
    });

    const [errors, setErrors] = React.useState({
        emailErrors: {
            required: false,
            minLength: false,
            maxLength: false,
        },
        passwordErrors: {
            required: false,
            minLength: false,
            maxLength: false,
        },
        nameErrors: {
            required: false,
            minLength: false,
            maxLength: false,
        }
    });

    const handleEmailChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        const userEmailValidationResult = formValidator.validateEmailInput(value);
        if (!Object.values(userEmailValidationResult).includes(true)) {
            setButtonDisabled(false);
        }
        setErrors((prevState) => ({...prevState, 
            emailErrors: userEmailValidationResult,
        }));
    }, [setFormValues, setErrors]);

    const handlePasswordChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        const userPasswordValidationResult = formValidator.validatePasswordInput(value);
        if (!Object.values(userPasswordValidationResult).includes(true)) {
            setButtonDisabled(false);
        }
        setErrors((prevState) => ({...prevState, 
            passwordErrors: userPasswordValidationResult,
        }));
    }, [setFormValues, setErrors]);
    
    const handleNameChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        const userNameValidationResult = formValidator.validateNameInput(value);
        if (!Object.values(userNameValidationResult).includes(true)) {
            setButtonDisabled(false);
        }
        setErrors((prevState) => ({...prevState, 
            nameErrors: userNameValidationResult,
        }));
    }, [setFormValues, setErrors]);
    
    let buttonTitle;
    let secondOption;

    if (!isRegister) {
        buttonTitle = CONSTANTS.LOGIN;
        secondOption = CONSTANTS.REGISTER;
    }

    else if (isRegister) {
        buttonTitle = CONSTANTS.REGISTER;
        secondOption = CONSTANTS.LOGIN;
    }

    return (
        <div className={`popup ${props.isOpen && `popup_opened`}`} onClick={props.onOverlayAndEscClick}>
            <form className="popup__form" name={isRegister ? CONSTANTS.REGISTER_TITLE : CONSTANTS.LOGIN_TITLE} >
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <h2 className="popup__title">{isRegister ? CONSTANTS.REGISTER_TITLE : CONSTANTS.LOGIN_TITLE}</h2>
                <label className="popup__input">Email
                    <input className="popup__field popup__field_email" value={formValues.email} onChange={handleEmailChange} type="email" name="email" placeholder="Введите почту" inputMode="email"/>
                    {errors.emailErrors.required && <span className="popup__field-error">Пожалуйста, заполните поле</span>}
                    {errors.emailErrors.minLength && <span className="popup__field-error">Минимальная длина email - 5 символов</span>}
                    {errors.emailErrors.maxLength && <span className="popup__field-error">Максимальная длина email - 20 символов</span>}
                </label>
                <label className="popup__input">Пароль
                    <input className="popup__field popup__field_password" value={formValues.password} onChange={handlePasswordChange} type="text" name="password" placeholder="Введите пароль" inputMode="search" />
                    {errors.passwordErrors.required && <span className="popup__field-error">Пожалуйста, заполните поле</span>}
                    {errors.passwordErrors.minLength && <span className="popup__field-error">Минимальная длина пароля - 5 символов</span>}
                    {errors.passwordErrors.maxLength && <span className="popup__field-error">Максимальная длина пароля - 20 символов</span>}
                </label>
                {
                    isRegister &&
                    <label className="popup__input">Имя
                        <input className="popup__field popup__field_name" value={formValues.name} onChange={handleNameChange} type="text" name="name" placeholder="Введите своё имя" inputMode="search" />
                        {errors.nameErrors.required && <span className="popup__field-error">Пожалуйста, заполните поле</span>}
                        {errors.nameErrors.minLength && <span className="popup__field-error">Минимальная длина имени - 2 символа</span>}
                        {errors.nameErrors.maxLength && <span className="popup__field-error">Максимальная длина имени - 20 символов</span>}
                    </label>
                }
                <button type="button" onClick={isRegister ? props.onRegister : props.onLogin} className={isButtonDisabled ? "popup__submit popup__submit_inactive" : "popup__submit"} disabled={isButtonDisabled ? true : false}>{buttonTitle}</button>
                <span className="popup__alt-option">или <button className="popup__alt-option-button" type="button" onClick={handleSecondOptionClick}>{secondOption}</button></span>
            </form>
        </div>
    );
}

export default PopupWithForm;