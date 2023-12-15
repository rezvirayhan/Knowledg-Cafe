import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddtoBookmark }) => {
    const { title, cover, reading_time, hashtags, author_img, posted_date, author } = blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture Of The Title ${title}`} />

            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddtoBookmark(blog)} className='ml-2 text-red-500 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func
}
export default Blog;