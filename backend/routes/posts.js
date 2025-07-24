import express from "express";
import {
    createBlogController, deleteBlogController, readAllBlogsController, readSingleBlogController, updateSingleBlogController
} from "../controllers/postController.js";
const router = express.Router();

router.get("/", readAllBlogsController);
router.get("/:id", readSingleBlogController);
router.post("/", createBlogController);
router.put("/:id", updateSingleBlogController);
router.delete("/:id", deleteBlogController);
export default router
