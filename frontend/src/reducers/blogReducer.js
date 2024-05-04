import {
  BLOG_LIST_FAIL,
  BLOG_LIST_SUCCESS,
  BlOG_LIST_REQUEST,
} from "../constants/blogConstants";

export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BlOG_LIST_REQUEST:
      return { loading: true, blogs: [] };
    case BLOG_LIST_SUCCESS:
      return { loading: false, blogs: action.payload };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
