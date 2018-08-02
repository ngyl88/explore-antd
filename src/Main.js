import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./Config";

const Main = () => {
  return (
    <div className="main">
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.componentToRender}
        />
      ))}
    </div>
  );
};

export default Main;
