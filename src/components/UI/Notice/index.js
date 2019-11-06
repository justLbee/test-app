import React   from "react";
import classes from "./notice.module.scss"

const Notice = props => {
    let cls = [classes.Notice];
    if (props.visible) {
        cls.push(classes.display_notice);
    }

    return (
        <div className={ cls.join(' ') }>
            <div className={classes.successCheckmark}>
                <div className={classes.checkIcon}>
                    <span className={`${classes.iconLine} ${classes.lineTip}`}/>
                    <span className={`${classes.iconLine} ${classes.lineLong}`}/>
                    <div className={classes.iconCircle}/>
                    <div className={classes.iconFix}/>
                </div>
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
