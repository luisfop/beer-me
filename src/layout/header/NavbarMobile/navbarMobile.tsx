import React, { useState } from "react";

import "./navbarMobile.css";

import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';


const NavbarMobile = () => {
  const [drawerHandler, setDrawerHandler] = useState<boolean>(false);

  const menuHandler = (): boolean => {
    setDrawerHandler(!drawerHandler);

    return drawerHandler;
  };

  return (
    <div className="mobile-burger">
      <IconButton
        edge="end"
        aria-label="menu"
      >
        <MenuIcon onClick={menuHandler} />

        <SwipeableDrawer
          className="drawer"
          anchor="top"
          onOpen={() => setDrawerHandler(true)}
          onClose={() => setDrawerHandler(false)}
          open={drawerHandler}
        >
          <List className="links-list">
            <ListItem className="item">
              <ListItemText className="link-mobile">
                <Link to="/">Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem className="item">
              <ListItemText className="link-mobile">
              <Link to="/products">Beers</Link>
              </ListItemText>
            </ListItem>
            <ListItem className="item">
              <ListItemText className="link-mobile">
              <Link to="/contact">Contact</Link>
              </ListItemText>
            </ListItem>
            
          </List>

        </SwipeableDrawer>
      </IconButton>
    </div>
  );
};

export default NavbarMobile;
