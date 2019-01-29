import React from "react";
import classes from "./Order.scss";

const Order = props => {
  const ingredients = [];

  for (let ingName in props.ingredients) {
    ingredients.push({ name: ingName, amount: props.ingredients[ingName] });
  }

  const ingredientOutput = ingredients.map(el => {
    return (
      <span key={el.name}>
        {el.name}:{el.amount}
      </span>
    );
  });

  return (
    <div className={classes["order"]}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Total price: USD {Number.parseFloat(props.price).toFixed(2)}</p>
    </div>
  );
};

export default Order;
