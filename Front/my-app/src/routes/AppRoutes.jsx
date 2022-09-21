import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./CompanyRoutes";

const AppRoutes = () => {
  const isAuthenticated = true;

  return (
    !isAuthenticated ? (
      <div>
        <Switch>
          {PublicRoutes.map((route) => {
            return (
              <Route
                exact
                key={route.name}
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Redirect to={'/login'} />
        </Switch>
      </div>
    ) : (
      <div>
        <Switch>
          {PrivateRoutes.map((route) => {
            return (
              <Route
                exact
                key={route.name}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    )
  );
};

export default AppRoutes;
