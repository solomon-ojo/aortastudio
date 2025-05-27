import ClientLogo from "@/components/ui/client-logo"

export default function ClientsSection() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-lg  text-white">OUR CLIENTS</p>
        </div>

        {/* Desktop Clients Scroll */}
        <div className="hidden md:block ml-16 overflow-hidden">
          <div className="grid grid-cols-4 grid-rows-2 space-x-12 space-y-6 gap-6 items-center">
            <ClientLogo src="/logos/coinbase.png" alt="Coinbase" className="h-16" />
            <ClientLogo src="/logos/unity.png" alt="Unity" className="h-16" />
            <ClientLogo src="/logos/burda.png" alt="Burda Style" className="h-16" />
            <ClientLogo src="/logos/atlas.png" alt="Atlas Copco" className="h-16" />
            <ClientLogo src="/logos/forsta.png" alt="Forsta" className="h-16" />
            <ClientLogo src="/logos/big-health.png" alt="Big Health" className="h-16" />
            <ClientLogo src="/logos/leybold.png" alt="Leybold" className="h-16" />
            <ClientLogo src="/logos/ltse.png" alt="LTSE" className="h-16" />
          </div>
        </div>

        {/* Mobile Clients Grid */}
        <div className="md:hidden grid grid-cols-2 gap-8">
          <ClientLogo src="/logos/coinbase.png" alt="Coinbase" className="h-6" />
          <ClientLogo src="/logos/unity.png" alt="Unity" className="h-6" />
          <ClientLogo src="/logos/burda.png" alt="Burda Style" className="h-6" />
          <ClientLogo src="/logos/atlas.png" alt="Atlas Copco" className="h-6" />
          <ClientLogo src="/logos/forsta.png" alt="Forsta" className="h-6" />
          <ClientLogo src="/logos/big-health.png" alt="Big Health" className="h-6" />
          <ClientLogo src="/logos/leybold.png" alt="Leybold" className="h-6" />
          <ClientLogo src="/logos/ltse.png" alt="LTSE" className="h-6" />
        </div>
      </div>
      <hr className="mt-16 border-white/40"/>
    </section>
  )
}
