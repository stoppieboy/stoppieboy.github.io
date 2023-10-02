import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Shivam Verma | Software Developer",
  description: 'A portfolio website developed and maintained by Shivam Verma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-fuchsia-600">
          {children}
        </main>
      </body>
    </html>
  )
}
