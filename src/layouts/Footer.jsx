import React from 'react'

const Footer = () => {
    return (
        <footer className='text-gray-500 px-6 md:px-12 lg:px-24 py-10 mt-10 bg-black'>
            <div className='max-w-7xl mx-auto'>

                {/* Heading */}
                <span className='underline text-sm md:text-base block mb-8'>
                    Questions? Call 000-800-919-1743
                </span>

                {/* Footer Grid */}
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm'>

                    <div className='flex flex-col gap-2 underline'>
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                    </div>

                    <div className='flex flex-col gap-2 underline'>
                        <a href="#">Help Centre</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>

                    <div className='flex flex-col gap-2 underline'>
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                    </div>

                    <div className='flex flex-col gap-2 underline'>
                        <a href="#">Media Centre</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>

                    {/* Language + Text */}
                    <div className='flex flex-col gap-5'>
                        <select
                            className="appearance-none bg-black border border-zinc-500 text-white rounded px-4 py-2 outline-none w-fit"
                        >
                            <option>English</option>
                            <option>हिन्दी</option>
                        </select>

                        <h1 className='text-sm'>Netflix India</h1>
                        <h2 className='text-xs'>
                            This page is a Netflix Clone
                        </h2>
                    </div>

                </section>
            </div>
        </footer>
    )
}

export default Footer