import Image from "next/image"

interface ClientLogoProps {
  src: string
  alt: string
  className?: string
}

export default function ClientLogo({ src, alt, className }: ClientLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={alt} width={120} height={40} className="w-auto h-full" />
    </div>
  )
}
