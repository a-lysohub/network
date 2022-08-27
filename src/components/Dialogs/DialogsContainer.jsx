import { connect } from "react-redux";

import Dialogs from "./Dialogs";

import {
    addNewMsgActionCreator,
    updateNewMsgActionCreator,
} from "../../redux/dialogsReducer";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        newMsgText: state.messagePage.newMsgText,
        dialogData: state.messagePage.dialogData,
        messagesData: state.messagePage.messagesData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => {
            dispatch(addNewMsgActionCreator());
        },
        changeNewMsg: (text) => {
            dispatch(updateNewMsgActionCreator(text));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
