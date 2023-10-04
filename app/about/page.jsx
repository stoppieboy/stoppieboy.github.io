import React from 'react'
import profilepic from "../../public/assets/images/user_img.jpg"
import Image from 'next/image'

const About = () => {
  return (
    <main>
      <div className='flex items-center justify-around p-10'>
        <div className='rounded-full bg-white overflow-hidden inline-block' style={{width:'300px', height:'300px' }}>
          <Image src={profilepic} className='object-contain'/>
        </div>
        <span>
          <h1 className='text-2xl font-semibold'>Hello World! My name is<br/></h1><h1 className='text-7xl'>Shivam Verma</h1>
        </span>
      </div>
    </main>
  )
}

export default About