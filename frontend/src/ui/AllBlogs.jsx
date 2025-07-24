import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from '../features/data/getBlogsThunk';
import { deleteBlogThunk } from '../features/delete/deleteBlogThunk';
export default function AllBlogs() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [])
  return (
    <div className="mx-10 flex justify-center items-center">
      <div className="">
        <h2 className="text-center my-4 font-bold text-xl ">Blog Posts</h2>
        {loading && (<p className="text-center text-xl">Loading...</p>)}
          {error && (<p className="text-center text-xl">{error.message}</p>)}

        <div className="grid grid-cols-3 gap-6 ">
          {(data?.map((blog, index) =>
              <div key={index}
                 className="w-full max-w-md bg-gray-600 shadow-md rounded-lg p-4 text-center transform transition-transform duration-300 ease-in-out hover:scale-105" >
              <p className="text-xl font-bold mb-2 py-2">{blog.title}</p>
              <p className="text-sm  mb-1">{blog.tag}</p>
              <img src={blog.thumbnail} alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="py-1"> {blog.body}</p>
              <button onClick={() => dispatch(deleteBlogThunk(blog.id))}
                className="border-2 cursor-pointer border-gray-200 rounded px-4 py-1 mb-2 mt-2"
              >Delete blog</button>
            </div>) )
          }
        </div>
      </div>
    </div>
  )
}
