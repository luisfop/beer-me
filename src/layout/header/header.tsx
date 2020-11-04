import React from "react";

import "./header.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Navbar from "./NavbarDesktop/Navbar";
import NavbarMobile from "./NavbarMobile/navbarMobile";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <h3 className="nav--logo">beer . me</h3>
        <Navbar />
        <NavbarMobile />

      </Toolbar>
    </AppBar>
        
  );
};

export default Header;
