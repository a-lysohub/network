import classes from "./../Users.module.css";

const UserItem = (props) => {
    const path = "/users/" + props.id;
    const { id, avatarUrl, followed, name, from, about } = props.usersData;
    return (
        <div className={classes.userItem}>
            <div className={classes.avatarContainer}>
                <img src={avatarUrl} alt={""} className={classes.avatar} />
                {followed ? (
                    <button
                        className={classes.statusBtn}
                        onClick={() => props.follow(id)}
                    >
                        Follow
                    </button>
                ) : (
                    <button
                        className={classes.statusBtn}
                        onClick={() => props.unfollow(id)}
                    >
                        Unfollow
                    </button>
                )}
            </div>
            <div className={classes.info}>
                <span>
                    <div>{name}</div>
                </span>
                <span>
                    <div>
                        {from.city}, {from.country}
                    </div>
                </span>
                <span>
                    <div>{about}</div>
                </span>
            </div>
        </div>
    );
};

export default UserItem;
