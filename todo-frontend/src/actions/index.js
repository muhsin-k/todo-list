import axios from "axios";
import {
  FETCH_USER,
  FETCH_ACTIVE_ITEMS,
  FETCH_IN_ACTIVE_ITEMS,
  ALL_ITEMS,
  INIT_ITEM_FETCH,
  COMPLETE_ITEM_FETCH,
  UPDATE_ITEM,
  DELETE_ITEM
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchAllItems = () => async dispatch => {
  dispatch({ type: INIT_ITEM_FETCH });
  const res = await axios.get("/api/items");

  dispatch({ type: ALL_ITEMS, payload: res.data });
  dispatch({ type: COMPLETE_ITEM_FETCH });
};
export const addItem = obj => async dispatch => {
  const res = await axios.post("/api/item", obj);

  dispatch({ type: UPDATE_ITEM, payload: res.data });
  dispatch({ type: INIT_ITEM_FETCH });
  const res2 = await axios.get("/api/items");

  dispatch({ type: ALL_ITEMS, payload: res2.data });
  dispatch({ type: COMPLETE_ITEM_FETCH });
};
export const updateItem = obj => async dispatch => {
  const res = await axios.put("/api/item", obj);

  dispatch({ type: UPDATE_ITEM, payload: res.data });
  dispatch({ type: INIT_ITEM_FETCH });
  const res2 = await axios.get("/api/items");

  dispatch({ type: ALL_ITEMS, payload: res2.data });
  dispatch({ type: COMPLETE_ITEM_FETCH });
};
export const deleteItem = obj => async dispatch => {
  const res = await axios.post("/api/deleteitem", obj);

  dispatch({ type: DELETE_ITEM, payload: res.data });
  dispatch({ type: INIT_ITEM_FETCH });
  const res2 = await axios.get("/api/items");

  dispatch({ type: ALL_ITEMS, payload: res2.data });
  dispatch({ type: COMPLETE_ITEM_FETCH });
};

export const fetchActiveItems = () => async dispatch => {
  const res = await axios.get("/api/items/active");

  dispatch({ type: FETCH_ACTIVE_ITEMS, payload: res.data });
};
export const fetchInActiveItems = () => async dispatch => {
  const res = await axios.get("/api/items/inactive");

  dispatch({ type: FETCH_IN_ACTIVE_ITEMS, payload: res.data });
};
