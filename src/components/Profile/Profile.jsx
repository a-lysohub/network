import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
