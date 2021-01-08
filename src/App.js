import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/components/Home.js";
import SignIn from "./components/login/SignIn";
import Browse from "../src/components/browse";
import "./App.css";
import logo from "../src/images/logo-cropped2.png";
import fitnesspic from "../src/images/about-section-pic-1.png";
import fitnesspic2 from "../src/images/why-section-pic.png";
import homepic from "../src/images/fitnessfashion1.jpg";
import Register from "./components/registration/Register";
import CreateClass from "./components/CreateClass/CreateClass";

import PrivateRoute from "./utils/PrivateRoute";
import InstructorOnly from "./utils/InstructorOnly";
import { connect } from "react-redux";

function App({ user }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("You were successfully logged out!");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="app-header">
          <div className="logo-container">
            <img id="logo-img" src={logo} alt="af"></img>
            <h3>
              <span className="word1">Anywhere</span>
              <span className="word2">|</span>
              <span className="word3"> Fitness</span>
            </h3>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/help">Help</Link>
            {!isLoggedIn && <Link to="/signin">Sign In</Link>}
            {/* {!isLoggedIn && <Link to="/register">Register</Link>} */}
            {isLoggedIn && user.role === 1 && (
              <Link to="/new-class">New Class</Link>
            )}
            {isLoggedIn && (
              <Link to="/signin" onClick={() => userLogout()}>
                Log Out
              </Link>
            )}
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home
              logo={logo}
              homepic={homepic}
              pic={fitnesspic}
              pic2={fitnesspic2}
            />
          </Route>
          <Route path="/register" component={Register} />
          <Route
            path="/signin"
            render={(props) => {
              return <SignIn {...props} setIsLoggedIn={setIsLoggedIn} />;
            }}
          />
          <PrivateRoute path="/browse" component={Browse} />
          <InstructorOnly user={user} path="/new-class" component={CreateClass} />
        </Switch>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    user: {
      password: state.user.password,
      email: state.user.email,
      role: state.user.role,
      id: state.user.id,
    },
  };
};
export default connect(mapStateToProps, null)(App);
