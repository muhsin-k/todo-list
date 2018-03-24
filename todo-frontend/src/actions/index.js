import axios from "axios";
import { FETCH_USER, FETCH_NOTES, FETCH_BLOG } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBlog = (values, file, history) => async dispatch => {
  const res = await axios.post("/api/blogs", {
    ...values
  });

  history.push("/blogs");
  dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const fetchNotes = () => async dispatch => {
  const res = await axios.get("/api/items");

  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};
