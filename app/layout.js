import { Inter } from 'next/font/google'
import Sidebar from './ui/dashboard/sidebar/sidebar'
import Navbar from './ui/dashboard/navbar/navbar'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js 14',
  description: 'Next.js 14 ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>    
      <div className='container'>
        <div className='menu'>
          <Sidebar/>
        </div>
        <div className='content'>
          <Navbar/>
          {children}
          {/* <Footer/> */}
        </div>
      </div>
      </body>
    </html>
  )
}