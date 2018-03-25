import axios from "axios";
import {
  FETCH_USER,
  FETCH_ACTIVE_ITEMS,
  FETCH_IN_ACTIVE_ITEMS,
  ALL_ITEMS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchAllItems = () => async dispatch => {
  const res = await axios.get("/api/items");

  dispatch({ type: ALL_ITEMS, payload: res.data });
};

export const fetchActiveItems = () => async dispatch => {
  const res = await axios.get("/api/items/active");

  dispatch({ type: FETCH_ACTIVE_ITEMS, payload: res.data });
};
export const fetchInActiveItems = () => async dispatch => {
  const res = await axios.get("/api/items/inactive");

  dispatch({ type: FETCH_IN_ACTIVE_ITEMS, payload: res.data });
};
