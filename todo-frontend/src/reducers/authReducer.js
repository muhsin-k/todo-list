import { COMPLETE_AUTH, INIT_AUTH, ERROR_AUTH } from "../actions/types";
const initialState = {
  isFetching: false,
  errorMessage: "",
  isLogged: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_AUTH:
      return { ...state, isFetching: false, isLogged: true };
    case INIT_AUTH:
      return { ...state, isFetching: true };
    case ERROR_AUTH:
      return {
        ...state,
        isFetching: true,

        errorMessage: action.payload
      };
    default:
      return state;
  }
}
