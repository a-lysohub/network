import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.imgTop}>
                <img
                    alt=""
                    src="https://ak.picdn.net/shutterstock/videos/6202598/thumb/1.jpg"
                ></img>
            </div>
            <div className={classes.descriptionBlock}>
                <div>ava</div>
                <div>desc</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
