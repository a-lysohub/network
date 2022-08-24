import react from "react";

import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    const newMsgElem = react.createRef();
    console.log('Dialogs: ', props)

    const onAddMsg = () => {
        props.addMsg();
    };

    const onChangeNewMsg = () => {
        props.changeNewMsg(props.newMsgText);
    };

    const dialogsItem = props.dialogData.map((el, i) => {
        return <DialogItem key={i} name={el.name} id={el.id} ava={el.ava} />;
    });

    const messagesItem = props.messagesData.map((el, i) => {
        return <MessageItem key={i} text={el.message} />;
    });

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsItem}</div>
            <div className={classes.messages}>
                <div className={classes.messagesData}>{messagesItem}</div>
                <textarea
                    onChange={onChangeNewMsg}
                    ref={newMsgElem}
                    value={props.newMsgText}
                ></textarea>
                <button onClick={onAddMsg}>Add new</button>
            </div>
        </div>
    );
};

export default Dialogs;
