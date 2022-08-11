import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage.postsData}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
                addNewPost={props.addNewPost}
            />
        </div>
    );
};

export default Profile;
