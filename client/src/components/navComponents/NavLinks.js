import { useLocation, Link } from "react-router-dom";
import { useReducer, useState } from "react";
import { UPDATE_ACTIVE_PAGE } from "../../utils/actions";
// px-5 text-yellow-400 max-medium:p-3
// px-5 max-medium:p-3
import Auth from "../../utils/auth";

const NavLinks = (props) => {
  const location = useLocation();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // console.log(location.pathname === "/about");

  return (
    <ul className="flex flex-row max-medium:flex-col px-3 text-white pt-5  text-lg font-bold items-center">
      <Link to="/about">
        <li
          className={"px-5 max-medium:p-3" + (location.pathname === "/about" ? " text-yellow-400" : "")}
          onClick={() => {
            props.isMobile && props.closeMobileMenu();
          }}
        >
          <a>About</a>
        </li>
      </Link>
      <Link to="/support">
        <li
          className={"px-5 max-medium:p-3" + (location.pathname === "/support" ? " text-yellow-400" : "")}
          onClick={() => {
            props.isMobile && props.closeMobileMenu();
          }}
        >
          <a>Support</a>
        </li>
      </Link>
      <Link to="/shop">
        <li
          className={"px-5 max-medium:p-3" + (location.pathname === "/shop" ? " text-yellow-400" : "")}
          onClick={() => {
            props.isMobile && props.closeMobileMenu();
          }}
        >
          <a>Shop</a>
        </li>
      </Link>
      <Link to="/contact">
        <li
          className={"px-5 max-medium:p-3" + (location.pathname === "/contact" ? " text-yellow-400" : "")}
          onClick={() => {
            props.isMobile && props.closeMobileMenu();
          }}
        >
          <a>Contact</a>
        </li>
      </Link>
      {/* <Link to="/login">
        <li
          className={"px-5 max-medium:p-3" + (location.pathname === "/login" ? " text-yellow-400" : "")}
          
        >
          <a>Login</a>
        </li>
      </Link> */}
      {Auth.loggedIn() ? (
        <>
          <Link
            className={"px-5 max-medium:p-3" + (location.pathname === "/news" ? " text-yellow-400" : "")}
            to="/news"
            onClick={() => {
              props.isMobile && props.closeMobileMenu();
            }}
          >
            News
          </Link>
          <button className={"px-5 max-medium:p-3 bg-blue-500 p-3" + (location.pathname === "/logout" ? " text-yellow-400" : "")} onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            className={"px-5 max-medium:p-3 bg-blue-500 p-3" + (location.pathname === "/login" ? " text-yellow-400" : "")}
            to="/login"
            onClick={() => {
              props.isMobile && props.closeMobileMenu();
            }}
          >
            Login
          </Link>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
