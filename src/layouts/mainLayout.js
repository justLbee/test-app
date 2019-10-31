import React, {Component} from 'react';


export default class mainLayout extends Component {
    render() {
        return (
            <div className={'main-layout'}>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}
