import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
    const navBarElems = props.navbar.map(el => <NavItem name={el.name} address={el.address} />);

    return (
        <nav className={classes.navbar}>
            { navBarElems }
        </nav>
    );
};

export default Navbar;
