import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    const navbar = props.state.mainPage.navBar;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar navbar={navbar} />
                <div className="app-wrapper-content">
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                                newPostText={props.state.newPostText}
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
