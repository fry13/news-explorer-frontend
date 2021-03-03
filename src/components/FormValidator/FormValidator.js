import { validationParams } from '../../utils/validationParams.js';


class FormValidator {

    validateNameInput(nameInput) {
        const result = {};
        Object.keys(validationParams.name)
            .forEach((err) => {
                const errorResult = validationParams.name[err](nameInput);
                result[err] = errorResult;
            });
        return result;
    }

    validateEmailInput(emailInput) {
        const result = {};
        Object.keys(validationParams.email)
            .forEach((err) => {
                const errorResult = validationParams.email[err](emailInput);
                result[err] = errorResult;
            });
        return result;
    }

    validatePasswordInput(passwordInput) {
        const result = {};
        Object.keys(validationParams.password)
            .forEach((err) => {
                const errorResult = validationParams.password[err](passwordInput);
                result[err] = errorResult;
            });
        return result;
    }
}

export const formValidator = new FormValidator();