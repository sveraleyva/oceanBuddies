import classes from "./Nav.module.css";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <div className={classes.headernav}>
      <NavLinks />
    </div>
  );
};

export default Nav;
