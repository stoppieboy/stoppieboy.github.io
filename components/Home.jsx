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

            {/* <span className='polygon' id='p1'><img src="/assets/images/polygon.png" /></span> */}

            <SocialLinks/>
        </div>
    )
}

export default Home