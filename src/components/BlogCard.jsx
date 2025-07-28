import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const BlogCard = ({ blog, onDelete }) => {
  const [likes, setLikes] = useState(0)
  const [disLikes, setDisLikes] = useState(0)

  const handleLikes = () => {
    setLikes(likes + 1)
  }

  const handleDisLikes = () => {
    setDisLikes(disLikes + 1)
  }
  return (
    <div>
      <Card className='h-100 shadow-sm w-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{blog.title}</Card.Title>

          {/* Description section */}
          <Card.Text className='flex-grow-1'>
            {blog.description > 100 
            ? blog.description.slice(0, 80) + `...`
            : blog.description}
          </Card.Text>
          <p className='d-flex justify-content-between text-muted small mb-0'>
            <span>By <strong>{blog.author}</strong> </span>
            <span>Date: <strong>{blog.date}</strong> </span>
          </p>

          {/* Likes, DisLikes and Read More buttons */}
          <div className='d-flex mt-3 justify-content-between'>
            <button className='reaction-btn' variant='outline-success' onClick={handleLikes}>👍 {likes}</button>
            <button className='reaction-btn' variant='outline-danger' onClick={handleDisLikes}>👎 {disLikes}</button>
            <Link to={`/blog/${blog.id}`} className='btn btn-primary'>Read More</Link>
          </div>

          {/* delete hutton */}
          {blog.isUser && (    // isuser kaha se aaya yaha problem hai
            <button 
              onClick={() => onDelete(blog.id)} 
              className='btn btn-sm btn-danger mt-2'
            >
              Delete
            </button>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default BlogCard
