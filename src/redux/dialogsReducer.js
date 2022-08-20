export const ADD_NEW_MSG = "ADD-NEW-MSG";
export const UPDATE_NEW_MSG_TEXT = "UPDATE-NEW-MSG-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MSG:
            let newMsg = {
                id: 6,
                message: state.newMsgText,
            };
            state.messagesData.push(newMsg);
            state.newMsgText = "";
            return state;
        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = action.newMsgText;
            return state;
        default:
            return state;
    }
};

export const addNewMsgActionCreator = () => {
    return {
        type: ADD_NEW_MSG,
    };
};
export const updateNewMsgActionCreator = (newMsgText) => {
    return {
        type: UPDATE_NEW_MSG_TEXT,
        newMsgText,
    };
};

export default dialogsReducer;
