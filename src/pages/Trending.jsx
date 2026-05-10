import React, { useRef, useState, useEffect } from 'react'
import { trendingImages } from '../utils/data'

const Trending = () => {
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollStart, setScrollStart] = useState(0)

    // Update arrow visibility based on scroll position
    const updateScrollButtons = () => {
        const el = scrollRef.current
        if (!el) return
        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    }

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        updateScrollButtons()
        el.addEventListener('scroll', updateScrollButtons)
        window.addEventListener('resize', updateScrollButtons)
        return () => {
            el.removeEventListener('scroll', updateScrollButtons)
            window.removeEventListener('resize', updateScrollButtons)
        }
    }, [])

    const scroll = (direction) => {
        const el = scrollRef.current
        if (!el) return
        const scrollAmount = el.clientWidth * 0.75
        el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }

    // Mouse drag to scroll (desktop)
    const onMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollStart(scrollRef.current.scrollLeft)
    }

    const onMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        scrollRef.current.scrollLeft = scrollStart - (x - startX)
    }

    const stopDragging = () => setIsDragging(false)

    return (
        <section className="w-full py-6 sm:py-8 md:py-10 overflow-hidden">
            <div className="px-4 sm:px-6 md:px-10 lg:px-14 mb-4 sm:mb-6">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
                    Trending Now
                </h1>
            </div>

            <div className="relative group px-4 sm:px-6 md:px-10 lg:px-14">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    aria-label="Scroll left"
                    className={`
                        absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20
                        w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
                        flex items-center justify-center
                        bg-black/70 hover:bg-black/90 text-white
                        rounded-full border border-white/10
                        transition-all duration-200
                        opacity-0 group-hover:opacity-100
                        disabled:opacity-0 disabled:pointer-events-none
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                        shadow-lg
                    `}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    className={`
                        flex gap-2 sm:gap-3 md:gap-4
                        overflow-x-auto scroll-smooth
                        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                        ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}
                    `}
                >
                    {trendingImages.map((item) => (
                        <div
                            key={item.id}
                            className="
                                flex-shrink-0
                                w-[130px] sm:w-[160px] md:w-[190px] lg:w-[220px]
                                rounded-md overflow-hidden
                                relative group/card
                            "
                        >
                            <img
                                src={item.img}
                                alt={item.title || `Trending ${item.id}`}
                                draggable={false}
                                className="
                                    w-full h-auto aspect-[2/3] object-cover
                                    transition-transform duration-300 ease-in-out
                                    group-hover/card:scale-105
                                    select-none pointer-events-none
                                "
                            />
                            {/* Optional: subtle overlay on hover */}
                            <div className="
                                absolute inset-0 bg-black/0 group-hover/card:bg-black/20
                                transition-all duration-300 rounded-md
                            " />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    aria-label="Scroll right"
                    className={`
                        absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20
                        w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
                        flex items-center justify-center
                        bg-black/70 hover:bg-black/90 text-white
                        rounded-full border border-white/10
                        transition-all duration-200
                        opacity-0 group-hover:opacity-100
                        disabled:opacity-0 disabled:pointer-events-none
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                        shadow-lg
                    `}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Left fade edge */}
                <div className={`
                    pointer-events-none absolute left-4 sm:left-6 md:left-10 lg:left-14
                    top-0 h-full w-8 sm:w-12
                    bg-gradient-to-r from-black to-transparent
                    transition-opacity duration-300
                    ${canScrollLeft ? 'opacity-100' : 'opacity-0'}
                `} />

                {/* Right fade edge */}
                <div className={`
                    pointer-events-none absolute right-4 sm:right-6 md:right-10 lg:right-14
                    top-0 h-full w-8 sm:w-12
                    bg-gradient-to-l from-black to-transparent
                    transition-opacity duration-300
                    ${canScrollRight ? 'opacity-100' : 'opacity-0'}
                `} />
            </div>
        </section>
    )
}

export default Trending