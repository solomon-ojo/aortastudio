import Image from "next/image"

interface SocialIconProps {
  href: string
  icon: string
}

export default function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
    >
      <div className="w-5 h-5 relative">
        <Image src={icon || "/placeholder.svg"} alt="Social icon" fill className="object-contain" />
      </div>
    </a>
  )
}
