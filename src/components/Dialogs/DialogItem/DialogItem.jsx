import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogItem = (props) => {
    const path = "/messages/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>
                <img src={props.ava} alt={''} className={classes.avatar} />
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
