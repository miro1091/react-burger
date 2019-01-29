import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name, price) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: {
      ingredientPrice: price,
      ingredientName: name
    }
  };
};

export const removeIngredient = (name, price) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: {
      ingredientPrice: price,
      ingredientName: name
    }
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: {
      ingredients
    }
  };
};

export const fetchIngFaild = () => {
  return {
    type: actionTypes.FETCH_ING_FAILD
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngFaild());
      });
  };
};
