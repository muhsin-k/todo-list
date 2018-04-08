import {
  COMPLETE_AUTH,
  INIT_AUTH,
  ERROR_AUTH,
  CHECK_AUTH
} from "../actions/types";
const initialState = {
  isFetching: false,
  errorMessage: "",
  isLogged: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_AUTH:
      return { ...state, isFetching: false, isLogged: true, errorMessage: "" };
    case INIT_AUTH:
      return { ...state, isFetching: true, errorMessage: "" };
    case CHECK_AUTH:
      return { ...state, isFetching: false, isLogged: action.payload };
    case ERROR_AUTH:
      return {
        ...state,
        isFetching: false,

        errorMessage: action.payload
      };
    default:
      return state;
  }
}
