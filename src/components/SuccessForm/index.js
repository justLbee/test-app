import React, { Component } from "react";
import Input                from "../UI/Input";
import classes              from "../../assets/index.module.scss";

class SuccessForm extends Component {
    render() {
        return (
            <div className={ classes.formWindowWrapper }>
                <div>
                    +
                </div>
                <div>
                    <p>
                        Заявка отправлена!
                    </p>
                    <p>
                        Менеджер уже звонит, посмотрите на телефон.
                    </p>
                </div>
            </div>
        )
    }
}
