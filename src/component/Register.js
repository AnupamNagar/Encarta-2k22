import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
    <>
    <div className=''>
        <div className='absolute  w-full'>
            <Navbar></Navbar>
        </div>
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5 pt-10">
        
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full md:w-1/2   overflow-hidden" >              
                <div className="w-full  py-10 px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                        {/* <p>Enter your inhtmlFormation to register</p> */}
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"  />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"  />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"  />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"    />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>  
    
    </>
    
  )
}

export default Register
