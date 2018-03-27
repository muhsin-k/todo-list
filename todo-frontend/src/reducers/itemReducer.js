import {
  INIT_ITEM_FETCH,
  COMPLETE_ITEM_FETCH,
  ALL_ITEMS
} from "../actions/types";
const initialState = {
  activeItems: null,
  inActiveItems: null,
  allItems: null,
  isFetching: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ALL_ITEMS:
      return { ...state, allItems: action.payload };
    case COMPLETE_ITEM_FETCH:
      return { ...state, isFetching: false };
    case INIT_ITEM_FETCH:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
