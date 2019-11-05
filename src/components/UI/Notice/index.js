import React   from "react";
import classes from "./notice.module.css"

const Notice = props => {
    // console.log(props);
    const cls = [classes.Notice];
    console.log(props.visible);
    if (props.visible) {
        cls.push(classes.visible)
    }

    return (
        <div className={ cls.join(' ') }>
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
};

export default Notice
