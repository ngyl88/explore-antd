import React from "react";
import ListWithIconText from "./Components/ListWithIconText";

export const routes = [
  {
    path: "/list",
    exact: true,
    name: "List With IconText",
    componentToRender: () => <ListWithIconText />
  },
  {
    path: "/",
    exact: true,
    name: "Home",
    componentToRender: () => <div>Home</div>
  },
  {
    path: "/locations",
    exact: true,
    name: "Locations",
    componentToRender: () => <div>Locations</div>
  },
  {
    path: "/account",
    exact: true,
    name: "Account",
    componentToRender: () => <div>Account</div>
  }
];
