import react from "react";

import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

import {
    addNewMsgActionCreator,
    updateNewMsgActionCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    const newMsgElem = react.createRef();

    const addMsg = () => {
        props.dispatch(addNewMsgActionCreator());
    };
    const changeNewMsg = () => {
        const newMsgText = newMsgElem.current.value;
        props.dispatch(updateNewMsgActionCreator(newMsgText));
    };

    const dialogsItem = props.state.dialogData.map((el) => {
        return <DialogItem name={el.name} id={el.id} ava={el.ava} />;
    });

    const messagesItem = props.state.messagesData.map((el) => {
        return <MessageItem text={el.message} />;
    });

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsItem}</div>
            <div className={classes.messages}>
                <div className={classes.messagesData}>{messagesItem}</div>
                {/* {messagesItem} */}
                <textarea
                    onChange={changeNewMsg}
                    ref={newMsgElem}
                    value={props.newMsgText}
                ></textarea>
                <button onClick={addMsg}>Add new</button>
            </div>
        </div>
    );
};

export default Dialogs;
