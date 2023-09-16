// import './globals.css'
// import { Inter } from 'next/font/google'
// import NavBar from './components/NavBar/page'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Tutor Plus',
//   description: 'Improve your learning curve',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <NavBar/>
//         {children}
//       </body>
//     </html>
//   )
// }


import Head from 'next/head'; 
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tutor Plus',
  description: 'Improve your learning curve',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Add the custom favicon */}
        <link rel="icon" href="/TutorPlusLogo.svg" type="image/svg+xml" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
