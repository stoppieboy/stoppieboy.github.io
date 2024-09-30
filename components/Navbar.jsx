"use client"
import Link from 'next/link'
import Image from 'next/image'
import resume from "../public/assets/icons/resume_2.png"
import { useEffect } from 'react'
import SmoothLink from './SmoothLink'
// import { useRef } from 'react'

const Navbar = () => {
  // const overlay = useRef(null)
  // const list_items = useRef(null);
  // overlay.current.innerHTML = ""

  useEffect(() => {
    const overlay = document.getElementById("overlay")
    const nav_list = [...document.getElementsByClassName("navbar-list-items")]

    nav_list.forEach(listItem => {
      listItem.addEventListener('hover', () => {
        overlay.classList.add('active')
        console.log('here')
      })
    })
  },[])

  const handleMouseOver = (e) => {
    // console.log(e);
    // document.getElementById('overlay').classList.add('active')
  }

  return (
    <div className='fixed z-10 flex w-full h-28 px-4 md:px-[34px] py-6 justify-between font-semibold text-lg items-center'>
      <div className='text-2xl font-extrabold cursor-pointer'>Shivam</div>
      <nav className='cs-navbar font-extrabold ice-frost shadow-black/70'>
        <div className="overlay" id="overlay"></div>
        <ul className="flex justify-between items-center navbar w-full">
            <li className='navbar-list-items ml-[2.8px]' onMouseOver={handleMouseOver}><SmoothLink className="cs-navItem" href="#home">Home</SmoothLink></li>
            <li className='navbar-list-items ' onMouseOver={handleMouseOver}><SmoothLink className="cs-navItem" href="#about">About</SmoothLink></li>
            <li className='navbar-list-items tooltip' onMouseOver={handleMouseOver}><SmoothLink className="cs-navItem-disabled" href="#">Experience</SmoothLink><span className='tooltiptext'>Coming soon</span></li>
            <li className='navbar-list-items ' onMouseOver={handleMouseOver}><SmoothLink className="cs-navItem" href="#projects">Projects</SmoothLink></li>
            <li className='navbar-list-items mr-[2.8px]' onMouseOver={handleMouseOver}><SmoothLink className="cs-navItem" href="#contact">Contact</SmoothLink></li>
        </ul>
      </nav>
      <Link className="flex flex-col items-center" href="https://drive.google.com/file/d/1GXF4IIIzq95SBXYRvfy_F8jqTvpFKbar/view?usp=sharing" target="_blank"><Image src={resume} alt='resume link' width={35}/>Resume</Link>
    </div> 
  )
}

export default Navbar