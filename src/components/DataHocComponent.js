// App.js

import React from "react";
import StockList from "./StockList";
import UserList from "./UserList";
import Hoc from "./HOC";

const StocksData = [
  {
    id: 1,
    name: "TCS"
  },
  {
    id: 2,
    name: "Infosys"
  },
  {
    id: 3,
    name: "Reliance"
  }
];
const UsersData = [
  {
    id: 1,
    name: "Krunal"
  },
  {
    id: 2,
    name: "Ankit"
  },
  {
    id: 3,
    name: "Rushabh"
  }
];

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UserList, UsersData);

function DataHocComponets() {
    return (
      <div>
        <Users />
        <Stocks />
      </div>
    );
}

export default DataHocComponets;
