
import { SET_MEOWS, ADD_MEOW } from "../actionTypes";

const DEFAULT_STATE = [];

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_MEOWS:
      return action.meows;
    case ADD_MEOW:
      return [action.meows, ...state]
    default:
      return state;
  }
}