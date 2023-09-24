"use client"
import './globals.css'
import { Inter, Chakra_Petch } from 'next/font/google'
import NavBar from './components/NavBar/page'
import Head from 'next/head'
import { Suspense,useState } from 'react'
import { Router } from 'next/router';
import Loading from './loading'


const inter = Inter({ subsets: ['latin'] })
const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})


export const metadata = {
  title: 'Tutor Plus',
  description: 'Improve your learning curve',
  icons: {
    icon: [
      '/Logo/favicon.ico?v=4',
    ],
    apple: [
      '/Logo/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/Logo/apple-touch-icon.png']
  },
  manifest: '/Logo/site.webmanifest'

}

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);

    // Display loading for at least 1.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1500); // 1500 milliseconds (1.5 seconds)
  });

  // Rest of your component remains the same
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
