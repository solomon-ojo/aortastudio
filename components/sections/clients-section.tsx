import ClientLogo from "@/components/ui/client-logo"

export default function ClientsSection() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-sm text-white/70">Our Clients</p>
        </div>

        {/* Desktop Clients Scroll */}
        <div className="hidden md:block overflow-hidden">
          <div className="flex space-x-12 items-center">
            <ClientLogo src="/logos/coinbase.svg" alt="Coinbase" className="h-8" />
            <ClientLogo src="/logos/unity.svg" alt="Unity" className="h-8" />
            <ClientLogo src="/logos/burda.svg" alt="Burda Style" className="h-8" />
            <ClientLogo src="/logos/atlas.svg" alt="Atlas Copco" className="h-8" />
            <ClientLogo src="/logos/forsta.svg" alt="Forsta" className="h-8" />
            <ClientLogo src="/logos/big-health.svg" alt="Big Health" className="h-8" />
            <ClientLogo src="/logos/leybold.svg" alt="Leybold" className="h-8" />
            <ClientLogo src="/logos/ltse.svg" alt="LTSE" className="h-8" />
          </div>
        </div>

        {/* Mobile Clients Grid */}
        <div className="md:hidden grid grid-cols-2 gap-8">
          <ClientLogo src="/logos/coinbase.svg" alt="Coinbase" className="h-6" />
          <ClientLogo src="/logos/unity.svg" alt="Unity" className="h-6" />
          <ClientLogo src="/logos/burda.svg" alt="Burda Style" className="h-6" />
          <ClientLogo src="/logos/atlas.svg" alt="Atlas Copco" className="h-6" />
          <ClientLogo src="/logos/forsta.svg" alt="Forsta" className="h-6" />
          <ClientLogo src="/logos/big-health.svg" alt="Big Health" className="h-6" />
          <ClientLogo src="/logos/leybold.svg" alt="Leybold" className="h-6" />
          <ClientLogo src="/logos/ltse.svg" alt="LTSE" className="h-6" />
        </div>
      </div>
    </section>
  )
}
