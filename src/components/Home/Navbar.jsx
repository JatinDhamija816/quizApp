import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between mx-10 mb-5 p-5 border-b-2 sm:mx-5'>
            <h1 className='font-bold text-3xl text-white font-mono '>Quiz</h1>
            <button className='bg-blue-500 px-5 py-1 rounded-lg text-white hover:drop-shadow-2xl'><Link to='/admin_login'>New Quiz</Link></button>
        </div>
    )
}

export default Navbar