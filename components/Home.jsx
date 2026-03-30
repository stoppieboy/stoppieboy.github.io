import React from 'react'
import SocialLinks from './SocialLinks'
import data from '../data.json'

const Home = ({ id }) => {
    return (
        <div id={id || "home"} className="h-[100vh] sm:h-[100vh] w-full flex items-center justify-center">

            {/* for smaller screens */}
            <span className="min-[930px]:hidden z-10">
            <h1 className="text-[8vw] font-semibold text-primary text-stone-300/30 pt-12">Hi!<br/>My name is<br/><span className="text-[10vw] text-primary2">Shivam Verma</span></h1>
            {data.openToWork && (
                <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium px-3 py-1 rounded-full bg-green-900/40 border border-green-500/40 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to work
                </span>
            )}
            </span>

            {/* for larger screens */}
            <span className="hidden min-[930px]:flex flex-col absolute top-[39%] z-10">
            <h1 className='text-5xl font-semibold text-stone-300/30 flex flex-col items-start'><span>Hi! My name is</span><span className='text-primary2 text-9xl'>Shivam Verma</span></h1>
            {data.openToWork && (
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium px-4 py-1.5 rounded-full bg-green-900/40 border border-green-500/40 text-green-400 w-fit">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open to work
                </span>
            )}
            </span>

            <SocialLinks/>

            {/* Scroll cue */}
            <a href="#about" aria-label="Scroll to About section" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-primary2/50 hover:text-primary2 transition-colors z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
            </a>
        </div>
    )
}

export default Home