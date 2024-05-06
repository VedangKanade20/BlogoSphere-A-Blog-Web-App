import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { blogDetailsReducer, blogListReducer } from "./reducers/blogReducer";
import { userLoginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  blogList: blogListReducer,
  blogDetail: blogDetailsReducer,
  userLogin: userLoginReducer,
});

// saved user info in local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
