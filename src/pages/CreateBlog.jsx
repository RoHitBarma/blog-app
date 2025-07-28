import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        date: new Date().toLocaleDateString()
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const existingBlogs = JSON.parse(localStorage.getItem('userBlogs')) || []
        const newBlog = {...formData, id: Date.now()}
        localStorage.setItem('userBlogs', JSON.stringify([newBlog, ...existingBlogs]))

        // redirect to "/" home page
        navigate("/")
    }
  return (
    <div className='container mt-5'>
        <h2>Post a new Blog</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="">Title:</label>
                <input type="text" className='form-control' placeholder='Fill Your Title' name='title' onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label >Description:</label>
                <textarea name="description" className='form-control' rows={5} onChange={handleChange} required></textarea>
            </div>
            <div className='mb-3'>
                <label htmlFor="">Author:</label>
                <input type="text" className='form-control' placeholder='Enter Your Name' name='author' onChange={handleChange} required/>
            </div>

            <button type='submit' className='btn btn-success'>Post</button>
        </form>
      
    </div>
  )
}

export default CreateBlog
