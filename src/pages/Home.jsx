import React, { useEffect, useState } from 'react'
import BlogCard from "../components/BlogCard"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [userBlogs, setUserBlogs] = useState([])

  const [page, setPage] = useState(1)
  const blogsPerPage = 6

  useEffect(() => {
    const userBlogs = JSON.parse(localStorage.getItem('userBlogs')) || [];
    setUserBlogs(userBlogs)

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setBlogs(data); // yaha problem hai
        setLoading(false)
      })
      .catch(error => {
        console.log("Error fatching blogs:", error)
        setLoading(false)
      })
  }, [])

  // handle delete button
  const handleDelete = (id) => {
    const updated = userBlogs.filter(blog => blog.id !== id)
    setUserBlogs(updated)
    localStorage.setItem('userBlogs', JSON.stringify(updated))
  }


  // combined and sliced blogs
  const combinedBlogs = [...userBlogs, ...blogs]
  const visibleBlogs = combinedBlogs.slice(0, 15 + blogsPerPage * (page - 1))
  return (
    <div className='container'>
      <h2>Latest Blogs (API)</h2>

      {loading && <p>Loading Blogs</p>}

      <div className='row g-4'>
        {/* User entered blog comes first and in ui only 15 blogs are shows */}
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className='col-12 col-md-6 col-lg-4 d-flex'>
            <BlogCard
              blog={{
                ...blog, 
                isUser: userBlogs.some(b => b.id === blog.id),
                title: blog.title,
                description: blog.description || blog.body,  // it support both
                author: blog.author || `Author ${blog.userId}`,
                date: blog.date || '15/7/2025'
              }}
              onDelete={handleDelete}
              
            />
          </div>

        ))}


        {/* API blogs */}
        {/* {!loading && visibleBlogs.map(blog => (
          <div key={blog.id} className='col-12 col-md-6 col-lg-4 d-flex'>
            <BlogCard
              key={blog.id}
              blog={{
                id: blog.id,
                title: blog.title,
                description: blog.body,
                author: `Author ${blog.userId}`,
                date: '13/07/2025'
              }}
            />
          </div>
        ))} */}
        {!loading && visibleBlogs.length < combinedBlogs.length && (
          <div className='text-center my-4'>
            <button className='btn btn-primary' onClick={() => setPage(prev => prev+1)}>
              Load More Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
