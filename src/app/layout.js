import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aorta Capital',
  description: ': The future is built not wished for',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' mx-auto h-screen '>
        <Navbar/>
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}
