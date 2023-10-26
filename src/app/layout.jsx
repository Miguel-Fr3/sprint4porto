import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from './components/Cabecalho/Cabecalho'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porto',
  description: 'Sprint 4 Porto seguro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Cabecalho/>
        {children}
        </body>
    </html>
  )
}
