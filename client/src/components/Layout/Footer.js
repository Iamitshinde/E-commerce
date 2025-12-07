import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-white py-3 '>
       <h4 className='text-center'> 
        All Right Reserved &copy; Amit Shinde</h4>
        <p className='text-center mt-3'>
          <Link to ="/about" className='text-white text-decoration-none mx-2'>About</Link> |
          <Link to ="/contact" className='text-white text-decoration-none mx-2'>Contact Us</Link> |
          <Link to ="/policy" className='text-white text-decoration-none mx-2'>Privacy Policy</Link>
        </p>
    </div>
  )
}

export default Footer