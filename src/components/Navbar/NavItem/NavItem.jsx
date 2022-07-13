import { NavLink } from "react-router-dom";
import classes from "./../Navbar.module.css";

const NavItem = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <NavLink to={props.address} activeClassName={classes.activeLink}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    );
};

export default NavItem;