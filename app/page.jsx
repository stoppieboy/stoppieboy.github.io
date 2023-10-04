import Link from "next/link"

export default function Home() {
  const some = 'red-500'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className={`text-${some}`}>Hello This is Shivam.</h3>
      <button className="bg-purple-400 px-5 py-3 rounded-md active:bg-purple-500">Button</button>
      <a href="mailto:shivamv1332@gmail.com">shivamv1332@gmail.com</a>
      <Link href='/about'>About</Link>
    </main>
  )
}
