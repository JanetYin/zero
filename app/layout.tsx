import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '蝉時雨',
  description: '蝉鸣如雨 花宵道中',
  authors: [{ name: '蝉時雨', url: 'https://chanshiyu.com' }],
  keywords: 'Code, ACG, Zero, 蝉時雨',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}