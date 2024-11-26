import React from 'react'

const Contact = ({ id, mail }) => {
  return (
    <div id={id || "contact"} className='h-[100vh] pt-20 text-7xl flex items-center'>
        <div className='text-center'>
          <h1 className='mb-5 font-bold'>Get in touch</h1>
          <p className='text-lg mt-2 text-primary2/55 max-w-2xl leading-[1.8] font-medium'>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>
          <a className='p-5 inline-block bg-accent1 text-inherit text-4xl rounded-lg hover:rounded-xl active:rounded-2xl mt-8 font-extrabold' href={`mailto:${mail}`}>Mail Me</a>
        </div>
    </div>
  )
}

export default Contact