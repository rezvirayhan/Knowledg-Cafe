import PropsTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-gray-300 p-4 m-4'>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;

Bookmark.Propstypes = {
    bookmark: PropsTypes.object
}