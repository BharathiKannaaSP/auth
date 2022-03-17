import React, { useState } from "react";

import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import gericht from "../assets/images/gericht.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthState } from "../Context";
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const { user } = AuthState();
  const { setAlert } = AuthState();

  const logout = () => {
    signOut(auth);
    setAlert({
      open: true,
      message: "You have been logged out",
      severity: "success",
    });
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">
          Book Table
        </a>
        <div />
        <button onClick={logout} className="custom__button">
          LOGOUT
        </button>
        <span
          className="username"
          style={{ margin: "2px", fontSize: "15px", color: "white" }}
        >
          {user.email}
        </span>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          cursor="pointer"
          fontSize={25}
          onClick={() => settoggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom ">
            <MdOutlineRestaurantMenu
              fontSize={25}
              className="overlay__close"
              onClick={() => settoggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
              <li href="/" className="p__opensans">
                <a href="#book">Book Table</a>
              </li>
              <div />
              <button onClick={logout} className="custom__button">
                LOGOUT
              </button>
              <span
                className="p__opensans"
                style={{ margin: "2px", color: "white" }}
              >
                {user.email}
              </span>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
