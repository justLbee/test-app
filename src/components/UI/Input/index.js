import React   from "react";
import classes from "./input.module.scss"

const Input = props => {
    const inputType = props.type || 'text;';
    const htmlFor = `${ inputType }-${ Math.random }`;

    const inputClasses = [classes.inpt];

    return (
        <div className={ classes.InputWrapper }>
            <input
                type={ inputType }
                id={ htmlFor }
                value={ props.value }
                onChange={ props.onChange }
                placeholder={ props.placeholder }
                className={ inputClasses }
            />
        </div>
    )
};

export default Input
