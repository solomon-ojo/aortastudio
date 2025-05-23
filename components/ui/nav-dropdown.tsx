import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface NavDropdownItem {
  title: string
  href: string
  icon: string
}

interface NavDropdownProps {
  title: string
  items: NavDropdownItem[]
}

export default function NavDropdown({ title, items }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center text-sm font-medium">
        {title}
        <ChevronDown className="ml-1 w-4 h-4" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
      </button>

      <div className="absolute left-0 top-full mt-2 w-72 bg-black border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
          >
            <span className="text-sm">{item.title}</span>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <Image src={item.icon || "/placeholder.svg"} alt="" width={24} height={24} className="w-full h-full" />
              </div>
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
