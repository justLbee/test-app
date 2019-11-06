import inputReducer, { initialState } from "./input-reducer"

describe('tests', () => {
    it('Check Default State', () => {
        const action = {
            type   : 'VALUE_CHANGED',
            payload: {input: 'name', text: 'ффф'}
        };

        expect(inputReducer(undefined, action)).toEqual({
            ...initialState,
            inputs: {
                ...initialState.inputs,
                [action.payload.input]: {
                    ...initialState.inputs[action.payload.input],
                    value  : action.payload.text,
                    valid  : true,
                    touched: true
                }
            }
        })
    });

    it('Check Name Valid', () => {
        const action = {
            type   : 'VALUE_CHANGED',
            payload: {input: 'name', text: 'ффф'}
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState,
            inputs: {
                ...initialState.inputs,
                [action.payload.input]: {
                    ...initialState.inputs[action.payload.input],
                    value  : action.payload.text,
                    valid  : true,
                    touched: true
                }
            }
        })
    });

    it('Check Phone Valid', () => {
        const action = {
            type   : 'VALUE_CHANGED',
            payload: {input: 'phone', text: '+79991921313'}
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState,
            inputs: {
                ...initialState.inputs,
                [action.payload.input]: {
                    ...initialState.inputs[action.payload.input],
                    value  : action.payload.text,
                    valid  : true,
                    touched: true
                }
            }
        })
    });

    it('Check Phone Email', () => {
        const action = {
            type   : 'VALUE_CHANGED',
            payload: {input: 'email', text: 'john@doe.com'}
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState,
            inputs: {
                ...initialState.inputs,
                [action.payload.input]: {
                    ...initialState.inputs[action.payload.input],
                    value  : action.payload.text,
                    valid  : true,
                    touched: true
                }
            }
        })
    });

    it('Check state output on Submit', () => {
        const action = {
            type: 'SUBMIT_CLICKED'
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState
        })
    });

    // it('Check state output on Submit', () => {
    //     const formIsValidState = {
    //         formIsValid: true,
    //         showNotice: false,
    //         inputs: {name: {}, phone: {}, email: {}}
    //     };
    //
    //     const action = {
    //         type: t.onSubmitClicked,
    //         payload: onclick
    //     };
    //
    //     expect(inputReducer(formIsValidState, action)).toEqual({
    //         ...formIsValidState,
    //         showNotice: true,
    //         formIsValid: true,
    //     })
    // });
});
