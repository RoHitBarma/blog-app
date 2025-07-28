import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container mt-5'>
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Blog App</strong> – your space for knowledge, inspiration, and ideas.
        Our mission is to provide valuable content on technology, lifestyle, productivity, and more.
      </p>
      <p>
        Whether you are a student, professional, or lifelong learner, our blog is crafted to give
        you short, meaningful articles that spark your curiosity.
      </p>
      <p>
        This platform is maintained by passionate developers and creators who believe in open
        knowledge and community learning.
      </p>

      {/* Social icons */}
      <h5 className="mt-4">Connect with Us:</h5>
      <div className="d-flex gap-4 fs-4">
        <a href="https://github.com/RoHitBarma" target="_blank" rel="noopener noreferrer" className='github' style={{ color: '#171515' }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rohit-barma-9079b6256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/_mairohit?igsh=YnphMWtzdzkwNWY0" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584' }}>
          <FaInstagram />
        </a>
        <a href="https://youtube.com/@fact-ozone?si=bxK7NDe8AMcMCbS-" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
          <FaYoutube />
        </a>
      </div>
    </div>
  )
}

export default About
