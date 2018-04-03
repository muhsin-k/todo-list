import { FETCH_USER, DO_LOGIN, DO_SIGNUP } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(action);
      return action.payload || false;
    case DO_LOGIN:
      return action.payload || false;
    case DO_SIGNUP:
      return action.payload || false;
    default:
      return state;
  }
}
