import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import SpotifyButton from "@/components/ui/spotify-button"

export const metadata: Metadata = {
  title: "Software Development Company - Your Trusted IT Service Partner | Itekako",
  description:
    "We architect, build, and test IT solutions for Fortune 500 companies, SMEs, and startups. Partner with Itekako to bring your vision to life — start today!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        
      </body>
    </html>
  )
}
