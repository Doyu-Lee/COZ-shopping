import './globals.css'
// import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

// const inter = Inter({ subsets: ['latin'] })

import { Providers } from './redux/provider'
import { Suspense } from 'react'
import Loading from './components/Loading'

export const metadata = {
  title: 'COZ-shopping',
  description: 'A Simple Shopping Application',
  ogTitle: 'COZ-shopping'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="noScroll">
      <Providers>
      {/* <body className={inter.className}> */}
        <body>
        <Header />
        <Suspense fallback={<Loading />}>
          <main >{children}</main>
        </Suspense>
        <Footer />
      </body>
      </Providers>
    </html>
  )
}
