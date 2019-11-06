import inputReducer, {initialState} from "./input-reducer"
import * as t from "../actions"

describe('tests', () => {
    it('Check state type', () => {
        const action = {
            type: t.inputStateChanged,
            payload: {input: 'name', text: 'ф'}
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState
        })
    });

    it('Check Name Valid', () => {
        const action = {
            type: t.inputStateChanged,
            payload: {input: 'name', text: 'ффф'}
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState,
            inputs: {
                ...initialState.inputs,
                [action.payload.input]: {
                    ...initialState.inputs.name,
                    value: action.payload.text,
                    valid: true
                }
            }
        })
    });

    it('Check Notice status', () => {
        const action = {
            type: t.inputStateChanged,
        };

        expect(inputReducer(initialState, action)).toEqual({
            ...initialState,
            showNotice: false,

        })
    });

    it('Check state output on Submit', () => {
        const action = {
            type: t.onSubmitClicked
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
