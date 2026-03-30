import React from 'react'
import SocialLinks from './SocialLinks'

const Home = ({ id, }) => {
    return (
        <div id={id || "home"} className="h-[100vh] sm:h-[86vh] w-full flex items-center justify-center">

            {/* for smaller screens */}
            <span className="min-[930px]:hidden z-10">
            <h1 className="text-[8vw] font-semibold text-primary text-stone-300/30 pt-12">Hi!<br/>My name is<br/><span className="text-[10vw] text-primary2">Shivam Verma</span></h1>
            </span>

            {/* for larger screens */}
            <span className="hidden min-[930px]:flex absolute top-[39%] z-10">
            <h1 className='text-5xl font-semibold text-stone-300/30 flex flex-col items-start'><span>Hi! My name is</span><span className='text-primary2 text-9xl'>Shivam Verma</span></h1>
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