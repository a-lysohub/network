import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import {
    store
} from "./Redux/State";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addNewPost={store.addNewPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addNewMsg={store.addNewMsg.bind(store)}
                updateNewMsgText={store.updateNewMsgText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
