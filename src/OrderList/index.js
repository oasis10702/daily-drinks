import React from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";

import OrderCard from "../OrderCard";
import { DRINK } from "../constants";
import "./styles.css";

const OrderList = () => {
  const drinkOrders = useSelector(state => state.drinkOrders);

  const rebderTitle = title => (
    <li className="listTitleItem">
      <h3>{title}</h3>
    </li>
  );

  return (
    <div className="orderList">
      <ul className="listTitle">
        {rebderTitle(DRINK.TABLE_HEAD.NAME)}
        {rebderTitle(DRINK.TABLE_HEAD.PRICE)}
        {rebderTitle(DRINK.TABLE_HEAD.COUNTS)}
        {rebderTitle(DRINK.TABLE_HEAD.NOTES)}
      </ul>
      {drinkOrders.map((drinkOrder, idx) => (
        <OrderCard
          key={shortid.generate()}
          drinkOrder={drinkOrder}
          orderIndex={idx}
        />
      ))}
    </div>
  );
};

export default OrderList;
