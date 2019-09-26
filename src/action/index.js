import {
  ADD_DRINK,
  DELETE_DRINK,
  EDIT_DRINK,
  INCREASE_DRINK_COUNT,
  DECREASE_DRINK_COUNT
} from "../constants/actionTypes";

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

export const increaseDrinkCount = payload => ({
  type: INCREASE_DRINK_COUNT,
  payload
});

export const decreaseDrinkCount = payload => ({
  type: DECREASE_DRINK_COUNT,
  payload
});
