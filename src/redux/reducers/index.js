import { combineReducers } from "redux";
import { commentsReducer } from "./comments";
import { postsReducer } from "./posts";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
