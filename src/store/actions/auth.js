import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { SET_CURRENT_USER } from "../actionTypes";
/**
 * Sign up or Sign in a user
 * @param {string} type signin or signup user
 * @param {object} userData JSON object from form
 */
export function authUser(type, data) {
  return async dispatch => {
    try {
      let newUser = await apiCall("post", `api/users`, data);
      let authData = await apiCall("post", `api/user-auth`, data);
      // once we have logged in, set a token in localStorage
      localStorage.setItem("handle", authData.handle);
      // set a currentUser in Redux
      dispatch(setCurrentUser({ handle: newUser.handle }));
      // remove any error messages
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function loginUser(type, data) {
  return async dispatch => {
    try {
      let authData = await apiCall("post", `api/user-auth`, data);
      console.log(authData)
      // once we have logged in, set a token in localStorage
      localStorage.setItem("handle", authData.handle);
      // set a currentUser in Redux
      dispatch(setCurrentUser({ handle: authData.handle }));
      // remove any error messages
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function logout() {
  // we need to make this a thunk so that we can dispatch setCurrentUser
  return dispatch => {
    // clear the token from localStorage
    localStorage.clear();
    // set the currentUser to be {} in Redux
    dispatch(setCurrentUser({}));
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}