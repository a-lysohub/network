import react from "react";

import UserItem from "./UserItem/UserItem";
import classes from "./Users.module.css";

const Users = (props) => {
    if (!props.usersData.length) {
        props.setUsers([
            {
                id: 1,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OVzrJlUbydcRy7-VnJVLvLGbiE9HMtH9CA&usqp=CAU",
                followed: true,
                name: "Dmitry K.",
                from: { city: "Kharkiv", country: "Ukraine" },
                about: "I like football",
            },
            {
                id: 2,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OVzrJlUbydcRy7-VnJVLvLGbiE9HMtH9CA&usqp=CAU",

                followed: true,
                name: "Max K.",
                from: { city: "Rivne", country: "Ukraine" },
                about: "I like football",
            },
            {
                id: 3,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OVzrJlUbydcRy7-VnJVLvLGbiE9HMtH9CA&usqp=CAU",

                followed: false,
                name: "Andrey K.",
                from: { city: "Kiyv", country: "Ukraine" },
                about: "I like football",
            },
            {
                id: 4,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OVzrJlUbydcRy7-VnJVLvLGbiE9HMtH9CA&usqp=CAU",

                followed: false,
                name: "Stas K.",
                from: { city: "Lviv", country: "Ukraine" },
                about: "I like football",
            },
            {
                id: 5,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OVzrJlUbydcRy7-VnJVLvLGbiE9HMtH9CA&usqp=CAU",

                followed: true,
                name: "Yurii K.",
                from: { city: "Sumi", country: "Ukraine" },
                about: "I like football",
            }
        ]);
    }

    const onFollow = (userId) => {
        props.follow(userId);
    };

    const onUnfollow = (userId) => {
        props.unfollow(userId);
    };

    const userItem = props.usersData.map((el, i) => {
        return (
            <UserItem
                key={i}
                usersData={el}
                follow={onFollow}
                unfollow={onUnfollow}
            />
        );
    });

    return (
        <div>
            <div className={classes.messagesData}>{userItem}</div>
            <button onClick={() => {}}>Show more</button>
        </div>
    );
};

export default Users;
