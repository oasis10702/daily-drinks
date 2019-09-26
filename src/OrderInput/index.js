import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { DRINK } from "../constants";
import { getTrimString } from "../utils";
import { addDrink } from "../action";
import "./styles.css";

const OrderInput = () => {
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  const handleChange = e => {
    const { value, name: inputLabel } = e.currentTarget;

    switch (inputLabel) {
      case DRINK.TABLE_HEAD.NAME:
        setItemName(value);
        break;
      case DRINK.TABLE_HEAD.PRICE:
        setPrice(value);
        break;
      case DRINK.TABLE_HEAD.NOTES:
        setNotes(value);
        break;
      default:
        break;
    }
  };

  const handleSummit = () => {
    dispatch(
      addDrink({
        name: getTrimString(itemName, 50),
        price: getTrimString(price, 50),
        notes: getTrimString(notes, 50)
      })
    );

    setItemName("");
    setPrice("");
    setNotes("");
  };

  const renderInput = (label, value) => (
    <div className="orderInput">
      <label>{label} </label>
      <input type="text" name={label} onChange={handleChange} value={value} />
    </div>
  );

  return (
    <>
      <form>
        {renderInput(DRINK.TABLE_HEAD.NAME, itemName)}
        {renderInput(DRINK.TABLE_HEAD.PRICE, price)}
        {renderInput(DRINK.TABLE_HEAD.NOTES, notes)}
      </form>
      <button className="summitButton" onClick={handleSummit}>
        送出
      </button>
    </>
  );
};

export default OrderInput;
