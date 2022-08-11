import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { addNewPost, updateNewPostText } from './Redux/State';


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};


reportWebVitals();