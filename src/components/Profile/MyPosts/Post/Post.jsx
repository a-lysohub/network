import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg"
                alt=""
            ></img>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;
