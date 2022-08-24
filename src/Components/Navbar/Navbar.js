import React, { useState } from "react";
import "./Navbar.css";
import "../Brand/Brand";
import Brand from "../Brand/Brand";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const NavbarLinks = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#Menu">Menu</a>
    </p>
    <p>
      <a href="#About">About</a>
    </p>
    <p>
      <a href="#Services">Services</a>
    </p>
    <p>
      <a href="#Contacts">Contacts</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-navbar-brand">
        <Brand className="navbar-nav-brand" />
      </div>
      <div className="navbar-links">
        <NavbarLinks />
      </div>
      <div className="navbar-sign">
        <button type="button">ORDER NOW</button>
        <div className="navbar-menu">
          {toggleMenu ? (
            <CgClose
              color="#fff"
              size={25}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <CgMenu
              color="#fff"
              size={25}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-toggle-menu scale-up-center">
              <div className="navbar-toggle-menu-links">
                <NavbarLinks />
                <div className="navbar-toggle-menu-links-sign">
                  <button type="button">ORDER NOW</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
