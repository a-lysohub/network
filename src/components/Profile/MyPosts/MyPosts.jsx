import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.postsData.map((el, i) => (
        <Post key={i} message={el.message} likesCount={el.likes} />
    ));

    let newPostEl = React.createRef();

    const onAddPost = () => {
        props.onAddPost();
    };

    const onChangeNewPost = () => {
        const newPostText = newPostEl.current.value;
        props.onChangeNewPost(newPostText);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsData}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
