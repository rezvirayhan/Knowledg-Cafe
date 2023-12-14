import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Blogs;