import React from 'react'

const Footer = () => {
    return (
        <div className='text-gray-500 h-[200px] mt-10'>
            <section className='grid grid-flow-col place-items-center mt-5 text-sm'>
                <span className='underline text-sm'>Questions ? Call 000-800-919-1743</span>
                <div className='flex flex-col underline' >

                    <a href="#">FAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Privacy</a>
                    <a href="#">Speed Test</a>
                </div>
                <div className='flex flex-col underline'>
                    <a href="#">Help Centre</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookies Preferences</a>
                    <a href="#">Legal Notices</a>
                </div>
                <div className='flex flex-col underline'>
                    <a href="#">Account</a>
                    <a href="#">Ways to watch</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Only On Netflix</a>
                </div>
                <div className='flex flex-col underline'>
                    <a href="#">Media Centre</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Contact US</a>
                </div>

            </section>

        </div>
    )
}

export default Footer