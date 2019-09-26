import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.css";
import {
  deleteDrink,
  editDrink,
  increaseDrinkCount,
  decreaseDrinkCount
} from "../action";
import { ReactComponent as EditSvg } from "../assets/edit.svg";
import { ReactComponent as DeleteSvg } from "../assets/delete.svg";
import { ReactComponent as CheckSvg } from "../assets/check.svg";
import { ReactComponent as IncreaseSvg } from "../assets/increase.svg";
import { ReactComponent as DecreaseSvg } from "../assets/decrease.svg";
import { getTrimString } from "../utils";

const OrderCard = props => {
  const {
    drinkOrder: { name, price, notes, counts },
    orderIndex
  } = props;
  const dispatch = useDispatch();
  const orderData = [
    { id: "name", value: name },
    { id: "price", value: price },
    { id: "counts", value: counts },
    { id: "notes", value: notes }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [editIndex, setEditIndex] = useState(-1);
  const [editVaule, setEditValue] = useState("");

  const verticalCenter = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  };

  const handleDelete = () => {
    dispatch(
      deleteDrink({
        orderIndex
      })
    );
  };

  const handleUpdate = orderId => {
    const updateValue = {
      ...props.drinkOrder,
      [orderId]: getTrimString(editVaule, 50)
    };
    dispatch(editDrink({ updateValue, orderIndex }));
    setEditValue([]);
  };

  const renderEditButton = (idx, orderId) => {
    const edited = editIndex === idx;
    return (
      <div
        style={{
          ...verticalCenter,
          right: 0
        }}
        className="iconButton"
        onClick={() => (edited ? handleUpdate(orderId) : setEditIndex(idx))}
      >
        {edited ? <CheckSvg /> : <EditSvg />}
      </div>
    );
  };

  const renderCountSvg = (pos, icon, action) => (
    <div
      style={{
        ...verticalCenter,
        [pos]: 0
      }}
      onClick={() => {
        dispatch(action({ orderIndex }));
      }}
      className="iconButton"
    >
      {icon}
    </div>
  );

  const renderCardItem = (order, idx) => {
    const hovered = hoveredIndex === idx;
    const edited = editIndex === idx;
    const isCount = order.id === "counts";
    return (
      <li
        key={order.id}
        className="cardItem"
        style={{
          wordWrap: idx === 2 ? "break-word" : "none"
        }}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(-1)}
      >
        {isCount &&
          counts > 0 &&
          renderCountSvg("left", <DecreaseSvg />, decreaseDrinkCount)}
        {edited ? (
          <input
            autoFocus
            onChange={e => setEditValue(e.currentTarget.value)}
            value={editVaule}
          />
        ) : (
          order.value
        )}
        {isCount &&
          renderCountSvg("right", <IncreaseSvg />, increaseDrinkCount)}
        {hovered && !isCount && renderEditButton(idx, order.id)}
      </li>
    );
  };

  return (
    <ul className="orderCard">
      {orderData.map((order, idx) => renderCardItem(order, idx))}
      <div
        style={{
          ...verticalCenter,
          left: -24
        }}
        className="iconButton"
        onClick={handleDelete}
      >
        <DeleteSvg />
      </div>
    </ul>
  );
};

export default OrderCard;
