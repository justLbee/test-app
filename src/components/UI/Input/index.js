import React from "react";

const Input = props => {
    const inputType = props.type || 'text;';
    const htmlFor = `${ inputType }-${ Math.random }`;

    return (
        <div className={'input-wrapper'}>
            <input
                type={ inputType }
                id={ htmlFor }
                value={ props.value }
                onChange={ props.onChange }
                placeholder={ props.placeholder }
            />
        </div>
    )
};

export default Input
