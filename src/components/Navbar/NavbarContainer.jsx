import { connect } from "react-redux";

import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage,
    };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
