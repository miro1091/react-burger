import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.scss";

const navigationItems = () => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" exact>
        Burger Builer
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/auth">Authentication</NavigationItem>
    </ul>
  );
};

export default navigationItems;
