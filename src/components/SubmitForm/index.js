import React, { Component } from "react";
import { connect }          from "react-redux"

import { inputStateChanged, onSubmitClicked } from "../../actions";

import Input  from "../UI/Input";
import Notice from "../UI/Notice"

import classes from "../../assets/css/index.module.scss"

class SubmitForm extends Component {
    renderInputs() {
        return Object.keys(this.props.formControls.inputs).map((controlName, index) => {
            const control = this.props.formControls.inputs[controlName];
            return (
                <Input value={ control.value }
                       type={ control.type }
                       valid={ control.valid }
                       placeholder={ control.placeholder }
                       touched={ control.touched }
                       errorMessgae={ control.errorMessage }
                       shouldValidate={ !!control.validation }
                       key={ controlName + index }
                       size={ control.size }
                       onChange={ event => this.props.onChangeHandler(controlName, event.target.value) }
                />
            )
        })
    }

    submitClicked(event) {
        event.preventDefault();
        this.props.onClickHandler();
    }

    render() {
        return (
            <div className={ classes.formWindowWrapper }>
                <h1>Заголовок формы</h1>
                <form>
                    { this.renderInputs() }

                    <div className={ classes.btnSubmit }>
                        <input
                            type={ 'submit' }
                            value={ 'Начать работу' }
                            onClick={ event => this.submitClicked(event) }
                        />
                    </div>
                    <p className={ classes.conditionsText }>
                        Нажимая кнопку "Отправить", я даю свое согласие на обработку персональных данных.
                        <a href={ "../../public/uploads/test.docx" } target={ '_blank' } download={ "test.docx" }
                        >
                            Условия использования данных
                        </a>
                    </p>
                </form>

                <Notice visible={ this.props.showNotice }/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formControls: state.inputReducer,
        formIsValid : state.inputReducer.formIsValid,
        showNotice  : state.inputReducer.showNotice
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeHandler: (controlName, text) => {
            dispatch(inputStateChanged(controlName, text))
        },

        onClickHandler: (event) => {
            dispatch(onSubmitClicked(event))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
