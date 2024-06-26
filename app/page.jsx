import Link from "next/link"
import Image from "next/image"
import profilepic from "../public/assets/images/user_img_bw.jpg"
import Contact from "@/components/Contact"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import { promises as fs } from "fs"
import { kv } from "@vercel/kv"

export default async function Home() {

  const file = await fs.readFile(process.cwd()+'/data.json', 'utf8');
  // const data = JSON.parse(file)
  const data = {about_text: await kv.get('about_text'), email: await kv.get('email')}

  // pt-[11vh] sm:pt-[22vh]
  return (
    <main className="page-container items-center">

      {/* Home */}
      <div id="home" className="h-[86vh] flex items-center justify-center">

        {/* for smaller screens */}
        <span className="flex sm:hidden justify-center absolute top-[30%]">
          <h1 className="text-[8vw] font-semibold text-primary text-stone-300/30 pt-12">Hello World!<br/>My name is<br/><span className="text-[10vw] text-primary2">Shivam Verma</span></h1>
        </span>

        {/* for larger screens */}
        <span className="hidden sm:flex absolute top-[39%]">
          <h1 className='text-5xl font-semibold text-stone-300/30 flex flex-col items-start'><span>Hello World! My name is</span><span className='text-primary2 text-9xl'>Shivam Verma</span></h1>
        </span>

      </div>

      {/* About */}
      <div id="about" className='h-[95vh] -mt-10 flex items-center flex-col max-sm:space-y-10 sm:h-[95vh] sm:flex-row sm:space-x-5 md:space-x-10 lg:space-x-24 xl:space-x-36 [ md:px-12 lg:px-24 xl:px-36 ] max-[450px]:text-xl text-2xl sm:text-3xl lg:text-4xl'>

        <Image src={profilepic} width={250} alt="Shivam's Picture" className='rounded-3xl'/>

        <div className='flex-grow'> 
          <p className=' px-5 sm:font-medium text-center sm:text-start'>{data.about_text}</p>
        </div>

      </div>

      {/* Experience */}
      {/* <div id="experience">
        <Experience/>
      </div> */}

      {/* Projects */}
      <div id="projects">
        <Projects/>
      </div>

      {/* Contact */}
      <div id="contact">
        <Contact mail={data.email}/>
      </div>

    </main>
  )
}
