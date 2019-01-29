import React from "react";
import classes from "./BuildControls.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControls = props => (
  <div className={classes.buildControls}>
    <p>
      Current price: <strong>{props.price}</strong>
    </p>
    {controls.map(item => (
      <BuildControl
        added={() => props.ingredietAdded(item.type)}
        removed={() => props.ingredientRemove(item.type)}
        key={item.label}
        label={item.label}
        disabled={props.disabled[item.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      disabled={!props.purchasable}
      className={classes.OrderButton}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
