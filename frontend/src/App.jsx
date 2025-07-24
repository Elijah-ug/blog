import "./App.css";
import {Routes, Route} from "react-router-dom"
import AllBlogs from "./ui/AllBlogs";
import CreateBlog from "./ui/CreateBlog";
import NavBar from "./navigation/NavBar";
export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="admin-dashboard" element={<CreateBlog/>} />
      </Routes>
    </div>
  )
}
