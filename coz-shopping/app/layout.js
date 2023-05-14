import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

import { Providers } from './redux/provider'

export const metadata = {
  title: 'COZ-shopping',
  description: 'A Simple Shopping Application',
  ogTitle: 'COZ-shopping'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Providers>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      </Providers>
    </html>
  )
}
