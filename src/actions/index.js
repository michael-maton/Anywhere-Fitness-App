import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';

export const SET_USER = 'SET_USER';
// export const SET_USER_STORAGE = 'SET_USER_STORAGE';

export const setUser = user => {
    console.log("in actions: ", user);
    return(dispatch) => {
        dispatch({type: SET_USER, payload: user});
    }
}
// export const setUserFromStorage = userID => {
//     console.log("in actions: ", userID);
//     return(dispatch) => {
        // axios.get(`https://fitness-anywhere-app.herokuapp.com/api/users/${userID}`)
        // .then(res => {
        //     console.log(res)
        //     dispatch({type: SET_USER_STORAGE, payload: res});
        // })
        // .catch(err => {
        //     console.log(err);
        // });
//     }
// }

