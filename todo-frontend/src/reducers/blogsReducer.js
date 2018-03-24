import mapKeys from "lodash/mapKeys";
import { FETCH_NOTES, FETCH_BLOG } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BLOG:
      const blog = action.payload;
      return { ...state, [blog._id]: blog };
    case FETCH_NOTES:
      return { ...state, ...mapKeys(action.payload, "_id") };
    default:
      return state;
  }
}
