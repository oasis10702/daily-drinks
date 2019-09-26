import {
  ADD_DRINK,
  DELETE_DRINK,
  EDIT_DRINK,
  INCREASE_DRINK_COUNT,
  DECREASE_DRINK_COUNT
} from "../constants/actionTypes";
import cloneDeep from "lodash/cloneDeep";

/**
 * drinkOrder includes:
 * name => drink name
 * price => drink price
 * counts => drink counts
 * notes => optional text
 */
const initialState = [
  { name: "紅茶拿鐵", price: "50", counts: 1, notes: "去冰半糖" }
];

const drinkOrders = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRINK:
      return [...state, { ...action.payload, counts: 1 }];
    case DELETE_DRINK: {
      const { orderIndex } = action.payload;
      const stateTmp = cloneDeep(state);
      stateTmp.splice(orderIndex, 1);
      return stateTmp;
    }
    case EDIT_DRINK: {
      const { orderIndex, updateValue } = action.payload;
      const stateTmp = cloneDeep(state);
      stateTmp[orderIndex] = updateValue;
      return stateTmp;
    }
    case INCREASE_DRINK_COUNT: {
      const { orderIndex } = action.payload;
      const stateTmp = cloneDeep(state);
      stateTmp[orderIndex].counts += 1;
      return stateTmp;
    }
    case DECREASE_DRINK_COUNT: {
      const { orderIndex } = action.payload;
      const stateTmp = cloneDeep(state);
      stateTmp[orderIndex].counts += -1;
      return stateTmp;
    }
    default:
      return state;
  }
};

export default drinkOrders;
