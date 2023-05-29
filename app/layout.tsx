import NavBarPage from './components/navBar/NavBar'
import Wrapper from './components/Wrapper'
import './globals.css'
import { Nunito } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Fake Uniswap',
  description: 'My uniswap for learning',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Wrapper>
          <div>
            <NavBarPage />
            {children}
          </div>
        </Wrapper>
      </body>
    </html>
  )
}
