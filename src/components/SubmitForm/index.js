import React, {Component} from "react";

export default class SubmitForm extends Component {
    render() {
        return (
            <div className={'form-window-wrapper'}>
                <h1>Заголовок формы</h1>
                <form className={'form-wrapper'}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit"></input>
                </form>

            </div>
        )
    }
}
