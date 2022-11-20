import React from 'react'
import logo from '../images/logo.jpg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='  flex justify-between py-6 px-4 top-0 sticky'>
      <div className=''>
       <Link to='/'><img src={logo} className='w-8 md:w-12 rounded-3xl  cursor-pointer hover:scale-125 ' alt='/' ></img></Link> 
      </div> 
      <div>
        <ul className='flex  gap-2 md:gap-6 text-white  md:text-2xl   font-thin cursor-pointer '>
        <li className='hover:scale-110 '><Link to='/'>Home</Link></li>
        <li className='hover:scale-110 '><Link to='/events'>Events</Link></li>
        <li className='hover:scale-110 '><Link to='/sponsors'>Sponsors</Link></li>
        <li className='hover:scale-110 '><Link to='/contact'>Contact</Link></li>
        <li className='hover:scale-110'><Link to='/register'>Register</Link></li>
      </ul>

     </div>
      
    </div>
  )
}

export default Navbar
