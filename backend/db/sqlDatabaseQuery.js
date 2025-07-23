// Create blog
export const createBlogQuery = `
INSERT INTO blog_list(title, tag, body, thumbnail) VALUES($1, $2, $3, $4,) RETURNING *`;
// Read blogs
export const readAllBlogsQuery = ` SELECT * FROM blog_list`;
export const readSingleBlogQuery = ` SELECT * FROM blog_list WHERE id = $1`;

// Update blog
export const updateBlogQuery = `UPDATE blog_list SET
title = COALESCE($1, title),
tag = COALESCE($2, tag),
body = COALESCE($3, body),
thumbnail = COALESCE($4, thumbnail)
WHERE id = $5 RETURNING *
`;
// delete
export const deleteBlogQuery = `DELETE FROM blog_list WHERE id = $1`;
