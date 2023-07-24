import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="text-center p-4 h-fit border-t w-full bg-white">
      Developed by <em className="text-blue-500"><Link to="https://blessingokonkwo.netlify.app/">Blessing Okonkwo</Link></em>
    </div>
  )
}

export default Footer
