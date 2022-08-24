import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
    const navBarItem = props.state.navBarData.map((el, i) => (
        <NavItem key={i} name={el.name} address={el.address} />
    ));

    return <nav className={classes.navbar}>{navBarItem}</nav>;
};

export default Navbar;
