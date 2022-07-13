import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
            />
        </div>
    );
};

export default Profile;
