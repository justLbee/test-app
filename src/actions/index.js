export const inputTouched = (event, input) => {
    return {
        type   : 'INPUT_TOUCHED',
        payload: input
    }
};

export const inputStateChanged = (input, text) => {
    return {
        type   : 'VALUE_CHANGED',
        payload: {input, text}
    }
};
