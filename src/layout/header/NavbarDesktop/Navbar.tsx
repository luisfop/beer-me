import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar--desktop">
    
        <ul className="nav--links">
          <li className="link">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className="link">
          <Link to="/products">Beers</Link>
          </li>
          <li className="link">
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
