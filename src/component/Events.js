import React from 'react'
import {motion} from 'framer-motion';
// import Navbar from './Navbar';

const Events = () => {
  return (
    <div className='home'>
       {/* <div className='absolute  w-full'>
            <Navbar></Navbar>
        </div> */}
    <div className='bg-gray-900 h-screen text-white  flex justify-center items-center home'>
      <motion.h3 animate={{fontSize:100 , color:'#ff2994', x: 100  , y: -100 }} className='text-6xl'> Events Are Comming Soon</motion.h3>
    </div>
    </div>
    
  )
}

export default Events
