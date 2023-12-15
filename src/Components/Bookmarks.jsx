import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, ReadingTime }) => {
    return (
        <div className="md:w-1/3 m-4">
            <div>
                <h2 className="text-center underline text-2xl mt-4 bg-black text-white p-3">Reading Time : {ReadingTime}</h2>
            </div>
            <h2 className="text-center underline text-2xl mt-4">Bookmarks Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;