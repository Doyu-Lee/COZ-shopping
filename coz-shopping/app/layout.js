import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotificationCenter from './components/ToastCenter'
import { Providers } from './redux/provider'

export const metadata = {
  title: 'COZ-shopping',
  description: 'A Simple Shopping Application',
  ogTitle: 'COZ-shopping'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="noScroll">
      <Providers>
      <body>
        <Header />
          <main>{children}</main>
          <NotificationCenter/>
        <Footer />
      </body>
      </Providers>
    </html>
  )
}
