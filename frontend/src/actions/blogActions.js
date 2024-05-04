import axios from "axios";
import {
  BLOG_LIST_FAIL,
  BLOG_LIST_SUCCESS,
  BlOG_LIST_REQUEST,
} from "../constants/blogConstants";

export const listBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BlOG_LIST_REQUEST });

    const { data } = await axios.get("/api/blogs");

    dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
