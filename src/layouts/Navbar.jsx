import React from 'react'
import navLogo from '../assets/nflixlogo.png'
const Navbar = () => {
    return (
        <div className='flex items-center justify-around bg-black bg-opacity-60'>
            <img src={navLogo}
                alt="netflixLogo"
                className='h-28' />
            <div className='flex gap-4'>
                <div class="relative">
                    <select
                        class="appearance-none bg-black/70 border border-zinc-500 text-white text-md rounded px-10 py-2 pr-8 outline-none"
                    >
                        <option>English</option>
                        <option>हिन्दी</option>
                    </select>

                    <i class="ri-global-line absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm"></i>

                    <i class="ri-arrow-down-s-line absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none"></i>
                </div>
                <button className='text-white text-sm bg-red-700 p-2 px-4 rounded-sm'>Sign In </button>

            </div>
        </div>
    )
}

export default Navbar