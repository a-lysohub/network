const initialState = {
    navBarData: [
        { name: "Profile", address: "/profile" },
        { name: "Messages", address: "/messages" },
        { name: "News", address: "/news" },
        { name: "Music", address: "/music" },
        { name: "Settings", address: "/settings" },
    ],
};

const mainPageReducer = (state = initialState, action) => {
    return state;
};

export default mainPageReducer;
