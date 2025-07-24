import {createAsyncThunk} from "@reduxjs/toolkit"
import { blogUrlPath } from "../path/url_path";
export const createBlogThunk = createAsyncThunk(
    "create/createBlogThunk",
    async (blogData, { rejectWithValue }) => {
        try {
            const response = await fetch(blogUrlPath, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogData)
            });
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
