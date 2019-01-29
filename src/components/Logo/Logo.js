import React from "react";
import classes from "./Logo.scss";
import logoBurger from "./burger-logo.png";

const logo = props => {
  return (
    <div className={classes.Logo}>
      {/* <img scr={logoBurger} alt="burger logo" /> */}
      <p>Logo</p>
    </div>
  );
};

export default logo;
