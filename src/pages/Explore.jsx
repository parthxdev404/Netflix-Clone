import React from 'react'

const Explore = () => {
    return (
        <div className='flex items-center justify-center bg-black px-4'>
            <div className='flex flex-col p-5 sm:p-10 justify-center gap-4 bg-black text-white items-start w-full'>

                <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium'>
                    More reasons to join
                </h1>

                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>

                    <div className='h-72 w-full bg-gradient-to-r from-purple-800 via-violet-800 to-violet-900 rounded-md p-4'>
                        <span className='text-[24px] sm:text-[30px] font-semibold'>
                            Enjoy on your TV
                        </span>
                        <br />
                        <span className='text-[14px] sm:text-[16px]'>
                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                        </span>
                    </div>

                    <div className='h-72 w-full bg-gradient-to-r from-purple-800 via-violet-800 to-violet-900 rounded-md p-4'>
                        <span className='text-[24px] sm:text-[30px] font-semibold'>
                            Download shows to watch offline
                        </span>
                        <br />
                        <span className='text-[14px] sm:text-[16px]'>
                            Save your favourites easily and always have something to watch.
                        </span>
                    </div>

                    <div className='h-72 w-full bg-gradient-to-r from-purple-800 via-violet-800 to-violet-900 rounded-md p-4'>
                        <span className='text-[24px] sm:text-[30px] font-semibold'>
                            Watch everywhere
                        </span>
                        <br />
                        <span className='text-[14px] sm:text-[16px]'>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </span>
                    </div>

                    <div className='h-72 w-full bg-gradient-to-r from-purple-800 via-violet-800 to-violet-900 rounded-md p-4'>
                        <span className='text-[24px] sm:text-[30px] font-semibold'>
                            Create profiles for kids
                        </span>
                        <br />
                        <span className='text-[14px] sm:text-[16px]'>
                            Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
                        </span>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Explore