import Link from "next/link"
import Image from "next/image"

export default function Home() {

  return (
    <main className="page-container items-center min-h-screen">
      {/* for smaller screens */}
      <span className="h-[60vh] sm:hidden flex justify-center">
        <h1 className="text-[8vw] font-semibold text-primary text-stone-300/30 pt-12">Hello World!<br/>My name is<br/><span className="text-primary2 text-[10vw]">Shivam Verma</span></h1>
      </span>
      {/* for larger screens */}
      <span className="h-[60vh] hidden sm:inline max-[864px]:px-24">
        <h1 className='text-5xl font-semibold text-stone-300/30'>Hello World! My name is<br/><span className='text-primary2 text-9xl'>Shivam Verma</span></h1>
      </span>
      <div className="p-12">
        Something
      </div>
    </main>
  )
}
