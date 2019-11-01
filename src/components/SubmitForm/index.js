import React, { Component } from "react";

import Input from "../UI/Input";

import classes from "../../assets/index.module.scss"

export default class SubmitForm extends Component {
    state = {
        formControls: {
            name : {
                value       : '',
                type        : 'text',
                placeholder : 'Имя',
                errorMessage: 'Поле не может быть пустым',
                valid       : false,
                touched     : false,
                validation  : {
                    required : true,
                    minLength: 1
                }
            },
            phone: {
                value       : '',
                type        : 'text',
                placeholder : 'Телефон',
                errorMessage: 'Введите корректный пароль',
                valid       : false,
                touched     : false,
                validation  : {
                    required: true,
                }
            },
            email: {
                value       : '',
                type        : 'email',
                placeholder : 'Email',
                errorMessage: 'Введите корректный email',
                valid       : false,
                touched     : false,
                validation  : {
                    required: true,
                    email   : true
                }
            }
        }
    };

    onChangeHandler = (event, controlName) => {
        console.log(controlName);
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input value={control.value}
                       type={control.type}
                       valid={control.valid}
                       placeholder={control.placeholder}
                       touched={control.touched}
                       errorMessgae={control.errorMessage}
                       shouldValidate={!!control.validation}
                       key={controlName + index}
                       onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={ classes.formWindowWrapper }>
                <h1>Заголовок формы</h1>
                <form>
                    { this.renderInputs() }
                </form>
            </div>
        )
    }
}
