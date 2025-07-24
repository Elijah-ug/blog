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
    <div className="mx-10">
      <div className="mx-10">
        <h2 className="text-center my-2 font-bold text-xl text-gray-200">Blog Posts</h2>
        {loading && (<p className="text-center text-xl">Loading...</p>)}
          {error && (<p className="text-center text-xl">{error.message}</p>)} :

        <div className="grid grid-cols-2 gap-6 ">
          {(data?.map((blog, index) =>
              <div key={index}
                 className="bg-gray-500 text-gray-200 text-center py-4 rounded" >
              <p>{blog.title}</p>
              <p>{blog.tag}</p>
              <p>{blog.body}</p>
              <p>{blog.thumbnail}</p>
              <button onClick={() => dispatch(deleteBlogThunk(blog.id))}
                className="border-2 cursor-pointer border-gray-200 rounded px-4 py-1 mb-2 mt-2"
              >Add A blog</button>
            </div>) )
          }
        </div>
      </div>
    </div>
  )
}
