import axios from "axios";
import {
  INIT_AUTH,
  ERROR_AUTH,
  CHECK_AUTH,
  COMPLETE_AUTH,
  ALL_ITEMS,
  INIT_ITEM_FETCH,
  COMPLETE_ITEM_FETCH,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from "./types";

export const initLogin = obj => async dispatch => {
  dispatch({ type: INIT_AUTH });
};
export const completeLogin = obj => async dispatch => {
  dispatch({ type: COMPLETE_AUTH });
};
export const errorLogin = obj => async dispatch => {
  dispatch({ type: ERROR_AUTH, payload: obj.errorMessage });
};
export const checkLogin = obj => async dispatch => {
  if (localStorage.getItem("todoId")) {
    dispatch({ type: CHECK_AUTH, payload: true });
  } else {
    dispatch({ type: CHECK_AUTH, payload: false });
  }
};
export const fetchAllItems = obj => async dispatch => {
  dispatch({ type: INIT_ITEM_FETCH });
  const res = await axios.get("/api/items/" + localStorage.getItem("todoId"));

  dispatch({ type: ALL_ITEMS, payload: res.data });
  dispatch({ type: COMPLETE_ITEM_FETCH });
};
export const addItem = obj => async dispatch => {
  const res = await axios.post("/api/item", obj);

  dispatch({ type: ADD_ITEM, payload: res.data });
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
