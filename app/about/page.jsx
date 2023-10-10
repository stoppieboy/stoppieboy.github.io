import React from 'react'
import profilepic from "../../public/assets/images/user_img_bw.jpg"
import Image from 'next/image'

const About = () => {
  return (  
    <main className='page-container sm:-mt-10'>
      <div className='flex items-center flex-col max-sm:space-y-10 sm:flex-row sm:space-x-5 md:space-x-10 lg:space-x-24 xl:space-x-36 [ md:px-12 lg:px-24 xl:px-36 ] text-2xl sm:text-3xl lg:text-4xl'>
        {/* <div className='rounded-3xl overflow-hidden inline-block bg-white' style={{width:'250px', height:'300px' }}> */}
          <Image src={profilepic} width={250} className='rounded-3xl'/>
        <div className='flex-grow'>
          {/* <span>
            <h1 className='text-2xl font-semibold'>Hello World! My name is<br/></h1><h1 className='text-7xl'>Shivam Verma</h1>
          </span> */}
          <p className='font-medium text-center sm:text-start'>I am an enthusiastic person with high ownership and strong
work ethics who loves to learn and develop new technologies.
Looking forward to gain experience and meet new people in
real life projects.</p>
        </div>
      </div>
    </main>
  )
}

export default About