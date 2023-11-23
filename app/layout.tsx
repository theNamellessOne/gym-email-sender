import type { Metadata } from 'next'
import {Inter, Poppins} from 'next/font/google'
import './globals.css'
import Navbar from "@/app/components/navbar";

const font = Poppins({weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gym',
  description: 'Gym',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"bg-[#040404]"}>
      <body className={`${font.className} bg-[#040404] dark`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
