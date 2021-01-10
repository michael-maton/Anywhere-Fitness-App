import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../../schema/schema";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialFormValues = {
  email: "",
  password: "",
  role: null,
};

const initialFormErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

export default function SignUp(props) {
  // const [formValues, setNewformValues] = useState(initialFormValues);
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

  const handleRolePick = (evt) => {
    setFormValues({
      ...formValues,
      role: parseInt(evt.target.value),
    });
  };
  const handleBack = () => {
    setFormValues({
      ...formValues,
      role: "",
    });
  };
  const handleBackToSignIn = () => {
    history.push("/signin");
  };

  const submitForm = () => {
    postNewformValues(formValues);
    history.push("/signin");
  };

  const postNewformValues = (userInfo) => {
    axiosWithAuth()
      .post("/api/users/register", userInfo)
      .then((res) => {
        console.log(res);
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
      <div className="login-register-container">
        {!formValues.role && (
          <div>
            <button className="user-options" value={2} onClick={handleRolePick}>
              Client
            </button>

            <button className="user-options" value={1} onClick={handleRolePick}>
              Instructor
            </button>
            <br/>
            <button className="sign-in-button" onClick={handleBackToSignIn}>
              Sign In
            </button>
          </div>
        )}

        {formValues.role && (
          <form className="form-container">
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
            <button className="submit-button" disabled={disabled}>
              Create Account
            </button>
            <br />
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            <div className="errors">
              <div>{formErrors.email}</div>
              <div>{formErrors.password}</div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
