import React, { useCallback } from 'react';
import { CONSTANTS } from '../../utils/constants';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Register({ onRegister, isPopupOpen, handleOverlayClick, onCloseClick, onLoginClick, registrationError }) {
    
    const [disabledState, setDisabledState] = React.useState(false);
    
    const [formValues, setFormValues] = React.useState({
        userEmail: "",
        userPassword: "",
        userName: ""
    });
    const [errors, setErrors] = React.useState({
        userEmail: [],
        userPassword: [],
        userName: []});
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

    const resetForm = useCallback((newValues = { userEmail: "", userPassword: "", userName: ""}, 
                                    newErrors = { userEmail: [], userPassword: [], userName: []}, 
                                    newIsValid = false) => {
        setFormValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
        },
        [setFormValues, setErrors, setIsValid]
    );

    const handleInputChange = useCallback((event) => {
        const target = event.target;
        const { name, value } = target;
        setFormValues({...formValues, [name]: value});
        setInputErrors(target, name);
        setIsValid(target.closest("form").checkValidity());
    }, [formValues, setInputErrors]);



    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onRegister(formValues.userName, formValues.userEmail, formValues.userPassword)
        resetForm();
    }, [formValues, onRegister, resetForm]);

    return (
        <PopupWithForm isFormValid={isValid} 
                        onSubmit={handleSubmit} 
                        isOpen={isPopupOpen} 
                        onOverlayAndEscClick={handleOverlayClick} 
                        onClose={onCloseClick}
                        onAltOptionClick={onLoginClick}
                        title={CONSTANTS.REGISTER_TITLE}
                        buttonName={CONSTANTS.REGISTER_INVITE}
                        altOptionText={CONSTANTS.LOGIN_INVITE}
                        error={registrationError}>
                <label className="popup__input">Email
                    <input className="popup__field popup__field_email" 
                            required
                            maxLength="35" 
                            value={formValues.userEmail} 
                            onChange={handleInputChange} 
                            type="email" 
                            name="userEmail" 
                            placeholder="Введите почту" 
                            inputMode="email"
                            disabled={disabledState}/>
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
                            inputMode="search"
                            disabled={disabledState} />
                    {errors.userPassword.length > 0 && <span className="popup__field-error">{errors.userPassword}</span>}
                </label>

                <label className="popup__input">Имя
                    <input className="popup__field popup__field_name"
                            required
                            minLength="3"
                            maxLength="15"  
                            value={formValues.userName} 
                            onChange={handleInputChange} 
                            type="text" 
                            name="userName" 
                            placeholder="Введите своё имя" 
                            inputMode="search"
                            disabled={disabledState} />
                    {errors.userName.length > 0 && <span className="popup__field-error">{errors.userName}</span>}
                </label>
                {registrationError && <span className="popup__submission-error">{registrationError}</span>}
        </PopupWithForm>    
    );

}

export default Register;