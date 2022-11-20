import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-center bg-slate-500 h-30 p-8'>
      <FaFacebook className='text-6xl'></FaFacebook>
      <FaInstagram className='text-6xl mx-4' href=''></FaInstagram>
      <FaLinkedin className='text-6xl mx-4' />
      <FaTwitter className='text-6xl' />
    </div>
  )
}

export default Footer
