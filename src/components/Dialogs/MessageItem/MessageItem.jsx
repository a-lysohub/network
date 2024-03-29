import classes from "./../Dialogs.module.css";

const MessageItem = (props) => {
    return <div className={classes.message}>{props.text}</div>;
};

export default MessageItem;