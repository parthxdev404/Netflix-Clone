import React from 'react'
import background from '../assets/background.jpg'
import Navbar from '../layouts/Navbar'
const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4 text-white h-96'>
                <h1 className='text-white text-6xl text-center font-semibold'>Watch Unlimited Movies ,<br /> Shows and More</h1>
                <span className='text-white text-2xl'>Starts at ₹149. Cancel at any time.</span>

                <div>
                    <span>Ready to watch? Enter your email to create or restart your membership.
                    </span>
                </div>

            </div>
        </>
    )
}

export default Home