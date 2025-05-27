import { Menu } from "lucide-react"
import Logo from "@/components/ui/logo"
import NavLink from "@/components/ui/nav-link"
import NavDropdown from "@/components/ui/nav-dropdown"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavDropdown
              title="SERVICES"
              items={[
                {
                  title: "Custom software development",
                  href: "/services/custom-software-development",
                  icon: "/icons/custom-software.svg",
                },
                { 
                  title: "DevOps and Migrations", 
                  href: "/services/devops-and-migrations", 
                  icon: "/icons/devops.svg" 
                },
                {
                  title: "Software testing and QA",
                  href: "/services/software-testing-and-qa",
                  icon: "/icons/testing.svg",
                },
                { 
                  title: "Consulting", 
                  href: "/services/consulting", 
                  icon: "/icons/consulting.svg" 
                },
                {
                  title: "Building digital products end-to-end",
                  href: "/services/building-digital-products-end-to-end",
                  icon: "/icons/digital-products.svg",
                },
              ]}
            />
            {/* Commented out menu items */}
            {/* <NavLink href="/ai-hub">AI-HUB</NavLink>
            <NavLink href="/client-stories">CLIENT STORIES</NavLink>
            <NavLink href="/careers">CAREERS</NavLink> */}
            <NavLink href="/about-us">ABOUT US</NavLink>
            <NavLink href="/blog">BLOG</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>

            {/* Social Icons */}
            {/* <div className="flex items-center space-x-3">
              <SocialIcon href="https://www.linkedin.com/company/itekako/" icon="/icons/linkedin.svg" />
              <SocialIcon href="https://www.instagram.com/itekako_official/" icon="/icons/instagram.svg" />
              <SocialIcon href="https://www.facebook.com/itekakodoo" icon="/icons/facebook.svg" />
              <SocialIcon href="https://clutch.co/profile/itekako#reviews" icon="/icons/clutch.svg" />
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}