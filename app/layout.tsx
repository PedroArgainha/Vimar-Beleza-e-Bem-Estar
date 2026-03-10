import './globals.css'
import { IBM_Plex_Sans, Gowun_Batang } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

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

export const metadata = {
  title: 'Vimar Beleza e Bem-Estar | Cabeleireira em Braga',
  description: 'Cabeleireira em Braga especializada em coloração, madeixas, corte, desfrizagem e tratamentos capilares. Também manicure, pedicure e penteados. Largo da Senhora Branca, nº100.',
  keywords: 'cabeleireira braga, salão de beleza braga, coloração braga, madeixas braga, corte de cabelo braga, manicure braga, vimar beleza',
  openGraph: {
    title: 'Vimar Beleza e Bem-Estar | Cabeleireira em Braga',
    description: 'Cabeleireira em Braga especializada em coloração, madeixas e tratamentos capilares. Largo da Senhora Branca, nº100.',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${ibm.variable} ${gowun.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}