import React   from "react";
import classes from "./input.module.scss"

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

const Input = props => {
    const inputType = props.type || 'text;';
    const htmlFor = `${ inputType }-${ Math.random }`;

    const cls = [classes.InputWrapper];

    if (isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
        <div className={ cls.join(' ') }>
            <input
                type={ inputType }
                id={ htmlFor }
                value={ props.value }
                onChange={ props.onChange }
                placeholder={ props.placeholder }
            />
            {
                isInvalid(props)
                    ?
                    <span>{ props.errorMessage || 'Неверные данные' }</span>
                    :
                    null
            }
        </div>
    )
};

export default Input
