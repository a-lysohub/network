export const ADD_NEW_POST = "ADD-NEW-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};

export const addNewPostActionCreator = () => {
    return {
        type: ADD_NEW_POST,
    };
};
export const updateNewPostActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText,
    };
};

export default profileReducer;
