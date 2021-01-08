import React from "react";
import { Route, Redirect } from "react-router-dom";

// 1. It copies exactly the functionality of Route.
// 2. It renders a passed in route component if the user is authenticated.
// 3. It redirects to login in the user is not authenticated

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
