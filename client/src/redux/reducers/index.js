import { combineReducers } from "redux";
import auth from "./authReducer";
import token from "./tokenReducer";
import users from "./userReducer";
import faqs from "./faqReducer"

export default combineReducers({
  auth,
  token,
  users,
  faqs,
});
