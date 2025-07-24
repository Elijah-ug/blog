import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlogThunk } from "../features/create/createBlogThunk";

export default function CreateBlog() {
  const [blogData, setBlogData] = useState({ title: "", tag: "", body: "", thumbnail: "" });
  const [mode, setMode] = useState("Add");

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setBlogData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createBlogThunk(blogData));
  }

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-500 shadow-md rounded-xl p-8">
        <h2 className="text-center text-2xl font-semibold mb-6">Create A Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div className="text-center">

            <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
            <input value={blogData.title} onChange={handleChange} name="title"
              id="title" type="text" className="border p-2 rounded w-2/3 mx-auto block"
              placeholder="Enter blog title"
            />

            <label htmlFor="title" className="block text-lg font-medium mb-2">Tag</label>
            <input value={blogData.tag} onChange={handleChange} name="tag"
              id="tag" type="text" className="border p-2 rounded w-2/3 mx-auto block"
              placeholder="Enter blog title"
            />

            <label htmlFor="title" className="block text-lg font-medium mb-2">Description</label>
            <textarea value={blogData.body} onChange={handleChange}
              name="body" id="body" className="border p-2 rounded w-2/3 mx-auto block"
              placeholder="Enter blog title"></textarea>

            <label htmlFor="title" className="block text-lg font-medium mb-2">Thumbnail</label>
            <input value={blogData.thumbnail} onChange={handleChange} name="thumbnail"
              id="thumbnail" type="text" className="border p-2 rounded w-2/3 mx-auto block"
              placeholder="Enter blog title"
            />
            <button className="border-2 cursor-pointer border-gray-200 rounded px-4 py-2 mb-2 mt-2"
              type="submit">Add A blog</button>
          </div>
        </form>
      </div>
    </div>
  );
}
