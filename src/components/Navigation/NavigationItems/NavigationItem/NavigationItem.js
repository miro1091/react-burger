import React from "react";
import classes from "./NavigationItem.scss";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
  return (
    <li className={classes.navigationItem}>
      <NavLink
        exact={props.exact}
        activeClassName={classes["active"]}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
