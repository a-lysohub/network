import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addNewPostActionCreator,
    updateNewPostActionCreator,
} from "../../../Redux/State";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((el) => (
        <Post message={el.message} likesCount={el.likes} />
    ));

    let newPostEl = React.createRef();

    const addPost = () => {
        props.dispatch(addNewPostActionCreator());
    };
    const onChangeNewPost = () => {
        const newPostText = newPostEl.current.value;
        props.dispatch(updateNewPostActionCreator(newPostText));
    };

    return (
        <div className={classes.postsBlock}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea
                        onChange={onChangeNewPost}
                        ref={newPostEl}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsData}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
