import { combineReducers } from "redux";
import detailReducer from "./detailReducer.js";
import postsReducer from "./postsReducer.js";

const rootReducers = combineReducers({
    detail: detailReducer,
    posts: postsReducer
})

export default rootReducers;