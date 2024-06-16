import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between mx-10 mb-3 p-5 border-b-2 sm:mx-5'>
            <h1 className=' font-bold text-3xl text-white font-mono '><Link to='/'>Quiz</Link></h1>
        </div>
    )
}

export default Navbar