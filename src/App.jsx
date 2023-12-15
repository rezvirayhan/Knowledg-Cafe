import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [ReadingTime, setReadingTime] = useState(0)

  const handleAddtoBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleReadTime = (id, time) => {
    setReadingTime(ReadingTime + time)
    // remove tho bookmarks itemes 
    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleReadTime={handleReadTime} handleAddtoBookmark={handleAddtoBookmark}></Blogs>
        <Bookmarks ReadingTime={ReadingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
