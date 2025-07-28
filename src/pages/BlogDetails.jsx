import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const {id} =useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            setBlog(data)
            setLoading(false)
        })
    }, [id])

    if(loading) return <p className='text-center mt-5'>Loading Blog details...</p>

    if(!blog) return <p className='text-center mt-5'>Blog not found 😵...</p>
  return (
    <div className='container mt-5'>
        <h2>{blog.title}</h2>
        <p className='text-muted'> By Author {blog.userId} | Date: 14/07/2025</p>
        <hr />
        <p>{blog.body}</p>
        <Link to="/" className="btn btn-secondary mt-4">← Back to Home</Link>

    </div>
  )
}

export default BlogDetails
