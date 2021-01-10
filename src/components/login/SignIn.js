import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../../schema/schema";
import { connect } from "react-redux";
import { setUser } from "../../actions/index";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const initialFormValues = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};
const initialDisabled = true;

function SignIn(props) {
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const history = useHistory();

  const updateForm = (type, value) => {
    yup
      .reach(schema, type)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [type]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [type]: err.errors[0],
        });
      });
    setFormValues({ ...formValues, [type]: value });
  };

  const submitForm = () => {
    checkUser(formValues);
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const checkUser = (loginInfo) => {
    axiosWithAuth()
      .post("/api/users/login", loginInfo)
      .then((res) => {
        props.setIsLoggedIn(true);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        props.setUser(res.data.user);
        setFormValues(initialFormValues);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  //Helper Functions
  const onSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };
  const update = (evt) => {
    const { type, value } = evt.target;
    updateForm(type, value);
  };

  return (
    <div className="sign-in-container" onSubmit={onSubmit}>
      <div className="orange-bar">
        <h4>The World is Your Gym</h4>
        <h4>Welcome</h4>
      </div>
      <form className="login-register-container">
        <div className="input-container">
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={update}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={update}
            />
          </label>
        </div>
        <br />
        <p className="register-button" onClick={handleRegister}>Create Account</p>
        <button className="sign-in-button" disabled={disabled}>Sign In</button>
      </form>
    </div>
  );
}

export default connect(null, { setUser })(SignIn);
