import axios from "axios";
import {
  ALL_ITEMS,
  INIT_ITEM_FETCH,
  COMPLETE_ITEM_FETCH,
  UPDATE_ITEM,
  DELETE_ITEM,
  DO_LOGIN,
  DO_SIGNUP
} from "./types";
export const doLogin = obj => async dispatch => {
  const res = await axios.post("/api/user/login", obj);

  dispatch({ type: DO_LOGIN, payload: obj });
};
export const doSignup = obj => async dispatch => {
  const res = await axios.post("/api/user/signup", obj);

  dispatch({ type: DO_SIGNUP, payload: obj });
};
export const fetchAllItems = obj => async dispatch => {
  dispatch({ type: INIT_ITEM_FETCH });
  const res = await axios.get("/api/items/" + localStorage.getItem("todoId"));

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
