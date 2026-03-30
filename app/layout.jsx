import Navbar from '@/components/Navbar'

import '../styles/globals.css'
import { Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'], preload: true, weight: ['100', '200', '300','400', '500','600', '700', '800', '900'] })

export const metadata = {
  title: "Shivam Verma | Software Developer",
  description: 'Software Engineer with 1+ year of experience in full-stack development and API design.',
  openGraph: {
    title: "Shivam Verma | Software Developer",
    description: "Software Engineer with 1+ year of experience in full-stack development and API design.",
    url: "https://stoppieboy.github.io",
    siteName: "Shivam Verma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shivam Verma | Software Developer",
    description: "Software Engineer with 1+ year of experience in full-stack development and API design.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className} >
        <main className="flex flex-col items-center text-secondary2 bg-accent2">
          <Navbar/>
          {/* <main id="main" className="min-h-screen w-full px-4 bg-[url('/assets/images/portfolio_bg.png')] bg-no-repeat bg-contain"> */}
          <main id="main" className="min-h-screen w-full px-4" aria-label="Main content">
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
