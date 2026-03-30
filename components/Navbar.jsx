"use client"
import Image from 'next/image'
import resume from "../public/assets/icons/resume_2.png"
import { useState, useEffect } from 'react'
import { Jost } from 'next/font/google'

const font = Jost({subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800']})

const NAV_ITEMS = ['home', 'about', 'experience', 'projects', 'contact']

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = NAV_ITEMS.map((item) => {
      const el = document.getElementById(item)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(item) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <>
    <div className={`fixed z-20 flex w-full h-28 px-4 md:px-[34px] py-6 justify-between font-semibold text-lg items-center ${font.className}`}>
      <div className='text-2xl font-extrabold cursor-pointer'>Shivam</div>
      <nav className='cs-navbar font-bold ice-frost shadow-black/70'>
        <div className="overlay" id="overlay"></div>
        <ul className="flex justify-between items-center navbar w-full">
            {NAV_ITEMS.map((item) => (
                <li key={item} className='navbar-list-items'>
                    <a
                        className={`cs-navItem ${activeSection === item ? 'text-accent3' : ''}`}
                        href={`#${item}`}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <a className="flex flex-col items-center" href="https://drive.google.com/file/d/1GXF4IIIzq95SBXYRvfy_F8jqTvpFKbar/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Image src={resume} alt='resume link' width={35}/>Resume</a>
        <button
          className="min-[850px]:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-primary2 transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary2 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary2 transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>
    </div>
    {mobileOpen && (
      <div className={`min-[850px]:hidden fixed z-10 top-28 left-0 w-full ice-frost border-b border-white/10 ${font.className}`}>
        <ul className="flex flex-col items-center py-4 gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="w-full text-center" onClick={() => setMobileOpen(false)}>
              <a className={`cs-navItem block py-3 ${activeSection === item ? 'text-accent3' : 'text-primary2'}`} href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
    </>
  )
}

export default Navbar