const initialState = {
    isFormValid: false
};

export default function (state = initialState, action) {
    let localState;
    if(action.type === 'SUBMIT_CLICKED') {
        action.payload.event.preventDefault();
        localState = {...state};

        let isValid = true;
        Object.keys(action.payload.inputsData).map(input => {
            return isValid = action.payload.inputsData[input].valid && isValid;
        });

        localState.isFormValid = isValid;

        return localState;
    } else {
        return state;
    }
}
