import { query } from "../db/pool"
import {
    createBlogQuery, deleteBlogQuery, readAllBlogsQuery, readSingleBlogQuery, updateBlogQuery
} from "../db/sqlDatabaseQuery";
import { createError } from "../utils/error";
// create blog controller
export const createBlogController = async (rq, res, next) => {
    const { title, tag, body, thumbnail } = req.body;
    try {
        if (!title || !tag || !body || !thumbnail) {
            return res.status(400).json("Missing Fields!");
        }
        const data = await query(createBlogQuery, [title, tag, body, thumbnail]);
        res.status(200).json(data.rows[0]);
        console.log(data);
    } catch (error) {
        console.log(error);
        next(createError(400, "Failed to create a blog!"))
    }
}
// Read
export const readAllBlogsController = async (req, res, next) => {
    try {
        const { rows } = await query(readAllBlogsQuery);
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        next(createError(400, "Failed to fetch blogs"));
    }
}
//
// Read
export const readSingleBlogController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await query(readSingleBlogQuery, [id]);
        if (!data.rows.length) {
            return next(createError(400, "Blog not found"));
        }
        res.status(200).json(data.rows);
    } catch (error) {
        console.log(error);
        next(createError(400, "Failed to fetch blogs"));
    }
}

// update
export const updateSingleBlogController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, tag, body, thumbnail } = req.body;
        const data = await query(updateBlogQuery, [title, tag, body, thumbnail, id]);
        if (!data.rowCount) {
            return next(createError(400, "Blog not found"));
        }
        console.log(data);
        res.status(200).json(data.rows);
    } catch (error) {
        console.log(error);
        next(createError(400, "Failed to Update blog"));
    }
}

export const deleteBlogController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await query(deleteBlogQuery, [id]);
        if (!id) {
            return next(createError(400, "Blog not found"));
        }
        console.log(data);
        res.status(200).json({message: "Blog deleted"});
    } catch (error) {
        console.log(error);
        next(createError(500, "Failed to Delete blog"));
    }
}
//
