import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tutor Plus',
  description: 'Improve your learning curve',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Logo.png" type="image/svg+xml" />
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

