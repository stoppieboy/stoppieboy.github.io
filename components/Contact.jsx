import data from '../data.json'

const Contact = ({ id, mail }) => {
  return (
    <div id={id || "contact"} className='min-h-[100vh] pt-20 flex items-center justify-center'>
        <div className='text-center max-w-2xl px-4'>
          <h2 className="text-sm font-mono text-accent3 mb-4 tracking-widest uppercase select-none">// Contact</h2>
          <h1 className='mb-5 font-bold text-5xl sm:text-7xl'>Get in touch</h1>
          <p className='text-lg mt-2 text-primary2/55 leading-[1.8] font-medium'>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>
          <p className='text-sm text-gray-600 mt-2'>Typically responds within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a className='p-4 inline-block bg-accent1 text-primary2 text-xl font-extrabold rounded-lg hover:bg-accent3 active:scale-95 transition-all duration-150' href={`mailto:${mail}`}>Mail Me</a>
            {data.linkedinUrl && (
              <a className='p-4 inline-block border border-gray-600 text-primary2 text-xl font-extrabold rounded-lg hover:border-accent3 hover:text-accent3 active:scale-95 transition-all duration-150' href={data.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
          </div>
        </div>
    </div>
  )
}

export default Contact