import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './ui/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edgardo Gonzalez',
  description: 'QA, Developer and UX/UI Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='md:overflow-hidden overflow-auto'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
