import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between h-12 items-center px-5">
        Shivam Verma
        <div className="flex space-x-3 navbar">
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar