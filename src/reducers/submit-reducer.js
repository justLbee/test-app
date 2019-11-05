const initialState = {
    isFormValid: false
};

export default function (state = initialState, action) {
    let localState;
    if(action.type === 'SUBMIT_CLICKED') {
        action.payload.event.preventDefault();

        localState = {...state};

        Array.from(action.payload.inputsData).forEach(input => {
            localState.isFormValid = input.valid && localState.isFormValid;
        });

        return localState;
    } else {
        return state;
    }
}
