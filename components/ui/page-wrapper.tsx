import type { ReactNode } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
