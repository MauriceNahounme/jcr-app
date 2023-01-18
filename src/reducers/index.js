import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import saulsReducer from "./sauls.reducer";

export default combineReducers({
  userReducer,
  saulsReducer,
});
