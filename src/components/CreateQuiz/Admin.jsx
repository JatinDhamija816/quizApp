import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Admin = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === 'admin@gmail.com' && password === 'admin') {
            navigate('/quiz_title')
        } else {
            setErr('Invalid Crediantial')
        }
    }

    return (
        <div>
            <div className='w-1/4 flex justify-center mx-auto items-center h-screen sm:w-3/4 md:w-3/5 lg:w-2/4'>
                <form onSubmit={handleSubmit} className='p-10 w-full bg-white drop-shadow-2xl rounded-xl'>
                    <div>
                        <h1 className='font-bold text-2xl text-center mb-2 pb-2 font-sans'>Admin Login</h1>
                        {
                            err && <p className='text-red-500 text-center'>{err}</p>
                        }
                    </div>
                    <div className='my-5'>
                        <div className='my-2'>
                            <label className='font-semibold text-lg'> Email</label>
                        </div>
                        <input type="email" className='bg-gray-300 w-full rounded px-2 py-1 outline-none' placeholder='abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='my-5'>
                        <div className='my-2'>
                            <label className='font-semibold text-lg'> Password</label>
                        </div>
                        <input type="password" className='bg-gray-300 w-full rounded px-2 py-1 outline-none' placeholder='Ab123456' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='mt-8 flex justify-center'>
                        <button className='bg-black text-white w-2/3 py-2 rounded-md' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admin