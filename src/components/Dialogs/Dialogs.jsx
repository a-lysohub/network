import react from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    const newMssgElem = react.createRef();
    const addMssg = () => {
        const text = newMssgElem.current.value;
        alert(text);
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
                {messagesItem}
                <textarea ref={newMssgElem}></textarea>
                <button onClick={addMssg}>Add new</button>
            </div>
        </div>
    );
};

export default Dialogs;
