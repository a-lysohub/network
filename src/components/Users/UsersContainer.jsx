import { connect } from "react-redux";

import Users from "./Users";

import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        usersData: state.usersPage.usersData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (usersData) => {
            dispatch(setUsersActionCreator(usersData));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
