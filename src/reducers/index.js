import {
  SET_USER,
  ADD_CLASS,
  FETCH_CLASSES_START,
  FETCH_CLASSES_FAIL,
  FETCH_CLASSES_SUCCESS,
} from "../actions/index";

let initialState = {};

if (localStorage.getItem("user")) {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  initialState = {
    classes: [],
    user: {
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role,
      id: userInfo.id,
    },
    error: "",
    isLoading: true,
  };
} else {
  initialState = {
    classes: [],
    user: {
      email: "",
      password: "",
      role: "",
      id: "",
    },
    error: "",
    isLoading: true,
  };
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return { ...state, classes: [...state.classes, action.payload] };
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          password: action.payload.password,
          role: action.payload.role,
          id: action.payload.id,
        },
      };
    case FETCH_CLASSES_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case FETCH_CLASSES_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        classes: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
