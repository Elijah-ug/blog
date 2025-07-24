import { configureStore } from "@reduxjs/toolkit";
import getBlogSliceReducer from "../features/data/getBlogsSlice";
export const store = configureStore({
    reducer: {
    "blogs": getBlogSliceReducer,
}
})
