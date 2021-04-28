import React from "react";
import { AppBar, Toolbar, Typography, Link, Badge } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { getCounter } from "../../redux/selectors";

const Navigation = () => {
  const counter = useSelector(getCounter);

  return (
    <AppBar position="static" className="navigationBar">
      <Toolbar variant="dense">
        <img
          src="./online-shop-logo-design-logo-design-ideas-online-shopping-logo-png-450_387 1.png"
          alt="logo"
          className="logo"
        />
        <Typography variant="h6">
          <Link
            href="/"
            className="navigationHeader"
            style={{ textDecoration: "none" }}
          >
            eSHOP.com
          </Link>
        </Typography>
        <div className="navButtons">
          <NavLink exact to="/" className="navigationItem">
            Products
          </NavLink>
          <NavLink to="/orders" className="navigationItem">
            Orders
          </NavLink>
          <NavLink to="/addProduct" className="navigationItem">
            Add Product
          </NavLink>
          <Badge badgeContent={counter} color="secondary">
            <ShoppingCart color="secondary" />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
