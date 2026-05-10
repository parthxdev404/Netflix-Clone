import React, { useState } from 'react'
import background from '../assets/background.jpg'
import Navbar from '../layouts/Navbar'

const Home = () => {

    const [email, setEmail] = useState("")

    return (
        <>
            <div className='flex flex-col text-center justify-center gap-4 text-white bg-black bg-opacity-60 h-[100vh] px-4'>

                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold'>
                    Watch Unlimited Movies,
                    <br />
                    Shows and More
                </h1>

                <span className='text-white text-lg sm:text-xl md:text-2xl'>
                    Starts at ₹149. Cancel at any time.
                </span>

                <div className='flex flex-col gap-4'>
                    <span className='text-base sm:text-lg md:text-xl px-2'>
                        Ready to watch? Enter your email to create or restart your membership.
                    </span>

                    <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email Address'
                            className='bg-black text-white text-lg sm:text-xl border-2 border-white p-3 sm:p-4 placeholder:text-gray-400 w-full sm:w-[60vh] bg-opacity-80'
                            type="email"
                            required
                        />

                        <button className='bg-red-700 p-3 sm:p-4 rounded-sm w-full sm:w-52 text-white font-medium text-lg sm:text-2xl transition-all hover:bg-red-800'>
                            Get Started
                        </button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home