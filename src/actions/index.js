export const inputStateChanged = (input, text) => {
    return {
        type   : 'VALUE_CHANGED',
        payload: {input: input, text: text}
    }
};

export const onSubmitClicked = (event) => {
    return {
        type: 'SUBMIT_CLICKED',
        payload: {event}
    }
};
