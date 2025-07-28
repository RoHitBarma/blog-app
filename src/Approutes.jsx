import React, {Suspense, lazy} from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy Loaded Page
const Home = lazy(() => import(`./pages/Home`))
const About = lazy(() => import(`./pages/About`))
const Contact = lazy(() => import(`./pages/Contact`))
const NotFound = lazy(() => import(`./pages/NotFound`))
const BlogDetails = lazy(() => import(`./pages/BlogDetails`))
const CreateBlog = lazy(() => import(`./pages/CreateBlog`))

const Approutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/blog/:id' element={<BlogDetails />}/>
            <Route path='/create-blog' element={<CreateBlog />}/>
        </Routes>
    </Suspense>
  )
}

export default Approutes
