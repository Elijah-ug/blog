import {createAsyncThunk} from "@reduxjs/toolkit"
import { blogUrlPath } from "../path/url_path";
export const fetchAllBlogs = createAsyncThunk(
    "blogs/fetchAllBlogs",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(blogUrlPath);
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message || "Network error");
        }
    }
)
