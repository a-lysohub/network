import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                // addNewPost={props.addNewPost}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;
