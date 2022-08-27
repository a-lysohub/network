import { connect } from "react-redux";

import {
    addNewPostActionCreator,
    updateNewPostActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addNewPostActionCreator());
        },
        changeNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
