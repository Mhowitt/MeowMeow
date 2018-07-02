import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { SET_MEOWS } from "../actionTypes";

export function getMeows(type, data) {
  return async dispatch => {
    try {
      let meows = await apiCall("get", `api/posts`, {});
      dispatch(setMeows(meows.data));
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err);
    }
  };
}

export function addMeows(type, data) {
  return async dispatch => {
    try {
      let newMeows = await apiCall("post", `api/posts`, data);
      // dispatch(setMeows(meows));
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err);
    }
  };
}

export function setMeows(meows) {
  return {
    type: SET_MEOWS,
    meows
  };
}