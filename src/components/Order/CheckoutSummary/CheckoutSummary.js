import React from "react";
import classes from "./CheckoutSummary.scss";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = props => {
  return (
    <div className={classes["checkout-summary"]}>
      <h1>We hope that it tastes well!</h1>
      <div className={classes["burger-wrapper"]}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
