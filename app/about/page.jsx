import React from 'react'
import profilepic from "../../public/assets/images/user_img_bw.jpg"
import Image from 'next/image'

const About = () => {
  return (  
    <main className='page-container -mt-10'>
      <div className='flex items-center max-sm:flex-col sm:space-x-5 md:space-x-10 lg:space-x-24 xl:space-x-36 [ md:px-12 lg:px-24 xl:px-36 ] text-3xl lg:text-4xl'>
        {/* <div className='rounded-3xl overflow-hidden inline-block bg-white' style={{width:'250px', height:'300px' }}> */}
          <Image src={profilepic} width={250} className='rounded-3xl'/>
        <div className='flex-grow'>
          {/* <span>
            <h1 className='text-2xl font-semibold'>Hello World! My name is<br/></h1><h1 className='text-7xl'>Shivam Verma</h1>
          </span> */}
          <p className='font-medium text-start'>I am an enthusiastic beginner in the programming world. Love to code and learn different technologies. Looking forward to gain experience in real life projects.</p>
        </div>
      </div>
    </main>
  )
}

export default About