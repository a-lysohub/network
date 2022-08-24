import React from "react";

import {
    addNewPostActionCreator,
    updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addNewPostActionCreator());
    };

    const changeNewPost = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            onAddPost={addPost}
            onChangeNewPost={changeNewPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;
