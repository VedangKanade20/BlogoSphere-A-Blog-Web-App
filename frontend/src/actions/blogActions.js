import axios from "axios";
import {
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_SUCCESS,
  BLOG_REVIEW_CREATE_FAIL,
  BLOG_REVIEW_CREATE_REQUEST,
  BLOG_REVIEW_CREATE_SUCCESS,
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

export const listBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/blogs/${id}`);

    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createBlogReview =
  (blogId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: BLOG_REVIEW_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      await axios.post(`/api/blogs/${blogId}/reviews`, review, config);

      dispatch({ type: BLOG_REVIEW_CREATE_SUCCESS });
    } catch (err) {
      dispatch({
        type: BLOG_REVIEW_CREATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
