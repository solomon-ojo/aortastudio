import Logo from "@/components/ui/logo"
import NavLink from "@/components/ui/nav-link"
import SocialIcon from "@/components/ui/social-icon"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-white/70 text-sm">
              We architect, build, and test IT solutions for Fortune 500 companies, SMEs, and startups.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <div className="flex flex-col space-y-2">
              <NavLink href="/custom-software-development" className="group relative overflow-hidden">
                Custom software development
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
              <NavLink href="/devops-and-migrations" className="group relative overflow-hidden">
                DevOps and Migrations
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
              <NavLink href="/software-testing-and-qa" className="group relative overflow-hidden">
                Software testing and QA
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
              <NavLink href="/consulting" className="group relative overflow-hidden">
                Consulting
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
              <NavLink href="/building-digital-products-end-to-end" className="group relative overflow-hidden">
                Building digital products end-to-end
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <div className="flex flex-col space-y-2">
              <NavLink href="/about-us" className="group relative overflow-hidden">
                About us
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
              <NavLink href="/blog" className="group relative overflow-hidden">
                Blog
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
              <NavLink href="/contact" className="group relative overflow-hidden">
                Contact
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                  size={16}
                />
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <SocialIcon href="https://www.linkedin.com/company/itekako/" icon="/icons/linkedin.svg" />
              <SocialIcon href="https://www.instagram.com/itekako_official/" icon="/icons/instagram.svg" />
              <SocialIcon href="https://www.facebook.com/itekakodoo" icon="/icons/facebook.svg" />
              <SocialIcon href="https://clutch.co/profile/itekako#reviews" icon="/icons/clutch.svg" />
              <SocialIcon href="https://www.joberty.com/sr/it-company/72/itekako/overview" icon="/icons/joberty.svg" />
            </div>
            <p className="mt-4 text-white/70 text-sm">© {new Date().getFullYear()} Itekako. All rights reserved.</p>
            <p className="text-white/70 text-sm">Belgrade, Serbia, Masarikova 5; +381114078146</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
