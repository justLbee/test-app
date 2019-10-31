import React, {Component} from "react";

import Input from "../UI/Input";

export default class SubmitForm extends Component {
    render() {
        return (
            <div className={'form-window-wrapper'}>
                <h1>Заголовок формы</h1>
                <form className={'form-wrapper'}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Телефон'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Электронная почта'}
                    />
                </form>

            </div>
        )
    }
}
