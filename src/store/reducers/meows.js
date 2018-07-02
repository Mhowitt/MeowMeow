
import { SET_MEOWS } from "../actionTypes";

const DEFAULT_STATE = [];

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_MEOWS:
      return action.meows;
    default:
      return state;
  }
}