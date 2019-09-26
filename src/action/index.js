import { ADD_DRINK, DELETE_DRINK, EDIT_DRINK } from "../constants/actionTypes";

export const addDrink = payload => ({
  type: ADD_DRINK,
  payload
});

export const deleteDrink = payload => ({
  type: DELETE_DRINK,
  payload
});

export const editDrink = payload => ({
  type: EDIT_DRINK,
  payload
});
