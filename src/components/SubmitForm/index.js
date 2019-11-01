import React, { Component }   from "react";
import { connect }            from "react-redux"

import { inputTouched, inputStateChanged }             from "../../actions";

import Input from "../UI/Input";

import classes from "../../assets/index.module.scss"

class SubmitForm extends Component {
    renderInputs() {
        return Object.keys(this.props.formControls).map((controlName, index) => {
            const control = this.props.formControls[controlName];
            return (
                <Input value={ control.value }
                       type={ control.type }
                       valid={ control.valid }
                       placeholder={ control.placeholder }
                       touched={ control.touched }
                       errorMessgae={ control.errorMessage }
                       shouldValidate={ !!control.validation }
                       key={ controlName + index }
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
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formControls: state.inputReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeHandler: (controlName, text) => {
            dispatch(inputStateChanged(controlName, text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
