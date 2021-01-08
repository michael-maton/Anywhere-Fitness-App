import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// It redirects to the landing page if in the user is not an Instructor

const InstructorOnly = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token") && user.role === 1) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: {
      email: state.user.email,
      password: state.user.password,
      role: state.user.role,
      id: state.user.id,
    },
  };
};

export default connect(mapStateToProps)(InstructorOnly);
