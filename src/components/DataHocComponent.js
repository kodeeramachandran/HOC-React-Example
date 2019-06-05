// App.js

import React from "react";
import StockList from "./StockList";
import UserList from "./UserList";
import Hoc from "./HOC";
import { Hoc2 } from "./HOC2";
import { withSearch } from "./WithSearch";
import { Location } from "./Location";
import Css from "./style";

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
const empData = {
  data: [
    {
      name: "Ojo",
      zone: "Lagos State",
      region: "South West"
    },
    {
      name: "Ahiazu Mbaise",
      zone: "Imo State",
      region: "South East"
    },
    {
      name: "Akoko-Edo",
      zone: "Edo State",
      region: "South South"
    },
    {
      name: "Anka",
      zone: "Zamfara State",
      region: "North West"
    },
    {
      name: "Akwanga",
      zone: "Nasarawa State",
      region: "North Central"
    }
  ]
};

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UserList, UsersData);

const Username = props => <div>{props.children}</div>;
const UpperCaseUsername = Hoc2(Username);

const EmployeWithSearch = withSearch(Location);

function DataHocComponets() {
  return (
    <Css>
    <div>
      <div className="example">
        <h2>Example 1</h2>
        <Users />
        <Stocks />
      </div>
      <div className="example">
        <h2> Example 2</h2>
        <UpperCaseUsername>Koteeswaran Ramachandran</UpperCaseUsername>
      </div>
      <div className="example">
        <h2> Example 3</h2>
        <EmployeWithSearch {...empData} />
      </div>
      </div>
    </Css>
  );
}

export default DataHocComponets;
