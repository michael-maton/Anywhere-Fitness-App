import { axiosWithAuth } from "./../utils/axiosWithAuth";

export const SET_USER = "SET_USER";
export const ADD_CLASS = "ADD_CLASS";
export const FETCH_CLASSES_START = "FETCH_CLASSES_START";
export const FETCH_CLASSES_FAIL = "FETCH_CLASSES_FAIL";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";

export const addClass = (newClass) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`/api/classes`, newClass)
      .then((res) => {
        dispatch({ type: ADD_CLASS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchClasses = () => (dispatch) => {
  dispatch({ type: FETCH_CLASSES_START });
  axiosWithAuth()
    .get(`/api/classes`)
    .then((res) => {
      dispatch({ type: FETCH_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CLASSES_FAIL, payload: err });
    });
};

export const setUser = (user) => {
  console.log("in actions: ", user);
  return (dispatch) => {
    dispatch({ type: SET_USER, payload: user });
  };
};
