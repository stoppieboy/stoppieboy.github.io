import Link from 'next/link'
import Image from 'next/image'
import resume from "../public/assets/icons/resume_icon.png"

const Navbar = () => {
  return (
    <nav className="flex justify-center h-12 w-1/3 mt-6 px-5 items-center text-white z-10 rounded-xl bg-gray-300 absolute shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 border-white-600">
        <div className="flex justify-around navbar w-full">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
        {/* <Link className="flex flex-col items-center" href="https://drive.google.com/file/d/1GXF4IIIzq95SBXYRvfy_F8jqTvpFKbar/view?usp=sharing" target="_blank"><Image src={resume} width={50}/>Resume</Link> */}
    </nav>
  )
}

export default Navbar