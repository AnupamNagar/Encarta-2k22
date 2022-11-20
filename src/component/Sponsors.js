import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Sponsors = () => {
  return (
    <div className='home'>
      <div className='absolute  w-full'>
            <Navbar></Navbar>
      </div>
      <div className='bg-gray-700 h-screen text-white flex justify-center items-center home'>
        {/* <motion.h2 animate={{color:'gold',  x: 100 , y:-100}} className='text-2xl md:text-4xl'>Sponsors Comming Soon</motion.h2> */}
        <h2 className='text-2xl md:text-4xl'>Sponsors Comming Soon</h2>
      </div>
    </div>
  )
}

export default Sponsors
