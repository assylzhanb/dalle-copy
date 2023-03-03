import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className='w-full flex mx-auto justify-between items-center bg-white px-4 py-4 border-b border-b-[#e6ebf4]'>
            <Link to="/">

                <img src='../src/assets/logo.png' alt="logo" className="w-14 object-contain" />

            </Link>
            <h1 className='text-3xl font-opensans w-5/6'>My DALL-E copy</h1>
            <Link to="/make-post" className="font-opensans font-medium bg-purple-600 text-white px-4 py-2 rounded-md">Generate</Link>
        </header>
    )
}

export default Navbar
