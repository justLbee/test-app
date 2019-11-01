import React, { Component } from 'react';

import classes from "../assets/index.module.scss"

export default class mainLayout extends Component {
    render() {
        return (
            <div>
                <div className={ classes.mainLayout }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}
