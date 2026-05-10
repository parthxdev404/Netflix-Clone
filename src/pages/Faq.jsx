import React, { useState } from 'react'

const Faq = () => {

    const [open, setOpen] = useState(null);
    const [email, setEmail] = useState("");

    const toggleFaq = (index) => {
        setOpen(open === index ? null : index)
    }

    return (
        <div className='flex items-center justify-center bg-black px-4'>
            <div className='flex flex-col p-5 sm:p-10 justify-center gap-4 bg-black text-white items-start w-full'>

                <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium'>
                    Frequently Asked Questions
                </h1>

                <main className='w-full'>
                    <section className='flex gap-2 flex-col w-full'>

                        <h1
                            onClick={() => toggleFaq(1)}
                            className='text-xl sm:text-2xl md:text-3xl bg-gray-800 hover:bg-gray-700 w-full max-w-[135vh] p-4 cursor-pointer'>
                            What is Netflix ?
                        </h1>

                        {open === 1 && (
                            <div className='bg-gray-800 p-4 text-lg sm:text-xl md:text-2xl w-full max-w-[135vh]'>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.</p>

                                <p className='mt-4'>
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.
                                    <br />
                                    There's always something new to discover, and new TV shows and movies are added every week!
                                </p>
                            </div>
                        )}

                        <h1
                            onClick={() => toggleFaq(2)}
                            className='text-xl sm:text-2xl md:text-3xl bg-gray-800 hover:bg-gray-700 w-full max-w-[135vh] p-4 cursor-pointer'>
                            How much does Netflix cost ?
                        </h1>

                        {open === 2 && (
                            <div className='bg-gray-800 p-4 text-lg sm:text-xl md:text-2xl w-full max-w-[135vh]'>
                                <p>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.
                                </p>
                            </div>
                        )}

                        <h1
                            onClick={() => toggleFaq(3)}
                            className='text-xl sm:text-2xl md:text-3xl bg-gray-800 hover:bg-gray-700 w-full max-w-[135vh] p-4 cursor-pointer'>
                            Where can I Watch ?
                        </h1>

                        {open === 3 && (
                            <div className='bg-gray-800 p-4 text-lg sm:text-xl md:text-2xl w-full max-w-[135vh]'>
                                <p>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                </p>

                                <p className='mt-4'>
                                    You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                </p>
                            </div>
                        )}

                        <h1
                            onClick={() => toggleFaq(4)}
                            className='text-xl sm:text-2xl md:text-3xl bg-gray-800 hover:bg-gray-700 w-full max-w-[135vh] p-4 cursor-pointer'>
                            How do I Cancel ?
                        </h1>

                        {open === 4 && (
                            <div className='bg-gray-800 p-4 text-lg sm:text-xl md:text-2xl w-full max-w-[135vh]'>
                                <p>
                                    Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                </p>
                            </div>
                        )}

                        <h1
                            onClick={() => toggleFaq(5)}
                            className='text-xl sm:text-2xl md:text-3xl bg-gray-800 hover:bg-gray-700 w-full max-w-[135vh] p-4 cursor-pointer'>
                            Where can I Watch on Netflix ?
                        </h1>

                        {open === 5 && (
                            <div className='bg-gray-800 p-4 text-lg sm:text-xl md:text-2xl w-full max-w-[135vh]'>
                                <p>
                                    Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                </p>
                            </div>
                        )}

                        <div className='flex flex-col gap-4 mt-10 w-full'>
                            <span className='text-sm sm:text-lg text-center'>
                                Ready to watch ? Enter your email to create or restart your membership.
                            </span>

                            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email Address'
                                    className='bg-black text-white text-lg border-2 border-white p-3 placeholder:text-gray-400 w-full sm:w-[70vh] bg-opacity-80'
                                    type="email"
                                    required
                                />

                                <button className='bg-red-700 p-2 rounded-sm w-full sm:w-52 text-white font-medium text-xl transition-all hover:bg-red-800'>
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </section>
                </main>

            </div>
        </div>
    )
}

export default Faq