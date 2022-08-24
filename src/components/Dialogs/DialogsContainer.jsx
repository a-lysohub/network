import Dialogs from "./Dialogs";

import {
    addNewMsgActionCreator,
    updateNewMsgActionCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    const addMsg = () => {
        props.store.dispatch(addNewMsgActionCreator());
    };

    const changeNewMsg = (text) => {
        let action = updateNewMsgActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            addMsg={addMsg}
            changeNewMsg={changeNewMsg}
            newMsgText={state.messagePage.newMsgText}
            dialogData={state.messagePage.dialogData}
            messagesData={state.messagePage.messagesData}
        />
    );
};

export default DialogsContainer;
