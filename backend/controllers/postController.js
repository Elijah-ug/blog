import { query } from "../db/pool"
import { createBlogQuery, readAllBlogsQuery } from "../db/sqlDatabaseQuery"
import { createError } from "./utils/error";
// create blog controller
export const createBlogController = async (rq, res, next) => {
    const { title, tag, body, thumbnail } = req.body();
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
