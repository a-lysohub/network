import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

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
                                state={props.state.profilePage}
                                addPost={props.addPost}
                                newPostText={props.newPostText}
                            />
                        )}
                    />
                    <Route
                        path="/messages"
                        render={() => (
                            <Dialogs
                                state={props.state.messagePage}
                                className="active"
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
