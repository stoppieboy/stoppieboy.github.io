import Navbar from '@/components/Navbar'

import '../styles/globals.css'
// import { Inter } from 'next/font/google'
import { Urbanist, Poppins, DM_Sans, Roboto, Jost, PT_Mono } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const font = Urbanist({ subsets: ['latin'], preload: true, weight: ['100', '200', '300','400', '500','600', '700', '800', '900'] })
// const font = Roboto({ subsets: ['latin'], preload: true, weight: ['100', '300', '400', '500', '700', '900'] })
// const font = Poppins({ subsets: ['latin'], preload: true, weight: ['100', '200', '300','400', '500','600', '700', '800', '900'] })
// const font = DM_Sans({ subsets: ['latin'], preload: true, weight: ['100', '200', '300','400', '500','600', '700', '800', '900'] })
// const font = Jost({ subsets: ['latin'], preload: true, weight: ['100', '200', '300','400', '500','600', '700', '800', '900'] })
// const font = PT_Mono({ subsets: ['latin'], preload: true, weight: ['400'] })

export const metadata = {
  title: "Shivam Verma | Software Developer",
  description: 'A portfolio website developed and maintained by Shivam Verma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className} >
        <main className="flex flex-col items-center text-secondary2 bg-accent2">
          <Navbar/>
          {/* <main id="main" className="min-h-screen w-full px-4 bg-[url('/assets/images/portfolio_bg.png')] bg-no-repeat bg-contain"> */}
          <main id="main" className="min-h-screen w-full px-4">
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
