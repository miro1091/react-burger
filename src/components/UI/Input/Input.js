import React from "react";
import classes from "./Input.scss";

const Input = props => {
  let inputElement = null;
  let inputClasses = [classes["input-element"]];

  if (props.invalid && props.shouldValidate) {
    inputClasses.push(classes["invalid"]);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.elementValue}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(el => {
            return (
              <option key={el.value} value={el.value}>
                {el.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes["input-element"]}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes["input"]}>
      <label className={classes["label"]}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
