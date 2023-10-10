import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const some = 'red-500'

  return (
    <main className="page-container items-center space-y-14 min-h-screen">
      <span className="h-[60vh]">
        <h1 className='text-5xl font-semibold'>Hello World! My name is<br/></h1><h1 className='text-9xl'>Shivam Verma</h1>
      </span>
      <div className="p-12">
        Something
      </div>
    </main>
  )
}
