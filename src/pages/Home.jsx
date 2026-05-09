import React, { useState } from 'react'
import background from '../assets/background.jpg'
import Navbar from '../layouts/Navbar'
const Home = () => {

    const [email, setEmail] = useState("")

    return (
        <>
            <div className='flex flex-col text-center justify-center gap-4 text-white h-96 bg-black bg-opacity-60 h-[90vh]'>
                <h1 className='text-white text-7xl text-center font-semibold'>Watch Unlimited Movies,<br /> Shows and More</h1>
                <span className='text-white text-2xl'>Starts at ₹149. Cancel at any time.</span>

                <div className='flex flex-col gap-4'>
                    <span className='text-xl'>Ready to watch? Enter your email to create or restart your membership.
                    </span>
                    <div className='text-center'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email Address '
                            className='bg-black text-white text-xl p-4 placeholder:text-gray-400 w-96 bg-opacity-80'
                            type="email" required />
                        <button className='bg-red-700 p-4 mx-2 rounded-sm w-52 text-white font-medium text-2xl '>Get Started </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home