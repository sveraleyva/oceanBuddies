import Nav from "../navComponents/Nav";
import NavContainer from "../navComponents/NavContainer";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link to="/">
          <img src="https://user-images.githubusercontent.com/115383177/230939125-cfbbce77-5acf-4624-b207-ae7fd719e4c8.png" alt="Ocean Buddies logo" className="flex flex-wrap ml-4 h-48 w-96 max-sm:w-64" />
        </Link>
      </div>
      <NavContainer />
    </div>
  );
};

export default Header;
