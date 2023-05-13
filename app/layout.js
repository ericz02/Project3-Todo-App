import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Awesome To Do App',
  description: 'Simple Todo App to learn NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* nav bar */}
        <Navbar />
        
        {/* body */}
        {children}
      
      </body>
    </html>
  )
}
