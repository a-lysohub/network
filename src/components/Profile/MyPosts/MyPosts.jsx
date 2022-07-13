import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
/* import { addPost } from "./Redux/State"; */

const MyPosts = (props) => {
    const postsElements = props.postsData.map((el) => (
        <Post message={el.message} likeCount={el.likes} />
    ));

    let newPostEl = React.createRef();

    const addNewPost = () => {
        const text = newPostEl.current.value;
        props.addPost(text);
        newPostEl.current.value = "";
    };
    const changeNewPost = () => {
        props.newPostText = newPostEl.current.value;
    };

    return (
        <div className={classes.postsBlock}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea
                        onChange={changeNewPost}
                        ref={newPostEl}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsData}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
