import dialogsReducer from "./dialogsReducer";
import mainPageReducer from "./mainPageReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: "1", message: "love you", likes: "20" },
                { id: "2", message: "hello, my friend", likes: "50" },
                { id: "3", message: "my first post", likes: "50" },
                { id: "4", message: "=)", likes: "21" },
                { id: "5", message: ":)", likes: "0" },
            ],
            newPostText: "test",
        },
        messagePage: {
            dialogData: [
                {
                    id: "1",
                    name: "Alona",
                    ava: "https://images.freeimages.com/images/premium/small-comps/5488/54880574-profile-icon-female-avatar-woman-portrait.jpg",
                },
                {
                    id: "2",
                    name: "Sasha",
                    ava: "https://media.istockphoto.com/vectors/default-avatar-profile-icon-gray-placeholder-photo-vector-id844058816?b=1&k=6&m=844058816&s=612x612&w=0&h=pctweaZOB-hD1VNfAxDJvzsIajhEe81ajHvfAW-tq0o=",
                },
                {
                    id: "3",
                    name: "Max",
                    ava: "https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg",
                },
                {
                    id: "4",
                    name: "Leha",
                    ava: "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg",
                },
                {
                    id: "5",
                    name: "Stasik",
                    ava: "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg",
                },
                {
                    id: "6",
                    name: "Kesha",
                    ava: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png",
                },
                {
                    id: "7",
                    name: "Vlad",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x8eZ7q-2f-2fwAq3YM6gOFvnluVPvEZ5aw&usqp=CAU",
                },
                {
                    id: "8",
                    name: "Yurka",
                    ava: "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg",
                },
                {
                    id: "9",
                    name: "Romka",
                    ava: "https://img2.freepng.ru/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg",
                },
            ],
            messagesData: [
                { id: "1", message: "hi" },
                { id: "2", message: "love you" },
                { id: "3", message: "=*" },
                { id: "4", message: "=)" },
                { id: "5", message: ":)" },
            ],
            newMsgText: "newMsgText",
        },
        mainPage: {
            navBarData: [
                { name: "Profile", address: "/profile" },
                { name: "Messages", address: "/messages" },
                { name: "News", address: "/news" },
                { name: "Music", address: "/music" },
                { name: "Settings", address: "/settings" },
            ],
        },
    },
    _callSubscriber() {
        console.log("State was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addNewMsg() {
        let newMsg = {
            id: 6,
            message: this._state.messagePage.newMsgText,
        };
        this._state.messagePage.messagesData.push(newMsg);
        this._state.messagePage.newMsgText = "";
        this._callSubscriber(this._state);
    },
    updateNewMsgText(newText) {
        this._state.messagePage.newMsgText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.messagePage = dialogsReducer(
            this._state.messagePage,
            action
        );
        this._state.mainPage = mainPageReducer(
            this._state.mainPage,
            action
        )

        this._callSubscriber(this._state);
    },
};

export default store;
