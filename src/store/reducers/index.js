
import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import meows from "./meows";

const rootReducer = combineReducers({
  currentUser,
  meows,
  errors
});

export default rootReducer;