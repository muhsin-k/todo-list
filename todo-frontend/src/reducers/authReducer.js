import { DO_LOGIN, DO_SIGNUP } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case DO_LOGIN:
      return action.payload || false;
    case DO_SIGNUP:
      return action.payload || false;
    default:
      return state;
  }
}
