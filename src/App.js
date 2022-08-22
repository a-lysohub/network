import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar state={props.state.mainPage} />
                <div className="app-wrapper-content">
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile
                                state={props.state.profilePage}
                                dispatch={props.dispatch}
                                newPostText={
                                    props.state.profilePage.newPostText
                                }
                            />
                        )}
                    />
                    <Route
                        path="/messages"
                        render={() => (
                            <Dialogs
                                state={props.state.messagePage}
                                dispatch={props.dispatch}
                                newMsgText={props.state.messagePage.newMsgText}
                            />
                        )}
                    />
                    <Route path="/news" component={Profile} />
                    <Route path="/music" component={Profile} />
                    <Route path="/settings" component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
