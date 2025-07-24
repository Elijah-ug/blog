import { createSlice } from "@reduxjs/toolkit"
import { fetchAllBlogs } from "./getBlogsThunk"
import { deleteBlogThunk } from "../delete/deleteBlogThunk"

const initialState = {
    loading: false,
    data: [],
    error: null,
}
const getBlogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        // remove the deleted id to update state
            .addCase(deleteBlogThunk.fulfilled, (state, action) => {
                state.data = state.data.filter((blog) => blog.id !== action.payload);
        })
    }
})
export default getBlogSlice.reducer;
