export const ADD_NEW_POST = "ADD-NEW-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postsData: [
        { id: "1", message: "love you", likes: "20" },
        { id: "2", message: "hello, my friend", likes: "50" },
        { id: "3", message: "my first post", likes: "50" },
        { id: "4", message: "=)", likes: "21" },
        { id: "5", message: ":)", likes: "0" },
    ],
    newPostText: "test",
};

const profileReducer = (state = initialState, action) => {
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
