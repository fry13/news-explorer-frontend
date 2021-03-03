export const validationParams = {
    name: {
        required: (value) => {
            return value === "";
        },
        minLength: (value) => {
            return value.length < 2;
        },
        maxLength: (value) => {
            return value.length > 20;
        }
    },

    email: {
        required: (value) => {
            return value === "";
        },
        minLength: (value) => {
            return value.length < 5;
        },
        maxLength: (value) => {
            return value.length > 20;
        }
    },
    
    password: {
        required: (value) => {
            return value === "";
        },
        minLength: (value) => {
            return value.length < 5;
        },
        maxLength: (value) => {
            return value.length > 20;
        }
    }    
}