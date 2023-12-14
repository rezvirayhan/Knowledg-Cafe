import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">Blogs {blogs.length}</h1>
        </div>
    );
};

export default Blogs;