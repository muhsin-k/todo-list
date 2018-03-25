import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  items: itemReducer
});
