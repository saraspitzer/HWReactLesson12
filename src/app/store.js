import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/PostSlice.js";
export const store = configureStore({
      reducer: {
    posts: postsReducer,
  },
})