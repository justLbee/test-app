// import formControls from "./formControls";
const initialState = {
    name : {
        value       : '',
        type        : 'text',
        placeholder : 'Имя',
        errorMessage: 'Поле не может быть пустым',
        valid       : false,
        touched     : false,
        validation  : {
            required : true,
            minLength: 1
        }
    },
    phone: {
        value       : '',
        type        : 'text',
        placeholder : 'Телефон',
        errorMessage: 'Введите корректный пароль',
        valid       : false,
        touched     : false,
        validation  : {
            required: true,
        }
    },
    email: {
        value       : '',
        type        : 'email',
        placeholder : 'Email',
        errorMessage: 'Введите корректный email',
        valid       : false,
        touched     : false,
        validation  : {
            required: true,
            email   : true
        }
    }
};

export default function (state = initialState, action) {
    // console.log(state);
    let localStore;
    switch (action.type) {
        case "INPUT_TOUCHED":
            // console.log(localState);
            return action.payload;
            // break;
        case "VALUE_CHANGED":
            localStore = {...state};
            let selectedInput = localStore[action.payload.input];
            selectedInput.touched = true;
            selectedInput.value = action.payload.text;

            return localStore;
        default:
            return state;
    }
}
