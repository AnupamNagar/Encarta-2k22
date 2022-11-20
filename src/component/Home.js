import React from 'react'
import cosmos from '../images/cosmos.jpg'
import Navbar from './Navbar'
import './home.css'
import { motion } from 'framer-motion'
import Events from './Events'
import Sponsors from './Sponsors'
import Contact from './Contact'
import Footer from './Footer'

// import logo from '../images/logo.jpg'
// import { Link } from 'react-router-dom'


const Home = () => {
    
  return (
    <div  className='flex flex-col home '>
        <div className=''>
            <img src={cosmos} alt='cosmos' className='w-full h-screen object-cover relative'/>
        </div>
        <div className='absolute  w-full'>
            <Navbar></Navbar>
        </div>
        <motion.div animate={{rotateY:45}} className='absolute top-80 left-96 transform -translate-x-1/2 -translate-y-1/2 theme'>
            <div className='flex '>
                {/* <Link to='/'><img src={logo} className='w-16 md:w-32 lg:w-48 rounded-full cursor-pointer mr-3' alt='/' ></img></Link> */}
                <h1 className='text-4xl md:text-8xl  text-white text-center tracking-[.6em] '>Encarta</h1>
            </div>
             <h2 className='text-2xl md:text-4xl  text-white text-center   font-extralight mt-4'>The Annual Technical Fest</h2>
             <p className='text-xl md:text-2xl  text-white text-center font-extralight mt-4'>23 Dec to 25 Dec 2k22</p>
             
        </motion.div>
        <Events></Events>
        <Sponsors></Sponsors>
        <Contact></Contact>
        <Footer></Footer>
       
    </div>
  )
}

export default Home


