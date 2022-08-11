import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((el) => (
        <Post message={el.message} likesCount={el.likes} />
    ));

    let newPostEl = React.createRef();

    const addPost = () => {
        props.addNewPost();
    };
    const changeNewPost = () => {
        const text = newPostEl.current.value;
        props.updateNewPostText(text);
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsData}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;