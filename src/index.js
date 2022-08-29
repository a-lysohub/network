import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/reduxStore";

import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode value={store}>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
