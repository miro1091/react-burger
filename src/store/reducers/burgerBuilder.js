import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 0,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] + 1
        },
        totalPrice: state.totalPrice + action.payload.ingredientPrice
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] - 1
        },
        totalPrice: state.totalPrice - action.payload.ingredientPrice
      };

    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        totalPrice: 0,
        error: false
      };

    case actionTypes.FETCH_ING_FAILD:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
