import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-end h-30 p-8'>
      <FaFacebook className='text-4xl text-white cursor-pointer hover:scale-125'></FaFacebook>
      <FaInstagram className='text-4xl mx-4  text-white cursor-pointer hover:scale-125' href=''></FaInstagram>
      <FaLinkedin className='text-4xl mx-4  text-white cursor-pointer hover:scale-125' />
      <FaTwitter className='text-4xl mx-4 text-white cursor-pointer hover:scale-125' />
      <FaYoutube className='text-4xl text-white cursor-pointer hover:scale-125'></FaYoutube>
    </div>
  )
}

export default Footer
