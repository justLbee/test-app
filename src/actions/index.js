export const inputStateChanged = (input, text) => {
    return {
        type   : 'VALUE_CHANGED',
        payload: {input, text}
    }
};

export const onSubmitClicked = (event) => {
    return {
        type: 'SUBMIT_CLICKED',
        payload: {}
    }
};
