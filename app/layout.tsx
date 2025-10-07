import './globals.css'
import { IBM_Plex_Sans, Gowun_Batang } from 'next/font/google'

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const gowun = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-gowun-batang',
  display: 'swap',
})

export const metadata = { title: 'Vimar Beleza e Bem-Estar' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      {/* sem styled-jsx aqui */}
      <body className={`${ibm.variable} ${gowun.variable}`}>
        {children}
      </body>
    </html>
  )
}
