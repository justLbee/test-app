import React, { Component } from "react";
import { connect }          from "react-redux"

import { inputStateChanged, onSubmitClicked } from "../../actions";

import Input  from "../UI/Input";
import Notice from "../UI/Notice"

import classes from "../../assets/index.module.scss"

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
                            onClick={ event => this.props.onClickHandler(event, this.props.formControls) }
                        />
                    </div>
                    <p>
                        Нажимая кнопку "Отправить", я даю свое согласие на обработку персональных данных.
                        <a href={ "/uploads/test.docx" } target={ '_blank' }> Условия использования данных</a>
                    </p>
                </form>

                <Notice visible={this.props.isFormValid}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formControls: state.inputReducer,
        isFormValid : state.submitReducer.isFormValid
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeHandler: (controlName, text) => {
            dispatch(inputStateChanged(controlName, text))
        },

        onClickHandler: (event, inputsData) => {
            dispatch(onSubmitClicked(event, inputsData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
