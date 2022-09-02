import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import mainPageReducer from "./mainPageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    mainPage: mainPageReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
