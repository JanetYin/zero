import type { ReactNode } from 'react'
import { Metadata } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import 'aos/dist/aos.css'
import Cloud from '@/components/Cloud'
import Header from '@/components/Header'
import Side from '@/components/Side'
import ThemeProvider from './context'
import './globals.css'

import localFont from 'next/font/local'


//const serif  = localFont({ src: '../assets/font/hanyiquantangshijian.ttf', variable: '--font-serif', display: 'swap' })

const serif = Noto_Serif_SC({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: '云山栖',
  description: '愿似飘飖五云影，从来从去九天间。',
  authors: [{ name: '云影', url: 'https://yun37.me' }],
  keywords: '云影',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={serif.variable}>
      
      <body>
        <ThemeProvider>
          <Cloud />
          <Header />
          <Side />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
