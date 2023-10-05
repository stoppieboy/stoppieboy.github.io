import Navbar from '@/components/Navbar'

import '../styles/globals.css'
// import { Inter } from 'next/font/google'
import { Urbanist } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: "Shivam Verma | Software Developer",
  description: 'A portfolio website developed and maintained by Shivam Verma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className} >
        <main className="flex flex-col items-center">
          <Navbar/>
          <main className="bg-stone-950 min-h-screen w-full pt-24">
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
