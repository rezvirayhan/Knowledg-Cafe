import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddtoBookmark }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">Blogs {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    handleAddtoBookmark={handleAddtoBookmark}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;