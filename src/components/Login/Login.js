import React, { useCallback } from 'react';
import { CONSTANTS } from '../../utils/constants';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Login({ onLogin, isPopupOpen, handleOverlayClick, onCloseClick, onRegisterClick, loginError }) {
    const [formValues, setFormValues] = React.useState({
        userEmail: "",
        userPassword: "",
    });
    const [errors, setErrors] = React.useState({
        userEmail: [],
        userPassword: [],
    });
    const [isValid, setIsValid] = React.useState(false);

    const setInputErrors = useCallback((eventTarget, eventName) => {
        let errorMessages = [];
        if (eventTarget.validity.valueMissing){
            errorMessages.push(CONSTANTS.REQUIRED_INPUT);
        }
        else if (eventTarget.validity.tooShort){
            errorMessages.push(CONSTANTS.TOO_SHORT);
        }
        
        if (eventTarget.validity.tooLong){
            errorMessages.push(CONSTANTS.TOO_LONG);
        }
        if (eventTarget.validity.typeMismatch){
            errorMessages.push(CONSTANTS.NOT_EMAIL);
        } 
        setErrors({...errors, [eventName]: errorMessages });
    }, [errors]);

    const resetForm = useCallback((newValues = { userEmail: "", userPassword: ""}, 
                                    newErrors = { userEmail: [], userPassword: []}, 
                                    newIsValid = false) => {
        setFormValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
        },
        [setFormValues, setErrors, setIsValid]
    );

    const handleInputChange = useCallback((event) => {
        const target = event.target;
        const {name, value} = target;
        setFormValues({...formValues, [name]: value});
        setInputErrors(target, name);
        setIsValid(target.closest("form").checkValidity());
    }, [formValues, setInputErrors]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onLogin(formValues.userEmail, formValues.userPassword);
        resetForm();
    }, [formValues, onLogin, resetForm]);

    return (
        <PopupWithForm isFormValid={isValid} 
                        onSubmit={handleSubmit} 
                        isOpen={isPopupOpen} 
                        onOverlayAndEscClick={handleOverlayClick} 
                        onClose={onCloseClick}
                        onAltOptionClick={onRegisterClick}
                        title={CONSTANTS.LOGIN_TITLE}
                        buttonName={CONSTANTS.LOGIN_INVITE}
                        altOptionText={CONSTANTS.REGISTER_INVITE}>
                <label className="popup__input">Email
                    <input className="popup__field popup__field_email" 
                            required
                            maxLength="35" 
                            value={formValues.userEmail} 
                            onChange={handleInputChange} 
                            type="email" 
                            name="userEmail" 
                            placeholder="Введите почту" 
                            inputMode="email"/>
                    {errors.userEmail.length > 0 && <span className="popup__field-error">{errors.userEmail}</span>}
                </label>

                <label className="popup__input">Пароль
                    <input className="popup__field popup__field_password"
                            required
                            minLength="5"
                            maxLength="15" 
                            value={formValues.userPassword} 
                            onChange={handleInputChange} 
                            type="text" 
                            name="userPassword" 
                            placeholder="Введите пароль" 
                            inputMode="search" />
                    {errors.userPassword.length > 0 && <span className="popup__field-error">{errors.userPassword}</span>}
                </label>
                {loginError && <span className="popup__submission-error">{loginError}</span>}
        </PopupWithForm>    
    );

}

export default Login;