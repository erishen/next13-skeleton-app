import '@/styles/layout.scss'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Header from './header'
import Footer from './footer'
import Left from './left'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div className='page'>
            <Header />
            <div className='container'>
              {children}
            </div>
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
