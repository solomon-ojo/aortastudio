import type { ReactNode } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import SpotifyButton from "@/components/ui/spotify-button"

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Navbar />
      <SpotifyButton />
      {children}
      <Footer />
    </>
  )
}
