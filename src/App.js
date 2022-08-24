import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
                        render={() => <Profile store={props.store} />}
                    />
                    <Route
                        path="/messages"
                        render={() => (
                            <DialogsContainer
                                store={props.store}
                                // state={props.state.messagePage}
                                // dispatch={props.dispatch}
                                // newMsgText={props.state.messagePage.newMsgText}
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
