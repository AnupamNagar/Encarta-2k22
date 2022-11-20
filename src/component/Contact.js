import React from 'react'
import { motion } from 'framer-motion'
// import Navbar from './Navbar'

const Contact = () => {
  return (
    <div className='home'>
        {/* <div className='absolute  w-full'>
            <Navbar></Navbar>
      </div> */}
      
    <div className='bg-gray-800 h-screen text-white flex justify-center items-center home'>
    
      <motion.h2 animate={{color:'green',  x: 100 , y:-100}} className='text-6xl'>Contacts Comming Soon</motion.h2>
    </div>
    </div>
  )
}

export default Contact
