import NavLinks from "./NavLinks";
import classes from "./Nav.module.css";
import { SlMenu } from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <SlMenu className={classes.hamburger} size="45px" color="rgb(250 204 21)" onClick={() => setOpen(!open)} />;
  const closeIcon = <SlClose className={classes.hamburger} size="45px" color="rgb(250 204 21)" onClick={() => setOpen(!open)} />;

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.mobileNav}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
