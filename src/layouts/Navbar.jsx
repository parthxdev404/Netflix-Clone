import React from 'react'
import navLogo from '../assets/nflixlogo.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 bg-black bg-opacity-60'>

            <img
                src={navLogo}
                alt="netflixLogo"
                className='h-16 sm:h-20 md:h-24 lg:h-28'
            />

            <div className='flex gap-2 sm:gap-4 items-center'>
                <div className="relative">
                    <select
                        className="appearance-none bg-black/70 border border-zinc-500 text-white text-sm sm:text-md rounded px-6 sm:px-10 py-2 pr-8 outline-none"
                    >
                        <option>English</option>
                        <option>हिन्दी</option>
                    </select>

                    <i className="ri-global-line absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm"></i>

                    <i className="ri-arrow-down-s-line absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none"></i>
                </div>

                <button className='text-white text-sm bg-red-700 p-2 px-3 sm:px-4 rounded-sm'>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Navbar