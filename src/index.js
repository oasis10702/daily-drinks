import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import OrderList from "./OrderList";
import OrderInput from "./OrderInput";
import "./styles.css";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Daily Drinks</h1>
        <h2>請填寫你要的品項</h2>
        <OrderInput />
        <OrderList />
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
