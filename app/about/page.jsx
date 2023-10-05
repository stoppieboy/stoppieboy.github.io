import React from 'react'
import profilepic from "../../public/assets/images/user_img_bw.jpg"
import Image from 'next/image'

const About = () => {
  return (
    <main className='pt-20'>
      <div className='flex items-center justify-around'>
        <div className='rounded-3xl overflow-hidden inline-block' style={{width:'250px', height:'300px' }}>
          <Image src={profilepic} className='object-contain'/>
        </div>
        <div>
          {/* <span>
            <h1 className='text-2xl font-semibold'>Hello World! My name is<br/></h1><h1 className='text-7xl'>Shivam Verma</h1>
          </span> */}
          <p className=''>I am a technology enthusiast</p>
        </div>
      </div>
    </main>
  )
}

export default About