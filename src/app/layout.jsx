import { Shadows_Into_Light } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const shadow = Shadows_Into_Light({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Coding commerce application',
  description: 'Sale topics in html, css, JavaScript, React, TypeScript',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={shadow.className}>
        <Navbar />
        <div className = 'min-h-screen'>

        {children}
        </div>

        <Footer />
        </body>
    </html>
  )
}
