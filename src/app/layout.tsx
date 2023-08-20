import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to mcq4free',
  description: `Select Your Category and Enter the Quiz Arena:
  Answer an Unlimited Number of Questions in 90 Seconds!
  Earn Coins for Every Correct Answer!
  Accumulate Coins to Unlock and Play in Higher Levels`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
