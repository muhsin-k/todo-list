import axios from "axios";
import {
  FETCH_USER,
  ALL_ITEMS,
  INIT_ITEM_FETCH,
  COMPLETE_ITEM_FETCH,
  UPDATE_ITEM,
  DELETE_ITEM
} from "./types";
export const fetchUser = obj => async dispatch => {
  console.log("obj", obj);
  const res = await axios.post("/api/user/login", obj);

  dispatch({ type: FETCH_USER, payload: obj });
};
export const fetchAllItems = obj => async dispatch => {
  dispatch({ type: INIT_ITEM_FETCH });
  const res = await axios.get("/api/items/5ab63840ab274743e96238d3");

  dispatch({ type: ALL_ITEMS, payload: res.data });
  dispatch({ type: COMPLETE_ITEM_FETCH });
};
export const addItem = obj => async dispatch => {
  const res = await axios.post("/api/item", obj);

  dispatch({ type: UPDATE_ITEM, payload: res.data });
  dispatch(fetchAllItems());
};
export const updateItem = obj => async dispatch => {
  const res = await axios.put("/api/item", obj);

  dispatch({ type: UPDATE_ITEM, payload: res.data });
  dispatch(fetchAllItems());
};
export const deleteItem = obj => async dispatch => {
  const res = await axios.post("/api/deleteitem", obj);

  dispatch({ type: DELETE_ITEM, payload: res.data });
  dispatch(fetchAllItems());
};
