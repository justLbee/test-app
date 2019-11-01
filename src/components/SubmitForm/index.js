import React, { Component } from "react";

import Input from "../UI/Input";

import classes from "../../assets/index.module.scss"

export default class SubmitForm extends Component {
    render() {
        return (
            <div className={ classes.formWindowWrapper }>
                <h1>Заголовок формы</h1>
                <form>
                    <Input
                        type={ 'text' }
                        placeholder={ 'Имя' }
                    />
                    <Input
                        type={ 'text' }
                        placeholder={ 'Телефон' }
                    />
                    <Input
                        type={ 'text' }
                        placeholder={ 'Электронная почта' }
                    />
                </form>
            </div>
        )
    }
}
