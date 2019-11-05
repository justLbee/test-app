import is from "is_js";

const initialState = {
    name : {
        value       : '',
        type        : 'text',
        placeholder : 'Имя*',
        errorMessage: 'Поле не может быть пустым',
        valid       : false,
        touched     : false,
        size        : 'big',
        validation  : {
            required : true,
            minLength: 1,
            name     : true
        }
    },
    phone: {
        value       : '',
        type        : 'text',
        placeholder : 'Номер телефона*',
        errorMessage: 'Введите корректный пароль',
        valid       : false,
        touched     : false,
        size        : 'small',
        validation  : {
            required: true,
            phone   : true
        }
    },
    email: {
        value       : '',
        type        : 'email',
        placeholder : 'Email*',
        errorMessage: 'Введите корректный email',
        valid       : false,
        touched     : false,
        size        : 'big',
        validation  : {
            required: true,
            email   : true
        }
    }

};

function validateInput(value, validation) {
    if (!validation) {
        return true;
    }

    let isValid = true;
    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
        isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.phone) {
        const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/gm;

        isValid = phoneRegex.test(value) && isValid;
    }

    return isValid;
}

function checkText(value, type) {
    if (type === 'phone') {
        const phoneRegex = /[^+\d]/g;

        return value.replace(phoneRegex, '');
    }

    if (type === 'name') {
        const nameRegex = /[^а-яё ]/i;

        return value.replace(nameRegex, '');
    }

    return value;
}

export default function (state = initialState, action) {
    let localStore;

    switch (action.type) {
        case "VALUE_CHANGED":
            localStore = {...state};

            let selectedInput = localStore[action.payload.input];

            selectedInput.touched = true;
            selectedInput.value = checkText(action.payload.text, action.payload.input);
            selectedInput.valid = validateInput(selectedInput.value, selectedInput.validation);


            return localStore;
        default:
            return state;
    }
}
