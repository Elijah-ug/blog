import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogUrlPath } from "../path/url_path";

export const deleteBlogThunk = createAsyncThunk(
    "delete/deleteBlogThunk",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(`${blogUrlPath}/${id}`, {
                method: "DELETE",
            })
            if (!response.ok) {
                const errorData = await response.json()
                return rejectWithValue(errorData);
            }
            console.log(id)
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
