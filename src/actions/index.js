export const select = (event, input) => {
    alert(`Now input is: ${input}`);

    return {
        type: 'INPUT_TOUCHED',
        payload: input
    }
};
